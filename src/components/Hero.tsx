import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Cpu, Activity, Code2, Layers, Download } from 'lucide-react';

const Hero: React.FC = () => {
    const resumeLink = "https://drive.google.com/file/d/1e9-XOho70TdAUvm5NcCursTlkmhhv4Ui/view?usp=drive_link";

    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 px-4 overflow-hidden text-white">
            <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">

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
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-widest mb-8 shadow-[0_0_20px_rgba(16,185,129,0.1)]"
                    >
                        <Cpu className="w-4 h-4" />
                        <span>IoT & Python Systems Specialist</span>
                    </motion.div>

                    <h1 className="text-4xl sm:text-6xl lg:text-8xl font-black font-orbitron leading-[1.1] mb-8 text-white tracking-tighter">
                        Digital. <br />
                        <span className="text-emerald-500 text-glow-emerald">Connected.</span> Logic.
                    </h1>

                    <p className="text-xl text-slate-400 max-w-2xl mx-auto lg:mx-0 mb-12 leading-relaxed font-light">
                        Architecting intelligent hardware ecosystems with <span className="text-white font-medium">Python</span>.
                        Turning raw sensor data into actionable digital intelligence through modern IoT architectures.
                    </p>

                    <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                        <motion.a
                            href="#projects"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="w-full sm:w-auto px-8 py-5 bg-emerald-500 text-slate-950 font-black rounded-2xl flex items-center justify-center gap-3 button-glow transition-all"
                        >
                            View Projects
                            <ArrowRight className="w-5 h-5" />
                        </motion.a>

                        <motion.a
                            href={resumeLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="w-full sm:w-auto px-8 py-5 bg-white/5 border border-white/10 text-white font-bold rounded-2xl flex items-center justify-center gap-3 backdrop-blur-xl hover:bg-white/10 hover:border-emerald-500/30 transition-all font-orbitron text-xs uppercase tracking-widest"
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
                    <div className="relative w-[500px] h-[500px] flex items-center justify-center">
                        {/* Circular Background Effects */}
                        <div className="absolute inset-0 bg-emerald-500/5 rounded-full blur-[100px] animate-pulse-slow" />

                        {/* Rotating Rings */}
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                            className="absolute w-[450px] h-[450px] border border-emerald-500/10 rounded-full border-dashed"
                        />
                        <motion.div
                            animate={{ rotate: -360 }}
                            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                            className="absolute w-[350px] h-[350px] border border-white/5 rounded-full"
                        />

                        {/* System Status Block */}
                        <motion.div
                            animate={{ y: [0, -20, 0] }}
                            transition={{ duration: 5, repeat: Infinity }}
                            className="absolute top-0 right-0 p-6 premium-card border-emerald-500/20 z-20"
                        >
                            <div className="flex items-center gap-3 mb-3">
                                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                                <span className="text-[10px] font-mono text-emerald-500 font-bold uppercase">Node Active</span>
                            </div>
                            <div className="text-[12px] font-mono text-slate-400 space-y-1">
                                <div className="flex justify-between gap-4"><span>CPU:</span> <span className="text-emerald-400">0.8%</span></div>
                                <div className="flex justify-between gap-4"><span>MEM:</span> <span className="text-emerald-400">24MB</span></div>
                                <div className="flex justify-between gap-4"><span>NET:</span> <span className="text-emerald-400">UP</span></div>
                            </div>
                        </motion.div>

                        {/* Sensor Activity Stream */}
                        <motion.div
                            animate={{ y: [0, 20, 0] }}
                            transition={{ duration: 6, repeat: Infinity, delay: 1 }}
                            className="absolute bottom-10 left-0 p-6 premium-card z-20"
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <Activity className="w-4 h-4 text-emerald-500" />
                                <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">Logic Stream</span>
                            </div>
                            <div className="w-32 h-1 bg-white/5 rounded-full overflow-hidden">
                                <motion.div
                                    animate={{ width: ["10%", "90%", "30%", "100%", "50%"] }}
                                    transition={{ duration: 3, repeat: Infinity }}
                                    className="h-full bg-emerald-500"
                                />
                            </div>
                        </motion.div>

                        {/* Programming Logic Bubble */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6 }}
                            className="absolute top-1/2 -left-10 premium-card p-4 border-emerald-500/10 z-20"
                        >
                            <Code2 className="w-5 h-5 text-emerald-500/60 mb-2" />
                            <div className="h-1 w-12 bg-emerald-500/20 rounded-full" />
                        </motion.div>

                        {/* Central Hub */}
                        <div className="relative z-10 w-40 h-40 bg-slate-900 border border-white/10 rounded-[40px] flex items-center justify-center rotate-12 shadow-2xl">
                            <div className="w-24 h-24 bg-emerald-500/10 rounded-[24px] flex items-center justify-center border border-emerald-500/20 -rotate-12 animate-pulse">
                                <Layers className="w-12 h-12 text-emerald-400" />
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
