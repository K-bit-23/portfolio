import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Layers, Monitor, Cpu } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Real-time Water Monitoring System',
      description: 'A custom IoT solution using ESP8266 and ultrasonic sensors to monitor water levels in real-time. Integrated with a Flask web dashboard and MQTT for instant notifications.',
      image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=1074',
      tags: ['IoT', 'Python', 'ESP8266', 'MQTT'],
      links: {
        github: 'https://github.com/K-bit-23',
        demo: '#'
      },
      icon: <Cpu className="w-5 h-5 text-neon-cyan" />
    },
    {
      title: 'Smart Home Automation Controller',
      description: 'A centralized controller for various home appliances with a mobile-responsive web interface and voice-activated commands via custom hardware.',
      image: 'https://images.unsplash.com/photo-1558346489-19413928158b?auto=format&fit=crop&q=80&w=1074',
      tags: ['Python', 'NodeMCU', 'JavaScript'],
      links: {
        github: 'https://github.com/K-bit-23',
        demo: '#'
      },
      icon: <Monitor className="w-5 h-5 text-neon-green" />
    },
    {
      title: 'Asset Tracking & Fleet Management',
      description: 'An advanced tracking system using GPS modules and GSM technology to provide live location updates and geofencing capabilities for logistic fleets.',
      image: 'https://images.unsplash.com/photo-1512411413341-2a1d0f8549e3?auto=format&fit=crop&q=80&w=1074',
      tags: ['IoT', 'GPS', 'GSM', 'FastAPI'],
      links: {
        github: 'https://github.com/K-bit-23',
        demo: '#'
      },
      icon: <Layers className="w-5 h-5 text-neon-purple" />
    }
  ];

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">

        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block text-neon-purple text-sm font-bold tracking-[0.2em] uppercase mb-4"
          >
            Showcase
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="group glass-card overflow-hidden hover:border-neon-cyan/20 transition-all duration-500 relative shadow-2xl"
            >
              {/* Image Header */}
              <div className="relative h-64 overflow-hidden mask-fade">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/90 to-transparent opacity-60 transition-opacity group-hover:opacity-40" />

                {/* Floating Icon */}
                <div className="absolute top-4 right-4 p-3 bg-dark/80 backdrop-blur-md rounded-xl border border-white/10 group-hover:border-neon-cyan/30 shadow-2xl">
                  {project.icon}
                </div>
              </div>

              {/* Content */}
              <div className="p-8 space-y-4">
                <div className="flex gap-2 flex-wrap">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-bold uppercase tracking-widest text-neon-cyan/60 px-2 py-0.5 border border-neon-cyan/10 rounded-full bg-neon-cyan/5">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-2xl font-bold font-orbitron text-white group-hover:text-neon-cyan transition-colors line-clamp-2">
                  {project.title}
                </h3>

                <p className="text-slate-400 text-sm leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                <div className="flex items-center gap-6 pt-6 mt-6 border-t border-white/5">
                  <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-slate-300 hover:text-white transition-colors">
                    <Github className="w-5 h-5 text-neon-cyan" />
                    Source
                  </a>
                  <a href={project.links.demo} className="flex items-center gap-2 text-sm text-slate-300 hover:text-white transition-colors">
                    <ExternalLink className="w-5 h-5 text-neon-green" />
                    Preview
                  </a>
                </div>
              </div>

              {/* Hover Glow */}
              <div className="absolute inset-0 pointer-events-none border-2 border-transparent group-hover:border-neon-cyan/10 transition-colors z-20" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
