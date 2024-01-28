import i18next from "i18next";
import { initReactI18next } from "react-i18next";

import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

// Import translations for different languages
import enTranslations from "../../public/locales/en/translation.json";
import ruTranslations from "../../public/locales/ru/translation.json";
import { DEFAULT_LOCALE, LOCALES } from "@/constants";

const translations = {
  en: { translation: enTranslations },
  ru: { translation: ruTranslations },
};

i18next
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    load: "languageOnly",
    returnEmptyString: false,
    debug: false,
    keySeparator: false,
    resources: translations,
    fallbackLng: DEFAULT_LOCALE,
    supportedLngs: LOCALES,
    backend: {
      loadPath: `../../public/locales/{{lng}}/{{ns}}.json`,
    },
    detection: {
      order: ["path"],
      lookupFromPathIndex: 0,
    },
  });

export default i18next;
