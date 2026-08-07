import { useEffect, useState } from "react";
import { siteConfig } from "@/config/site";
import { useLanguage } from "@/lib/language";
import { OPEN_LETTER_EVENT } from "@/lib/cinema";

export function Letter() {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const openIt = () => setOpen(true);
    window.addEventListener(OPEN_LETTER_EVENT, openIt);
    return () => window.removeEventListener(OPEN_LETTER_EVENT, openIt);
  }, []);


  return (
    <section className="bd-section" id="letter">
      <h2 className="bd-heading">{t("letter.heading")}</h2>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="bd-button mt-8"
      >
        {open ? t("letter.closeButton") : t("letter.openButton")}
      </button>
      <div
        className="bd-glass mx-auto mt-8 max-w-2xl overflow-hidden rounded-3xl transition-all duration-700"
        style={{
          maxHeight: open ? 1600 : 0,
          opacity: open ? 1 : 0,
          padding: open ? "2rem" : "0 2rem",
        }}
      >
        <p className="bd-body whitespace-pre-line text-left leading-relaxed">
          {siteConfig.letter.trim()}
        </p>
      </div>
    </section>
  );
}
