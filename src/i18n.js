import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import translation JSON files
import enTranslations from './locales/en/en.json';
import perTranslations from './locales/per/per.json';

i18n
  .use(initReactI18next) // Passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        translation: enTranslations, // Use imported English translations
      },
      per: {
        translation: perTranslations, // Use imported Pashto translations
      },
    },
    lng: 'en', // Default language
    fallbackLng: 'en', // Fallback language if user language is not available
    debug: true, // Set to true to see debug information in the console
    interpolation: {
      escapeValue: false, // React already protects from XSS
    },
  });

export default i18n;
