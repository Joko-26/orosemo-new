"use client";

import { createContext, useContext, useState, ReactNode, useEffect } from "react";

// loads all language files from ../languages
const modules = import.meta.glob("../languages/*.json", { eager: true });

type LangCode = string;
type LangData = { _name: string; [key: string]: string };

const translations: Record<LangCode, LangData> = {};

// gets the langcode and saves the translations in the translations object
for (const path in modules) {
  const match = path.match(/\/([a-zA-Z0-9_-]+)\.json$/);
  if (match) {
    const langCode = match[1];
    const file = (modules[path] as any).default;
    translations[langCode] = file;
  }
}

interface LangContextType {
  lang: LangCode; // current language
  setLang: (lang: LangCode) => void; // function to set the language
  t: Omit<LangData, "_name">;  // translations without the _name property
  availableLangs: { code: LangCode; name: string }[]; //all available langs
}

const LanguageContext = createContext<LangContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  // reads current language from local storage (defaults to english)
  const defaultLang = localStorage.getItem("lang") || Object.keys(translations)[0] || "en";
  const [lang, setLang] = useState<LangCode>(defaultLang);

  // saves current language when changed
  useEffect(() => {
    localStorage.setItem("lang", lang);
  }, [lang]);

  const availableLangs = Object.entries(translations).map(([code, data]) => ({
    code,
    name: data._name
  }));

  return (
    <LanguageContext.Provider
      value={{
        lang,
        setLang,
        // the language object
        t: Object.fromEntries(Object.entries(translations[lang] || {}).filter(([k]) => k !== "_name")) as any,
        availableLangs
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  // error
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}