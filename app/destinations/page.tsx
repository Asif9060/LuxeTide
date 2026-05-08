'use client';

import { DESTINATIONS } from '@/src/constants';
import { motion } from 'motion/react';
import { MapPin, Wind, Sun, Anchor } from 'lucide-react';

export default function Destinations() {
  return (
    <div className="py-32 bg-slate-950 min-h-screen">
      <div className="luxury-container">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="text-left space-y-6 mb-32 max-w-3xl"
        >
          <span className="editorial-label text-gold">Exclusive Regions</span>
          <h1 className="text-6xl md:text-9xl font-heading text-white leading-none">Uncharted <br /><span className="italic-accent text-gold">Elegance</span></h1>
          <p className="max-w-2xl text-slate-400 font-light text-xl leading-relaxed">From the mystical mangroves of Sundarbans to the crystalline waters of Saint Martin's, we curate the most evocative destinations.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {DESTINATIONS.map((dest, index) => (
            <motion.div
              key={dest.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="luxury-card group cursor-pointer overflow-hidden"
            >
              <div className="h-[450px] overflow-hidden relative">
                <img src={dest.image} alt={dest.name} className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110" />
                <div className="absolute inset-0 bg-slate-950/30 group-hover:bg-slate-950/10 transition-colors" />
                <div className="absolute top-8 left-8">
                   <div className="bg-slate-950/80 backdrop-blur-xl px-4 py-1 flex items-center gap-2 border border-white/10 shadow-2xl">
                      <Sun className="w-3 h-3 text-gold" />
                      <span className="text-[10px] text-white uppercase tracking-[0.2em] font-bold">Tropical</span>
                   </div>
                </div>
              </div>
              <div className="p-12 space-y-6 bg-midnight/90 backdrop-blur-xl">
                <div className="flex items-center gap-3 text-gold">
                  <MapPin className="w-4 h-4" />
                  <span className="text-[10px] uppercase tracking-[0.3em] font-bold">Region Spotlight</span>
                </div>
                <h3 className="text-4xl font-heading text-white tracking-wide uppercase leading-tight">{dest.name}</h3>
                <p className="text-slate-400 font-light text-base leading-relaxed line-clamp-3">{dest.description}</p>
                <div className="pt-8 flex justify-between items-center border-t border-white/5">
                  <div className="flex gap-6">
                    <Wind className="w-5 h-5 text-slate-700" />
                    <Anchor className="w-5 h-5 text-slate-700" />
                  </div>
                  <span className="text-[10px] uppercase tracking-[0.3em] text-gold font-bold hover:text-white transition-colors">Discover Port</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
