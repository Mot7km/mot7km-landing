'use client';

import { I18nextProvider } from 'react-i18next';
import i18n from '@/lib/i18n';
import { useEffect, useState } from 'react';

export default function I18nProvider({ children }: { children: React.ReactNode }) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('lang') as 'ar' | 'en' | null;
    const browserLang = navigator.language.startsWith('ar') ? 'ar' : 'en';
    const lang = saved || browserLang;

    i18n.changeLanguage(lang);
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;

    const handleLanguageChange = (lng: string) => {
      document.documentElement.dir = lng === 'ar' ? 'rtl' : 'ltr';
      document.documentElement.lang = lng;
      localStorage.setItem('lang', lng);
    };

    i18n.on('languageChanged', handleLanguageChange);
    setLoaded(true);

    return () => {
      i18n.off('languageChanged', handleLanguageChange);
    };
  }, []);

  if (!loaded) return null;

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}