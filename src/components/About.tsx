import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Milestone, Circle } from 'lucide-react';

const About: React.FC = () => {
  const education = [
    {
      level: 'Postgraduate',
      degree: 'Master of Computer Applications',
      institute: 'Kongu Engineering College',
      years: '2026',
      status: 'Current Node',
      details: 'Specializing in Advanced AI and IoT System Architectures.'
    },
    {
      level: 'Undergraduate',
      degree: 'Bachelor of Computer Applications',
      institute: 'Sri Ramakrishna Mission Vidyalaya College of Arts & Science',
      years: '2024',
      status: 'Completed',
      details: 'Foundation in Computer Applications, Database Management, and IoT basics.'
    },
    {
      level: 'Higher Secondary',
      degree: 'Computer Application Stream',
      institute: 'URC Palaniammal Matric Hr. Sec. School',
      years: '2021',
      status: 'Completed',
      details: 'Focused on Computer Applications and Foundation Logic.'
    }
  ];

  return (
    <section id="about" className="py-12 md:py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">

        <div className="text-center mb-12 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-[10px] font-black tracking-[0.3em] uppercase mb-6"
          >
            Origin Story
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold font-orbitron text-white"
          >
            The Human <span className="text-emerald-500">Backbone</span>
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">

          {/* Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="premium-card relative overflow-hidden group h-full"
          >
            <div className="flex items-center gap-2 px-6 py-4 border-b border-white/5 bg-white/5">
              <div className="w-2.5 h-2.5 rounded-full bg-slate-700" />
              <div className="w-2.5 h-2.5 rounded-full bg-slate-700" />
              <div className="w-2.5 h-2.5 rounded-full bg-slate-700" />
              <span className="ml-4 text-[10px] font-mono text-slate-500 uppercase tracking-widest">profile_v2.exe</span>
            </div>

            <div className="p-8 md:p-12 space-y-8">
              <p className="text-xl text-slate-300 leading-relaxed font-light">
                I am an <span className="text-white font-bold">Aspiring tech enthusiast</span> with a strong foundation in <span className="text-emerald-500">IoT and Python</span>, eager to apply my skills to real-world applications. I seek challenging roles where I can contribute to <span className="text-emerald-500">innovative solutions</span> while continuously growing in dynamic environments.
              </p>

              <div className="grid sm:grid-cols-2 gap-8 pt-8 border-t border-white/5">
                {[
                  { label: 'Role', value: 'MCA Student' },
                  { label: 'Focus', value: 'IoT & Python' },
                  { label: 'Status', value: 'Seeking Challenges' },
                  { label: 'Location', value: 'Erode, Tamil Nadu' },
                ].map((stat, idx) => (
                  <div key={idx} className="space-y-1">
                    <span className="text-[10px] font-black text-slate-600 uppercase tracking-widest">{stat.label}</span>
                    <p className="text-white font-bold font-orbitron text-sm">{stat.value}</p>
                  </div>
                ))}
              </div>

              <div className="grid md:grid-cols-2 gap-8 pt-8 border-t border-white/5">
                <div>
                  <h4 className="text-xs font-black text-white uppercase tracking-[0.3em] mb-4">Current Protocol</h4>
                  <ul className="space-y-3">
                    {['Smart Parking Hubs', 'MQTT Data Streams', 'AI CV Models'].map((item, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-[11px] text-slate-400 font-medium">
                        <Circle className="w-1 h-1 text-emerald-500 fill-emerald-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-xs font-black text-white uppercase tracking-[0.3em] mb-4">Active Nodes</h4>
                  <ul className="space-y-3">
                    {[<span className="text-emerald-400">Joint Secretary - Cyber Club</span>, 'IIC Member', 'Technical Coordinator'].map((item, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-[11px] text-slate-400 font-medium">
                        <Circle className="w-1 h-1 text-emerald-500 fill-emerald-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Education Timeline - NEW DESIGN */}
          <div className="space-y-6 h-full">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="premium-card p-4 md:p-6 bg-emerald-500/5 border-emerald-500/20"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20">
                  <Milestone className="w-5 h-5 text-emerald-500" />
                </div>
                <div>
                  <h3 className="text-sm font-black text-white uppercase tracking-widest font-orbitron">Academic Trajectory</h3>
                  <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Chronological Knowledge Nodes</p>
                </div>
              </div>
            </motion.div>

            <div className="relative pl-8 md:pl-12 space-y-8 before:absolute before:left-[19px] md:left-[27px] before:top-4 before:bottom-4 before:w-[2px] before:bg-gradient-to-b before:from-emerald-500/40 before:via-white/5 before:to-transparent">
              {education.map((edu, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="relative group"
                >
                  {/* Timeline Node */}
                  <div className="absolute -left-[27px] md:-left-[35px] top-1 w-4 h-4 md:w-5 md:h-5 rounded-full bg-slate-900 border-2 border-emerald-500 z-10 group-hover:scale-125 transition-transform">
                    <div className="absolute inset-1 rounded-full bg-emerald-500 group-hover:bg-white animate-pulse" />
                  </div>

                  <div className="premium-card p-6 md:p-8 hover:border-emerald-500/30 transition-all">
                    <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
                      <div>
                        <span className="text-[9px] font-black text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded-md border border-emerald-500/20 uppercase tracking-widest mb-2 inline-block">
                          {edu.level}
                        </span>
                        <h4 className="text-lg font-black text-white uppercase tracking-tight group-hover:text-emerald-400 transition-colors">
                          {edu.degree}
                        </h4>
                      </div>
                      <div className="text-right">
                        <p className="text-[11px] font-black font-orbitron text-white">{edu.years}</p>
                        <p className="text-[9px] font-bold text-slate-500 uppercase tracking-widest mt-1">{edu.status}</p>
                      </div>
                    </div>

                    <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-3 leading-relaxed">
                      {edu.institute}
                    </p>

                    <p className="text-xs text-slate-500 font-light leading-relaxed border-t border-white/5 pt-4">
                      {edu.details}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default About;
