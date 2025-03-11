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
    if (isClient) {
      const storedLang = localStorage.getItem('i18nextLng');
      const browserLang = navigator.language.split('-')[0];
      const detectedLang = storedLang || ((['tr', 'en'].includes(browserLang)) ? browserLang : fallbackLng);
      
      i18nClient.changeLanguage(locale || detectedLang);
    }
  }, [locale, isClient]);

  // During SSR, use the fallback language
  if (!isClient) {
    i18nClient.changeLanguage(fallbackLng);
  }

  return <I18nextProvider i18n={i18nClient}>{children}</I18nextProvider>;
} 