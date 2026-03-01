import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, BookOpen, Award, CheckCircle2 } from 'lucide-react';

const Achievements: React.FC = () => {
    const awards = [
        {
            title: '1st Place - DevForge 24-Hour Hackathon',
            organization: 'KEC IT Department',
            year: '2024'
        },
        {
            title: '1st Place - Technical Quiz Competition',
            organization: 'PSG College',
            year: '2023'
        },
        {
            title: '2nd Place - Marketing Event',
            organization: 'Hindustan College',
            year: '2022'
        },
        {
            title: '2nd Place - AI Event',
            organization: 'KEC',
            year: '2023'
        }
    ];

    const courses = [
        {
            title: 'Google Cloud Computing',
            provider: 'SWAYAM - NPTEL'
        },
        {
            title: 'IoT and Cloud/Edge Machine Learning',
            provider: 'NPTEL'
        },
        {
            title: 'Introduction to Cybersecurity',
            provider: 'Cisco Networking Academy'
        }
    ];

    return (
        <section id="achievements" className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">

                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-block text-neon-cyan text-sm font-bold tracking-[0.2em] uppercase mb-4"
                    >
                        Milestones
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-bold font-orbitron text-white"
                    >
                        Awards & <span className="text-gradient">Certifications</span>
                    </motion.h2>
                </div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Awards Section */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <Trophy className="text-neon-cyan w-8 h-8" />
                            <h3 className="text-2xl font-bold font-orbitron text-white">Awards</h3>
                        </div>

                        <div className="space-y-4">
                            {awards.map((award, idx) => (
                                <div key={idx} className="glass-card p-6 border border-white/5 hover:border-neon-cyan/20 transition-all group relative overflow-hidden">
                                    <div className="absolute top-0 left-0 w-1 h-full bg-neon-cyan opacity-40" />
                                    <div className="flex justify-between items-start gap-4">
                                        <div>
                                            <h4 className="text-lg font-bold text-white group-hover:text-neon-cyan transition-colors">{award.title}</h4>
                                            <p className="text-sm text-slate-500">{award.organization}</p>
                                        </div>
                                        <span className="text-xs font-mono text-neon-cyan/60">{award.year}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Courses Section */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <BookOpen className="text-neon-purple w-8 h-8" />
                            <h3 className="text-2xl font-bold font-orbitron text-white">Certifications</h3>
                        </div>

                        <div className="space-y-4">
                            {courses.map((course, idx) => (
                                <div key={idx} className="glass-card p-6 border border-white/5 hover:border-neon-purple/20 transition-all group flex items-center gap-6">
                                    <div className="p-3 bg-neon-purple/10 rounded-xl border border-neon-purple/20 group-hover:border-neon-purple/40 transition-colors">
                                        <Award className="text-neon-purple w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-white group-hover:text-neon-purple transition-colors">{course.title}</h4>
                                        <p className="text-sm text-slate-500">{course.provider}</p>
                                    </div>
                                    <CheckCircle2 className="ml-auto text-neon-green/40 w-5 h-5" />
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>

            </div>
        </section>
    );
};

export default Achievements;
