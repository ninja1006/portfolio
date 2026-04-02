'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const router = useRouter();
  const currentLang = pathname.startsWith('/ja') ? 'ja' : 'en';

  const enPath = pathname.replace(/^\/ja/, '') || '/';
  const jaPath = pathname.startsWith('/ja') ? pathname : `/ja${pathname}`;

  useEffect(() => {
    router.prefetch(enPath);
    router.prefetch(jaPath);
  }, [enPath, jaPath, router]);

  return (
    <button
      className='ml-4 flex items-center gap-2 rounded-full border border-primary/20 px-3 py-1 text-sm font-medium transition-colors hover:border-primary/50'
      aria-label='Switch Language'
    >
      <span
        onClick={() => currentLang !== 'en' && router.push(enPath)}
        className={currentLang === 'en' ? 'font-bold text-primary cursor-default' : 'text-muted-foreground cursor-pointer hover:text-primary'}
      >
        EN
      </span>
      <span className='text-muted-foreground'>/</span>
      <span
        onClick={() => currentLang !== 'ja' && router.push(jaPath)}
        className={currentLang === 'ja' ? 'font-bold text-primary cursor-default' : 'text-muted-foreground cursor-pointer hover:text-primary'}
      >
        JA
      </span>
    </button>
  );
}
