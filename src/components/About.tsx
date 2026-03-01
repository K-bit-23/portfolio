import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Terminal, User, Target, MapPin, Activity } from 'lucide-react';

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

  const profileStats = [
    { label: 'Role', value: 'MCA Student', icon: <User className="w-4 h-4" /> },
    { label: 'Focus', value: 'IoT & Python', icon: <Target className="w-4 h-4" /> },
    { label: 'Status', value: 'Seeking Challenges', icon: <Activity className="w-4 h-4" /> },
    { label: 'Location', value: 'Erode, Tamil Nadu', icon: <MapPin className="w-4 h-4" /> },
  ];

  return (
    <section id="about" className="py-24 md:py-32 relative overflow-hidden bg-[#020408]">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2" />

      <div className="container mx-auto px-4 relative z-10">

        <div className="text-center mb-20 md:mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-[10px] font-black tracking-[0.3em] uppercase mb-6"
          >
            Foundation Protocol
          </motion.div>
          <h2 className="text-5xl md:text-7xl font-black font-orbitron text-white">
            THE <span className="emerald-gradient-text">BACKBONE.</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* Character Sheet Design */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="premium-card !p-0 overflow-hidden"
          >
            <div className="bg-white/5 border-b border-white/5 px-8 py-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Terminal className="w-4 h-4 text-emerald-500" />
                <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">profile_v2.1_stable</span>
              </div>
              <div className="flex gap-1.5">
                <div className="w-2 h-2 rounded-full bg-slate-800" />
                <div className="w-2 h-2 rounded-full bg-slate-800" />
                <div className="w-2 h-2 rounded-full bg-slate-700" />
              </div>
            </div>

            <div className="p-8 md:p-12 space-y-10">
              <p className="text-xl md:text-2xl text-slate-300 leading-relaxed font-light">
                I am an <span className="text-white font-bold">Aspiring tech enthusiast</span> with a strong foundation in <span className="text-emerald-500 font-bold">IoT and Python</span>, eager to apply my skills to real-world applications.
              </p>

              <div className="grid sm:grid-cols-2 gap-6 pt-4">
                {profileStats.map((stat, idx) => (
                  <div key={idx} className="p-5 rounded-2xl bg-white/5 border border-white/5 group hover:border-emerald-500/30 transition-all">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="text-emerald-500/50 group-hover:text-emerald-500 transition-colors">
                        {stat.icon}
                      </div>
                      <span className="text-[9px] font-black text-slate-600 uppercase tracking-widest">{stat.label}</span>
                    </div>
                    <p className="text-white font-black font-orbitron text-sm uppercase tracking-tight">{stat.value}</p>
                  </div>
                ))}
              </div>

              <div className="pt-10 border-t border-white/5 grid md:grid-cols-2 gap-10">
                <div>
                  <h4 className="text-[10px] font-black text-emerald-500 uppercase tracking-[0.3em] mb-6 flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                    Current Protocol
                  </h4>
                  <ul className="space-y-4">
                    {['Smart Parking Hubs', 'MQTT Data Streams', 'AI CV Models'].map((item, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-xs text-slate-400 font-bold uppercase tracking-tight">
                        <ChevronRight className="w-3 h-3 text-emerald-500/40" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-[10px] font-black text-emerald-500 uppercase tracking-[0.3em] mb-6 flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                    Active Nodes
                  </h4>
                  <ul className="space-y-4">
                    {[<span className="text-emerald-400">Joint Sec - Cyber Club</span>, 'IIC Member', 'Technical Coord'].map((item, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-xs text-slate-400 font-bold uppercase tracking-tight">
                        <ChevronRight className="w-3 h-3 text-emerald-500/40" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Timeline Redesign */}
          <div className="space-y-8">
            {education.map((edu, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="premium-card group relative hover:translate-x-4"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div className="flex items-center gap-6">
                    <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center group-hover:bg-emerald-500 transition-all duration-500">
                      <GraduationCap className="w-7 h-7 text-emerald-500 group-hover:text-slate-950 transition-colors" />
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <span className="text-[9px] font-black text-emerald-500 uppercase tracking-widest">{edu.level}</span>
                        <div className="w-1 h-1 bg-white/10 rounded-full" />
                        <span className="text-[9px] font-black text-slate-600 uppercase tracking-widest">{edu.years}</span>
                      </div>
                      <h4 className="text-lg font-black text-white uppercase tracking-tight group-hover:emerald-gradient-text transition-all">
                        {edu.degree}
                      </h4>
                      <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-1">
                        {edu.institute}
                      </p>
                    </div>
                  </div>
                  <div className="md:text-right">
                    <span className="px-3 py-1 rounded-md bg-emerald-500/5 border border-emerald-500/10 text-[9px] font-black text-emerald-400 uppercase tracking-widest">
                      {edu.status}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

const ChevronRight = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
  </svg>
);

export default About;
