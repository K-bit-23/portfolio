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
                            className="glass-card p-8 border border-white/5 hover:border-neon-cyan/20 transition-all duration-500 group"
                        >
                            <div className="flex items-center gap-4 mb-8">
                                <div className="p-3 bg-white/5 rounded-xl border border-white/10 group-hover:border-neon-cyan/30 transition-colors shadow-2xl">
                                    {category.icon}
                                </div>
                                <h3 className="text-xl font-bold font-orbitron text-white">{category.title}</h3>
                            </div>

                            <div className="space-y-6">
                                {category.skills.map((skill, sIdx) => (
                                    <div key={skill.name} className="space-y-2">
                                        <div className="flex justify-between text-sm font-medium">
                                            <span className="text-slate-300 group-hover:text-white transition-colors">{skill.name}</span>
                                            <span className="text-neon-cyan/60">{skill.level}%</span>
                                        </div>
                                        <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden border border-white/5">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${skill.level}%` }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 + (sIdx * 0.1) }}
                                                className="h-full bg-gradient-to-r from-neon-cyan/40 to-neon-cyan rounded-full relative"
                                            >
                                                <motion.div
                                                    animate={{ x: ["0%", "100%", "0%"] }}
                                                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                                                    className="absolute top-0 left-0 w-1/4 h-full bg-white/20 blur-sm"
                                                />
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
