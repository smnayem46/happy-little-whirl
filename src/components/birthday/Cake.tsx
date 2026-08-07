import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

import { siteConfig } from "@/config/site";
import { BLOW_CANDLES_EVENT, scrollToId } from "@/lib/cinema";

const SPARKLES = Array.from({ length: 18 }, (_, i) => ({
  left: (i * 37) % 100,
  top: (i * 53) % 100,
  delay: (i % 9) * 0.4,
  size: 3 + (i % 3),
}));

export function Cake() {
  const { heading, subtitle, button, candles, wishMade } = siteConfig.cake;
  const [blown, setBlown] = useState(false);
  const timers = useRef<number[]>([]);

  const blow = () => {
    if (blown) return;
    setBlown(true);
    timers.current.push(
      window.setTimeout(() => scrollToId("timeline"), 2600),
    );
  };

  useEffect(() => {
    const onEvent = () => blow();
    window.addEventListener(BLOW_CANDLES_EVENT, onEvent);
    return () => {
      window.removeEventListener(BLOW_CANDLES_EVENT, onEvent);
      timers.current.forEach((t) => window.clearTimeout(t));
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [blown]);

  return (
    <section className="bd-section" id="cake">
      <h2 className="bd-heading">{heading}</h2>
      <p className="bd-body mx-auto mt-3 max-w-xl opacity-75">{subtitle}</p>

      <div className="relative mx-auto mt-14 flex h-72 w-full max-w-sm items-end justify-center">
        <div className="bd-cake-light" aria-hidden="true" />
        {SPARKLES.map((s, i) => (
          <span
            key={i}
            className="bd-sparkle"
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

        <motion.div
          className={`bd-cake ${blown ? "is-blown" : ""}`}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <div className="bd-cake-candles">
            {Array.from({ length: candles }).map((_, i) => (
              <span className="bd-candle" key={i}>
                {blown ? (
                  <span className="bd-smoke" aria-hidden="true" />
                ) : (
                  <span className="bd-flame" aria-hidden="true" />
                )}
              </span>
            ))}
          </div>
          <div className="bd-cake-tier bd-cake-tier-top" />
          <div className="bd-cake-tier bd-cake-tier-mid" />
          <div className="bd-cake-tier bd-cake-tier-base" />
          <div className="bd-cake-plate" />
        </motion.div>
      </div>

      <div className="mt-10">
        {blown ? (
          <motion.p
            className="bd-body text-lg opacity-90"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {wishMade}
          </motion.p>
        ) : (
          <button type="button" className="bd-button bd-button-pop" onClick={blow}>
            {button}
          </button>
        )}
      </div>
    </section>
  );
}
