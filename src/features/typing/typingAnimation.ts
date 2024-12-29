import { useState, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';

interface TypewriterState {
  displayText: string;
  isDeleting: boolean;
  currentIndex: number;
}

const titles = {
  en: ['IT Specialist', 'Web Developer', 'Software Developer'],
  de: ['Fachinformatiker', 'Webentwickler', 'Anwendungsentwickler']
};

export const useTypewriter = () => {
  const { language } = useLanguage();
  const oppositeLanguage = language === 'de' ? 'en' : 'de'; 
  const [state, setState] = useState<TypewriterState>({
    displayText: '',
    isDeleting: false,
    currentIndex: 0
  });

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const currentWord = titles[oppositeLanguage][state.currentIndex];

    const updateText = () => {
      if (!state.isDeleting) {
        // Typing
        if (state.displayText.length < currentWord.length) {
          setState(prev => ({
            ...prev,
            displayText: currentWord.slice(0, state.displayText.length + 1)
          }));
          timeout = setTimeout(updateText, 100); // Typing speed
        } else {
          // Wait before starting to delete
          timeout = setTimeout(() => {
            setState(prev => ({ ...prev, isDeleting: true }));
          }, 1500);
        }
      } else {
        // Deleting
        if (state.displayText.length > 0) {
          setState(prev => ({
            ...prev,
            displayText: state.displayText.slice(0, -1)
          }));
          timeout = setTimeout(updateText, 50); // Deleting speed (faster than typing)
        } else {
          setState(prev => ({
            ...prev,
            isDeleting: false,
            currentIndex: (prev.currentIndex + 1) % titles[language].length
          }));
        }
      }
    };

    timeout = setTimeout(updateText, 100);
    return () => clearTimeout(timeout);
  }, [state.displayText, state.isDeleting, state.currentIndex, language]);

  return {
    displayText: state.displayText,
    isTyping: !state.isDeleting && state.displayText.length > 0
  };
};
