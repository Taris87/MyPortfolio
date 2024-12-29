import React, { useState } from 'react';
import { Code2, Layout, Database, Cloud } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const ServiceCard = ({ icon: Icon, title, description }: { icon: React.ComponentType<{ className?: string }>, title: string, description: string }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="relative h-[280px] group perspective" onClick={() => setIsFlipped(!isFlipped)}>
      <div className={`relative preserve-3d duration-500 w-full h-full ${isFlipped ? 'rotate-y-180' : ''}`}>
        {/* Front */}
        <div className="absolute w-full h-full backface-hidden">
          <div className="p-8 backdrop-blur-md bg-gradient-to-br from-white/90 via-white/70 to-white/90 dark:from-gray-800/90 dark:via-gray-800/70 dark:to-gray-800/90 rounded-2xl shadow-lg h-full flex flex-col items-center justify-center text-center group cursor-pointer relative before:absolute before:inset-0 before:rounded-2xl before:p-[2px] before:bg-gradient-to-r before:from-transparent before:via-primary before:to-transparent before:opacity-0 group-hover:before:opacity-100 before:transition-opacity overflow-hidden before:bg-[length:200%_100%] group-hover:before:animate-border hover:shadow-xl hover:shadow-primary/5 transition-shadow">
            {/* Inner Container to cover the gradient border */}
            <div className="absolute inset-[2px] bg-gradient-to-br from-white/90 via-white/70 to-white/90 dark:from-gray-800/90 dark:via-gray-800/70 dark:to-gray-800/90 backdrop-blur-md rounded-2xl z-0" />
            
            {/* Gradient Background Effect */}
            <div className="absolute inset-[2px] bg-gradient-to-br from-primary/5 via-transparent to-primary/5 dark:from-primary/10 dark:to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
            
            {/* Content Container */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full w-full">
              {/* Icon Container with Glow */}
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-primary/20 dark:bg-primary/30 rounded-full blur-lg opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300" />
                <div className="relative bg-white/80 dark:bg-gray-800/80 p-4 rounded-full group-hover:shadow-lg group-hover:shadow-primary/20 transition-shadow duration-300 backdrop-blur-sm">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 dark:text-white relative z-10 group-hover:text-primary transition-colors duration-300">
                {title}
              </h3>
            </div>
          </div>
        </div>

        {/* Back */}
        <div className="absolute w-full h-full rotate-y-180 backface-hidden">
          <div className="p-8 backdrop-blur-md bg-gradient-to-br from-white/90 via-white/70 to-white/90 dark:from-gray-800/90 dark:via-gray-800/70 dark:to-gray-800/90 rounded-2xl shadow-lg h-full flex flex-col items-center justify-center text-center cursor-pointer relative before:absolute before:inset-0 before:rounded-2xl before:p-[2px] before:bg-gradient-to-r before:from-transparent before:via-primary before:to-transparent before:opacity-0 group-hover:before:opacity-100 before:transition-opacity overflow-hidden before:bg-[length:200%_100%] group-hover:before:animate-border hover:shadow-xl hover:shadow-primary/5 transition-shadow">
            {/* Inner Container to cover the gradient border */}
            <div className="absolute inset-[2px] bg-gradient-to-br from-white/90 via-white/70 to-white/90 dark:from-gray-800/90 dark:via-gray-800/70 dark:to-gray-800/90 backdrop-blur-md rounded-2xl z-0" />
            
            {/* Gradient Background */}
            <div className="absolute inset-[2px] bg-gradient-to-br from-primary/10 via-transparent to-primary/10 opacity-70 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
            
            {/* Content */}
            <div className="relative z-10 flex flex-col items-center justify-center space-y-4 max-w-[85%]">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                {title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Services = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: Code2,
      title: t('frontendDev'),
      description: t('frontendDesc')
    },
    {
      icon: Database,
      title: t('backendDev'),
      description: t('backendDesc')
    },
    {
      icon: Layout,
      title: t('uiux'),
      description: t('uiuxDesc')
    },
    {
      icon: Cloud,
      title: t('cloudServices'),
      description: t('cloudDesc')
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold bg-clip-text text-gray-900 dark:text-white mb-4">
            {t('myServices')}
          </h2>
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