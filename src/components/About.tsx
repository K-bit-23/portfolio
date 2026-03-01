import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

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

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Visual Element */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="premium-card p-8 lg:p-12 relative overflow-hidden group">
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-emerald-500/5 rounded-full blur-[100px]" />

              <div className="space-y-6 relative z-10">
                <div className="font-mono text-sm space-y-4">
                  <div className="flex gap-4 p-4 bg-slate-950/50 border border-white/5 rounded-2xl">
                    <span className="text-emerald-500">01</span>
                    <span className="text-slate-400">class <span className="text-white">Innovator</span>:</span>
                  </div>
                  <div className="flex gap-4 p-4 bg-slate-950/50 border border-white/5 rounded-2xl ml-4">
                    <span className="text-emerald-500">02</span>
                    <span className="text-slate-400">focus = ["IoT", "Python", "AI"]</span>
                  </div>
                  <div className="flex gap-4 p-4 bg-slate-950/50 border border-white/5 rounded-2xl ml-4">
                    <span className="text-emerald-500">03</span>
                    <span className="text-slate-400">vision = "Automating the World"</span>
                  </div>
                </div>

                <div className="pt-6 border-t border-white/5 flex gap-8">
                  <div>
                    <div className="text-2xl font-black text-white">2026</div>
                    <div className="text-[10px] text-emerald-500 uppercase font-black tracking-widest">Graduating</div>
                  </div>
                  <div>
                    <div className="text-2xl font-black text-white">10+</div>
                    <div className="text-[10px] text-emerald-500 uppercase font-black tracking-widest">Projects</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <div>
              <h3 className="text-4xl font-black font-orbitron text-white mb-6">Karthikeyan P</h3>
              <p className="text-lg text-slate-400 leading-relaxed font-light">
                Aspiring tech enthusiast with a strong foundation in <span className="text-white font-medium">IoT and Python</span>,
                eager to apply my skills to real-world applications. I specialize in bridging the gap between
                physical sensors and digital intelligence.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-center gap-4 text-emerald-500">
                <GraduationCap className="w-6 h-6" />
                <h4 className="font-black font-orbitron text-sm uppercase tracking-[0.2em]">Academic Path</h4>
              </div>

              <div className="space-y-6">
                {[
                  { degree: 'Master of Computer Applications', school: 'Kongu Engineering College', year: '2024 - 2026' },
                  { degree: 'Bachelor of Computer Applications', school: 'SRMV College', year: '2018 - 2021' }
                ].map((edu, idx) => (
                  <div key={idx} className="relative pl-8 border-l border-white/10">
                    <div className="absolute left-[-5px] top-1.5 w-2 h-2 rounded-full bg-emerald-500" />
                    <h5 className="text-white font-bold text-sm tracking-tight">{edu.degree}</h5>
                    <p className="text-xs text-slate-500 uppercase font-medium mt-1">{edu.school} | {edu.year}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              {['DIY Electronics', 'Smart Devices', 'Edge AI', 'Web Interfaces'].map(interest => (
                <span key={interest} className="px-4 py-2 bg-emerald-500/5 border border-emerald-500/20 rounded-xl text-xs text-emerald-400 font-bold uppercase tracking-wider">
                  {interest}
                </span>
              ))}
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default About;
