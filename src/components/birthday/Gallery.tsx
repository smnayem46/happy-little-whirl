import { useState } from "react";
import { siteConfig } from "@/config/site";
import { photos } from "@/lib/photos";
import { useLanguage } from "@/lib/language";

export function Gallery() {
  const { t } = useLanguage();
  const [broken, setBroken] = useState<Record<number, boolean>>({});
  const allBroken =
    photos.length === 0 || photos.every((_, i) => broken[i]);

  return (
    <section className="bd-section" id="gallery">
      <h2 className="bd-heading">{t("gallery.heading")}</h2>
      {allBroken ? (
        <p className="bd-body mt-6 opacity-70">{t("gallery.empty")}</p>
      ) : null}
      <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3">
        {photos.map((src, i) =>
          broken[i] ? null : (
            <figure
              key={src}
              className="bd-glass group overflow-hidden rounded-2xl"
            >
              <img
                src={src}
                alt={`${siteConfig.name} — ${t("gallery.heading")} ${i + 1}`}
                loading="lazy"
                className="h-48 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-60"
                onError={() => setBroken((b) => ({ ...b, [i]: true }))}
              />
            </figure>
          ),
        )}
      </div>
    </section>
  );
}
