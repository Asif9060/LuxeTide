'use client';

import { motion } from 'motion/react';
import { PremiumInput, PremiumButton } from '@/src/components/PremiumUI';
import { Mail, Phone, MapPin, MessageSquare } from 'lucide-react';

export default function Contact() {
  return (
    <div className="py-32 bg-slate-950">
      <div className="luxury-container grid grid-cols-1 md:grid-cols-12 gap-32">
        {/* Left: Info */}
        <div className="md:col-span-5 space-y-16">
          <div className="space-y-8">
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="editorial-label"
            >
              Reach Out
            </motion.span>
            <h1 className="text-6xl md:text-9xl font-heading text-white leading-[0.95]">Contact <br /><span className="italic-accent text-gold">Us</span></h1>
            <p className="text-slate-400 font-light text-xl leading-relaxed">
              Our travel specialists are ready to help you plan your next journey. Whether you have questions about a package or need a custom itinerary.
            </p>
          </div>

          <div className="space-y-10 pt-4">
            <div className="flex items-start gap-8 group cursor-pointer">
              <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-full flex items-center justify-center group-hover:border-gold transition-all duration-500 shadow-xl">
                <Phone className="w-6 h-6 text-gold" />
              </div>
              <div className="space-y-2">
                <p className="text-[10px] uppercase tracking-[0.3em] text-slate-500 font-bold">Phone Number</p>
                <p className="text-white text-2xl font-heading tracking-wide">+880 1234 567 890</p>
              </div>
            </div>

            <div className="flex items-start gap-8 group cursor-pointer">
              <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-full flex items-center justify-center group-hover:border-gold transition-all duration-500 shadow-xl">
                <Mail className="w-6 h-6 text-gold" />
              </div>
              <div className="space-y-2">
                <p className="text-[10px] uppercase tracking-[0.3em] text-slate-500 font-bold">Email Address</p>
                <p className="text-white text-2xl font-heading tracking-wide">info@luxetide.com</p>
              </div>
            </div>

            <div className="flex items-start gap-8 group cursor-pointer">
              <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-full flex items-center justify-center group-hover:border-gold transition-all duration-500 shadow-xl">
                <MapPin className="w-6 h-6 text-gold" />
              </div>
              <div className="space-y-2">
                <p className="text-[10px] uppercase tracking-[0.3em] text-slate-500 font-bold">Office Location</p>
                <p className="text-white text-xl font-heading font-light leading-snug">Elite District, Gulshan-2<br />Dhaka, Bangladesh</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Form */}
        <div className="md:col-span-7">
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col bg-slate-900 shadow-3xl overflow-hidden relative"
          >
            <div className="p-10 md:p-20 space-y-12 relative z-10">
              <div className="flex items-center gap-6 border-b border-white/5 pb-10">
                <MessageSquare className="w-12 h-12 text-gold opacity-30" />
                <div className="space-y-2">
                  <h3 className="text-3xl font-heading text-white">Reservation Inquiry</h3>
                  <p className="text-[10px] text-slate-500 uppercase tracking-[0.3em] font-bold">Responses within 2 business hours</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-3">
                  <label className="editorial-label">Full Name</label>
                  <PremiumInput placeholder="Your Name" className="w-full h-16" />
                </div>
                <div className="space-y-3">
                  <label className="editorial-label">Email Address</label>
                  <PremiumInput placeholder="email@address.com" className="w-full h-16" />
                </div>
                <div className="space-y-3 md:col-span-2">
                  <label className="editorial-label">Preferred Tour</label>
                  <PremiumInput placeholder="e.g., Sundarbans Luxury Expedition" className="w-full h-16" />
                </div>
                <div className="space-y-3 md:col-span-2">
                  <label className="editorial-label">Special Requests</label>
                  <textarea 
                    className="w-full bg-white/5 border border-white/10 p-6 min-h-48 text-white text-lg font-light focus:outline-none focus:border-gold/50 transition-all placeholder:text-slate-700" 
                    placeholder="Tell us about your travel plans..." 
                  />
                </div>
              </div>

              <PremiumButton className="w-full h-20 text-xs font-bold tracking-[0.4em]">
                Send Message
              </PremiumButton>

              <p className="text-center text-[10px] text-slate-600 uppercase tracking-[0.3em] font-bold">
                Your data is stored securely in accordance with our privacy policy.
              </p>
            </div>
            <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-gold/5 blur-[120px] rounded-full"></div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
