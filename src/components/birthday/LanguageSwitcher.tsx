import { availableLanguages, useLanguage } from "@/lib/language";

const labels: Record<string, string> = { en: "EN", bn: "বাং" };

export function LanguageSwitcher() {
  const { lang, setLang, t } = useLanguage();
  return (
    <div
      className="bd-glass fixed left-5 top-5 z-50 flex gap-1 rounded-full p-1"
      aria-label={t("language.label")}
    >
      {availableLanguages.map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => setLang(l)}
          className="rounded-full px-3 py-1 text-xs tracking-wide transition"
          style={
            l === lang
              ? { background: "var(--bd-primary)", color: "#fff" }
              : { opacity: 0.7 }
          }
        >
          {labels[l] ?? l.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
