import React, { useEffect, useState } from 'react';
import { ThemeProvider } from 'next-themes';
import { LanguageProvider } from './context/LanguageContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';
import Footer from './components/Footer';

function App() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <LanguageProvider>
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
          <Navbar />
          <main className="relative">
            <div className="absolute inset-0 bg-primary/5 dark:bg-primary/[0.02] pointer-events-none" />
            <Hero />
            <Services />
            <Portfolio />
            <Skills />
            <Footer />
          </main>
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;