import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Terminal, Layers } from 'lucide-react';

const Skills: React.FC = () => {
    const skillCategories = [
        {
            title: 'IoT & Embedded',
            icon: <Cpu className="w-6 h-6 text-neon-cyan" />,
            skills: [
                { name: 'ESP8266 / NodeMCU', level: 95 },
                { name: 'Arduino & Sensors', level: 90 },
                { name: 'MQTT Protocol', level: 85 },
                { name: 'Embedded C', level: 80 },
            ]
        },
        {
            title: 'Programming',
            icon: <Terminal className="w-6 h-6 text-neon-green" />,
            skills: [
                { name: 'Python', level: 95 },
                { name: 'Flask / FastAPI', level: 85 },
                { name: 'SQL / Databases', level: 80 },
                { name: 'Automation Scripts', level: 90 },
            ]
        },
        {
            title: 'Web Technologies',
            icon: <Layers className="w-6 h-6 text-neon-purple" />,
            skills: [
                { name: 'HTML5 / CSS3', level: 90 },
                { name: 'JavaScript', level: 85 },
                { name: 'Tailwind CSS', level: 80 },
                { name: 'Responsive Design', level: 90 },
            ]
        }
    ];

    return (
        <section id="skills" className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">

                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block text-neon-cyan text-sm font-bold tracking-[0.2em] uppercase mb-4"
                    >
                        Capabilities
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-bold font-orbitron text-white"
                    >
                        Technical <span className="text-gradient">Arsenal</span>
                    </motion.h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skillCategories.map((category, idx) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="premium-card p-10 group"
                        >
                            <div className="flex items-center gap-5 mb-10">
                                <div className="p-4 bg-emerald-500/10 rounded-2xl border border-emerald-500/20 group-hover:bg-emerald-500/20 transition-all text-emerald-500 shadow-[0_0_20px_rgba(16,185,129,0.1)]">
                                    {category.icon}
                                </div>
                                <h3 className="text-xl font-black font-orbitron text-white tracking-tight">{category.title}</h3>
                            </div>

                            <div className="space-y-8">
                                {category.skills.map((skill, sIdx) => (
                                    <div key={skill.name} className="space-y-3">
                                        <div className="flex justify-between items-end">
                                            <span className="text-sm font-bold text-slate-400 group-hover:text-white transition-colors uppercase tracking-widest">{skill.name}</span>
                                            <span className="text-xs font-black font-mono text-emerald-500">{skill.level}%</span>
                                        </div>
                                        <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden p-[1px] border border-white/5">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${skill.level}%` }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 1.5, ease: [0.65, 0, 0.35, 1], delay: 0.2 + (sIdx * 0.1) }}
                                                className="h-full bg-gradient-to-r from-emerald-600 to-emerald-400 rounded-full relative"
                                            >
                                                <div className="absolute top-0 right-0 w-8 h-full bg-white/20 blur-sm" />
                                            </motion.div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Skills;
