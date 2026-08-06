import { createContext, useContext, useState, type ReactNode } from "react";
import { siteConfig } from "@/config/site";
import en from "@/translations/en.json";
import bn from "@/translations/bn.json";

const dictionaries = { en, bn } as const;
export type Language = keyof typeof dictionaries;

type Ctx = {
  lang: Language;
  setLang: (l: Language) => void;
  /** Look up text by dotted path, e.g. t("hero.title") */
  t: (path: string) => string;
};

const LanguageContext = createContext<Ctx | null>(null);

function lookup(dict: unknown, path: string): string {
  const value = path
    .split(".")
    .reduce<unknown>(
      (acc, key) =>
        acc && typeof acc === "object"
          ? (acc as Record<string, unknown>)[key]
          : undefined,
      dict,
    );
  return typeof value === "string" ? value : path;
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>(
    (siteConfig.language as Language) in dictionaries
      ? (siteConfig.language as Language)
      : "en",
  );
  const t = (path: string) => lookup(dictionaries[lang], path);
  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used inside LanguageProvider");
  return ctx;
}

export const availableLanguages = Object.keys(dictionaries) as Language[];
