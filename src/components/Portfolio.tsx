import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Layers, Monitor, Cpu, Terminal } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'IoT Water Monitoring',
      id: 'IOT_WMS_01',
      description: 'Hyper-connected water tracking system using MQTT and ESP8266. Real-time telemetry via custom Flask dashboard.',
      tags: ['IoT', 'MQTT', 'Flask', 'Python'],
      image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=1074',
      links: { github: '#', demo: '#' },
      icon: <Cpu className="w-5 h-5" />
    },
    {
      title: 'Smart Parking Hub',
      id: 'AI_SPH_02',
      description: 'Computer Vision system specialized in slot occupancy detection. Utilizes OpenCV for real-time video stream analysis.',
      tags: ['Vision', 'AI', 'OpenCV', 'Python'],
      image: 'https://images.unsplash.com/photo-1506521781263-d8422e82f27a?auto=format&fit=crop&q=80&w=1074',
      links: { github: '#', demo: '#' },
      icon: <Monitor className="w-5 h-5" />
    },
    {
      title: 'Diagnostic ML Node',
      id: 'ML_HEALTH_03',
      description: 'Dermatological health assessment tool. Uses deep learning to analyze skin tone and eye health variations.',
      tags: ['ML', 'Health', 'Deep Learning'],
      image: 'https://images.unsplash.com/photo-1576091160550-217359f49f4c?auto=format&fit=crop&q=80&w=1074',
      links: { github: '#', demo: '#' },
      icon: <Layers className="w-5 h-5" />
    }
  ];

  return (
    <section id="projects" className="py-24 md:py-32 relative overflow-hidden bg-[#020408]">
      <div className="container mx-auto px-4 relative z-10">

        <div className="text-center mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-[10px] font-black tracking-[0.3em] uppercase mb-6"
          >
            Project Nodes
          </motion.div>
          <h2 className="text-5xl md:text-7xl font-black font-orbitron text-white">
            ACTIVE <span className="emerald-gradient-text">BUILD.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group premium-card !p-0 overflow-hidden relative border-white/5 hover:border-emerald-500/30 transition-all duration-700"
            >
              {/* Card Header Decal */}
              <div className="bg-white/5 border-b border-white/5 px-6 py-3 flex items-center justify-between">
                <span className="text-[9px] font-mono text-emerald-500 font-black uppercase tracking-widest">{project.id}</span>
                <div className="flex gap-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-800" />
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-700" />
                </div>
              </div>

              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 scale-105 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-6 left-6 p-4 bg-emerald-500 text-slate-950 rounded-xl shadow-2xl transition-transform group-hover:scale-110 duration-500 group-hover:rotate-[15deg]">
                  {project.icon}
                </div>
              </div>

              <div className="p-8 space-y-6">
                <div className="flex gap-2 flex-wrap">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 group-hover:text-emerald-400 transition-colors">
                      #{tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-2xl font-black font-orbitron text-white group-hover:emerald-gradient-text transition-all tracking-tight uppercase">
                  {project.title}
                </h3>

                <p className="text-sm text-slate-400 leading-relaxed font-bold uppercase tracking-tight opacity-70 group-hover:opacity-100 transition-opacity">
                  {project.description}
                </p>

                <div className="flex items-center gap-6 pt-6 border-t border-white/5">
                  <a href={project.links.github} className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-slate-500 hover:text-white transition-all">
                    <Github className="w-4 h-4" />
                    Repository
                  </a>
                  <a href={project.links.demo} className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-slate-500 hover:text-white transition-all">
                    <Terminal className="w-4 h-4" />
                    Execute
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <a href="https://github.com/K-bit-23" target="_blank" rel="noopener noreferrer" className="cyber-button inline-flex group mx-auto h-16 !px-12">
            View All Nodes
            <ExternalLink className="w-4 h-4 group-hover:rotate-45 transition-transform" />
          </a>
        </div>

      </div>
    </section>
  );
};

export default Projects;
