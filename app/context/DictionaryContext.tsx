'use client';

import { createContext, useContext, ReactNode } from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Dictionary = any;

interface DictionaryContextType {
  dict: Dictionary;
}

const DictionaryContext = createContext<DictionaryContextType | undefined>(
  undefined
);

interface DictionaryProviderProps {
  children: ReactNode;
  dict: Dictionary;
}

export function DictionaryProvider({
  children,
  dict,
}: DictionaryProviderProps) {
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
