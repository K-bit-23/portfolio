import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Portfolio from '@/components/Portfolio';
import Contact from '@/components/Contact';
import InteractiveBackground from '@/components/InteractiveBackground';

import Achievements from '@/components/Achievements';

const Home: React.FC = () => {
  return (
    <main className="relative min-h-screen bg-dark">
      <InteractiveBackground />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Achievements />
      <Portfolio />
      <Contact />

      {/* Footer */}
      <footer className="py-12 border-t border-white/5 relative z-10 bg-dark-lighter">
        <div className="container mx-auto px-4 text-center">
          <p className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} Karthikeyan P. Built with modern IoT excellence. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
};

export default Home;
