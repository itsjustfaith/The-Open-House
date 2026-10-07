"use client";

import { createContext, useContext, useEffect, useState } from "react";
import type { Locale } from "@/lib/content";

const LocaleContext = createContext<{ locale: Locale; toggle: () => void }>({ locale: "en", toggle: () => {} });

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>("en");
  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = locale === "ar" ? "rtl" : "ltr";
    window.localStorage.setItem("openhouse-locale", locale);
  }, [locale]);
  return <LocaleContext.Provider value={{ locale, toggle: () => setLocale((value) => (value === "en" ? "ar" : "en")) }}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  return useContext(LocaleContext);
}
