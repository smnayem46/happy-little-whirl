import { useEffect, useRef, useState } from "react";
import { siteConfig } from "@/config/site";
import { useLanguage } from "@/lib/language";
import { CELEBRATE_EVENT, FIREWORKS_EVENT } from "@/lib/cinema";

export function MusicPlayer() {
  const { t } = useLanguage();
  const ref = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (ref.current) ref.current.volume = 0.5;
  }, []);

  // Soften the music slightly once the fireworks finale begins.
  useEffect(() => {
    const duck = () => {
      const el = ref.current;
      if (!el) return;
      const target = 0.28;
      const step = () => {
        if (el.volume <= target + 0.01) {
          el.volume = target;
          return;
        }
        el.volume = Math.max(target, el.volume - 0.02);
        window.setTimeout(step, 120);
      };
      step();
    };
    window.addEventListener(FIREWORKS_EVENT, duck);
    return () => window.removeEventListener(FIREWORKS_EVENT, duck);
  }, []);

  useEffect(() => {
    let done = false;
    const start = async () => {
      const el = ref.current;
      if (!el || !el.paused) return;
      try {
        await el.play();
        done = true;
        setPlaying(true);
        cleanupGestures();
      } catch {
        setPlaying(false);
      }
    };

    // Browsers block autoplay until the user interacts; retry on first gesture.
    const onGesture = () => {
      if (!done) void start();
    };
    const opts = { passive: true } as AddEventListenerOptions;
    const cleanupGestures = () => {
      window.removeEventListener("pointerdown", onGesture);
      window.removeEventListener("touchstart", onGesture);
      window.removeEventListener("keydown", onGesture);
      window.removeEventListener("scroll", onGesture);
    };
    window.addEventListener("pointerdown", onGesture, opts);
    window.addEventListener("touchstart", onGesture, opts);
    window.addEventListener("keydown", onGesture);
    window.addEventListener("scroll", onGesture, opts);
    window.addEventListener(CELEBRATE_EVENT, start);

    void start();

    return () => {
      cleanupGestures();
      window.removeEventListener(CELEBRATE_EVENT, start);
    };
  }, []);

  const toggle = async () => {
    const el = ref.current;
    if (!el) return;
    if (playing) {
      el.pause();
      setPlaying(false);
    } else {
      try {
        await el.play();
        setPlaying(true);
      } catch {
        setPlaying(false);
      }
    }
  };

  return (
    <>
      <audio
        ref={ref}
        src={siteConfig.music}
        loop
        autoPlay
        preload="auto"
        onError={() => setPlaying(false)}
      />
      <button
        type="button"
        onClick={toggle}
        aria-label={playing ? t("music.pause") : t("music.play")}
        className="bd-glass fixed bottom-5 right-5 z-50 flex h-12 w-12 items-center justify-center rounded-full transition hover:scale-105"
      >
        <span
          className={`block h-4 w-4 ${playing ? "bd-note-spin" : ""}`}
          aria-hidden="true"
        >
          {playing ? "❚❚" : "♪"}
        </span>
      </button>
    </>
  );
}
