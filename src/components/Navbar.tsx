import React, { useState, useEffect } from "react";
import { Menu, X, Moon, Sun, Languages } from "lucide-react";
import { useTheme } from "next-themes";
import { useLanguage } from "../context/LanguageContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const { language, toggleLanguage, t } = useLanguage();

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  if (!mounted) {
    return null;
  }

  return (
    <nav className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-lg fixed w-full z-50 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <span className="text-base xxs:text-lg xs:text-xl sm:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#3b81f6] to-[#d946ef] dark:from-primary dark:to-[#d946ef]">
              <span className="hidden sm:inline">Steven Cleveland</span>
              <span className="hidden xs:inline sm:hidden">S. Cleveland</span>
              <span className="inline xs:hidden">S.C.</span>
              <span className="font-extrabold dark:text-gray-300 text-gray-900 mx-1.5">|</span>
              {t("developer")}
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary"
            >
              {t("home")}
            </a>
            <a
              href="#services"
              className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary"
            >
              {t("services")}
            </a>
            <a
              href="#portfolio"
              className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary"
            >
              {t("portfolio")}
            </a>
            <a
              href="#skills"
              className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary"
            >
              {t("skills")}
            </a>
            <a
              href="#contact"
              className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary"
            >
              {t("contact")}
            </a>

            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5 text-primary" />
              ) : (
                <Moon className="w-5 h-5 text-primary" />
              )}
            </button>

            <button
              onClick={toggleLanguage}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors flex items-center"
              aria-label="Toggle language"
            >
              <Languages className="w-5 h-5 mr-1 text-primary" />
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
                <Sun className="w-3.5 xxs:w-[1.1rem] xs:w-4 h-3.5 xxs:h-[1.1rem] xs:h-4 text-primary" />
              ) : (
                <Moon className="w-3.5 xxs:w-[1.1rem] xs:w-4 h-3.5 xxs:h-[1.1rem] xs:h-4 text-primary" />
              )}
            </button>

            <button
              onClick={toggleLanguage}
              className="p-1 xxs:p-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle language"
            >
              <Languages className="w-3.5 xxs:w-[1.1rem] xs:w-4 h-3.5 xxs:h-[1.1rem] xs:h-4 text-primary" />
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-1 xxs:p-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="w-3.5 xxs:w-[1.1rem] xs:w-4 h-3.5 xxs:h-[1.1rem] xs:h-4 text-primary" />
              ) : (
                <Menu className="w-3.5 xxs:w-[1.1rem] xs:w-4 h-3.5 xxs:h-[1.1rem] xs:h-4 text-primary" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white dark:bg-gray-800">
            <a
              href="#home"
              className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary"
            >
              {t("home")}
            </a>
            <a
              href="#services"
              className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary"
            >
              {t("services")}
            </a>
            <a
              href="#portfolio"
              className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary"
            >
              {t("portfolio")}
            </a>
            <a
              href="#skills"
              className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary"
            >
              {t("skills")}
            </a>
            <a
              href="#contact"
              className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary"
            >
              {t("contact")}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
