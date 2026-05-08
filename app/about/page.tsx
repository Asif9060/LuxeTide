'use client';

import { motion } from 'motion/react';
import { Ship, History, Award, Users, MapPin, Calendar, ArrowRight } from 'lucide-react';
import { PremiumButton } from '@/src/components/PremiumUI';

export default function About() {
  const stats = [
    { label: 'Founded', value: '2000', icon: History },
    { label: 'Voyages', value: '10k+', icon: Ship },
    { label: 'Awards', value: '50+', icon: Award },
    { label: 'Team', value: '2k+', icon: Users }
  ];

  const team = [
    { name: 'Alex Johnson', role: 'Chief Captain', img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a' },
    { name: 'Sarah Miller', role: 'Cruise Manager', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2' },
    { name: 'David Chen', role: 'Executive Chef', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e' }
  ];

  return (
    <div className="space-y-0 bg-slate-950 min-h-screen">
      {/* Hero */}
      <section className="py-40 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gold/5 blur-[150px] rounded-full -translate-y-1/2 translate-x-1/4" />
        <div className="luxury-container relative z-10 text-left space-y-10">
           <motion.span 
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             className="editorial-label text-gold"
           >
             Est. 2000
           </motion.span>
           <motion.h1 
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 1.2 }}
             className="text-7xl md:text-9xl font-heading text-white max-w-6xl leading-[0.95]"
           >
             A Heritage of <br /><span className="italic-accent text-gold">Elite Travel</span>
           </motion.h1>
           <motion.p 
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ delay: 0.6 }}
             className="max-w-3xl text-slate-400 text-2xl font-light leading-relaxed"
           >
             LuxeTide was founded on the belief that travel isn&apos;t just about reaching a destination - it&apos;s about the unique memories and stories created along the way.
           </motion.p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-32 border-y border-white/5 bg-bg-tertiary">
        <div className="luxury-container grid grid-cols-2 md:grid-cols-4 gap-20">
          {stats.map((stat, i) => (
            <div key={i} className="text-center space-y-4">
              <stat.icon className="w-8 h-8 text-gold mx-auto mb-6 opacity-30" />
              <p className="text-5xl font-heading text-white tracking-widest leading-none">{stat.value}</p>
              <p className="editorial-label !text-slate-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Story */}
      <section className="py-40 bg-slate-950">
        <div className="luxury-container grid grid-cols-1 md:grid-cols-2 gap-32 items-center">
          <div className="relative">
             <div className="p-4 border border-white/5 bg-white/5 backdrop-blur-3xl shadow-3xl">
               <img 
                 src="https://images.unsplash.com/photo-1540541338287-41700207dee6" 
                 alt="Heritage" 
                 className="w-full h-[700px] object-cover grayscale opacity-80" 
               />
             </div>
             <div className="absolute -bottom-16 -right-16 hidden lg:block">
                <div className="w-72 h-72 border border-gold/10 p-12 flex items-center justify-center bg-slate-950/90 backdrop-blur-2xl shadow-3xl">
                   <p className="editorial-label text-gold leading-relaxed text-center font-bold">The Heritage Selection<br/>Since 2000</p>
                </div>
             </div>
          </div>
          <div className="space-y-16">
             <div className="space-y-10">
                <h2 className="text-6xl font-heading text-white">The Vision</h2>
                <p className="text-slate-400 font-light text-xl leading-relaxed">
                  What started as a small local travel agency has evolved into a premier destination for luxury maritime travel in Bangladesh and beyond.
                </p>
                <p className="text-slate-400 font-light text-xl leading-relaxed text-balance">
                  We specialize in <span className="text-gold italic-accent font-normal">Curated Journeys</span>—a philosophy of travel that prioritizes immersion and sensory connection.
                </p>
             </div>
             
             <div className="grid grid-cols-1 gap-12 pt-10 border-t border-white/5">
                <div className="space-y-4">
                   <h4 className="editorial-label text-gold font-bold">Uncompromising Safety</h4>
                   <p className="text-lg text-slate-500 font-light leading-relaxed">We maintain the highest standards of safety and comfort for all our travelers.</p>
                </div>
                <div className="space-y-4">
                   <h4 className="editorial-label text-gold font-bold">Personalized Service</h4>
                   <p className="text-lg text-slate-500 font-light leading-relaxed">Every journey is tailored to your specific needs and preferences by our expert concierge team.</p>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-40 bg-bg-secondary">
        <div className="luxury-container">
          <div className="text-center space-y-4 mb-24">
            <span className="editorial-label">Our Experts</span>
            <h2 className="text-6xl font-heading text-white">Meet The Team</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {team.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="luxury-card group overflow-hidden text-center"
              >
                <div className="h-[400px] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
                  <img src={member.img} alt={member.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2s]" />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-heading text-white mb-2">{member.name}</h3>
                  <p className="text-[10px] text-gold uppercase tracking-[0.3em] font-bold">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Section */}
      <section className="py-40 bg-slate-950 border-t border-white/5">
        <div className="luxury-container text-center space-y-12 max-w-4xl">
          <h2 className="text-6xl md:text-8xl font-heading text-white leading-tight">Ready to Start <br /><span className="italic-accent text-gold">Your Story?</span></h2>
          <p className="text-slate-400 font-light text-xl leading-relaxed">
            Contact our dedicated concierge team today to begin planning your next unforgettable journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
            <PremiumButton className="h-16 px-16 text-xs">Book a Consultation</PremiumButton>
            <PremiumButton variant="outline" className="h-16 px-16 text-xs">Support Center</PremiumButton>
          </div>
        </div>
      </section>
    </div>
  );
}
