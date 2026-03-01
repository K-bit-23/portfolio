import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Layers, Monitor, Cpu, Navigation } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Autonomous UAV Navigation Hub',
      description: 'Custom autonomous flight control system with real-time obstacle avoidance and sensor fusion (Imu, Gps, Lidar).',
      tags: ['Drones', 'MAVLink', 'Python', 'Sensors'],
      image: 'https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&q=80&w=1000',
      links: { github: '#', demo: '#' },
      icon: <Navigation className="w-5 h-5 text-emerald-500" />
    },
    {
      title: 'Water Level Monitoring System',
      description: 'IoT-based real-time water level tracking system using ESP8266 and MQTT protocol with Flask dashboard.',
      tags: ['IoT', 'ESP8266', 'MQTT', 'Flask'],
      image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=1074',
      links: { github: '#', demo: '#' },
      icon: <Cpu className="w-5 h-5 text-emerald-500" />
    },
    {
      title: 'Smart Parking Assistance Hub',
      description: 'AI-powered parking system using Computer Vision for slot detection and occupancy tracking.',
      tags: ['AI', 'Computer Vision', 'Python', 'OpenCV'],
      image: 'https://images.unsplash.com/photo-1506521781263-d8422e82f27a?auto=format&fit=crop&q=80&w=1074',
      links: { github: '#', demo: '#' },
      icon: <Monitor className="w-5 h-5 text-emerald-500" />
    },
    {
      title: 'Skin Tone and Eye Health Analysis',
      description: 'Healthcare diagnostic tool using Machine Learning for preliminary facial dermatological analysis.',
      tags: ['ML', 'Healthcare', 'Python', 'AI'],
      image: 'https://images.unsplash.com/photo-1576091160550-217359f49f4c?auto=format&fit=crop&q=80&w=1074',
      links: { github: '#', demo: '#' },
      icon: <Layers className="w-5 h-5 text-emerald-500" />
    }
  ];

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">

        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-[10px] font-black tracking-[0.3em] uppercase mb-6"
          >
            Project Node
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold font-orbitron text-white"
          >
            Engineering <span className="text-gradient">Masterpieces</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="group premium-card overflow-hidden relative"
            >
              {/* Image Header */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 to-transparent" />

                {/* Floating Icon */}
                <div className="absolute top-6 right-6 p-3 bg-slate-900/80 backdrop-blur-xl rounded-2xl border border-white/10 group-hover:border-emerald-500/50 shadow-2xl transition-colors">
                  {project.icon}
                </div>
              </div>

              {/* Content */}
              <div className="p-8 space-y-6">
                <div className="flex gap-2 flex-wrap">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-black uppercase tracking-widest text-emerald-500 bg-emerald-500/5 px-2.5 py-1 rounded-lg border border-emerald-500/10">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-2xl font-black font-orbitron text-white group-hover:text-emerald-400 transition-colors uppercase tracking-tight leading-tight">
                  {project.title}
                </h3>

                <p className="text-sm text-slate-400 leading-relaxed line-clamp-3 font-light">
                  {project.description}
                </p>

                <div className="flex items-center gap-6 pt-6 mt-6 border-t border-white/5">
                  <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-slate-500 hover:text-white transition-colors">
                    <Github className="w-5 h-5 text-emerald-500/60 group-hover:text-emerald-500" />
                    Source
                  </a>
                  <a href={project.links.demo} className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-slate-500 hover:text-white transition-colors">
                    <ExternalLink className="w-5 h-5 text-emerald-500/60 group-hover:text-emerald-500" />
                    Preview
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
