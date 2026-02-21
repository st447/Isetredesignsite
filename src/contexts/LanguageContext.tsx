import { createContext, useContext, useState, useCallback, type ReactNode } from "react";

type Lang = "en" | "fr";

interface LanguageContextType {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (en: string, fr: string) => string;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLangState] = useState<Lang>(
    () => (localStorage.getItem("language") as Lang) || "en"
  );

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    localStorage.setItem("language", l);
    document.documentElement.lang = l;
  }, []);

  const t = useCallback((en: string, fr: string) => (lang === "fr" ? fr : en), [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
};
