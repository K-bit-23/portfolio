import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Terminal, Zap, Globe, MousePointer2 } from 'lucide-react';

const Hero: React.FC = () => {
    const resumeLink = "https://drive.google.com/file/d/1e9-XOho70TdAUvm5NcCursTlkmhhv4Ui/view?usp=drive_link";

    const identities = [
        { icon: <Terminal className="w-5 h-5" />, label: 'Developer', color: 'from-emerald-500 to-teal-500' },
        { icon: <Zap className="w-5 h-5" />, label: 'Freelancer', color: 'from-emerald-400 to-emerald-600' },
        { icon: <Globe className="w-5 h-5" />, label: 'IoT Enthusiast', color: 'from-emerald-600 to-emerald-400' }
    ];

    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center pt-32 pb-20 px-4 overflow-hidden bg-[#020408]">
            {/* Background Grid System */}
            <div className="absolute inset-0 z-0 opacity-20"
                style={{ backgroundImage: 'radial-gradient(#10b981 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#020408] to-[#020408] z-0" />

            {/* Dynamic Light Orbs */}
            <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px] animate-pulse-slow" />
            <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-teal-500/5 rounded-full blur-[100px] animate-pulse-slow delay-1000" />

            <div className="container mx-auto relative z-10 flex flex-col items-center">

                {/* Floating Meta Info */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-6 mb-16 px-6 py-2 rounded-full border border-white/5 bg-white/5 backdrop-blur-xl"
                >
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-emerald-500">System Live</span>
                    </div>
                    <div className="w-[1px] h-4 bg-white/10" />
                    <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">MCA_NODE_01</span>
                </motion.div>

                {/* Main Content Redesign - Symmetrical & Bold */}
                <div className="text-center max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="mb-6 flex justify-center gap-8"
                    >
                        <span className="text-[10px] font-black text-slate-600 uppercase tracking-[0.5em]">— 01001011 01010000 —</span>
                    </motion.div>

                    <h1 className="text-7xl md:text-[8rem] lg:text-[11rem] font-black font-orbitron leading-none tracking-tighter mb-12">
                        <motion.span
                            initial={{ x: -100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1 }}
                            className="block text-white"
                        >
                            CYBER
                        </motion.span>
                        <motion.span
                            initial={{ x: 100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className="block emerald-gradient-text text-glow-emerald"
                        >
                            LOGIC.
                        </motion.span>
                    </h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="text-lg md:text-2xl text-slate-400 font-light max-w-3xl mx-auto mb-16 leading-relaxed"
                    >
                        Architecting intelligent hardware ecosystems with <span className="text-white font-bold">Python</span>.
                        Turning raw sensor data into actionable digital intelligence.
                    </motion.p>
                </div>

                {/* Identity Cards - Interactive Matrix */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl mb-20 px-4">
                    {identities.map((id, idx) => (
                        <motion.div
                            key={id.label}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7 + idx * 0.1 }}
                            whileHover={{ y: -10, scale: 1.02 }}
                            className="premium-card group relative p-8 flex flex-col items-center text-center overflow-hidden h-48 justify-center"
                        >
                            <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${id.color} scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
                            <div className={`p-4 rounded-2xl bg-gradient-to-br ${id.color} text-slate-950 mb-4 transition-transform group-hover:rotate-[360deg] duration-700`}>
                                {id.icon}
                            </div>
                            <span className="text-sm font-black font-orbitron uppercase tracking-[0.2em] text-white">
                                {id.label}
                            </span>
                        </motion.div>
                    ))}
                </div>

                {/* Unified Action Bar */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 }}
                    className="flex flex-col md:flex-row items-center gap-8 w-full max-w-4xl justify-center"
                >
                    <a href="#projects" className="cyber-button group w-full md:w-auto min-w-[240px] justify-between h-16">
                        System Overview
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                    </a>

                    <a href={resumeLink} target="_blank" rel="noopener noreferrer" className="w-full md:w-auto px-10 py-5 bg-white/5 border border-white/10 rounded-xl font-black uppercase text-[10px] tracking-[0.3em] text-slate-400 hover:text-white hover:border-emerald-500/30 transition-all text-center flex items-center justify-center gap-3">
                        Retrieve CV
                        <Download className="w-4 h-4" />
                    </a>
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="mt-24 text-slate-700 flex flex-col items-center gap-4"
                >
                    <MousePointer2 className="w-5 h-5 text-emerald-500/40" />
                    <span className="text-[9px] font-black uppercase tracking-[0.5em]">Scroll to Decode</span>
                </motion.div>

            </div>

            {/* Side Decals */}
            <div className="hidden lg:block absolute left-10 top-1/2 -translate-y-1/2 vertical-text">
                <span className="text-[10px] font-mono text-slate-800 uppercase tracking-[1em] rotate-180">HARDWARE_ARCHITECT_SYSTEM_V2.0</span>
            </div>
            <div className="hidden lg:block absolute right-10 top-1/2 -translate-y-1/2 vertical-text">
                <span className="text-[10px] font-mono text-slate-800 uppercase tracking-[1em]">LOGIC_PROTOCOL_STABLE_CONNECTED</span>
            </div>

        </section>
    );
};

export default Hero;
