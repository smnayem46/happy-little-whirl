import { useEffect, useState } from "react";
import { siteConfig } from "@/config/site";
import { useLanguage } from "@/lib/language";

function diff(target: Date) {
  const ms = target.getTime() - Date.now();
  if (ms <= 0) return null;
  return {
    days: Math.floor(ms / 86400000),
    hours: Math.floor((ms / 3600000) % 24),
    minutes: Math.floor((ms / 60000) % 60),
    seconds: Math.floor((ms / 1000) % 60),
  };
}

export function Countdown() {
  const { t } = useLanguage();
  const target = new Date(`${siteConfig.birthdayDate}T00:00:00`);
  const [left, setLeft] = useState<ReturnType<typeof diff>>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setLeft(diff(target));
    setReady(true);
    const id = setInterval(() => setLeft(diff(target)), 1000);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [siteConfig.birthdayDate]);

  const units = left
    ? [
        [left.days, t("countdown.days")],
        [left.hours, t("countdown.hours")],
        [left.minutes, t("countdown.minutes")],
        [left.seconds, t("countdown.seconds")],
      ]
    : [];

  return (
    <section className="bd-section" id="countdown">
      <h2 className="bd-heading">{t("countdown.heading")}</h2>
      {!ready ? null : left ? (
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          {units.map(([value, label]) => (
            <div
              key={String(label)}
              className="bd-glass w-24 rounded-2xl px-4 py-5 text-center sm:w-28"
            >
              <div
                className="text-3xl font-semibold sm:text-4xl"
                style={{ fontFamily: "var(--bd-font-heading)" }}
              >
                {String(value).padStart(2, "0")}
              </div>
              <div className="mt-1 text-[0.7rem] uppercase tracking-[0.2em] opacity-70">
                {label}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="bd-body mt-8 text-xl">{t("countdown.today")}</p>
      )}
    </section>
  );
}
