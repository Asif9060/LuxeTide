'use client';

import React from 'react';
import { motion } from 'motion/react';
import { AlertCircle, CreditCard, DollarSign, CheckCircle2 } from 'lucide-react';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const slideInLeft = {
  hidden: { opacity: 0, x: -50 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

const slideInRight = {
  hidden: { opacity: 0, x: 50 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

const bankAccounts = [
  {
    name: 'Holidays Shipping Lines',
    accounts: [
      {
        accountNumber: '1503089245001',
        routingNumber: '225471548',
        bankName: 'City Bank, Khulna',
      },
      {
        accountNumber: '2801204719991001',
        routingNumber: '0604471545',
        bankName: 'Brac Bank, KDA Avenue Khulna',
      },
      {
        accountNumber: '0846901038231',
        routingNumber: '1754772684',
        bankName: 'Jamuna Bank, Khulna',
      },
      {
        accountNumber: '0886901038231',
        routingNumber: '1754772684',
        bankName: 'Pubali Bank, Upper Jessore Road Brunch Khulna',
      },
    ],
  },
  {
    name: 'Sundarban holidays Tours & Travels',
    accounts: [
      {
        accountNumber: '1111000968812',
        routingNumber: '140472622',
        bankName: 'Marcantile Bank, Khulna',
      },
    ],
  },
];

const cancellationPolicy = [
  {
    days: 'Before 40 Days',
    groupBooking: '10%',
    singleBooking: '8%',
  },
  {
    days: 'Between 28 & 39 Days',
    groupBooking: '40%',
    singleBooking: '15%',
  },
  {
    days: 'Between 19 & 27 Days',
    groupBooking: '50%',
    singleBooking: '25%',
  },
  {
    days: 'Between 10 & 18 Days',
    groupBooking: '60%',
    singleBooking: '50%',
  },
  {
    days: 'Between 4 & 8 Days',
    groupBooking: '80%',
    singleBooking: '80%',
  },
  {
    days: 'Less Than 4 Days',
    groupBooking: '100%',
    singleBooking: '100%',
  },
];

export default function PolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 pt-32 pb-20">
      {/* Header */}
      <motion.div
        className="luxury-container text-center mb-20"
        initial="hidden"
        animate="show"
        variants={container}
      >
        <motion.div variants={item} className="inline-block mb-4">
          <div className="px-6 py-2 bg-gold/10 border border-gold/30 rounded-full">
            <span className="text-gold font-bold text-sm tracking-[0.15em] uppercase">Our Policies</span>
          </div>
        </motion.div>

        <motion.h1
          variants={item}
          className="text-5xl md:text-6xl font-heading font-bold text-white mb-6 tracking-wide"
        >
          Payment & Cancellation <span className="text-gold">Policy</span>
        </motion.h1>

        <motion.p
          variants={item}
          className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed"
        >
          Clear, transparent policies designed to ensure smooth and hassle-free cruise bookings
        </motion.p>
      </motion.div>

      {/* Bank Account Details Section */}
      <motion.div
        className="luxury-container mb-24"
        initial="hidden"
        animate="show"
        variants={container}
      >
        <motion.div variants={slideInRight} className="flex items-center gap-4 mb-12">
          <div className="p-3 bg-gold/10 rounded-lg border border-gold/30">
            <CreditCard className="text-gold" size={28} />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Bank Account Details</h2>
        </motion.div>

        <div className="space-y-8">
          {bankAccounts.map((company, companyIndex) => (
            <motion.div
              key={companyIndex}
              variants={item}
              className="bg-gradient-to-br from-slate-800/40 to-slate-900/40 rounded-2xl border border-white/5 backdrop-blur-sm p-8 overflow-hidden"
            >
              {/* Header */}
              <motion.div
                className="mb-8 pb-6 border-b border-gold/30"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: companyIndex * 0.2 }}
              >
                <h3 className="text-2xl font-bold text-gold">{company.name}</h3>
              </motion.div>

              {/* Accounts Grid */}
              <div className="grid md:grid-cols-2 gap-6">
                {company.accounts.map((account, accountIndex) => (
                  <motion.div
                    key={accountIndex}
                    className="bg-slate-900/50 rounded-xl p-6 border border-slate-700/50 hover:border-gold/50 transition-colors group"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: (companyIndex * 0.2 + accountIndex * 0.1) }}
                    whileHover={{
                      boxShadow: '0 0 30px rgba(212, 175, 55, 0.15)',
                      borderColor: 'rgba(212, 175, 55, 0.5)',
                    }}
                  >
                    {/* Account Number */}
                    <div className="mb-4 pb-4 border-b border-slate-700/50">
                      <span className="text-xs text-slate-400 uppercase tracking-widest font-bold">Account Number</span>
                      <motion.p
                        className="text-lg font-mono text-gold font-bold mt-2 break-all"
                        whileHover={{ scale: 1.02 }}
                      >
                        {account.accountNumber}
                      </motion.p>
                    </div>

                    {/* Routing Number */}
                    <div className="mb-4 pb-4 border-b border-slate-700/50">
                      <span className="text-xs text-slate-400 uppercase tracking-widest font-bold">Routing Number</span>
                      <motion.p
                        className="text-lg font-mono text-blue-300 font-bold mt-2"
                        whileHover={{ scale: 1.02 }}
                      >
                        {account.routingNumber}
                      </motion.p>
                    </div>

                    {/* Bank Name */}
                    <div>
                      <span className="text-xs text-slate-400 uppercase tracking-widest font-bold">Bank Name</span>
                      <p className="text-sm text-slate-200 mt-2 group-hover:text-white transition-colors">
                        {account.bankName}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Info Box */}
        <motion.div
          variants={item}
          className="mt-12 p-8 bg-gradient-to-r from-gold/10 to-blue-500/10 border border-gold/30 rounded-2xl"
        >
          <div className="flex gap-4">
            <CheckCircle2 className="text-gold flex-shrink-0" size={28} />
            <div>
              <h4 className="text-xl font-bold text-white mb-2">Secure Payment</h4>
              <p className="text-slate-200">
                All bank transfers are secure and processed by authorized financial institutions. Keep your transfer receipt for reference and confirmation purposes.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Call Now and Book Now Buttons */}
        <motion.div
          variants={item}
          className="mt-12 flex flex-col sm:flex-row gap-6 justify-center"
        >
          <motion.button
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold rounded-lg shadow-lg hover:shadow-blue-500/50 transition-all flex items-center justify-center gap-3"
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(37, 99, 235, 0.6)' }}
            whileTap={{ scale: 0.98 }}
          >
            <span>📞</span>
            Call Now
          </motion.button>
          <motion.button
            className="px-8 py-4 bg-gradient-to-r from-gold to-yellow-500 text-slate-950 font-bold rounded-lg shadow-lg hover:shadow-gold/60 transition-all flex items-center justify-center gap-3"
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(212, 175, 55, 0.6)' }}
            whileTap={{ scale: 0.98 }}
          >
            <span>✈️</span>
            Book Now
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Payment Terms Section */}
      <motion.div
        className="luxury-container mb-24"
        initial="hidden"
        animate="show"
        variants={container}
      >
        <motion.div variants={slideInLeft} className="flex items-center gap-4 mb-8">
          <div className="p-3 bg-gold/10 rounded-lg border border-gold/30">
            <DollarSign className="text-gold" size={28} />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Payment Terms</h2>
        </motion.div>

        <motion.div
          variants={item}
          className="grid md:grid-cols-2 gap-8 bg-gradient-to-br from-slate-800/30 to-slate-900/30 p-8 rounded-2xl border border-white/5 backdrop-blur-sm"
        >
          <div className="flex items-start gap-4">
            <div className="p-3 bg-blue-500/20 rounded-lg border border-blue-500/30 min-w-fit">
              <CreditCard className="text-blue-400" size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Advance Payment</h3>
              <p className="text-slate-300 text-lg">
                <span className="text-gold font-bold">30-50%</span> of the total price required to confirm your booking
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="p-3 bg-emerald-500/20 rounded-lg border border-emerald-500/30 min-w-fit">
              <CheckCircle2 className="text-emerald-400" size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Final Payment</h3>
              <p className="text-slate-300 text-lg">
                Remaining balance must be paid <span className="text-gold font-bold">3 days before</span> your journey
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Cancellation Policy Table */}
      <motion.div
        className="luxury-container mb-24"
        initial="hidden"
        animate="show"
        variants={container}
      >
        <motion.div variants={slideInLeft} className="flex items-center gap-4 mb-8">
          <div className="p-3 bg-gold/10 rounded-lg border border-gold/30">
            <AlertCircle className="text-gold" size={28} />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Cancellation Policy</h2>
        </motion.div>

        <motion.div variants={item} className="overflow-x-auto">
          <div className="min-w-full bg-gradient-to-br from-slate-800/40 to-slate-900/40 rounded-2xl border border-white/5 backdrop-blur-sm overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="bg-gradient-to-r from-gold/20 via-gold/10 to-transparent border-b border-gold/30">
                  <th className="px-6 py-4 text-left">
                    <span className="text-gold font-bold text-sm tracking-widest uppercase">If Your Cancelled</span>
                  </th>
                  <th className="px-6 py-4 text-left">
                    <span className="text-blue-300 font-bold text-sm tracking-widest uppercase">Group/Exclusive Booking</span>
                  </th>
                  <th className="px-6 py-4 text-left">
                    <span className="text-emerald-300 font-bold text-sm tracking-widest uppercase">Single Booking</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {cancellationPolicy.map((row, index) => (
                  <motion.tr
                    key={index}
                    className="border-b border-white/5 hover:bg-white/5 transition-colors"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <td className="px-6 py-4">
                      <span className="font-semibold text-white">{row.days}</span>
                    </td>
                    <td className="px-6 py-4">
                      <motion.span
                        className="inline-block px-3 py-1 bg-blue-500/20 border border-blue-500/40 rounded-lg text-blue-200 font-bold"
                        whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(59, 130, 246, 0.5)' }}
                      >
                        {row.groupBooking}
                      </motion.span>
                    </td>
                    <td className="px-6 py-4">
                      <motion.span
                        className="inline-block px-3 py-1 bg-emerald-500/20 border border-emerald-500/40 rounded-lg text-emerald-200 font-bold"
                        whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(16, 185, 129, 0.5)' }}
                      >
                        {row.singleBooking}
                      </motion.span>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        <motion.div
          variants={item}
          className="mt-8 p-6 bg-red-500/5 border border-red-500/30 rounded-xl flex gap-4"
        >
          <AlertCircle className="text-red-400 flex-shrink-0" size={24} />
          <p className="text-slate-200">
            <span className="text-red-300 font-bold">Important:</span> Cancellations must be made via official channels. Refunds will be processed after deducting the applicable cancellation fee.
          </p>
        </motion.div>
      </motion.div>

      {/* Contact Support */}
      <motion.div
        className="luxury-container mt-20 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <p className="text-slate-300 mb-6">
          Have questions about our policies?
        </p>
        <motion.button
          className="px-8 py-3 bg-gold text-slate-950 font-bold rounded-lg hover:shadow-lg hover:shadow-gold/50 transition-all"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
        >
          Contact Support
        </motion.button>
      </motion.div>
    </div>
  );
}
