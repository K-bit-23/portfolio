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
    <main className="relative min-h-screen bg-[#020408] text-slate-300">
      <InteractiveBackground />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Achievements />
      <Portfolio />
      <Contact />

      {/* Footer V2 */}
      <footer className="py-20 border-t border-white/5 bg-slate-950/20 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent" />
        <div className="container mx-auto px-4 text-center">
          <div className="flex flex-col items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-[0.5em] text-emerald-500/50">System Stable</span>
            </div>
            <p className="text-[10px] font-black uppercase tracking-[0.6em] text-slate-600">
              © {new Date().getFullYear()} <span className="text-white">Karthikeyan Pandiyaraj</span> — v2.1.stable
            </p>
            <div className="flex gap-4 opacity-30 hover:opacity-100 transition-opacity">
              <span className="text-[9px] font-mono text-slate-700">COORD: 11.23N 77.58E</span>
              <span className="text-[9px] font-mono text-slate-700">|</span>
              <span className="text-[9px] font-mono text-slate-700">NODE: KEC_IOT_MAIN</span>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default Home;
