import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const ProjectCard = ({ 
  title, 
  description, 
  image, 
  tags, 
  githubLink, 
  liveLink 
}: { 
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubLink: string;
  liveLink: string;
}) => (
  <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
    <img src={image} alt={title} className="w-full h-48 object-cover" />
    <div className="p-6">
      <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag, index) => (
          <span key={index} className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400 rounded-full text-sm">
            {tag}
          </span>
        ))}
      </div>
      <div className="flex space-x-4">
        <a href={githubLink} target="_blank" rel="noopener noreferrer"
           className="flex items-center text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400">
          <Github className="w-5 h-5 mr-2" />
          Code
        </a>
        <a href={liveLink} target="_blank" rel="noopener noreferrer"
           className="flex items-center text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400">
          <ExternalLink className="w-5 h-5 mr-2" />
          Live Demo
        </a>
      </div>
    </div>
  </div>
);

const Portfolio = () => {
  const { t } = useLanguage();

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Vollständige E-Commerce-Lösung mit React, Node.js und MongoDB",
      image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80&w=800",
      tags: ["React", "Node.js", "MongoDB", "Express"],
      githubLink: "https://github.com",
      liveLink: "https://example.com"
    },
    {
      title: "Task Management App",
      description: "Kollaboratives Projektmanagement-Tool mit Echtzeit-Updates",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800",
      tags: ["TypeScript", "React", "Firebase", "TailwindCSS"],
      githubLink: "https://github.com",
      liveLink: "https://example.com"
    },
    {
      title: "Fitness Tracker",
      description: "Mobile-First Fitness App mit Fortschrittsverfolgung",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=800",
      tags: ["React Native", "GraphQL", "Node.js"],
      githubLink: "https://github.com",
      liveLink: "https://example.com"
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-white dark:bg-gray-800 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">{t('myProjects')}</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">{t('bestWorks')}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;