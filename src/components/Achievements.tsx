import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, BookOpen, Award, CheckCircle2, Milestone, Medal } from 'lucide-react';

const Achievements: React.FC = () => {
    const awards = [
        {
            title: '1st Place - DevForge Hackathon',
            organization: 'KEC IT Department',
            year: '2024',
            category: 'HACKATHON_WIN'
        },
        {
            title: '1st Place - Tech Quiz',
            organization: 'PPG College',
            year: '2023',
            category: 'ACADEMIC_EXCELLENCE'
        },
        {
            title: '2nd Place - Marketing Event',
            organization: 'Hindustan College',
            year: '2022',
            category: 'STRATEGY'
        },
        {
            title: '2nd Place - AI Event',
            organization: 'NEC',
            year: '2023',
            category: 'AI_SYSTEMS'
        }
    ];

    const courses = [
        {
            title: 'Google Cloud Computing',
            provider: 'SWAYAM - NPTEL',
            status: 'VERIFIED'
        },
        {
            title: 'IoT & Edge Machine Learning',
            provider: 'NPTEL',
            status: 'VERIFIED'
        },
        {
            title: 'Introduction to Cybersecurity',
            provider: 'Cisco Networking Academy',
            status: 'STABLE'
        }
    ];

    return (
        <section id="achievements" className="py-24 md:py-32 relative overflow-hidden bg-[#020408]">
            <div className="container mx-auto px-4 relative z-10">

                <div className="text-center mb-16 md:mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-[10px] font-black tracking-[0.3em] uppercase mb-6"
                    >
                        Success Nodes
                    </motion.div>
                    <h2 className="text-5xl md:text-7xl font-black font-orbitron text-white">
                        THE <span className="emerald-gradient-text">LEGACY.</span>
                    </h2>
                </div>

                <div className="grid lg:grid-cols-2 gap-16 md:gap-24 items-start">

                    {/* Awards Section */}
                    <div className="space-y-12">
                        <div className="flex items-center gap-6 mb-4">
                            <div className="w-14 h-14 bg-emerald-500/10 rounded-2xl border border-emerald-500/20 flex items-center justify-center">
                                <Trophy className="text-emerald-500 w-7 h-7" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-black font-orbitron text-white uppercase tracking-tight">Mainframes</h3>
                                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Global Competition Nodes</p>
                            </div>
                        </div>

                        <div className="space-y-6">
                            {awards.map((award, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="premium-card group relative overflow-hidden !p-8"
                                >
                                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                                        <div className="min-w-0">
                                            <div className="flex items-center gap-3 mb-2">
                                                <span className="text-[9px] font-black text-emerald-500 uppercase tracking-widest bg-emerald-500/10 px-2 py-0.5 rounded-sm">
                                                    {award.category}
                                                </span>
                                                <span className="text-[9px] font-black text-slate-600 uppercase tracking-widest">{award.year}</span>
                                            </div>
                                            <h4 className="text-xl font-black text-white group-hover:emerald-gradient-text transition-all uppercase tracking-tight">
                                                {award.title}
                                            </h4>
                                            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] mt-2 flex items-center gap-2">
                                                <Milestone className="w-3 h-3 text-emerald-500/40" />
                                                {award.organization}
                                            </p>
                                        </div>
                                        <div className="hidden md:block">
                                            <Medal className="w-10 h-10 text-emerald-500/10 group-hover:text-emerald-500/30 transition-all group-hover:scale-110" />
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Courses Section */}
                    <div className="space-y-12">
                        <div className="flex items-center gap-6 mb-4">
                            <div className="w-14 h-14 bg-emerald-500/10 rounded-2xl border border-emerald-500/20 flex items-center justify-center">
                                <BookOpen className="text-emerald-500 w-7 h-7" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-black font-orbitron text-white uppercase tracking-tight">Verification</h3>
                                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Verified Logic Branches</p>
                            </div>
                        </div>

                        <div className="space-y-6">
                            {courses.map((course, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: 30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="premium-card group !p-8 hover:translate-x-4 transition-all duration-500"
                                >
                                    <div className="flex items-center gap-8">
                                        <div className="relative">
                                            <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center group-hover:bg-emerald-500 transition-all duration-700">
                                                <Award className="w-8 h-8 text-emerald-500 group-hover:text-slate-950 transition-colors" />
                                            </div>
                                            <CheckCircle2 className="absolute -bottom-1 -right-1 w-6 h-6 text-emerald-500 bg-slate-950 rounded-full p-1" />
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex items-center justify-between mb-1">
                                                <span className="text-[9px] font-black text-slate-600 uppercase tracking-widest">{course.provider}</span>
                                                <span className="text-[9px] font-black text-emerald-500 uppercase tracking-widest">{course.status}</span>
                                            </div>
                                            <h4 className="text-xl font-black text-white group-hover:emerald-gradient-text transition-all uppercase tracking-tight">
                                                {course.title}
                                            </h4>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Achievements;
