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

                <div className="text-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-[10px] font-black tracking-[0.3em] uppercase mb-6"
                    >
                        Success Nodes
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
                        className="space-y-10"
                    >
                        <div className="flex items-center gap-4 mb-8">
                            <div className="p-3 bg-emerald-500/10 rounded-2xl border border-emerald-500/20">
                                <Trophy className="text-emerald-500 w-6 h-6" />
                            </div>
                            <h3 className="text-2xl font-black font-orbitron text-white uppercase tracking-tight">Top Awards</h3>
                        </div>

                        <div className="space-y-6">
                            {awards.map((award, idx) => (
                                <div key={idx} className="premium-card p-8 group relative overflow-hidden">
                                    <div className="absolute top-0 left-0 w-1 h-full bg-emerald-500 opacity-60 group-hover:w-2 transition-all" />
                                    <div className="flex justify-between items-start gap-4">
                                        <div>
                                            <h4 className="text-lg font-black text-white group-hover:text-emerald-400 transition-colors uppercase tracking-tight leading-tight">{award.title}</h4>
                                            <p className="text-sm text-slate-500 font-bold uppercase mt-2 tracking-widest">{award.organization}</p>
                                        </div>
                                        <span className="text-[10px] font-black font-mono text-emerald-500 bg-emerald-500/5 px-2 py-1 rounded-md border border-emerald-500/20">{award.year}</span>
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
                        className="space-y-10"
                    >
                        <div className="flex items-center gap-4 mb-8">
                            <div className="p-3 bg-emerald-500/10 rounded-2xl border border-emerald-500/20">
                                <BookOpen className="text-emerald-500 w-6 h-6" />
                            </div>
                            <h3 className="text-2xl font-black font-orbitron text-white uppercase tracking-tight">Certifications</h3>
                        </div>

                        <div className="space-y-6">
                            {courses.map((course, idx) => (
                                <div key={idx} className="premium-card p-8 group flex items-center gap-8">
                                    <div className="w-14 h-14 bg-emerald-500/5 rounded-2xl border border-emerald-500/10 group-hover:bg-emerald-500/10 group-hover:border-emerald-500/30 transition-all flex items-center justify-center">
                                        <Award className="text-emerald-500/60 group-hover:text-emerald-500 w-8 h-8 transition-colors" />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-black text-white group-hover:text-emerald-400 transition-colors uppercase tracking-tight leading-tight">{course.title}</h4>
                                        <p className="text-sm text-slate-500 font-bold uppercase mt-1 tracking-widest">{course.provider}</p>
                                    </div>
                                    <CheckCircle2 className="ml-auto text-emerald-500/20 group-hover:text-emerald-500 w-6 h-6 transition-all" />
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
