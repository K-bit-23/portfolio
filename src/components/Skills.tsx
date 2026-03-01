import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Terminal, Layout } from 'lucide-react';

const Skills: React.FC = () => {
    const skillCategories = [
        {
            title: 'Programming & AI',
            icon: <Terminal className="w-6 h-6 text-emerald-500" />,
            skills: [
                'Python (Expert)',
                'Flask / FastAPI',
                'Deep Learning',
                'OpenCV (Vision)',
                'SQL / NoSQL',
                'Automation Scripts'
            ]
        },
        {
            title: 'IoT & Embedded',
            icon: <Cpu className="w-6 h-6 text-emerald-500" />,
            skills: [
                'ESP8266 / NodeMCU',
                'Arduino & Sensors',
                'MQTT / WebSockets',
                'Embedded C/C++',
                'PCB Design',
                'Circuit Logic'
            ]
        },
        {
            title: 'Web & Frameworks',
            icon: <Layout className="w-6 h-6 text-emerald-500" />,
            skills: [
                'React.js',
                'JavaScript (ES6)',
                'Tailwind CSS',
                'Framer Motion',
                'Responsive Design',
                'UI/UX Implementation'
            ]
        }
    ];

    return (
        <section id="skills" className="py-32 relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">

                <div className="text-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-[10px] font-black tracking-[0.3em] uppercase mb-6 shadow-[0_0_20px_rgba(16,185,129,0.1)]"
                    >
                        Mastery Grid
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-6xl font-black font-orbitron text-white leading-tight"
                    >
                        Technical <span className="text-emerald-500 text-glow-emerald">Arsenal</span>
                    </motion.h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {skillCategories.map((category, idx) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="premium-card group relative"
                        >
                            {/* Decorative Background Icon */}
                            <div className="absolute top-10 right-10 text-emerald-500/5 group-hover:text-emerald-500/10 transition-colors pointer-events-none scale-[2.5] flex opacity-20">
                                {category.icon}
                            </div>

                            <div className="flex items-center gap-5 mb-12">
                                <div className="p-4 bg-emerald-500/10 rounded-2xl border border-emerald-500/20 group-hover:bg-emerald-500/20 transition-all text-emerald-500 shadow-xl">
                                    {category.icon}
                                </div>
                                <h3 className="text-xl font-black font-orbitron text-white tracking-tight uppercase leading-none">{category.title}</h3>
                            </div>

                            <div className="flex flex-wrap gap-3">
                                {category.skills.map((skill, sIdx) => (
                                    <motion.span
                                        key={skill}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.2 + (sIdx * 0.05) }}
                                        whileHover={{ scale: 1.05, backgroundColor: 'rgba(16, 185, 129, 0.15)', borderColor: 'rgba(16, 185, 129, 0.4)' }}
                                        className="px-5 py-2.5 bg-slate-950/40 border border-white/5 text-slate-400 font-bold text-xs uppercase tracking-widest rounded-2xl transition-all cursor-default hover:text-white"
                                    >
                                        {skill}
                                    </motion.span>
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
