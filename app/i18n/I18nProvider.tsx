'use client';

import { ReactNode, useEffect, useState } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18nClient from './client';
import { fallbackLng } from './settings';

type I18nProviderProps = {
  children: ReactNode;
  locale?: string;
};

export function I18nProvider({ children, locale }: I18nProviderProps) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (locale) {
      i18nClient.changeLanguage(locale);
    } else {
      const storedLang = localStorage.getItem('i18nextLng');
      const browserLang = navigator.language.split('-')[0];
      const detectedLang = storedLang || ((['tr', 'en'].includes(browserLang)) ? browserLang : fallbackLng);
      
      i18nClient.changeLanguage(detectedLang);
    }
  }, [locale, isClient]);

  // During SSR and initial client render, use the locale prop or fallback
  if (!isClient) {
    i18nClient.changeLanguage(locale || fallbackLng);
  }

  return <I18nextProvider i18n={i18nClient}>{children}</I18nextProvider>;
} 