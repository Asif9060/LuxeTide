'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import { Mail, Lock, ShieldCheck } from 'lucide-react';
import { PremiumInput, PremiumButton } from '@/src/components/PremiumUI';

export default function LoginPage() {
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
            Member Access
          </motion.span>
          <h1 className="text-5xl md:text-7xl font-heading text-white leading-tight">
            Return to your <span className="italic-accent text-gold">voyage</span>
          </h1>
          <p className="text-slate-400 text-lg leading-relaxed">
            Sign in to manage upcoming journeys, review reservations, and unlock private offers curated by LuxeTide.
          </p>
          <div className="space-y-4">
            <div className="flex items-center gap-4 text-slate-300">
              <ShieldCheck className="w-5 h-5 text-gold" />
              <span className="text-sm uppercase tracking-[0.3em]">Secure access powered by Supabase</span>
            </div>
            <div className="flex items-center gap-4 text-slate-300">
              <Mail className="w-5 h-5 text-gold" />
              <span className="text-sm uppercase tracking-[0.3em]">Instant booking confirmations</span>
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
            <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-gold/10 blur-[100px]" />
            <div className="relative space-y-10">
              <div>
                <p className="editorial-label">Login</p>
                <h2 className="text-3xl md:text-4xl text-white font-heading">Welcome back</h2>
                <p className="text-slate-400 text-sm uppercase tracking-[0.3em] mt-2">Access your LuxeTide portal</p>
              </div>

              <form className="space-y-6">
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

                <div className="space-y-3">
                  <label className="editorial-label">Password</label>
                  <div className="flex items-center gap-4 bg-white/5 border border-white/10 px-4">
                    <Lock className="w-5 h-5 text-gold" />
                    <PremiumInput
                      type="password"
                      placeholder="password"
                      className="w-full h-14 bg-transparent border-0 px-0"
                    />
                  </div>
                </div>

                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-xs uppercase tracking-[0.3em] text-slate-400">
                  <label className="flex items-center gap-3">
                    <input type="checkbox" className="w-4 h-4 accent-gold" />
                    Remember me
                  </label>
                  <Link href="/auth/reset" className="hover:text-gold transition-all">
                    Forgot password
                  </Link>
                </div>

                <PremiumButton className="w-full h-16">Sign In</PremiumButton>
              </form>

              <div className="text-center text-xs uppercase tracking-[0.3em] text-slate-500">
                New to LuxeTide?{' '}
                <Link href="/auth/signup" className="text-gold hover:text-white transition-all">
                  Create an account
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
