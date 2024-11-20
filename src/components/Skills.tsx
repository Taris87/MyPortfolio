import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const SkillBar = ({ skill, level }: { skill: string; level: number }) => (
  <div className="mb-6">
    <div className="flex justify-between mb-1">
      <span className="text-base font-semibold text-gray-700 dark:text-gray-300">{skill}</span>
      <span className="text-sm text-gray-600 dark:text-gray-400">{level}%</span>
    </div>
    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
      <div 
        className="bg-indigo-600 dark:bg-indigo-500 h-2.5 rounded-full transition-all duration-500 ease-out"
        style={{ width: `${level}%` }}
      ></div>
    </div>
  </div>
);

const Skills = () => {
  const { t } = useLanguage();
  
  const skills = [
    { name: "JavaScript/TypeScript", level: 70 },
    { name: "React/React Native", level: 65 },
    { name: "Node.js", level: 50 },
    { name: "HTML/CSS", level: 75 },
    { name: "SQL/NoSQL", level: 65 },
    { name: "AWS/Cloud", level: 40 }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">{t('mySkills')}</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">{t('techStack')}</p>
        </div>
        <div className="max-w-3xl mx-auto">
          {skills.map((skill, index) => (
            <SkillBar key={index} skill={skill.name} level={skill.level} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;