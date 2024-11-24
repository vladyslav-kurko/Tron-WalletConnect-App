import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpApi from 'i18next-http-backend'; // For loading translations
import LanguageDetector from 'i18next-browser-languagedetector'; // For detecting language

i18n
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'ru',
    debug: true,
    supportedLngs: ['en', 'ru'], // Define supported languages
    detection: {
      order: ['path', 'cookie', 'localStorage', 'navigator'],
      caches: ['cookie'], // Cache the language setting
      lookupFromPathIndex: 0, // Get the language from the first segment of the path
    },
    backend: {
      loadPath: '/locales/{{lng}}.json', // Path to your translation files
    },
    interpolation: {
      escapeValue: false, // React already escapes values
    },
  });

export default i18n;
