'use client';

import { SHIPS } from '@/src/constants';
import { motion } from 'motion/react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Ships() {
  return (
    <div className="py-32 bg-slate-950">
      <div className="luxury-container">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="space-y-6 mb-24 max-w-3xl"
        >
          <span className="editorial-label">The Fleet</span>
          <h1 className="text-6xl md:text-9xl font-heading text-white leading-none">Floating <br /><span className="italic-accent">Palaces</span></h1>
          <p className="text-slate-400 font-light text-xl leading-relaxed">
            From state-of-the-art stability systems to artisanal wood finishes, our fleet represents the pinnacle of maritime architecture.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          {SHIPS.map((ship, index) => (
            <motion.div 
              key={ship.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="luxury-card group"
            >
              <div className="h-[600px] overflow-hidden relative">
                <img src={ship.image} alt={ship.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2.5s] ease-out" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60" />
                <div className="absolute top-10 left-10">
                   <span className="bg-gold text-slate-950 text-[10px] font-bold px-4 py-1 uppercase tracking-[0.2em]">{ship.capacity}</span>
                </div>
              </div>
              <div className="p-14 space-y-10 bg-midnight/90 backdrop-blur-xl">
                <div className="space-y-4">
                  <h2 className="text-5xl font-heading text-white tracking-wide">{ship.name}</h2>
                  <p className="text-slate-400 font-light leading-relaxed text-lg">{ship.description}</p>
                </div>
                
                <div className="space-y-6">
                  <h4 className="editorial-label border-b border-white/5 pb-4">Onboard Exclusives</h4>
                  <div className="grid grid-cols-2 gap-y-4">
                    {ship.amenities.map(a => (
                      <div key={a} className="flex items-center gap-4 text-sm text-slate-300 font-light">
                        <div className="w-2 h-[1px] bg-gold" /> {a}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-6 pt-6">
                  <Link
                    href={`/ships/${ship.id}`}
                    className="gold-button inline-flex items-center justify-center gap-4 h-16 flex-1 group"
                  >
                    Explore Deck Plans <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                  </Link>
                  <Link
                    href={`/ships/${ship.id}#booking`}
                    className="outline-button inline-flex items-center justify-center h-16 px-10"
                  >
                    Check Availability
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
