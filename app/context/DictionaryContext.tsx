'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { usePathname } from 'next/navigation';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Dictionary = any;

interface DictionaryContextType {
  dict: Dictionary;
}

const DictionaryContext = createContext<DictionaryContextType | undefined>(undefined);

interface DictionaryProviderProps {
  children: ReactNode;
  enDict: Dictionary;
  jaDict: Dictionary;
}

export function DictionaryProvider({ children, enDict, jaDict }: DictionaryProviderProps) {
  const pathname = usePathname();
  const isJa = pathname.startsWith('/ja');
  const [dict, setDict] = useState(isJa ? jaDict : enDict);

  useEffect(() => {
    setDict(pathname.startsWith('/ja') ? jaDict : enDict);
  }, [pathname, enDict, jaDict]);

  return (
    <DictionaryContext.Provider value={{ dict }}>
      {children}
    </DictionaryContext.Provider>
  );
}

export function useDictionary() {
  const context = useContext(DictionaryContext);
  if (context === undefined) {
    throw new Error('useDictionary must be used within a DictionaryProvider');
  }
  return context.dict;
}
