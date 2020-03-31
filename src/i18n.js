// Adopted from https://react.i18next.com/latest/using-with-hooks#configure-i-18-next
import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-xhr-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18next
  // load translation using xhr -> see /public/locales
  // learn more: https://github.com/i18next/i18next-xhr-backend
  .use(Backend)
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: process.env.NODE_ENV !== 'production',

    // https://www.i18next.com/overview/api#languages
    lng: 'ja',
    whitelist: ['en', 'ja'],
    fallbackLng: 'ja',

    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    },

    interpolation: {
      escapeValue: false, // not needed for react!!
    },
  });

export default i18next;
