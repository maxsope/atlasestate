import { createContext, useContext, useState } from 'react';
import { translations } from './translations';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('ua'); // Default language is Ukrainian

  const toggleLang = (newLang) => {
    if (newLang === 'ua' || newLang === 'ru') {
      setLang(newLang);
      // Re-trigger scroll animations manually if needed to re-evaluate GSAP coords,
      // but usually react state changes are enough.
      requestAnimationFrame(() => {
        window.dispatchEvent(new Event('resize'));
      });
    }
  };

  const t = (key) => {
    return translations[lang][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
