import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Github, Linkedin, Download, Terminal, ChevronRight } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const resumeLink = "https://drive.google.com/file/d/1e9-XOho70TdAUvm5NcCursTlkmhhv4Ui/view?usp=drive_link";

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Index', href: '#home', code: '01' },
    { name: 'Protocol', href: '#about', code: '02' },
    { name: 'Stack', href: '#skills', code: '03' },
    { name: 'Nodes', href: '#projects', code: '04' },
    { name: 'Uplink', href: '#contact', code: '05' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'py-4' : 'py-8'}`}>
      <div className="container mx-auto px-6">
        <div className={`flex items-center justify-between p-2 rounded-2xl transition-all duration-500 ${isScrolled ? 'bg-slate-950/80 backdrop-blur-2xl border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)]' : 'bg-transparent border-transparent'}`}>

          {/* Brand */}
          <a href="#home" className="flex items-center gap-4 group px-4 py-2">
            <div className="relative">
              <div className="w-10 h-10 bg-emerald-500 rounded-xl flex items-center justify-center group-hover:rotate-[360deg] transition-all duration-700 shadow-[0_0_20px_rgba(16,185,129,0.3)]">
                <Terminal className="w-5 h-5 text-slate-950" />
              </div>
              <div className="absolute -inset-1 bg-emerald-500/20 blur-lg rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-black text-white tracking-[0.2em] uppercase font-orbitron">Karthikeyan</span>
              <span className="text-[10px] font-bold text-emerald-500 tracking-[0.4em] uppercase opacity-80">Systems.V2</span>
            </div>
          </a>

          {/* Navigation - Desktop */}
          <div className="hidden lg:flex items-center gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="group relative px-5 py-3"
              >
                <div className="flex flex-col items-center">
                  <span className="text-[9px] font-mono text-emerald-500/40 group-hover:text-emerald-500 transition-colors mb-0.5">{link.code}</span>
                  <span className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-400 group-hover:text-white transition-all">
                    {link.name}
                  </span>
                </div>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-emerald-500 group-hover:w-full transition-all duration-500" />
              </a>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <a
              href={resumeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex cyber-button !py-3 !px-6"
            >
              Payload
              <Download className="w-4 h-4" />
            </a>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden w-12 h-12 flex items-center justify-center bg-white/5 rounded-xl border border-white/10 hover:border-emerald-500/40 transition-all"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6 text-emerald-500" /> : <Menu className="w-6 h-6 text-white" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu - Full Screen Redesign */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 bg-slate-950 z-[100] p-8 flex flex-col"
          >
            <div className="flex justify-between items-center mb-20">
              <div className="flex items-center gap-4">
                <Terminal className="w-8 h-8 text-emerald-500" />
                <span className="font-orbitron font-black text-white uppercase tracking-widest text-xl">Menu</span>
              </div>
              <button onClick={() => setIsMobileMenuOpen(false)} className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white">
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="flex flex-col gap-6">
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="group flex items-center justify-between py-4 border-b border-white/5"
                >
                  <div className="flex items-center gap-6">
                    <span className="text-xl font-mono text-emerald-500/20">{link.code}</span>
                    <span className="text-3xl font-black font-orbitron uppercase text-slate-400 group-hover:text-emerald-500 transition-all tracking-tighter">
                      {link.name}
                    </span>
                  </div>
                  <ChevronRight className="w-6 h-6 text-emerald-500 opacity-0 group-hover:opacity-100 transition-all -translate-x-4 group-hover:translate-x-0" />
                </motion.a>
              ))}
            </div>

            <div className="mt-auto pt-12 border-t border-white/5 flex gap-6 justify-center">
              <a href="https://github.com/K-bit-23" className="text-slate-500 hover:text-emerald-500 transition-colors"><Github className="w-8 h-8" /></a>
              <a href="https://linkedin.com/in/karthikeyan-pandiyaraj-351015229" className="text-slate-500 hover:text-emerald-500 transition-colors"><Linkedin className="w-8 h-8" /></a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
