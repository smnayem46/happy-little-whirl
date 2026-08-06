import { useEffect, useRef, useState } from "react";
import { siteConfig } from "@/config/site";
import { useLanguage } from "@/lib/language";

export function MusicPlayer() {
  const { t } = useLanguage();
  const ref = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (ref.current) ref.current.volume = 0.5;
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
      <audio ref={ref} src={siteConfig.music} loop preload="none" />
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
