import React from 'react';
import { Code2, Layout, Database, Cloud } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const ServiceCard = ({ icon: Icon, title, description }: { icon: React.ComponentType<{ className?: string }>, title: string, description: string }) => (
  <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
    <div className="w-14 h-14 bg-indigo-100 dark:bg-indigo-900/50 rounded-lg flex items-center justify-center mb-4">
      <Icon className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
    </div>
    <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{title}</h3>
    <p className="text-gray-600 dark:text-gray-300">{description}</p>
  </div>
);

const Services = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: Code2,
      title: t('frontendDev'),
      description: "React, TypeScript, TailwindCSS"
    },
    {
      icon: Database,
      title: t('backendDev'),
      description: "Node.js, Express, SQL/NoSQL"
    },
    {
      icon: Layout,
      title: "UI/UX Design",
      description: "Figma, Adobe XD, Responsive Design"
    },
    {
      icon: Cloud,
      title: t('cloudServices'),
      description: "AWS, Azure, GCP"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">{t('myServices')}</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">{t('specializedIn')}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;