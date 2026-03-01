import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Terminal, ExternalLink } from 'lucide-react';

const Contact: React.FC = () => {
  const contactInfo = [
    { icon: <Mail className="w-5 h-5" />, title: 'Uplink Email', value: 'karthikeyankarthikeyan64182@gmail.com', href: 'mailto:karthikeyankarthikeyan64182@gmail.com' },
    { icon: <Phone className="w-5 h-5" />, title: 'Direct Line', value: '9566723397', href: 'https://wa.me/919566723397' },
    { icon: <MapPin className="w-5 h-5" />, title: 'Base Location', value: 'Erode, Tamil Nadu', href: '#' },
  ];

  return (
    <section id="contact" className="py-24 md:py-32 relative overflow-hidden bg-[#020408]">
      {/* Background Decor */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">

          <div className="text-center mb-16 md:mb-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-[10px] font-black tracking-[0.3em] uppercase mb-6"
            >
              Uplink Protocol
            </motion.div>
            <h2 className="text-5xl md:text-7xl font-black font-orbitron text-white">
              INITIATE <span className="emerald-gradient-text">CONTACT.</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 md:gap-12">

            {/* System Info Panel */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="premium-card !p-0 overflow-hidden">
                <div className="bg-white/5 border-b border-white/5 px-6 py-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Terminal className="w-4 h-4 text-emerald-500" />
                    <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">comms_node_05</span>
                  </div>
                  <div className="flex gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-emerald-500/20" />
                    <div className="w-2 h-2 rounded-full bg-emerald-500/40" />
                    <div className="w-2 h-2 rounded-full bg-emerald-500" />
                  </div>
                </div>

                <div className="p-6 md:p-10 space-y-6 md:space-y-8">
                  {contactInfo.map((info, idx) => (
                    <a
                      key={idx}
                      href={info.href}
                      className="flex items-center gap-6 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-emerald-500/30 transition-all group"
                    >
                      <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-500 group-hover:bg-emerald-500 group-hover:text-slate-950 transition-all duration-500">
                        {info.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <span className="text-[9px] font-black text-slate-500 uppercase tracking-widest block mb-1">{info.title}</span>
                        <p className="text-sm md:text-base font-bold text-white truncate group-hover:text-emerald-400 transition-colors">
                          {info.value}
                        </p>
                      </div>
                      <ExternalLink className="w-4 h-4 text-slate-700 group-hover:text-emerald-500 transition-colors" />
                    </a>
                  ))}

                  <div className="pt-8 border-t border-white/5 flex flex-wrap items-center justify-between gap-6">
                    <div>
                      <span className="text-[9px] font-black text-slate-600 uppercase tracking-widest block mb-3">Satellite Links</span>
                      <div className="flex gap-3">
                        <a href="https://github.com/K-bit-23" className="p-3 bg-white/5 rounded-xl border border-white/5 hover:border-emerald-500/40 transition-all text-white hover:text-emerald-500">
                          <Github className="w-5 h-5" />
                        </a>
                        <a href="https://linkedin.com/in/karthikeyan-pandiyaraj-351015229" className="p-3 bg-white/5 rounded-xl border border-white/5 hover:border-emerald-500/40 transition-all text-white hover:text-emerald-500">
                          <Linkedin className="w-5 h-5" />
                        </a>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-[9px] font-black text-slate-600 uppercase tracking-widest block mb-1">Signal Status</span>
                      <div className="flex items-center gap-2 justify-end">
                        <span className="text-[10px] font-black text-emerald-500 uppercase">Stable</span>
                        <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Transmission Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <form className="premium-card space-y-6 md:space-y-8" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Entity Name</label>
                    <input
                      type="text"
                      placeholder="IDENT_REQUIRED"
                      className="w-full bg-slate-950/50 border border-white/5 rounded-xl px-4 md:px-6 py-4 text-white placeholder-slate-800 focus:outline-none focus:border-emerald-500/40 focus:bg-slate-950 transition-all text-sm font-bold"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Uplink Address</label>
                    <input
                      type="email"
                      placeholder="MAIL_ENCRYPT_ENABLED"
                      className="w-full bg-slate-950/50 border border-white/5 rounded-xl px-4 md:px-6 py-4 text-white placeholder-slate-800 focus:outline-none focus:border-emerald-500/40 focus:bg-slate-950 transition-all text-sm font-bold"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Transmission Data</label>
                  <textarea
                    rows={6}
                    placeholder="DATA_STREAM_START..."
                    className="w-full bg-slate-950/50 border border-white/5 rounded-xl px-4 md:px-6 py-4 text-white placeholder-slate-800 focus:outline-none focus:border-emerald-500/40 focus:bg-slate-950 transition-all resize-none text-sm font-bold"
                  />
                </div>

                <button className="cyber-button w-full h-16 group !rounded-2xl">
                  Secure Transmission
                  <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
                <p className="text-[9px] font-bold text-slate-600 text-center uppercase tracking-widest">
                  End-to-End Encryption Protocol Active
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
