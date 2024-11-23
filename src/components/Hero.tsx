import React, { useEffect } from "react";
import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { CanvasAnimation } from '../features/canvas/canvasAnimation';
import { useTheme } from "next-themes";
import { useTypewriter } from "../features/typing/typingAnimation";
import profileImage from "../image/IMG_20200831_023451_096.jpg";

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
      className="relative pt-20 min-h-screen flex items-center bg-gradient-to-br from-primary-light to-[#b0d7d7] dark:from-gray-950 dark:via-gray-900 dark:to-black overflow-hidden">
      {/* Particle Canvas */}
      <canvas id="particle-canvas" className="absolute inset-0 pointer-events-none" />

      {/* Glass Cards Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-primary/10 rounded-full filter blur-[100px] -top-20 -left-20 animate-pulse-slow" />
        <div className="absolute w-96 h-96 bg-violet-600/10 rounded-full filter blur-[100px] -bottom-20 -right-20 animate-pulse-slow" />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        {/* Centered Welcome Heading */}
        <div className="text-center -mt-8 mb-44">
          <div className="relative inline-block">
            {/* Blob Animation */}
            <div className="absolute inset-0 -z-10 flex items-center justify-center w-full">
              <div className="absolute w-[120%] h-24 -left-[10%] bg-primary/20 dark:bg-primary/30 rounded-full mix-blend-multiply filter blur-xl animate-blob opacity-70"></div>
              <div className="absolute w-[120%] h-24 -left-[10%] bg-violet-800/20 dark:bg-violet-600/30 rounded-full mix-blend-multiply filter blur-xl animate-blob-slow opacity-70 translate-y-2"></div>
              <div className="absolute w-[120%] h-24 -left-[10%] bg-indigo-800/20 dark:bg-indigo-600/30 rounded-full mix-blend-multiply filter blur-xl animate-blob-slower opacity-70 -translate-y-2"></div>
            </div>
            
            <h1 className="text-6xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#3b81f6] to-[#d946ef] dark:from-primary dark:to-violet-500 relative">
              {t("welcome")}
            </h1>
          </div>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Left Side - Profile Image */}
            <div className="w-full md:w-1/2 flex flex-col items-center">
              <div className="relative group w-72 h-72">
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
              <div className="flex justify-center gap-8 mt-8">
                <a
                  href="https://github.com/Taris87"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex items-center justify-center w-12 h-12 rounded-full bg-white/10 dark:bg-gray-800/50 backdrop-blur-sm border border-primary/20 hover:border-primary transition-all duration-300"
                >
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 to-violet-600/20 blur opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110"></div>
                  <div className="absolute inset-0 rounded-full border-4 border-primary opacity-50 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"></div>
                  <Github className="w-6 h-6 text-gray-600 dark:text-gray-300 group-hover:text-primary dark:group-hover:text-primary transition-colors relative z-10" />
                </a>
                <a
                  href="https://www.linkedin.com/in/steven-cleveland-9440a6269"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex items-center justify-center w-12 h-12 rounded-full bg-white/10 dark:bg-gray-800/50 backdrop-blur-sm border border-primary/20 hover:border-primary transition-all duration-300"
                >
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 to-violet-600/20 blur opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110"></div>
                  <div className="absolute inset-0 rounded-full border-4 border-primary opacity-50 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"></div>
                  <Linkedin className="w-6 h-6 text-gray-600 dark:text-gray-300 group-hover:text-primary dark:group-hover:text-primary transition-colors relative z-10" />
                </a>
                <a
                  href="mailto:steven_cleveland41@yahoo.com"
                  className="group relative flex items-center justify-center w-12 h-12 rounded-full bg-white/10 dark:bg-gray-800/50 backdrop-blur-sm border border-primary/20 hover:border-primary transition-all duration-300"
                >
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 to-violet-600/20 blur opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110"></div>
                  <div className="absolute inset-0 rounded-full border-4 border-primary opacity-50 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"></div>
                  <Mail className="w-6 h-6 text-gray-600 dark:text-gray-300 group-hover:text-primary dark:group-hover:text-primary transition-colors relative z-10" />
                </a>
              </div>
            </div>

            {/* Right Side - Text Content */}
            <div className="w-full md:w-1/2">
              <div className="bg-gray-800/30 dark:bg-gray-800/30 backdrop-blur-xl rounded-3xl p-8 shadow-1xl relative before:absolute before:inset-0 before:-z-10 before:translate-x-2 before:translate-y-2 before:bg-primary/10 before:rounded-3xl before:blur-lg after:absolute after:inset-0 after:-z-20 after:translate-x-4 after:translate-y-4 after:bg-violet-600/10 after:rounded-3xl after:blur-xl">
                <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#3b81f6] to-[#d946ef] dark:from-primary dark:to-violet-600 mb-6 flex flex-wrap items-center">
                  <span className="mr-2">{t("iam")}</span>
                  <div className="min-w-[280px]">
                    <span className="text-primary dark:text-primary border-r-2 dark:border-primary animate-blink">
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
            className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 cursor-pointer group animate-glow"
            aria-label="Scroll to services"
          >
            <div className="relative">
              <ChevronDown className="w-8 h-8 text-[#d946ef]/70 absolute top-0 animate-scroll-arrow-1" />
              <ChevronDown className="w-8 h-8 text-[#d946ef]/70 absolute top-0 animate-scroll-arrow-2" />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
