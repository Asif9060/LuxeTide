'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import { User, Mail, Phone, Lock, Compass } from 'lucide-react';
import { PremiumInput, PremiumButton, PremiumSelect } from '@/src/components/PremiumUI';

export default function SignupPage() {
  return (
    <div className="bg-slate-950 min-h-[calc(100vh-5rem)] py-28">
      <div className="luxury-container grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        <div className="lg:col-span-5 space-y-10">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="editorial-label"
          >
            Create Account
          </motion.span>
          <h1 className="text-5xl md:text-7xl font-heading text-white leading-tight">
            Begin a new <span className="italic-accent text-gold">expedition</span>
          </h1>
          <p className="text-slate-400 text-lg leading-relaxed">
            Join LuxeTide to save itineraries, receive priority updates, and manage every detail of your journey.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-4 text-slate-300">
              <Compass className="w-5 h-5 text-gold" />
              <span className="text-sm uppercase tracking-[0.3em]">Personalized voyages</span>
            </div>
            <div className="flex items-center gap-4 text-slate-300">
              <User className="w-5 h-5 text-gold" />
              <span className="text-sm uppercase tracking-[0.3em]">Dedicated travel concierge</span>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7"
        >
          <div className="bg-slate-900/60 border border-white/5 shadow-2xl p-10 md:p-16 relative overflow-hidden">
            <div className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full bg-gold/10 blur-[100px]" />
            <div className="relative space-y-10">
              <div>
                <p className="editorial-label">Sign Up</p>
                <h2 className="text-3xl md:text-4xl text-white font-heading">Reserve your profile</h2>
                <p className="text-slate-400 text-sm uppercase tracking-[0.3em] mt-2">Luxury access in minutes</p>
              </div>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <label className="editorial-label">Full Name</label>
                    <div className="flex items-center gap-4 bg-white/5 border border-white/10 px-4">
                      <User className="w-5 h-5 text-gold" />
                      <PremiumInput
                        type="text"
                        placeholder="Your Name"
                        className="w-full h-14 bg-transparent border-0 px-0"
                      />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="editorial-label">Phone</label>
                    <div className="flex items-center gap-4 bg-white/5 border border-white/10 px-4">
                      <Phone className="w-5 h-5 text-gold" />
                      <PremiumInput
                        type="tel"
                        placeholder="+880 1XXX XXX XXX"
                        className="w-full h-14 bg-transparent border-0 px-0"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="editorial-label">Email Address</label>
                  <div className="flex items-center gap-4 bg-white/5 border border-white/10 px-4">
                    <Mail className="w-5 h-5 text-gold" />
                    <PremiumInput
                      type="email"
                      placeholder="email@address.com"
                      className="w-full h-14 bg-transparent border-0 px-0"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <label className="editorial-label">Password</label>
                    <div className="flex items-center gap-4 bg-white/5 border border-white/10 px-4">
                      <Lock className="w-5 h-5 text-gold" />
                      <PremiumInput
                        type="password"
                        placeholder="Create a password"
                        className="w-full h-14 bg-transparent border-0 px-0"
                      />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <label className="editorial-label">Confirm Password</label>
                    <div className="flex items-center gap-4 bg-white/5 border border-white/10 px-4">
                      <Lock className="w-5 h-5 text-gold" />
                      <PremiumInput
                        type="password"
                        placeholder="Confirm password"
                        className="w-full h-14 bg-transparent border-0 px-0"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="editorial-label">Preferred Journey</label>
                  <PremiumSelect className="w-full">
                    <option value="">Select destination focus</option>
                    <option value="sundarbans">Sundarbans Expedition</option>
                    <option value="saint-martins">Saint Martin's Island</option>
                    <option value="coxs-bazar">Cox's Bazar Retreat</option>
                    <option value="custom">Custom Journey</option>
                  </PremiumSelect>
                </div>

                <div className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-slate-400">
                  <input type="checkbox" className="w-4 h-4 accent-gold" />
                  I agree to the LuxeTide terms
                </div>

                <PremiumButton className="w-full h-16">Create Account</PremiumButton>
              </form>

              <div className="text-center text-xs uppercase tracking-[0.3em] text-slate-500">
                Already have an account?{' '}
                <Link href="/auth/login" className="text-gold hover:text-white transition-all">
                  Sign in
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
