import { useState } from "react";

import { siteConfig } from "@/config/site";
import { useLanguage } from "@/lib/language";

type Burst = {
  id: number;
  pieces: { x: number; y: number; r: number; delay: number; color: string }[];
};

function makeBurst(id: number): Burst {
  const colors = [
    siteConfig.theme.primary,
    siteConfig.theme.secondary,
    "#ffd166",
    "#ffffff",
  ];
  return {
    id,
    pieces: Array.from({ length: 28 }, (_, i) => {
      const angle = (Math.PI * 2 * i) / 28 + Math.random() * 0.3;
      const distance = 90 + Math.random() * 130;
      return {
        x: Math.cos(angle) * distance,
        y: Math.sin(angle) * distance,
        r: Math.random() * 540 - 270,
        delay: Math.random() * 0.08,
        color: colors[i % colors.length] as string,
      };
    }),
  };
}

export function Hero() {
  const { t } = useLanguage();
  const title = siteConfig.heroTitle || t("hero.title");
  const subtitle = siteConfig.heroSubtitle || t("hero.subtitle");
  const button = siteConfig.buttonText || t("hero.button");

  const [bursts, setBursts] = useState<Burst[]>([]);
  const [pressed, setPressed] = useState(false);

  const celebrate = () => {
    const id = Date.now();
    setBursts((b) => [...b, makeBurst(id)]);
    setPressed(true);
    window.setTimeout(() => setPressed(false), 450);
    window.setTimeout(
      () => setBursts((b) => b.filter((x) => x.id !== id)),
      1400,
    );
  };

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <div className="bd-glow" aria-hidden="true" />
      <p className="text-xs uppercase tracking-[0.5em] opacity-60">
        {siteConfig.birthdayDate}
      </p>
      <h1
        className="mt-6 text-5xl leading-tight sm:text-7xl"
        style={{ fontFamily: "var(--bd-font-heading)" }}
      >
        {title}
        <span className="bd-gradient-text mt-2 block">{siteConfig.name}</span>
      </h1>
      <p className="bd-body mt-6 max-w-xl text-lg opacity-80">{subtitle}</p>

      <div className="relative mt-10">
        {bursts.map((burst) => (
          <div
            key={burst.id}
            className="pointer-events-none absolute left-1/2 top-1/2"
            aria-hidden="true"
          >
            {burst.pieces.map((p, i) => (
              <span
                key={i}
                className="bd-confetti"
                style={
                  {
                    background: p.color,
                    animationDelay: `${p.delay}s`,
                    "--bd-cx": `${p.x}px`,
                    "--bd-cy": `${p.y}px`,
                    "--bd-cr": `${p.r}deg`,
                  } as React.CSSProperties
                }
              />
            ))}
          </div>
        ))}
        <a
          href="#countdown"
          onClick={celebrate}
          className={`bd-button bd-button-pop relative ${pressed ? "is-pressed" : ""}`}
        >
          {button}
        </a>
      </div>
    </section>
  );
}
