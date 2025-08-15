import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: { home: 'Home', login: 'Login', register: 'Register', complaint: 'Report Issue' }
  },
  zu: {
    translation: { home: 'Ikhaya', login: 'Ngena', register: 'Bhalisa', complaint: 'Bika Iphuzu' }
  },
  af: {
    translation: { home: 'Tuis', login: 'Teken In', register: 'Registreer', complaint: 'Meld ’n Probleem' }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({ resources, fallbackLng: 'en' });

export default i18n;