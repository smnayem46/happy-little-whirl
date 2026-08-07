import { useEffect, useState } from "react";
import { siteConfig } from "@/config/site";
import { useLanguage } from "@/lib/language";
import { REVEAL_GIFTS_EVENT } from "@/lib/cinema";

export function Gifts() {
  const { t } = useLanguage();
  const [open, setOpen] = useState<Record<number, boolean>>({});

  useEffect(() => {
    const revealAll = () => {
      siteConfig.gifts.forEach((_, i) =>
        window.setTimeout(() => setOpen((o) => ({ ...o, [i]: true })), i * 500),
      );
    };
    window.addEventListener(REVEAL_GIFTS_EVENT, revealAll);
    return () => window.removeEventListener(REVEAL_GIFTS_EVENT, revealAll);
  }, []);


  return (
    <section className="bd-section" id="gifts">
      <h2 className="bd-heading">{t("gifts.heading")}</h2>
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {siteConfig.gifts.map((gift, i) => (
          <article
            key={`${gift.title}-${i}`}
            className="bd-glass rounded-3xl p-6 text-left"
          >
            <h3
              className="text-lg"
              style={{ fontFamily: "var(--bd-font-heading)" }}
            >
              {gift.title}
            </h3>
            {open[i] ? (
              <p className="bd-body mt-3 opacity-85">{gift.message}</p>
            ) : (
              <button
                type="button"
                className="bd-button mt-4 text-sm"
                onClick={() => setOpen((o) => ({ ...o, [i]: true }))}
              >
                {t("gifts.reveal")}
              </button>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
