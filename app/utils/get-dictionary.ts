import 'server-only';
import type { Locale } from '@/i18n-config';

// We enumerate all dictionaries here for better linting and typescript support
// We also use an async function to lazy load dictionaries
const dictionaries = {
    tr: () => import('@/app/dictionaries/tr.json').then((module) => module.default),
    en: () => import('@/app/dictionaries/en.json').then((module) => module.default),
};

export const getDictionary = async (locale: Locale) => dictionaries[locale]?.() ?? dictionaries.tr();
