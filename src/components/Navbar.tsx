import React, { useState } from "react";
import { Menu, X, Moon, Sun, Languages } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { useLanguage } from "../context/LanguageContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();
  const { language, toggleLanguage, t } = useLanguage();

  return (
    <nav className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-lg fixed w-full z-50 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-primary">
              Steven Cleveland{" "}
              <span className="font-extrabold dark:text-gray-300 text-gray-900">
                |
              </span>{" "}
              {t("developer")}
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary">
              {t("home")}
            </a>
            <a
              href="#services"
              className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary">
              {t("services")}
            </a>
            <a
              href="#portfolio"
              className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary">
              {t("portfolio")}
            </a>
            <a
              href="#skills"
              className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary">
              {t("skills")}
            </a>
            <a
              href="#contact"
              className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary">
              {t("contact")}
            </a>

            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle theme">
              {isDarkMode ? (
                <Sun className="w-5 h-5 text-primary" />
              ) : (
                <Moon className="w-5 h-5 text-primary" />
              )}
            </button>

            <button
              onClick={toggleLanguage}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors flex items-center"
              aria-label="Toggle language">
              <Languages className="w-5 h-5 mr-1 text-primary" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                {language.toUpperCase()}
              </span>
            </button>
          </div>

          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle theme">
              {isDarkMode ? (
                <Sun className="w-5 h-5 text-primary" />
              ) : (
                <Moon className="w-5 h-5 text-primary" />
              )}
            </button>

            <button
              onClick={toggleLanguage}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle language">
              <Languages className="w-5 h-5 text-primary" />
            </button>

            <button onClick={() => setIsOpen(!isOpen)} className="text-primary">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white dark:bg-gray-800">
            <a
              href="#home"
              className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary">
              {t("home")}
            </a>
            <a
              href="#services"
              className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary">
              {t("services")}
            </a>
            <a
              href="#portfolio"
              className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary">
              {t("portfolio")}
            </a>
            <a
              href="#skills"
              className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary">
              {t("skills")}
            </a>
            <a
              href="#contact"
              className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary">
              {t("contact")}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
