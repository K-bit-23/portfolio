import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Globe, Shield } from 'lucide-react';

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
            <h3 className="text-3xl font-bold font-orbitron text-white/90">Karthikeyan P</h3>
            <p className="text-lg text-slate-400 leading-relaxed max-w-xl">
              Aspiring tech enthusiast with a strong foundation in IoT and Python, eager to apply my skills to real-world applications.
              Seeking a challenging role where I can contribute to innovative solutions while continuously growing in a dynamic environment.
            </p>
            <p className="text-lg text-slate-400 leading-relaxed max-w-xl">
              I specialize in connecting physical sensors to digital networks, creating seamless ecosystems that bridge the gap
              between hardware and software excellence.
            </p>

            <div className="space-y-6 pt-8">
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-neon-cyan">
                  <GraduationCap className="w-6 h-6" />
                  <h4 className="font-bold font-orbitron text-sm uppercase tracking-widest">Education</h4>
                </div>
                <div className="grid gap-4">
                  <div className="pl-9 relative border-l border-white/10 ml-3">
                    <div className="absolute top-2 -left-[5px] w-2 h-2 rounded-full bg-neon-cyan shadow-[0_0_10px_rgba(0,224,255,1)]" />
                    <p className="text-sm font-bold text-white">Master of Computer Applications (MCA)</p>
                    <p className="text-xs text-slate-500">Kongu Engineering College | 2024</p>
                  </div>
                  <div className="pl-9 relative border-l border-white/10 ml-3">
                    <div className="absolute top-2 -left-[5px] w-2 h-2 rounded-full bg-neon-cyan/40" />
                    <p className="text-sm font-bold text-white">Bachelor of Computer Applications (BCA)</p>
                    <p className="text-xs text-slate-500">Sri Ramakrishna Mission Vidyalaya College of Arts & Science | 2021</p>
                  </div>
                  <div className="pl-9 relative border-l border-white/10 ml-3">
                    <div className="absolute top-2 -left-[5px] w-2 h-2 rounded-full bg-neon-cyan/20" />
                    <p className="text-sm font-bold text-white">Higher Secondary Education</p>
                    <p className="text-xs text-slate-500">GVC Higher Secondary School | 2018</p>
                  </div>
                </div>
              </div>

              <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                  <div className="flex items-center gap-3 text-neon-green mb-2">
                    <Shield className="w-5 h-5" />
                    <h4 className="font-bold font-orbitron text-xs uppercase">Interests</h4>
                  </div>
                  <ul className="text-xs text-slate-400 space-y-1">
                    <li>• DIY Electronic Projects</li>
                    <li>• Web Interfaces</li>
                    <li>• Edge AI & Smart Devices</li>
                  </ul>
                </div>
                <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                  <div className="flex items-center gap-3 text-neon-purple mb-2">
                    <Globe className="w-5 h-5" />
                    <h4 className="font-bold font-orbitron text-xs uppercase">Organizations</h4>
                  </div>
                  <ul className="text-xs text-slate-400 space-y-1">
                    <li>• Environmental & Energy Club</li>
                    <li>• Institution's Innovation Council</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default About;
