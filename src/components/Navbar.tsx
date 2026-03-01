import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Cpu, Github, Linkedin } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'py-4' : 'py-8'}`}>
      <div className="container mx-auto px-4">
        <div className={`mx-auto max-w-6xl px-6 py-4 flex items-center justify-between border transition-all duration-500 rounded-3xl ${isScrolled ? 'bg-slate-900/60 backdrop-blur-2xl border-white/10 shadow-2xl' : 'bg-transparent border-transparent'}`}>

          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-emerald-500/10 rounded-xl flex items-center justify-center border border-emerald-500/20 group-hover:bg-emerald-500/20 transition-all">
              <Cpu className="w-6 h-6 text-emerald-500" />
            </div>
            <span className="text-lg font-black text-white tracking-tighter uppercase font-orbitron">
              Karthikeyan <span className="text-emerald-500">P</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-5 py-2 text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-emerald-400 transition-all rounded-xl hover:bg-white/5"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Social Icons & Mobile Menu Button */}
          <div className="flex items-center gap-2">
            <div className="hidden sm:flex items-center gap-1">
              <a href="https://github.com/K-bit-23" target="_blank" rel="noopener noreferrer" className="p-2.5 text-slate-400 hover:text-emerald-400 hover:bg-emerald-500/10 rounded-xl transition-all border border-transparent hover:border-emerald-500/20">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com/in/karthikeyan-pandiyaraj-351015229" target="_blank" rel="noopener noreferrer" className="p-2.5 text-slate-400 hover:text-emerald-400 hover:bg-emerald-500/10 rounded-xl transition-all border border-transparent hover:border-emerald-500/20">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>

            <button
              className="md:hidden p-2.5 text-white/80 hover:text-emerald-400 bg-white/5 rounded-xl border border-white/10"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 w-full px-4 mt-2 md:hidden"
          >
            <div className="bg-slate-900/90 backdrop-blur-3xl p-6 flex flex-col gap-2 border border-white/10 rounded-3xl shadow-2xl">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-bold uppercase tracking-widest text-slate-400 hover:text-emerald-400 py-3 px-4 rounded-2xl hover:bg-white/5 transition-all"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </nav>
  );
};

export default Navbar;
