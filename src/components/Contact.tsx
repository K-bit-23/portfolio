import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Youtube } from 'lucide-react';

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
              className="glass-card p-10 border border-white/5 space-y-12"
            >
              {[
                { icon: <Mail className="text-neon-cyan w-6 h-6" />, title: 'Email Me', value: 'karthikeyan.p.developer@gmail.com', href: 'mailto:karthikeyan.p.developer@gmail.com' },
                { icon: <Phone className="text-neon-green w-6 h-6" />, title: 'Call / WhatsApp', value: '+91 93610 33181', href: 'https://wa.me/919361033181' },
                { icon: <MapPin className="text-neon-purple w-6 h-6" />, title: 'Location', value: 'Tamil Nadu, India', href: '#' },
              ].map((item, idx) => (
                <div key={idx} className="flex gap-6 items-start group">
                  <div className="p-4 bg-white/5 rounded-2xl border border-white/10 group-hover:border-neon-cyan/40 transition-colors shadow-xl">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-1">{item.title}</h4>
                    <a href={item.href} className="text-white font-medium hover:text-neon-cyan transition-colors">{item.value}</a>
                  </div>
                </div>
              ))}

              <div className="pt-8 border-t border-white/5">
                <h4 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-6">Social Ecosystem</h4>
                <div className="flex gap-6">
                  <a href="https://github.com/K-bit-23" className="w-12 h-12 glass-card flex items-center justify-center hover:bg-neon-cyan/20 transition-all text-white"><Github /></a>
                  <a href="https://linkedin.com/in/karthikeyan-pandiyaraj-351015229" className="w-12 h-12 glass-card flex items-center justify-center hover:bg-neon-cyan/20 transition-all text-white"><Linkedin /></a>
                  <a href="https://youtube.com/@karthideepakkd" className="w-12 h-12 glass-card flex items-center justify-center hover:bg-neon-cyan/20 transition-all text-white"><Youtube /></a>
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
              className="glass-card p-10 border border-white/5 space-y-8"
              onSubmit={(e) => {
                e.preventDefault();
                // Add message logic here
              }}
            >
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-widest px-1">Identity</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder-slate-600 focus:outline-none focus:border-neon-cyan/40 transition-all shadow-inner"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-widest px-1">Channel (Email)</label>
                  <input
                    type="email"
                    placeholder="john@nexus.com"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder-slate-600 focus:outline-none focus:border-neon-cyan/40 transition-all shadow-inner"
                  />
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest px-1">Subject of interest</label>
                <input
                  type="text"
                  placeholder="Inquiry about IoT project..."
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder-slate-600 focus:outline-none focus:border-neon-cyan/40 transition-all shadow-inner"
                />
              </div>

              <div className="space-y-3">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest px-1">Transmission Data (Message)</label>
                <textarea
                  rows={5}
                  placeholder="Hey, let's connect for an IoT solution..."
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder-slate-600 focus:outline-none focus:border-neon-cyan/40 transition-all shadow-inner resize-none"
                />
              </div>

              <button className="w-full bg-gradient-to-r from-neon-cyan to-neon-purple text-dark font-bold py-5 rounded-2xl shadow-[0_0_30px_rgba(0,224,255,0.2)] hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-3">
                Establish Connection
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
