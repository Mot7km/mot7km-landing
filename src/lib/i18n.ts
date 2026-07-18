import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import ar from '@/messages/ar/common.json';
import en from '@/messages/en/common.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      ar: { translation: ar },
    },
    fallbackLng: 'en',
    debug: process.env.NODE_ENV === 'development',
    interpolation: { escapeValue: false },
  });

export default i18n;