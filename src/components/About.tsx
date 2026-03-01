import React from 'react';
import { motion } from 'framer-motion';
import { User, GraduationCap, Code2, Globe, Heart, Shield } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-dark-lighter">
      <div className="container mx-auto px-4 relative z-10">

        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block text-neon-purple text-sm font-bold tracking-[0.2em] uppercase mb-4"
          >
            Core Extraction
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold font-orbitron text-white"
          >
            Behind the <span className="text-gradient">Circuitry</span>
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Visual Element */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="glass-card p-10 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-neon-cyan/5 rounded-full blur-3xl group-hover:bg-neon-cyan/10 transition-colors" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-neon-purple/5 rounded-full blur-3xl group-hover:bg-neon-purple/10 transition-colors" />

              <div className="space-y-8 relative z-10 font-mono text-sm">
                <div className="p-4 bg-dark/50 border border-white/5 rounded-xl shadow-inner">
                  <span className="text-neon-cyan">$ whoami</span><br />
                  <span className="text-slate-400"># Result: Freelance IoT Developer & Innovator</span>
                </div>
                <div className="p-4 bg-dark/50 border border-white/5 rounded-xl shadow-inner">
                  <span className="text-neon-green">$ location</span><br />
                  <span className="text-slate-400"># Result: Tamil Nadu, India</span>
                </div>
                <div className="p-4 bg-dark/50 border border-white/5 rounded-xl shadow-inner">
                  <span className="text-neon-purple">$ passion</span><br />
                  <span className="text-slate-400"># Result: Connecting physical sensors to global networks</span>
                </div>
              </div>
            </div>
            {/* Background floating icon */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
              className="absolute -top-10 -left-10 w-40 h-40 border border-white/5 rounded-full opacity-20 pointer-events-none"
            />
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="text-3xl font-bold font-orbitron text-white/90">Karthikeyan Pandiyaraj</h3>
            <p className="text-lg text-slate-400 leading-relaxed max-w-xl">
              I am a passionate IoT enthusiast with a deep focus on Python and embedded systems.
              My journey started with a simple LED blink and has evolved into building
              intelligent, connected systems that solve real-world problems.
            </p>
            <p className="text-lg text-slate-400 leading-relaxed max-w-xl">
              Currently pursuing my Master's in Computer Applications (MCA) at Kongu Engineering College,
              I apply theoretical knowledge to build practical solutions in cybersecurity,
              machine learning, and real-time data analysis.
            </p>

            <div className="grid grid-cols-2 gap-8 pt-8">
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-neon-cyan">
                  <GraduationCap className="w-6 h-6" />
                  <h4 className="font-bold font-orbitron text-sm">Education</h4>
                </div>
                <p className="text-sm text-slate-500">MCA @ Kongu Engineering College<br />(Graduating 2026)</p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-neon-green">
                  <Code2 className="w-6 h-6" />
                  <h4 className="font-bold font-orbitron text-sm">Coding</h4>
                </div>
                <p className="text-sm text-slate-500">5+ Programming Languages<br />10+ Custom Libraries</p>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default About;
