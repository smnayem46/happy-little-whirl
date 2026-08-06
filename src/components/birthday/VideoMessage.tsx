import { useState } from "react";
import { siteConfig } from "@/config/site";
import { useLanguage } from "@/lib/language";

export function VideoMessage() {
  const { t } = useLanguage();
  const [failed, setFailed] = useState(false);

  return (
    <section className="bd-section" id="video">
      <h2 className="bd-heading">{t("video.heading")}</h2>
      {failed ? (
        <p className="bd-body mt-6 opacity-70">{t("video.empty")}</p>
      ) : (
        <div className="bd-glass mx-auto mt-10 max-w-3xl overflow-hidden rounded-3xl p-2">
          <video
            src={siteConfig.video}
            controls
            playsInline
            preload="metadata"
            className="w-full rounded-2xl"
            onError={() => setFailed(true)}
          />
        </div>
      )}
    </section>
  );
}
