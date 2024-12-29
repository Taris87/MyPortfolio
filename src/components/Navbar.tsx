import React, { useState, useEffect, useRef } from "react";
import { Menu, X, Moon, Sun, Languages } from "lucide-react";
import { useTheme } from "next-themes";
import { useLanguage } from "../context/LanguageContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [visitedSections, setVisitedSections] = useState<Set<string>>(new Set());
  const menuRef = useRef<HTMLDivElement>(null);
  const { theme, setTheme } = useTheme();
  const { language, toggleLanguage, t } = useLanguage();

  useEffect(() => {
    setMounted(true);
    // Load visited sections from localStorage
    const savedSections = localStorage.getItem('visitedSections');
    if (savedSections) {
      setVisitedSections(new Set(JSON.parse(savedSections)));
    }
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const handleNavClick = (section: string) => {
    setIsOpen(false);
    const newVisitedSections = new Set(visitedSections).add(section);
    setVisitedSections(newVisitedSections);
    localStorage.setItem('visitedSections', JSON.stringify(Array.from(newVisitedSections)));
  };

  if (!mounted) {
    return null;
  }

  const getLinkClassName = (section: string) => `
    block px-4 py-2 
    ${visitedSections.has(section) 
      ? 'text-gray-500 dark:text-gray-400' 
      : 'text-gray-700 dark:text-gray-300'
    }
    hover:text-primary dark:hover:text-primary 
    rounded-xl 
    hover:bg-gray-100/80 dark:hover:bg-gray-700/50 
    transition-all duration-200 
    animate-scale-up
    text-center
    ${visitedSections.has(section) 
      ? 'bg-gray-50/50 dark:bg-gray-700/30' 
      : ''
    }
  `;

  return (
    <nav className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-lg fixed w-full z-50 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <span className="text-base xxs:text-xl xs:text-xl sm:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#3b81f6] to-[#d946ef] dark:from-primary dark:to-[#d946ef]">
              <span className="hidden sm:inline">Steven Cleveland</span>
              <span className="hidden xs:inline sm:hidden">S. Cleveland</span>
              <span className="inline xs:hidden">S.C.</span>
              <span className="font-extrabold dark:text-gray-300 text-gray-900 mx-1.5">|</span>
              {t("developer")}
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8 text-xl">
            <a
              href="#home"
              className={`${visitedSections.has('home') ? 'text-gray-500 dark:text-gray-400' : 'text-gray-700 dark:text-gray-300'} hover:text-primary dark:hover:text-primary`}
              onClick={() => handleNavClick('home')}
            >
              {t("home")}
            </a>
            <a
              href="#services"
              className={`${visitedSections.has('services') ? 'text-gray-500 dark:text-gray-400' : 'text-gray-700 dark:text-gray-300'} hover:text-primary dark:hover:text-primary`}
              onClick={() => handleNavClick('services')}
            >
              {t("services")}
            </a>
            <a
              href="#portfolio"
              className={`${visitedSections.has('portfolio') ? 'text-gray-500 dark:text-gray-400' : 'text-gray-700 dark:text-gray-300'} hover:text-primary dark:hover:text-primary`}
              onClick={() => handleNavClick('portfolio')}
            >
              {t("portfolio")}
            </a>
            <a
              href="#skills"
              className={`${visitedSections.has('skills') ? 'text-gray-500 dark:text-gray-400' : 'text-gray-700 dark:text-gray-300'} hover:text-primary dark:hover:text-primary`}
              onClick={() => handleNavClick('skills')}
            >
              {t("skills")}
            </a>
            <a
              href="#contact"
              className={`${visitedSections.has('contact') ? 'text-gray-500 dark:text-gray-400' : 'text-gray-700 dark:text-gray-300'} hover:text-primary dark:hover:text-primary`}
              onClick={() => handleNavClick('contact')}
            >
              {t("contact")}
            </a>

            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun className="w-8 h-8 text-primary" />
              ) : (
                <Moon className="w-8 h-8 text-primary" />
              )}
            </button>

            <button
              onClick={toggleLanguage}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors flex items-center"
              aria-label="Toggle language"
            >
              <Languages className="w-8 h-8 mr-1 text-primary" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                {language.toUpperCase()}
              </span>
            </button>
          </div>

          <div className="md:hidden flex items-center space-x-1.5 xxs:space-x-2">
            <button
              onClick={toggleTheme}
              className="p-1 xxs:p-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 xxs:w-[1.6rem] xs:w-[1.6rem] h-4 xxs:h-[1.4rem] xs:h-[1.4rem] text-primary" />
              ) : (
                <Moon className="w-4 xxs:w-[1.6rem] xs:w-[1.6rem] h-4 xxs:h-[1.4rem] xs:h-[1.4rem] text-primary" />
              )}
            </button>

            <button
              onClick={toggleLanguage}
              className="p-1 xxs:p-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle language"
            >
              <Languages className="w-4 xxs:w-[1.6rem] xs:w-[1.6rem] h-4 xxs:h-[1.4rem] xs:h-[1.4rem] text-primary" />
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-1 xxs:p-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="w-4 xxs:w-[1.6rem] xs:w-[1.6rem] h-4 xxs:h-[1.4rem] xs:h-[1.4rem] text-primary" />
              ) : (
                <Menu className="w-4 xxs:w-[1.6rem] xs:w-[1.6rem] h-4 xxs:h-[1.4rem] xs:h-[1.4rem] text-primary" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden fixed inset-0 bg-black/20 dark:bg-black/40 backdrop-blur-sm animate-fade-in">
          <div ref={menuRef} className="absolute right-0 top-16 w-48 mr-4 animate-slide-down">
            <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-md rounded-2xl shadow-lg overflow-hidden">
              <div className="px-2 py-3 space-y-1">
                <a
                  href="#home"
                  className={getLinkClassName('home')}
                  onClick={() => handleNavClick('home')}
                  style={{ animationDelay: '0ms' }}
                >
                  {t("home")}
                </a>
                <a
                  href="#services"
                  className={getLinkClassName('services')}
                  onClick={() => handleNavClick('services')}
                  style={{ animationDelay: '50ms' }}
                >
                  {t("services")}
                </a>
                <a
                  href="#portfolio"
                  className={getLinkClassName('portfolio')}
                  onClick={() => handleNavClick('portfolio')}
                  style={{ animationDelay: '100ms' }}
                >
                  {t("portfolio")}
                </a>
                <a
                  href="#skills"
                  className={getLinkClassName('skills')}
                  onClick={() => handleNavClick('skills')}
                  style={{ animationDelay: '150ms' }}
                >
                  {t("skills")}
                </a>
                <a
                  href="#contact"
                  className={getLinkClassName('contact')}
                  onClick={() => handleNavClick('contact')}
                  style={{ animationDelay: '200ms' }}
                >
                  {t("contact")}
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
