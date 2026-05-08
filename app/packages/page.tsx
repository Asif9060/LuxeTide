'use client';

import { PACKAGES } from '@/src/constants';
import { motion } from 'motion/react';
import { PremiumButton } from '@/src/components/PremiumUI';
import { Star, Coffee, Wine, Wifi, ArrowRight } from 'lucide-react';

export default function Packages() {
  const allPackages = [
    ...PACKAGES,
    {
      id: 'arctic-expedition',
      title: 'Arctic Expedition',
      description: 'Journey to the edge of the world with expert naturalists.',
      price: 'From $12,000',
      duration: '14 Days',
      image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa'
    }
  ];

  return (
    <div className="py-32 bg-slate-950 min-h-screen">
      <div className="luxury-container">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="space-y-6 mb-32 max-w-3xl"
        >
          <span className="editorial-label text-gold">Premium Expeditions</span>
          <h1 className="text-6xl md:text-9xl font-heading text-white leading-none">Our Popular <br /><span className="italic-accent text-gold">Tours</span></h1>
          <p className="text-slate-400 font-light text-xl leading-relaxed">
            Discover our carefully curated selection of maritime journeys. Each tour is an orchestrated masterpiece designed for the ultimate escape.
          </p>
        </motion.div>

        <div className="space-y-24">
          {allPackages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className={`luxury-card flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} overflow-hidden relative group`}
            >
              {/* Visual */}
              <div className="lg:w-1/2 h-[600px] overflow-hidden relative">
                <img src={pkg.image} alt={pkg.title} className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110" />
                <div className="absolute inset-0 bg-slate-950/20" />
                <div className="absolute top-10 left-10">
                   <div className="bg-gold text-slate-950 px-5 py-1 text-[10px] font-bold uppercase tracking-[0.2em] shadow-2xl">Signature Curation</div>
                </div>
              </div>

              {/* Content */}
              <div className="lg:w-1/2 p-12 lg:p-24 flex flex-col justify-center space-y-10 bg-midnight/90 backdrop-blur-xl">
                <div className="flex justify-between items-start">
                  <div className="space-y-4">
                    <span className="editorial-label text-gold font-bold">{pkg.duration} • All-Inclusive</span>
                    <h2 className="text-5xl font-heading text-white leading-tight">{pkg.title}</h2>
                  </div>
                </div>

                <div className="space-y-4">
                   <p className="text-4xl text-white font-heading font-light tracking-wide">{pkg.price}</p>
                   <p className="text-[9px] text-slate-500 uppercase tracking-[0.3em] font-bold">Inclusive per person</p>
                </div>

                <p className="text-slate-400 font-light text-xl leading-relaxed line-clamp-3">{pkg.description}</p>

                <div className="grid grid-cols-2 gap-6">
                  {[
                    { icon: Coffee, text: 'Gourmet Dining' },
                    { icon: Wine, text: 'Open Bar' },
                    { icon: Wifi, text: 'Premium Data' },
                    { icon: Star, text: 'Personal Butler' }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4 text-[10px] uppercase tracking-[0.2em] text-slate-500 font-bold">
                      <item.icon className="w-5 h-5 text-gold/40" />
                      <span>{item.text}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-6 pt-6">
                  <PremiumButton className="flex-1 h-18 text-xs flex items-center justify-center gap-4 group">
                    Begin Reservation <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                  </PremiumButton>
                  <PremiumButton variant="outline" className="h-18 px-12 text-xs">Itinerary Details</PremiumButton>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
