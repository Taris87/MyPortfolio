import React from "react";
import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section
      id="home"
      className="relative pt-20 min-h-screen flex items-center bg-gradient-to-br from-primary/5 to-white dark:from-gray-900 dark:to-gray-800 transition-colors duration-200">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center relative">
          {/* SVG Blob als Hintergrund */}
          <div className="absolute inset-0 flex justify-center items-center -z-10">
            <svg
              viewBox="0 0 500 500"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full">
              <path fill="#12f7ff">
                <animate
                  attributeName="d"
                  dur="20000ms"
                  repeatCount="indefinite"
                  values="
                    M458,311.5Q464,373,408,400Q352,427,301,451.5Q250,476,195,458.5Q140,441,99,401Q58,361,78,305.5Q98,250,80.5,196Q63,142,114,122.5Q165,103,207.5,84.5Q250,66,291.5,86.5Q333,107,389,122Q445,137,448.5,193.5Q452,250,458,311.5Z;
                    M404,290Q388,330,380.5,396.5Q373,463,311.5,446Q250,429,192,440Q134,451,118.5,393Q103,335,54.5,292.5Q6,250,29.5,193Q53,136,100.5,105Q148,74,199,39Q250,4,312,20Q374,36,380.5,103.5Q387,171,403.5,210.5Q420,250,404,290Z;
                    M420,291Q392,332,375.5,385Q359,438,304.5,463Q250,488,210,438.5Q170,389,131.5,365Q93,341,81,295.5Q69,250,80.5,204.5Q92,159,112.5,103.5Q133,48,191.5,45.5Q250,43,304.5,52Q359,61,401.5,99.5Q444,138,446,194Q448,250,420,291Z;
                    M438,295.5Q408,341,375.5,375.5Q343,410,296.5,455Q250,500,187.5,483Q125,466,102.5,407Q80,348,44.5,299Q9,250,33,194.5Q57,139,110,119.5Q163,100,206.5,67Q250,34,290.5,72Q331,110,393.5,120.5Q456,131,462,190.5Q468,250,438,295.5Z;
                    M438,295.5Q468,250,462,190.5Q456,131,393.5,120.5Q331,110,290.5,72Q250,34,206.5,67Q163,100,110,119.5Q57,139,33,194.5Q9,250,44.5,299Q80,348,102.5,407Q125,466,187.5,483Q250,500,296.5,455Q343,410,375.5,375.5Q408,341,438,295.5Z;
M420,291Q448,250,446,194Q444,138,401.5,99.5Q359,61,304.5,52Q250,43,191.5,45.5Q133,48,112.5,103.5Q92,159,80.5,204.5Q69,250,81,295.5Q93,341,131.5,365Q170,389,210,438.5Q250,488,304.5,463Q359,438,375.5,385Q392,332,420,291Z;
M404,290Q420,250,403.5,210.5Q387,171,380.5,103.5Q374,36,312,20Q250,4,199,39Q148,74,100.5,105Q53,136,29.5,193Q6,250,54.5,292.5Q103,335,118.5,393Q134,451,192,440Q250,429,311.5,446Q373,463,380.5,396.5Q388,330,404,290Z;
M458,311.5Q452,250,448.5,193.5Q445,137,389,122Q333,107,291.5,86.5Q250,66,207.5,84.5Q165,103,114,122.5Q63,142,80.5,196Q98,250,78,305.5Q58,361,99,401Q140,441,195,458.5Q250,476,301,451.5Q352,427,408,400Q464,373,458,311.5Z;

                  "></animate>
              </path>
            </svg>
          </div>

          {/* Profile Image */}
          <div className="relative flex justify-center items-center mb-8">
            <img
              src="/src/image/IMG_20200831_023451_096.jpg"
              alt="Profile"
              className="w-32 h-32 rounded-full mx-auto border-4 border-primary"
            />
          </div>

          {/* Title and Discription */}
          <h1
            className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6"
            style={{ mixBlendMode: "saturation" }}>
            {t("welcome")}
          </h1>
          <p
            className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto"
            style={{ mixBlendMode: "saturation" }}>
            {t("intro")}
          </p>

          {/* Soziale Links */}
          <div className="flex justify-center space-x-6 mb-12">
            <a
              href="https://github.com/Taris87"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white dark:bg-gray-700 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
              <Github className="w-6 h-6 text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-primary" />
            </a>
            <a
              href="https://www.linkedin.com/in/steven-cleveland-9440a6269"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white dark:bg-gray-700 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
              <Linkedin className="w-6 h-6 text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-primary" />
            </a>
            <a
              href="mailto:steven_cleveland41@yahoo.com"
              className="p-3 bg-white dark:bg-gray-700 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
              <Mail className="w-6 h-6 text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-primary" />
            </a>
          </div>

          {/* Chevron */}
          <a
            href="#services"
            className="inline-block animate-bounce"
            style={{ mixBlendMode: "saturation" }}>
            <ChevronDown className="w-8 h-8 text-primary" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
