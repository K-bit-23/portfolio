import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Terminal, Layout, Smartphone, ChevronRight } from 'lucide-react';

const Skills: React.FC = () => {
    const skillCategories = [
        {
            title: 'Intelligence & Logic',
            id: 'CORE_LOGIC_01',
            icon: <Terminal className="w-6 h-6 text-emerald-500" />,
            skills: [
                'Python (Expert)',
                'Flask / FastAPI',
                'Deep Learning',
                'OpenCV (Vision)',
                'SQL / NoSQL',
                'Automation'
            ]
        },
        {
            title: 'IoT & Hardware',
            id: 'HARDWARE_NODE_02',
            icon: <Cpu className="w-6 h-6 text-emerald-500" />,
            skills: [
                'ESP8266 / NodeMCU',
                'Arduino & Sensors',
                'MQTT / WebSockets',
                'Embedded C/C++',
                'Hardware Logic',
                'Circuitry'
            ]
        },
        {
            title: 'Web Architectures',
            id: 'CLIENT_SITE_03',
            icon: <Layout className="w-6 h-6 text-emerald-500" />,
            skills: [
                'React.js',
                'JavaScript (ES6+)',
                'Tailwind CSS',
                'Framer Motion',
                'GSAP Animation',
                'UI Implementation'
            ]
        },
        {
            title: 'Mobile Systems',
            id: 'MOBILE_APP_04',
            icon: <Smartphone className="w-6 h-6 text-emerald-500" />,
            skills: [
                'React Native',
                'Expo Go',
                'Mobile Core',
                'Native Modules',
                'API Uplinks',
                'App Logic'
            ]
        }
    ];

    return (
        <section id="skills" className="py-24 md:py-32 relative overflow-hidden bg-[#020408]">
            <div className="container mx-auto px-4 relative z-10">

                <div className="text-center mb-16 md:mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-[10px] font-black tracking-[0.3em] uppercase mb-6"
                    >
                        Mastery Protocol
                    </motion.div>
                    <h2 className="text-5xl md:text-7xl font-black font-orbitron text-white">
                        THE <span className="emerald-gradient-text">STACK.</span>
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
                    {skillCategories.map((category, idx) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="premium-card group relative !p-0 overflow-hidden border-white/5 hover:border-emerald-500/30 transition-all duration-700"
                        >
                            {/* Card Header Decal */}
                            <div className="bg-white/5 border-b border-white/5 px-6 py-3 flex items-center justify-between">
                                <span className="text-[9px] font-mono text-emerald-500 font-black uppercase tracking-widest">{category.id}</span>
                                <div className="flex gap-1.5">
                                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500/20" />
                                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500/40" />
                                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                                </div>
                            </div>

                            <div className="p-8 md:p-10">
                                <div className="flex items-center gap-6 mb-10">
                                    <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-500 group-hover:bg-emerald-500 group-hover:text-slate-950 transition-all duration-500 shadow-2xl shadow-emerald-500/5">
                                        {category.icon}
                                    </div>
                                    <h3 className="text-2xl font-black font-orbitron text-white tracking-tight uppercase leading-none group-hover:emerald-gradient-text transition-all">
                                        {category.title}
                                    </h3>
                                </div>

                                <div className="grid grid-cols-2 gap-y-4 gap-x-6">
                                    {category.skills.map((skill, sIdx) => (
                                        <div key={sIdx} className="flex items-center gap-3 group/item">
                                            <ChevronRight className="w-3 h-3 text-emerald-500/40 group-hover/item:text-emerald-500 transition-colors" />
                                            <span className="text-xs font-bold text-slate-400 group-hover/item:text-white transition-colors uppercase tracking-tight">
                                                {skill}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Corner Decal */}
                            <div className="absolute bottom-0 right-0 w-12 h-12 bg-emerald-500/5 rounded-tl-3xl border-t border-l border-white/5 group-hover:border-emerald-500/20 transition-all" />
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Skills;
