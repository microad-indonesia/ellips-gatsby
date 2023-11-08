import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
// import Backend from "i18next-http-backend";

import translationEN from '../locales/en.json'
import translationID from '../locales/id.json'
import translationJA from '../locales/ja.json'
import translationZH from '../locales/zh.json'

// the translations
const resources = {
    en: {
        translation: translationEN,
    },
    id: {
        translation: translationID,
    },
    ja: {
        translation: translationJA,
    },
    zh: {
        translation: translationZH,
    },
}

const detectionOptions = {
    order: [
        'path',
        'cookie',
        'navigator',
        'localStorage',
        'subdomain',
        'queryString',
        'htmlTag',
    ],
    lookupFromPathIndex: 0,
}

export const defaultLanguage = 'en'
export const supportedLanguages = ['en', 'id', 'ja', 'zh']
export const languagePrefix = {
    en: 'ENG',
    id: 'IDN',
    ja: 'JPN',
    zh: 'CHN',
}

i18n.use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: defaultLanguage,
        detection: detectionOptions,
        debut: true,
        supportedLngs: supportedLanguages,

        keySeparator: '.',

        interpolation: {
            escapeValue: false, // react already safes from xss
        },
        // backend: {
        //   loadPath: `../assets/locales/{{lng}}.json`,
        //   crossDomain: false
        // },
        // react: {
        //   wait: true
        // }
    })

export default i18n
