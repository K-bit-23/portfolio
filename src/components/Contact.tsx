import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-dark-lighter">
      <div className="container mx-auto px-4 relative z-10">

        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block text-neon-green text-sm font-bold tracking-[0.2em] uppercase mb-4"
          >
            Engagement
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold font-orbitron text-white"
          >
            Start a <span className="text-gradient">Connection</span>
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">

          {/* Contact Details */}
          <div className="lg:col-span-2 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="premium-card p-10 space-y-12"
            >
              {[
                { icon: <Mail className="text-emerald-500 w-6 h-6" />, title: 'Email Me', value: 'karthikeyan.p.developer@gmail.com', href: 'mailto:karthikeyan.p.developer@gmail.com' },
                { icon: <Phone className="text-emerald-500 w-6 h-6" />, title: 'Call / WhatsApp', value: '+91 93610 33181', href: 'https://wa.me/919361033181' },
                { icon: <MapPin className="text-emerald-500 w-6 h-6" />, title: 'Location', value: 'Tamil Nadu, India', href: '#' },
              ].map((item, idx) => (
                <div key={idx} className="flex gap-6 items-start group">
                  <div className="p-4 bg-emerald-500/5 rounded-2xl border border-emerald-500/10 group-hover:border-emerald-500/40 transition-all shadow-xl">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] mb-1">{item.title}</h4>
                    <a href={item.href} className="text-white font-bold hover:text-emerald-400 transition-colors tracking-tight">{item.value}</a>
                  </div>
                </div>
              ))}

              <div className="pt-8 border-t border-white/5">
                <h4 className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] mb-6">Digital Nodes</h4>
                <div className="flex gap-4">
                  <a href="https://github.com/K-bit-23" className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center hover:bg-emerald-500/10 hover:border-emerald-500/20 border border-transparent transition-all text-white"><Github /></a>
                  <a href="https://linkedin.com/in/karthikeyan-pandiyaraj-351015229" className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center hover:bg-emerald-500/10 hover:border-emerald-500/20 border border-transparent transition-all text-white"><Linkedin /></a>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <motion.form
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="premium-card p-10 space-y-8"
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] px-1">Full Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full bg-slate-950/50 border border-white/5 rounded-2xl px-6 py-4 text-white placeholder-slate-700 focus:outline-none focus:border-emerald-500/40 focus:bg-slate-950 transition-all"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] px-1">Email Address</label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full bg-slate-950/50 border border-white/5 rounded-2xl px-6 py-4 text-white placeholder-slate-700 focus:outline-none focus:border-emerald-500/40 focus:bg-slate-950 transition-all"
                  />
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] px-1">Project Concept</label>
                <textarea
                  rows={5}
                  placeholder="Describe your vision..."
                  className="w-full bg-slate-950/50 border border-white/5 rounded-2xl px-6 py-4 text-white placeholder-slate-700 focus:outline-none focus:border-emerald-500/40 focus:bg-slate-950 transition-all resize-none"
                />
              </div>

              <button className="w-full bg-emerald-500 text-slate-950 font-black py-5 rounded-2xl button-glow hover:scale-[1.01] active:scale-95 transition-all flex items-center justify-center gap-3 uppercase tracking-widest text-xs">
                Establish Protocol
                <Send className="w-5 h-5" />
              </button>
            </motion.form>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
