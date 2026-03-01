import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Cpu, Activity, Layers, Download, Terminal, Zap, Globe } from 'lucide-react';

const Hero: React.FC = () => {
    const resumeLink = "https://drive.google.com/file/d/1e9-XOho70TdAUvm5NcCursTlkmhhv4Ui/view?usp=drive_link";

    const identities = [
        { icon: <Terminal className="w-5 h-5" />, label: 'Developer', color: 'from-emerald-500 to-teal-500' },
        { icon: <Zap className="w-5 h-5" />, label: 'Freelancer', color: 'from-emerald-400 to-emerald-600' },
        { icon: <Globe className="w-5 h-5" />, label: 'IoT Enthusiast', color: 'from-emerald-600 to-emerald-400' }
    ];

    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center pt-28 px-4 overflow-hidden text-white">
            <div className="container mx-auto grid lg:grid-cols-2 gap-16 items-center">

                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="z-10 text-center lg:text-left"
                >
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-black uppercase tracking-widest mb-10 shadow-[0_0_20px_rgba(16,185,129,0.1)]"
                    >
                        <Cpu className="w-4 h-4" />
                        <span>MCA Graduate | Pythonic Systems</span>
                    </motion.div>

                    <h1 className="text-6xl sm:text-7xl lg:text-9xl font-black font-orbitron leading-[0.9] mb-12 text-white tracking-tighter">
                        CORE <br />
                        <span className="text-emerald-500 text-glow-emerald">LOGIC.</span>
                    </h1>

                    {/* Big Interest Design */}
                    <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-12">
                        {identities.map((id, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.4 + idx * 0.1 }}
                                whileHover={{ y: -5, scale: 1.05 }}
                                className={`px-6 py-4 rounded-3xl bg-slate-900/40 backdrop-blur-xl border border-white/5 flex items-center gap-4 group cursor-default`}
                            >
                                <div className={`p-2 rounded-xl bg-gradient-to-br ${id.color} text-slate-950`}>
                                    {id.icon}
                                </div>
                                <span className="text-lg font-black font-orbitron uppercase tracking-tighter text-slate-200 group-hover:text-emerald-400 transition-colors">
                                    {id.label}
                                </span>
                            </motion.div>
                        ))}
                    </div>

                    <p className="text-xl text-slate-400 max-w-2xl mx-auto lg:mx-0 mb-12 leading-relaxed font-light">
                        Engineering scalable <span className="text-white font-medium">IoT ecosystems</span> and robust backends as a
                        full-stack hardware architect. Merging academic MCA rigor with freelance agility.
                    </p>

                    <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                        <motion.a
                            href="#projects"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="w-full sm:w-auto px-10 py-5 bg-emerald-500 text-slate-950 font-black rounded-2xl flex items-center justify-center gap-3 button-glow transition-all uppercase tracking-widest text-xs"
                        >
                            View Protocols
                            <ArrowRight className="w-5 h-5" />
                        </motion.a>

                        <motion.a
                            href={resumeLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="w-full sm:w-auto px-10 py-5 bg-white/5 border border-white/10 text-white font-bold rounded-2xl flex items-center justify-center gap-3 backdrop-blur-xl hover:bg-white/10 hover:border-emerald-500/30 transition-all font-orbitron text-xs uppercase tracking-widest"
                        >
                            Get Resume
                            <Download className="w-4 h-4 text-emerald-500" />
                        </motion.a>
                    </div>
                </motion.div>

                {/* Visual Element */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.4 }}
                    className="relative hidden lg:flex justify-center"
                >
                    <div className="relative w-[550px] h-[550px] flex items-center justify-center">
                        {/* Circular Background Effects */}
                        <div className="absolute inset-0 bg-emerald-500/5 rounded-full blur-[120px] animate-pulse-slow" />

                        {/* Rotating Rings */}
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                            className="absolute w-[500px] h-[500px] border border-emerald-500/10 rounded-full border-dashed"
                        />
                        <motion.div
                            animate={{ rotate: -360 }}
                            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                            className="absolute w-[400px] h-[400px] border border-white/5 rounded-full"
                        />

                        {/* System Status Block */}
                        <motion.div
                            animate={{ y: [0, -20, 0] }}
                            transition={{ duration: 5, repeat: Infinity }}
                            className="absolute top-10 right-0 p-6 premium-card border-emerald-500/20 z-20"
                        >
                            <div className="flex items-center gap-3 mb-3">
                                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                                <span className="text-[10px] font-mono text-emerald-500 font-bold uppercase">System Online</span>
                            </div>
                            <div className="text-[12px] font-mono text-slate-400 space-y-1">
                                <div className="flex justify-between gap-4"><span>UPTIME:</span> <span className="text-emerald-400">99.9%</span></div>
                                <div className="flex justify-between gap-4"><span>TASKS:</span> <span className="text-emerald-400">OPTIMIZED</span></div>
                            </div>
                        </motion.div>

                        {/* Sensor Activity Stream */}
                        <motion.div
                            animate={{ y: [0, 20, 0] }}
                            transition={{ duration: 6, repeat: Infinity, delay: 1 }}
                            className="absolute bottom-20 left-0 p-6 premium-card z-20"
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <Activity className="w-4 h-4 text-emerald-500" />
                                <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">Thought Stream</span>
                            </div>
                            <div className="w-32 h-1 bg-white/5 rounded-full overflow-hidden">
                                <motion.div
                                    animate={{ width: ["10%", "90%", "30%", "100%", "50%"] }}
                                    transition={{ duration: 3, repeat: Infinity }}
                                    className="h-full bg-emerald-500"
                                />
                            </div>
                        </motion.div>

                        {/* Central Hub */}
                        <div className="relative z-10 w-48 h-48 bg-slate-900 border border-white/10 rounded-[50px] flex items-center justify-center rotate-12 shadow-2xl transition-transform hover:rotate-0 duration-700">
                            <div className="w-32 h-32 bg-emerald-500/10 rounded-[32px] flex items-center justify-center border border-emerald-500/20 -rotate-12 animate-pulse">
                                <Layers className="w-16 h-16 text-emerald-400 shadow-[0_0_30px_rgba(16,185,129,0.3)]" />
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
