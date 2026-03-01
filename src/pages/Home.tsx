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
    <main className="relative min-h-screen bg-slate-950 text-slate-300">
      <InteractiveBackground />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Achievements />
      <Portfolio />
      <Contact />

      {/* Footer */}
      <footer className="py-12 border-t border-white/5 bg-slate-950/20">
        <div className="container mx-auto px-4 text-center">
          <p className="text-xs font-black uppercase tracking-[0.3em] text-slate-600">
            © {new Date().getFullYear()} <span className="text-emerald-500/60">Karthikeyan Pandiyaraj.</span> Built with Pythonic Precision.
          </p>
        </div>
      </footer>
    </main>
  );
};

export default Home;
