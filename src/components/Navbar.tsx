import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Cpu, Github, Linkedin, Youtube } from 'lucide-react';

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
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'pt-4' : 'pt-8'}`}>
      <div className="container mx-auto px-4">
        <div className={`glass-card mx-auto max-w-6xl px-6 py-4 flex items-center justify-between border border-white/10 ${isScrolled ? 'shadow-2xl' : ''}`}>

          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 group">
            <motion.div
              whileHover={{ rotate: 180 }}
              transition={{ duration: 0.5 }}
              className="w-10 h-10 bg-neon-cyan/20 rounded-xl flex items-center justify-center border border-neon-cyan/30"
            >
              <Cpu className="w-6 h-6 text-neon-cyan" />
            </motion.div>
            <span className="text-xl font-bold text-white tracking-widest hidden sm:block">
              KARTHIKEYAN <span className="text-neon-cyan">P</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-300 hover:text-neon-cyan transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-neon-cyan transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Social Icons & Mobile Menu Button */}
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-3">
              <a href="https://github.com/K-bit-23" target="_blank" rel="noopener noreferrer" className="p-2 text-slate-400 hover:text-neon-cyan hover:bg-white/5 rounded-lg transition-all">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com/in/karthikeyan-pandiyaraj-351015229" target="_blank" rel="noopener noreferrer" className="p-2 text-slate-400 hover:text-neon-cyan hover:bg-white/5 rounded-lg transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>

            <button
              className="md:hidden p-2 text-white/80 hover:text-neon-cyan"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full px-4 mt-2 md:hidden"
          >
            <div className="glass-card p-6 flex flex-col gap-4 border border-white/10 shadow-2xl">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-lg font-medium text-slate-300 hover:text-neon-cyan py-2 border-b border-white/5"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <div className="flex items-center gap-4 py-4">
                <a href="https://github.com/K-bit-23" className="text-slate-400 hover:text-neon-cyan"><Github /></a>
                <a href="https://linkedin.com" className="text-slate-400 hover:text-neon-cyan"><Linkedin /></a>
                <a href="https://youtube.com/@karthideepakkd" className="text-slate-400 hover:text-neon-cyan"><Youtube /></a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </nav>
  );
};

export default Navbar;
