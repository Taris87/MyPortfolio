'use client';

import React from 'react';

const TOOLS = [
  'JavaScript',
  'TypeScript',
  'React',
  'Node.js',
  'HTML',
  'CSS',
  'SQL/NoSQL/PostgreSQL',
  'AWS/Cloud',
  'Python',
];

const SkillsSection = () => {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-bold text-gray-900 dark:text-white mb-8">
          My Skills
        </h2>
        <div
          style={{
            overflow: 'hidden',
            position: 'relative',
            width: '100%',
            maxWidth: '80%',
            margin: '0 auto',
            height: '64px',
          }}
        >
          <div
            style={{
              display: 'flex',
              animation: 'smooth-marquee 15s linear infinite',
              willChange: 'transform',
            }}
          >
            {TOOLS.concat(TOOLS).map((tool, index) => (
              <div
                key={index}
                style={{
                  flexShrink: 0,
                  marginRight: '1.5rem',
                  padding: '0.5rem 1rem',
                  backgroundColor: '#272f5f',
                  color: '#7482e6',
                  borderRadius: '25px',
                  whiteSpace: 'nowrap',
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                }}
              >
                {tool}
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>
        {`
          @keyframes smooth-marquee {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
        `}
      </style>
    </section>
  );
};

export default SkillsSection;
