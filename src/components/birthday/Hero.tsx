import { siteConfig } from "@/config/site";
import { useLanguage } from "@/lib/language";

export function Hero() {
  const { t } = useLanguage();
  const title = siteConfig.heroTitle || t("hero.title");
  const subtitle = siteConfig.heroSubtitle || t("hero.subtitle");
  const button = siteConfig.buttonText || t("hero.button");

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
      <a href="#countdown" className="bd-button mt-10">
        {button}
      </a>
    </section>
  );
}
