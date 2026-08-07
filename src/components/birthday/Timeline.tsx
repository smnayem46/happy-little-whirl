import { motion } from "framer-motion";

import { siteConfig } from "@/config/site";
import { useLanguage } from "@/lib/language";

export function Timeline() {
  const { t } = useLanguage();
  return (
    <section className="bd-section" id="timeline">
      <h2 className="bd-heading">{t("timeline.heading")}</h2>
      <ol className="relative mx-auto mt-14 max-w-2xl text-left">
        <span
          className="absolute left-[11px] top-3 h-[calc(100%-2rem)] w-[2px] opacity-70"
          style={{
            background:
              "linear-gradient(var(--bd-primary), var(--bd-secondary), transparent)",
          }}
          aria-hidden="true"
        />
        {siteConfig.timeline.map((item, i) => (
          <li key={`${item.title}-${i}`} className="relative pb-8 pl-12">
            <span
              className="absolute left-0 top-4 h-6 w-6 rounded-full text-[11px] leading-6 text-center"
              style={{
                background:
                  "linear-gradient(135deg, var(--bd-primary), var(--bd-secondary))",
                boxShadow: "0 0 22px -4px rgb(var(--bd-primary-rgb) / 0.9)",
              }}
              aria-hidden="true"
            >
              {"icon" in item ? (item as { icon?: string }).icon : ""}
            </span>
            <motion.article
              className="bd-glass rounded-3xl p-6"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.7, delay: i * 0.08, ease: "easeOut" }}
            >
              <h3
                className="text-xl"
                style={{ fontFamily: "var(--bd-font-heading)" }}
              >
                {item.title}
              </h3>
              {item.description ? (
                <p className="bd-body mt-2 opacity-80">{item.description}</p>
              ) : null}
            </motion.article>
          </li>
        ))}
      </ol>
    </section>
  );
}
