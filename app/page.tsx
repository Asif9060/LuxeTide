'use client';

import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { SHIPS, DESTINATIONS, PACKAGES } from '@/src/constants';
import { Calendar, Users, MapPin, ArrowRight, Ship } from 'lucide-react';
import { PremiumButton, PremiumInput, PremiumSelect } from '@/src/components/PremiumUI';

export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  const revealViewport = { once: true, amount: 0.25 };

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const services = [
    { title: 'Adventure Tours', icon: MapPin, desc: 'Thrilling experiences' },
    { title: 'Sea Cruises', icon: Ship, desc: 'Luxury at sea' },
    { title: 'Private Charters', icon: Users, desc: 'Exclusive journeys' },
    { title: 'Global Explore', icon: Calendar, desc: 'Infinite horizons' }
  ];

  return (
    <div className="space-y-0 text-slate-300 bg-slate-950 overflow-x-hidden" ref={containerRef}>
      {/* Hero Section with Parallax */}
      <section className="relative h-[95vh] flex items-center overflow-hidden">
        <motion.div className="absolute inset-0 z-0" style={{ y }}>
          <img 
            src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&q=80&w=1920" 
            alt="Luxury Cruise Hero" 
            className="w-full h-full object-cover scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/40 to-transparent"></div>
          <div className="absolute inset-0 bg-black/40"></div>
        </motion.div>

        <div className="relative z-10 w-full luxury-container">
          <div className="max-w-4xl space-y-10">
            <motion.div
              style={{ opacity }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-6"
            >
              <motion.span 
                initial={{ opacity: 0, letterSpacing: '0.2em' }}
                animate={{ opacity: 1, letterSpacing: '0.5em' }}
                transition={{ delay: 0.5, duration: 1 }}
                className="editorial-label block text-gold"
              >
                World Class Travel Experience
              </motion.span>
              <h1 className="text-7xl md:text-9xl font-heading text-white leading-[0.95]">
                Book Your Next <br /><span className="italic-accent text-gold">Memorable</span> Trip.
              </h1>
              <p className="text-xl text-slate-300 font-light leading-relaxed max-w-2xl">
                We provide the most exclusive maritime journeys across the Bay of Bengal and beyond. Luxury redefined at sea.
              </p>
            </motion.div>

            {/* LuxeTide Inspired Search Card */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.8 }}
              className="bg-slate-900/60 backdrop-blur-3xl p-4 md:p-8 border border-white/10 shadow-3xl rounded-lg grid grid-cols-1 md:grid-cols-4 gap-6 items-end"
            >
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-gold font-bold">Destination</label>
                <PremiumSelect className="h-12 bg-white/5 border-white/10 w-full text-white">
                  <option className="bg-slate-900">Where to go?</option>
                  <option className="bg-slate-900">Sundarbans</option>
                  <option className="bg-slate-900">Saint Martin&apos;s</option>
                  <option className="bg-slate-900">Cox&apos;s Bazar</option>
                </PremiumSelect>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-gold font-bold">Package Type</label>
                <PremiumSelect className="h-12 bg-white/5 border-white/10 w-full text-white">
                  <option className="bg-slate-900">Select Package</option>
                  <option className="bg-slate-900">Luxury Curation</option>
                  <option className="bg-slate-900">Adventure Exped</option>
                  <option className="bg-slate-900">Family Cruise</option>
                </PremiumSelect>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-gold font-bold">Date</label>
                <PremiumInput type="date" className="h-12 bg-white/5 border-white/10 w-full" />
              </div>
              <PremiumButton className="h-12 w-full flex items-center justify-center gap-2 group text-xs">
                BOOK NOW <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </PremiumButton>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-midnight border-b border-white/5 relative">
        <div className="luxury-container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {services.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={revealViewport}
                transition={{ delay: i * 0.1 }}
                className="p-8 luxury-card flex flex-col items-center text-center group"
              >
                <div className="w-16 h-16 bg-gold/10 border border-gold/20 rounded-full flex items-center justify-center text-gold mb-6 group-hover:scale-110 transition-transform">
                  <item.icon size={24} />
                </div>
                <h4 className="text-xl font-heading text-white mb-2">{item.title}</h4>
                <p className="text-[10px] text-slate-500 uppercase tracking-widest">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-32 bg-slate-950">
        <div className="luxury-container grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
                viewport={revealViewport}
            className="relative"
          >
            <div className="p-4 border border-white/5 bg-white/5 backdrop-blur-3xl shadow-3xl">
              <img 
                src="https://images.unsplash.com/photo-1540541338287-41700207dee6" 
                alt="About" 
                    loading="lazy"
                    decoding="async"
                className="w-full h-[600px] object-cover"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-gold flex flex-col items-center justify-center text-slate-950 p-6 text-center rounded-sm shadow-3xl">
              <span className="text-4xl font-heading font-bold italic">25+</span>
              <span className="text-[10px] uppercase font-bold tracking-widest mt-2 uppercase">Years of Experience</span>
            </div>
          </motion.div>

          <div className="space-y-10">
            <div className="space-y-6">
              <span className="editorial-label text-gold">About LuxeTide</span>
              <h2 className="text-6xl font-heading text-white leading-tight">World Best Travel <br /><span className="italic-accent font-normal text-gold">Agency</span> Since 2000</h2>
              <p className="text-slate-400 font-light text-xl leading-relaxed">
                We believe that travel is not just about reaching a destination, but about the unique memories and stories created along the way.
              </p>
            </div>
            <div className="space-y-6">
              {[
                'Professional Tour Guides',
                'Custom Travel Packages',
                'Luxury Accommodation Only',
                'Exclusive Maritime Access'
              ].map((point) => (
                <div key={point} className="flex items-center gap-4 text-white/80 font-medium tracking-wide">
                  <div className="w-2 h-2 bg-gold rotate-45" /> {point}
                </div>
              ))}
            </div>
            <PremiumButton variant="outline" className="h-16 px-12">Learn More</PremiumButton>
          </div>
        </div>
      </section>

      {/* Cruise Fleet Showcase */}
      <section className="py-32 bg-deep-space border-y border-white/5">
        <div className="luxury-container space-y-20">
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <span className="editorial-label text-gold">Our Cruise Fleet</span>
            <h2 className="text-6xl font-heading text-white leading-tight">Sail Aboard The <span className="italic-accent font-normal text-gold">Finest Ships</span></h2>
            <p className="text-slate-400 font-light text-xl leading-relaxed">
              Discover our signature vessels, each crafted for comfort, elegance, and unforgettable sea journeys.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {SHIPS.map((ship, i) => (
              <motion.div
                key={ship.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={revealViewport}
                transition={{ delay: i * 0.12, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                className="luxury-card overflow-hidden group"
              >
                <div className="h-[360px] overflow-hidden relative">
                  <img
                    src={ship.image}
                    alt={ship.name}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2s]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
                  <div className="absolute top-5 left-5 bg-gold text-slate-950 px-3 py-1 font-bold text-[10px] rounded-sm uppercase tracking-widest">
                    {ship.capacity}
                  </div>
                </div>

                <div className="p-8 space-y-6 bg-midnight/90 backdrop-blur-xl">
                  <div className="space-y-3">
                    <h3 className="text-3xl font-heading text-white group-hover:text-gold transition-colors">{ship.name}</h3>
                    <p className="text-slate-400 font-light leading-relaxed line-clamp-3">{ship.description}</p>
                  </div>

                  <div className="space-y-3 border-t border-white/10 pt-5">
                    <p className="text-[10px] uppercase tracking-widest text-gold font-bold">Onboard Highlights</p>
                    <div className="grid grid-cols-2 gap-2">
                      {ship.amenities.slice(0, 4).map((amenity) => (
                        <div key={amenity} className="text-[11px] text-slate-300 flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-gold rotate-45" />
                          <span>{amenity}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <PremiumButton variant="outline" className="w-full h-12 flex items-center justify-center gap-2 group">
                    Explore Ship <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </PremiumButton>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Tours Section */}
      <section className="py-32 bg-deep-space">
        <div className="luxury-container">
          <div className="text-center space-y-4 mb-20">
            <span className="editorial-label">Expeditions</span>
            <h2 className="text-6xl font-heading text-white">Our Popular Packages</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[...PACKAGES, ...PACKAGES].slice(0, 3).map((pkg, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={revealViewport}
                transition={{ delay: i * 0.1 }}
                className="luxury-card group overflow-hidden"
              >
                <div className="h-72 overflow-hidden relative">
                  <img src={pkg.image} alt={pkg.title} loading="lazy" decoding="async" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2s]" />
                  <div className="absolute top-4 left-4 bg-gold text-slate-950 px-3 py-1 font-bold text-[10px] rounded-sm uppercase tracking-widest">
                    Available
                  </div>
                  <div className="absolute bottom-4 right-4 bg-slate-900 border border-white/10 text-white px-3 py-1 font-heading text-lg rounded-sm shadow-xl">
                    {pkg.price}
                  </div>
                </div>
                <div className="p-8 space-y-6">
                  <div className="flex items-center justify-between text-[10px] text-slate-500 font-bold uppercase tracking-widest">
                    <span className="flex items-center gap-2 text-gold"><Calendar size={12} /> {pkg.duration}</span>
                    <span className="flex items-center gap-2"><Users size={12} /> 2+ People</span>
                  </div>
                  <h3 className="text-2xl font-heading text-white group-hover:text-gold transition-colors">{pkg.title}</h3>
                  <p className="text-sm text-slate-500 font-light line-clamp-2">{pkg.description}</p>
                  <PremiumButton variant="outline" className="w-full h-12 flex items-center justify-center gap-2 group">
                    View Details <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </PremiumButton>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-32 bg-slate-950">
        <div className="luxury-container grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
          <div className="space-y-12">
            <div className="space-y-6">
              <span className="editorial-label">Core Values</span>
              <h2 className="text-6xl font-heading text-white leading-tight">Why Choose This <br /><span className="italic-accent font-normal text-gold">Agency</span></h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { title: 'Best Guide', icon: Users },
                { title: 'Easy Booking', icon: ArrowRight },
                { title: 'Premium Trip', icon: Ship },
                { title: 'Safe Journey', icon: MapPin }
              ].map((v, i) => (
                <div key={i} className="p-8 bg-white/5 border border-white/10 space-y-4 hover:border-gold/50 transition-colors">
                  <v.icon size={28} className="text-gold" />
                  <h4 className="text-lg font-heading text-white tracking-wide">{v.title}</h4>
                  <p className="text-[10px] text-slate-600 uppercase tracking-widest">Guaranteed Quality</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <img src="https://images.unsplash.com/photo-1544735716-392fe2489ffa" alt="Why Choose Us" className="w-full h-[700px] object-cover grayscale opacity-60" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
          </div>
        </div>
      </section>

      {/* Featured Destinations (Editorial Pattern) */}
      <section className="py-32 bg-bg-secondary border-t border-white/5">
        <div className="luxury-container h-80 flex flex-col lg:flex-row">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="flex-1 flex flex-col justify-center border-r border-white/5 p-10 lg:p-20"
          >
            <span className="editorial-label mb-3">Top Region</span>
            <h3 className="text-4xl text-slate-100 font-heading">Saint Martin&apos;s</h3>
            <p className="text-[10px] text-slate-500 uppercase tracking-[0.3em] font-bold mt-3">The Blue Lagoon • Coral Paradise</p>
          </motion.div>
          
          <div className="flex-[2] grid grid-cols-1 md:grid-cols-3 gap-0">
            {DESTINATIONS.slice(0, 3).map((item, i) => (
              <motion.div 
                key={item.id}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={revealViewport}
                transition={{ duration: 1, delay: i * 0.2 }}
                className="group relative overflow-hidden h-80 lg:h-full border-r border-white/5 last:border-r-0"
              >
                <img src={item.image} alt={item.name} loading="lazy" decoding="async" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-[1.5s]" />
                <div className="absolute inset-0 bg-slate-950/40 group-hover:bg-slate-950/10 transition-colors" />
                <div className="absolute bottom-10 left-10">
                  <p className="text-[10px] text-gold font-bold uppercase tracking-widest mb-2">Destination</p>
                  <p className="text-lg font-heading text-white tracking-widest uppercase">{item.name}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Newsletter */}
      <section className="py-32 relative overflow-hidden bg-midnight border-t border-white/5">
         <div className="absolute inset-0 opacity-10 pointer-events-none scale-110">
          <img 
            src="https://images.unsplash.com/photo-1544735716-392fe2489ffa" 
            alt="Waves Background" 
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-950/95 backdrop-blur-md"></div>
        </div>
        <div className="luxury-container relative z-10 text-center max-w-4xl space-y-12">
          <span className="editorial-label text-gold">Join The Newsletter</span>
          <h2 className="text-5xl md:text-7xl font-heading text-white leading-tight">Get Special Discount</h2>
          <p className="text-slate-400 font-light text-xl max-w-2xl mx-auto leading-relaxed">
            Subscribe to our newsletter to receive invitation-only deals and early access to new fleet launches.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 mt-12 max-w-2xl mx-auto">
            <PremiumInput 
              placeholder="Your email address" 
              className="flex-1 h-16 rounded-none text-lg"
            />
            <PremiumButton className="h-16 whitespace-nowrap px-12">Subscribe</PremiumButton>
          </div>
        </div>
      </section>
    </div>
  );
}
