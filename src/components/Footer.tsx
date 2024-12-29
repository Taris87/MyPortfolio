import React, { useState } from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  // Zustand für die Eingabefelder
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent("Nachricht von " + name);
    const body = encodeURIComponent(
      `${message}\n\nAntworten auf Email : ${email}`
    );
    window.location.href = `mailto:steven_cleveland41@yahoo.com?subject=${subject}&body=${body}`;

    // Felder zurücksetzen
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <footer
      id="contact"
      className="bg-white dark:bg-gray-800 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                {t("contactMe")}
              </h3>
              <p className=" text-gray-600 dark:text-gray-300 mb-4 mt-8">
                {t("contactText")}
              </p>
            </div>
            <div className="flex space-x-4">
              <a
                href="https://github.com/Taris87"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-primary transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/steven-cleveland-9440a6269"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-primary transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="mailto:steven_cleveland41@yahoo.com"
                className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-primary transition-colors">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                {t("name")}
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                placeholder={t("yourName")}
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                {t("email")}
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                placeholder={t("yourEmail")}
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                {t("message")}
              </label>
              <textarea
                id="message"
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                placeholder={t("yourMessage")}></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors">
              {t("sendMessage")}
            </button>
          </form>
        </div>

        <div className="flex mt-8 pt-8 border-t border-gray-200 dark:border-gray-700 text-center text-gray-600 dark:text-gray-400 justify-between flex-row pr-[10%] pl-[10%]">
          <p>
            &copy; {new Date().getFullYear()} {t("allRightsReserved")}.
          </p>

          <a href="/">Impressum</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
