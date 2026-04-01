'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function LanguageSwitcher() {
    const pathname = usePathname();
    const router = useRouter();
    const [currentLang, setCurrentLang] = useState('en');

    useEffect(() => {
        if (pathname.startsWith('/ja')) {
            setCurrentLang('ja');
        } else {
            setCurrentLang('en');
        }
    }, [pathname]);

    const toggleLanguage = () => {
        const newLang = currentLang === 'en' ? 'ja' : 'en';

        // Logic to switch path
        let newPath = '';

        if (newLang === 'ja') {
            // Switch EN -> JA
            // If current path has no lang prefix (default EN), add /ja
            newPath = `/ja${pathname}`;
        } else {
            // Switch JA -> EN
            // Remove /ja prefix
            newPath = pathname.replace(/^\/ja/, '') || '/';
        }

        router.push(newPath);
    };

    return (
        <button
            onClick={toggleLanguage}
            className="ml-4 px-3 py-1 rounded-full border border-primary/20 hover:border-primary/50 text-sm font-medium transition-colors flex items-center gap-2"
            aria-label="Switch Language"
        >
            <span className={currentLang === 'en' ? 'text-primary font-bold' : 'text-muted-foreground'}>EN</span>
            <span className="text-muted-foreground">/</span>
            <span className={currentLang === 'ja' ? 'text-primary font-bold' : 'text-muted-foreground'}>JA</span>
        </button>
    );
}
