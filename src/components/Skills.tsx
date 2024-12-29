"use client";

import React, { useRef } from "react";
import { useLanguage } from "../context/LanguageContext";

const TOOLS = [
  "JavaScript",
  "TypeScript",
  "React",
  "Node.js",
  "HTML",
  "CSS",
  "SQL",
  "NoSQL",
  "PostgreSQL",
  "AWS/Cloud",
  "Python",
  "Java",
];

const SkillsSection = () => {
  const { t } = useLanguage();
  const marqueeRef = useRef<HTMLDivElement>(null);

  const AnimationPause = () => {
    if (marqueeRef.current) {
      marqueeRef.current.style.animationPlayState = "paused";
      marqueeRef.current.style.color = "red";
    }
  };

  const AnimationPlay = () => {
    if (marqueeRef.current) {
      marqueeRef.current.style.animationPlayState = "running";
    }
  };
  return (
    <section id="skills" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-center text-3xl font-bold text-gray-900 dark:text-white mb-4">
            {t("mySkills")}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            {t("techStack")}
          </p>
        </div>
        <div className="relative overflow-hidden w-full sm:max-w-[100%] md:max-w-[80%] lg:max-w-[80%] mx-auto h-16">
          <div className="absolute left-0 top-0 xxs:w-16 xs:w-16 md:w-32 w-32 h-full bg-gradient-to-r dark:from-[#111d2b] dark:via-[#111d2b]/80 dark:to-transparent z-10 from-[#edfafb] via-[#edfafb] to-transparent " />

          {/* Marquee Container */}
          <div
            className="flex w-full animate-marquee"
            ref={marqueeRef}
            onMouseOver={AnimationPause}
            onMouseOut={AnimationPlay}>
            {TOOLS.concat(TOOLS).map((tool, index) => (
              <div
                key={index}
                className="hover:dark:text-primary hover:text-[#d946ef] border cursor-default border-y-primary border-x-primary-light flex-shrink-0 mx-3 px-4 sm:px-1 md:px-4 py-2 bg-[#d6e8ff]  dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400 rounded-full shadow-lg whitespace-nowrap md:w-[20%] sm:w-auto justify-center items-center text-center font-semibold">
                {tool}
              </div>
            ))}
          </div>
          <div className="absolute right-0 top-0 xxs:w-16 xs:w-16 md:w-32 w-32 h-full bg-gradient-to-l from-[#edfafb] via-[#edfafb] to-transparent dark:from-[#111d2b] dark:via-[#111d2b]0 dark:to-transparent z-10" />
        </div>
      </div>
      <style>
        {`
          @keyframes marquee {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-450%);
            }
           
          }
          .animate-marquee {
            animation: marquee 45s linear infinite;
            display: flex;
            will-change: transform;
          }
        `}
      </style>
    </section>
  );
};

export default SkillsSection;
