'use client';

import i18next, { i18n } from 'i18next';
import { initReactI18next } from 'react-i18next';
import resourcesToBackend from 'i18next-resources-to-backend';
import { getOptions } from './settings';
import LanguageDetector from 'i18next-browser-languagedetector';

// Client-side i18n instance
const i18nClient: i18n = i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(resourcesToBackend((language: string, namespace: string) => 
    import(`./locales/${language}/${namespace}.json`)));

// Initialize i18n
if (!i18nClient.isInitialized) {
  i18nClient.init({
    ...getOptions(),
    detection: {
      order: ['querystring', 'path', 'localStorage', 'navigator'],
      lookupQuerystring: 'lng',
      lookupFromPathIndex: 0,
      caches: ['localStorage'],
    },
    preload: ['tr', 'en'],
  });
}

export default i18nClient;
