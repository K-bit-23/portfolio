import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Code2, Globe, ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 px-4 overflow-hidden">
            <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">

                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="z-10"
                >
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neon-cyan/10 border border-neon-cyan/20 text-neon-cyan text-sm font-medium mb-6"
                    >
                        <Cpu className="w-4 h-4 animate-pulse" />
                        <span>Connecting the Physical & Digital</span>
                    </motion.div>

                    <h1 className="text-5xl lg:text-7xl font-bold font-orbitron leading-tight mb-6">
                        <span className="text-white">Empowering </span>
                        <span className="text-gradient">IoT Excellence</span><br />
                        <span className="text-white/80">with Python.</span>
                    </h1>

                    <p className="text-lg text-slate-400 max-w-xl mb-10 leading-relaxed">
                        Freelance Developer specializing in custom IoT ecosystems,
                        intelligent automation, and real-time data visualization.
                        Turning complex problems into seamless connected solutions.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <motion.a
                            href="#projects"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 bg-neon-cyan text-dark font-bold rounded-xl flex items-center gap-2 hover:shadow-[0_0_20px_rgba(0,224,255,0.4)] transition-all"
                        >
                            Explore Projects
                            <ArrowRight className="w-5 h-5" />
                        </motion.a>

                        <motion.a
                            href="#contact"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-xl flex items-center gap-2 hover:bg-white/10 transition-all backdrop-blur-sm"
                        >
                            Get In Touch
                        </motion.a>
                    </div>

                    {/* Quick Stats */}
                    <div className="mt-12 flex gap-12 border-t border-white/5 pt-12">
                        {[
                            { label: 'IoT Projects', count: '10+' },
                            { label: 'Python Systems', count: '15+' },
                            { label: 'Happy Clients', count: '20+' }
                        ].map((stat, idx) => (
                            <div key={idx} className="flex flex-col gap-1">
                                <span className="text-2xl font-bold text-white">{stat.count}</span>
                                <span className="text-sm text-slate-500">{stat.label}</span>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Visual Element */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="relative hidden lg:block"
                >
                    <div className="relative w-[500px] h-[500px]">
                        {/* Orbiting Elements */}
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-0 border-2 border-dashed border-white/10 rounded-full"
                        />

                        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between">
                            <motion.div animate={{ y: [0, -20, 0] }} transition={{ duration: 4, repeat: Infinity }} className="bg-dark border border-neon-cyan/30 p-4 rounded-2xl glass-card shadow-2xl -ml-4">
                                <Code2 className="text-neon-cyan w-8 h-8" />
                            </motion.div>
                            <motion.div animate={{ y: [0, 20, 0] }} transition={{ duration: 5, repeat: Infinity }} className="bg-dark border border-neon-purple/30 p-4 rounded-2xl glass-card shadow-2xl -mr-4">
                                <Globe className="text-neon-purple w-8 h-8" />
                            </motion.div>
                        </div>

                        {/* Central Node */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-neon-cyan/10 rounded-full flex items-center justify-center border border-neon-cyan/20 blur-[1px]">
                            <div className="w-32 h-32 bg-neon-cyan/20 rounded-full flex items-center justify-center animate-pulse">
                                <div className="w-24 h-24 bg-neon-cyan/30 rounded-full flex items-center justify-center">
                                    <Cpu className="w-12 h-12 text-neon-cyan" />
                                </div>
                            </div>
                        </div>

                        {/* Floating Code Snippets */}
                        <motion.div
                            animate={{ x: [0, 50, 0], y: [0, -30, 0] }}
                            transition={{ duration: 8, repeat: Infinity }}
                            className="absolute top-10 right-0 glass-card p-3 text-[10px] font-mono text-neon-green/80 border border-neon-green/20"
                        >
                            <pre>{"while True:\n  sensor.read()\n  mqtt.publish()"}</pre>
                        </motion.div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default Hero;
