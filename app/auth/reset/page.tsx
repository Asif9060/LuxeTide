'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import { Mail, KeyRound } from 'lucide-react';
import { PremiumInput, PremiumButton } from '@/src/components/PremiumUI';

export default function ResetPage() {
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
            Password Reset
          </motion.span>
          <h1 className="text-5xl md:text-7xl font-heading text-white leading-tight">
            Restore your <span className="italic-accent text-gold">access</span>
          </h1>
          <p className="text-slate-400 text-lg leading-relaxed">
            Enter your email and we will send a secure reset link to confirm your identity.
          </p>
          <div className="flex items-center gap-4 text-slate-300">
            <KeyRound className="w-5 h-5 text-gold" />
            <span className="text-sm uppercase tracking-[0.3em]">Reset link expires in 30 minutes</span>
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
                <p className="editorial-label">Reset</p>
                <h2 className="text-3xl md:text-4xl text-white font-heading">Request a new password</h2>
                <p className="text-slate-400 text-sm uppercase tracking-[0.3em] mt-2">We will email your recovery link</p>
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

                <PremiumButton className="w-full h-16">Send Reset Link</PremiumButton>
              </form>

              <div className="text-center text-xs uppercase tracking-[0.3em] text-slate-500">
                Remembered your password?{' '}
                <Link href="/auth/login" className="text-gold hover:text-white transition-all">
                  Back to login
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
