import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import { siteConfig } from "@/config/site";
import { FIREWORKS_EVENT } from "@/lib/cinema";

const COLORS = ["var(--bd-primary)", "var(--bd-secondary)", "#ffd166", "#ffffff"];

const FIREWORKS = Array.from({ length: 6 }, (_, i) => ({
  left: 12 + ((i * 17) % 76),
  top: 10 + ((i * 23) % 50),
  delay: i * 1.1,
  color: COLORS[i % COLORS.length] as string,
}));

const BALLOONS = Array.from({ length: 9 }, (_, i) => ({
  left: (i * 11 + 4) % 96,
  delay: i * 1.3,
  duration: 13 + (i % 5) * 2,
  color: COLORS[i % COLORS.length] as string,
}));

const STARS = Array.from({ length: 40 }, (_, i) => ({
  left: (i * 29) % 100,
  top: (i * 41) % 100,
  delay: (i % 12) * 0.35,
  size: 1 + (i % 3),
}));

export function Finale() {
  const { title, lines } = siteConfig.finale;
  const [loud, setLoud] = useState(false);

  useEffect(() => {
    const on = () => setLoud(true);
    window.addEventListener(FIREWORKS_EVENT, on);
    return () => window.removeEventListener(FIREWORKS_EVENT, on);
  }, []);

  return (
    <section
      id="finale"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pb-20 text-center"
    >
      <div className="bd-finale-sky" aria-hidden="true" />

      {STARS.map((s, i) => (
        <span
          key={`s${i}`}
          className="bd-star"
          aria-hidden="true"
          style={{
            left: `${s.left}%`,
            top: `${s.top}%`,
            width: s.size,
            height: s.size,
            animationDelay: `${s.delay}s`,
          }}
        />
      ))}

      {BALLOONS.map((b, i) => (
        <span
          key={`b${i}`}
          className="bd-balloon"
          aria-hidden="true"
          style={{
            left: `${b.left}%`,
            background: b.color,
            animationDelay: `${b.delay}s`,
            animationDuration: `${b.duration}s`,
          }}
        />
      ))}

      {FIREWORKS.map((f, i) => (
        <span
          key={`f${i}`}
          className="bd-firework"
          aria-hidden="true"
          style={{
            left: `${f.left}%`,
            top: `${f.top}%`,
            animationDelay: `${f.delay}s`,
          }}
        >
          {Array.from({ length: 16 }).map((_, j) => (
            <i
              key={j}
              style={
                {
                  background: f.color,
                  "--bd-fx": `${Math.cos((Math.PI * 2 * j) / 16) * 90}px`,
                  "--bd-fy": `${Math.sin((Math.PI * 2 * j) / 16) * 90}px`,
                } as React.CSSProperties
              }
            />
          ))}
        </span>
      ))}

      <motion.div
        className="relative"
        animate={loud ? { y: [0, -12, 0] } : { y: 0 }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      >
        <motion.h2
          className="text-4xl leading-tight sm:text-6xl"
          style={{ fontFamily: "var(--bd-font-heading)" }}
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          {title}
        </motion.h2>
        <div className="mx-auto mt-8 max-w-2xl space-y-4">
          {lines.map((line, i) => (
            <motion.p
              key={i}
              className="bd-body text-lg opacity-80"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.9, delay: 0.4 + i * 0.4 }}
            >
              {line}
            </motion.p>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
