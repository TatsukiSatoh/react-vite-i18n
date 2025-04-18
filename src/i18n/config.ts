import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";
import { initReactI18next } from "react-i18next";

export const supportedLngs = {
    en: "English",
    ja: "日本語",
};

i18n
    .use(HttpApi)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: "ja",
        returnEmptyString: false,
        supportedLngs: Object.keys(supportedLngs),
        debug: true
    })

export default i18n;