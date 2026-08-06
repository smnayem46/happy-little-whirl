import { siteConfig } from "@/config/site";
import { useLanguage } from "@/lib/language";

export function Timeline() {
  const { t } = useLanguage();
  return (
    <section className="bd-section" id="timeline">
      <h2 className="bd-heading">{t("timeline.heading")}</h2>
      <ol className="relative mx-auto mt-12 max-w-2xl text-left">
        <span
          className="absolute left-[7px] top-2 h-full w-[2px]"
          style={{
            background:
              "linear-gradient(var(--bd-primary), var(--bd-secondary))",
          }}
          aria-hidden="true"
        />
        {siteConfig.timeline.map((item, i) => (
          <li key={`${item.title}-${i}`} className="relative pb-10 pl-10">
            <span
              className="absolute left-0 top-2 h-4 w-4 rounded-full"
              style={{ background: "var(--bd-primary)" }}
              aria-hidden="true"
            />
            <h3
              className="text-xl"
              style={{ fontFamily: "var(--bd-font-heading)" }}
            >
              {item.title}
            </h3>
            {item.description ? (
              <p className="bd-body mt-2 opacity-80">{item.description}</p>
            ) : null}
          </li>
        ))}
      </ol>
    </section>
  );
}
