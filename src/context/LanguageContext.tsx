import React, { createContext, useContext, useState } from 'react';
import { translations } from '../translations';

type Language = 'de' | 'en';
type TranslationKey = keyof typeof translations.en;

type LanguageContextType = {
  language: Language;
  t: (key: TranslationKey) => string;
  toggleLanguage: () => void;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguage] = useState<Language>('de');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'de' ? 'en' : 'de');
  };

  const t = (key: TranslationKey) => {
    return translations[language][key];
  };

  return (
    <LanguageContext.Provider value={{ language, t, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};