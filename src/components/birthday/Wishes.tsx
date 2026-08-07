import { motion } from "framer-motion";

import { siteConfig } from "@/config/site";

export function Wishes() {
  const { title, lines } = siteConfig.wishes;

  return (
    <section
      id="wishes"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 text-center"
    >
      <div className="bd-glow" aria-hidden="true" />
      <motion.h2
        className="relative text-5xl leading-tight sm:text-7xl"
        style={{ fontFamily: "var(--bd-font-heading)" }}
        initial={{ opacity: 0, y: 40, filter: "blur(12px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 1.1, ease: "easeOut" }}
      >
        {title}
        <span className="bd-gradient-text mt-2 block">{siteConfig.name}</span>
      </motion.h2>

      <div className="relative mt-10 max-w-2xl space-y-5">
        {lines.map((line, i) => (
          <motion.p
            key={i}
            className="bd-body text-lg opacity-80 sm:text-xl"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, delay: 0.35 + i * 0.35 }}
          >
            {line}
          </motion.p>
        ))}
      </div>
    </section>
  );
}
