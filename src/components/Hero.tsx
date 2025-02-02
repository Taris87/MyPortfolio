import React, { useEffect } from "react";
import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { CanvasAnimation } from '../features/canvas/canvasAnimation';
import { useTheme } from "next-themes";
import { useTypewriter } from "../features/typing/typingAnimation";
import profileImage from "../image/profile_photo_72054651.png";



const Hero = () => {
  const { t } = useLanguage();
  const { resolvedTheme } = useTheme();
  const { displayText } = useTypewriter();

  useEffect(() => {
    const canvas = document.getElementById('particle-canvas') as HTMLCanvasElement;
    if (!canvas) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const canvasAnimation = new CanvasAnimation(canvas, resolvedTheme === 'dark');
    canvasAnimation.startAnimation();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    return () => {
      canvasAnimation.stopAnimation();
      window.removeEventListener('resize', handleResize);
    };
  }, [resolvedTheme]);

  return (
    <section
      id="home"
      className="relative pt-16 sm:pt-20 min-h-screen flex items-center bg-gradient-to-br from-primary-light to-[#b0d7d7] dark:from-gray-950 dark:via-gray-900 dark:to-black overflow-hidden"
    >
      {/* Particle Canvas */}
      <canvas id="particle-canvas" className="absolute inset-0 pointer-events-none" />

      {/* Glass Cards Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-48 xxs:w-56 xs:w-64 sm:w-96 h-48 xxs:h-56 xs:h-64 sm:h-96 bg-primary/10 rounded-full filter blur-[100px] -top-20 -left-20 animate-pulse-slow" />
        <div className="absolute w-48 xxs:w-56 xs:w-64 sm:w-96 h-48 xxs:h-56 xs:h-64 sm:h-96 bg-violet-600/10 rounded-full filter blur-[100px] -bottom-20 -right-20 animate-pulse-slow" />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        {/* Centered Welcome Heading */}
        <div className=" text-center mt-20 xxs:mt-14 sm:mt-28 mb-8 xxs:mb-6 xs:mb-10 sm:mb-20 md:mb-40">
          <div className="relative inline-block">
            {/* Blob Animation */}
            <div className="absolute inset-0 -z-10 flex items-center justify-center w-full h-full">
              <div className="absolute w-[120%] h-16 xxs:h-16 xs:h-16 sm:h-24 -left-[10%] bg-primary/20 dark:bg-primary/30 rounded-full mix-blend-multiply filter blur-xl animate-blob opacity-20"></div>
              <div className="absolute w-[120%] h-20 xxs:h-20 xs:h-20 sm:h-26 -left-[10%] bg-violet-800/20 dark:bg-violet-600/30 rounded-full mix-blend-multiply filter blur-xl animate-blob-slow opacity-20 translate-y-2"></div>
              <div className="absolute w-[120%] h-16 xxs:h-20 xs:h-16 sm:h-24 -left-[10%] bg-indigo-800/20 dark:bg-indigo-600/30 rounded-full mix-blend-multiply filter blur-xl animate-blob-slower opacity-20 -translate-y-2"></div>
            </div>
            
            <h1 className="xxs:text-center xxs:leading-tight xs:leading-tight md:leading-snug text-2xl xxs:text-[2.4rem] xs:text-4xl sm:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#3b81f6] to-[#d946ef] dark:from-primary dark:to-violet-500 relative">
              {t("welcome")}
            </h1>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-2 sm:px-4">
          <div className="flex flex-col lg:flex-row items-center gap-4 xxs:gap-5 xs:gap-6 sm:gap-8 lg:gap-12">
            {/* Left Side - Profile Image */}
            <div className="w-full lg:w-1/2 flex flex-col items-center">
              <div className="relative group w-40 xxs:w-44 xs:w-56 sm:w-72 h-40 xxs:h-44 xs:h-56 sm:h-72">
                {/* Animated Glow Effect */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-violet-600 to-primary blur-lg opacity-75 group-hover:opacity-100 transition duration-300 animate-pulse-slow"></div>
                
                {/* Border Container */}
                <div className="absolute inset-0 rounded-full border-4 border-primary"></div>
                
                {/* Image Container */}
                <div className="absolute inset-1 bg-gradient-to-r from-gray-100 to-gray-300 dark:from-gray-800 dark:to-gray-900 rounded-full p-1">
                  <img 
                    src={profileImage}
                    alt="Profile" 
                    className="rounded-full w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Social Links */}
              <div className="flex justify-center gap-3 xxs:gap-3.5 xs:gap-6 sm:gap-8 mt-4 sm:mt-8">
                <a
                  href="https://github.com/Taris87"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex items-center justify-center w-9 xxs:w-[2.5rem] xs:w-12 xs:h-12 h-9 xxs:h-[2.5rem] rounded-full bg-white/10 dark:bg-gray-800/50 backdrop-blur-sm border border-primary/20 hover:border-primary transition-all duration-300"
                >
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 to-violet-600/20 blur opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110"></div>
                  <div className="absolute inset-0 rounded-full border-4 border-primary opacity-50 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"></div>
                  <Github className="w-6 h-6 text-gray-600 dark:text-gray-300 group-hover:text-primary dark:group-hover:text-primary transition-colors relative z-10" />
                </a>
                <a
                  href="https://www.linkedin.com/in/steven-cleveland-9440a6269"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex items-center justify-center w-9 xxs:w-[2.5rem] xs:w-12 xs:h-12 h-9 xxs:h-[2.5rem] rounded-full bg-white/10 dark:bg-gray-800/50 backdrop-blur-sm border border-primary/20 hover:border-primary transition-all duration-300"
                >
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 to-violet-600/20 blur opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110"></div>
                  <div className="absolute inset-0 rounded-full border-4 border-primary opacity-50 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"></div>
                  <Linkedin className="w-6 h-6 text-gray-600 dark:text-gray-300 group-hover:text-primary dark:group-hover:text-primary transition-colors relative z-10" />
                </a>
                <a
                  href="mailto:steven_cleveland41@yahoo.com"
                  className="group relative flex items-center justify-center w-9 xxs:w-[2.5rem] xs:w-12 xs:h-12 h-9 xxs:h-[2.5rem] rounded-full bg-white/10 dark:bg-gray-800/50 backdrop-blur-sm border border-primary/20 hover:border-primary transition-all duration-300"
                >
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 to-violet-600/20 blur opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110"></div>
                  <div className="absolute inset-0 rounded-full border-4 border-primary opacity-50 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"></div>
                  <Mail className="w-6 h-6 text-gray-600 dark:text-gray-300 group-hover:text-primary dark:group-hover:text-primary transition-colors relative z-10" />
                </a>
              </div>
            </div>

            {/* Right Side - Text Content */}
            <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
              <div className="bg-gray-800/30 dark:bg-gray-800/30 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-1xl relative before:absolute before:inset-0 before:-z-10 before:translate-x-2 before:translate-y-2 before:bg-primary/10 before:rounded-2xl sm:before:rounded-3xl before:blur-lg after:absolute after:inset-0 after:-z-20 after:translate-x-4 after:translate-y-4 after:bg-violet-600/10 after:rounded-2xl sm:after:rounded-3xl after:blur-xl">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#3b81f6] to-[#d946ef] dark:from-primary dark:to-[#d946ef]  mb-4">
                  <span className="mr-2">{t("iam")}</span>
                  <div className="min-w-[280px]">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3b81f6] to-[#d946ef] dark:from-primary dark:to-[#d946ef] border-r-2  animate-blink">
                      {displayText}
                    </span>
                  </div>
                </h2>
                <p className="text-lg text-white font-bold dark:text-gray-300 leading-relaxed">
                  {t("intro")}
                </p>
              </div>
            </div>
          </div>

          {/* Scroll Down Indicator */}
          <button 
            onClick={() => {
              document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="relative -bottom-16 left-1/2 transform -translate-x-1/2 cursor-pointer group animate-glow animate-bounce"
            aria-label="Scroll to services"
          >
            <div className="relative">
              <ChevronDown className="w-10 h-10 text-[#d946ef]/70 relative top-0" />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
