'use client';

import { Suspense, useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { useSearchParams } from 'next/navigation';
import { ChefHat } from 'lucide-react';

export default function DiningPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-slate-950" />}>
      <DiningPageContent />
    </Suspense>
  );
}

function DiningPageContent() {
  const searchParams = useSearchParams();
  const shipParam = searchParams.get('ship');
  const [selectedShip, setSelectedShip] = useState<'wave' | 'wave2'>(shipParam === 'wave2' ? 'wave2' : 'wave');

  useEffect(() => {
    if (shipParam === 'wave2' || shipParam === 'wave') {
      setSelectedShip(shipParam);
    }
  }, [shipParam]);

  const waveMenu = {
    ships: ['M.V. The Wave', 'The River Cruise'],
    days: [
      {
        day: '1st Day',
        breakfast: ['Plain Parata Vegetable', 'Cholar Dal Vhunna', 'Egg Omelet', 'Bread', 'Jelly', 'Butter', 'Cornflakes & Milk', 'Honey', 'Tea-Coffee'],
        snacks1: ['Fruit Cake', 'Banana', 'Shimgara', 'Tea-Coffee'],
        lunch: ['Plain Rice', 'Vetkey Fish', 'Chicken', 'Lau Chingri', 'Varta', 'Dal', 'Salad', 'Dessert'],
        snacks2: ['Chicken Corn Soup', 'Chicken Negates', 'Tea-coffee'],
        dinner: ['Plain Rice', 'Mutton Rejala (with Chujai)', 'Rup Chanda Fish', 'Vegetable', 'Vortha', 'Dal', 'Salad', 'Sweet']
      },
      {
        day: '2nd Day',
        breakfast: ['Bhuna Khichuri', 'Chicken Bhuna', 'Egg Curry', 'Begun Bhaji', 'Achar', 'Salad', 'Tea-Coffee'],
        snacks1: ['Green Coconut', 'Orange / Malta', 'Guava', 'Tea-Coffee'],
        lunch: ['Plain Rice', 'Fisha Fish', 'Sea Fish', 'Chicken', 'Vegetable', 'Varta', 'Dal', 'Salad', 'Dessert'],
        snacks2: ['Thai Soup', 'Fish Fry', 'French Fry', 'Tea-coffee'],
        dinner: ['Chennai Lucchi', 'Fried Rice', 'Chicken BBQ', 'Fish BBQ', 'Duck Rejala', 'Chola Dal', 'Raita Salad', 'Cold Drinks']
      },
      {
        day: '3rd Day',
        breakfast: ['Plain Parata', 'Egg Omelet', 'Vegetable', 'Dal Vhunna', 'Cornflakes & Milk', 'Tea-Coffee'],
        snacks1: ['Chicken Roll', 'Sweet', 'Tea-coffee'],
        lunch: ['Plain Polau', 'Beef Rajala (with Chuijal)', 'Golda Chingri', 'Murigonto (Mutton Head)', 'Salad', 'Doi'],
        snacks2: ['Noodles', 'Tea-coffee'],
        dinner: []
      }
    ]
  };

  const wave2Menu = {
    ships: ['M.V. The Wave 2'],
    days: [
      {
        day: '1st Day',
        morningSnacks: ['Dry Cake/Biscuit', 'Tea / Coffee'],
        breakfast: ['Plain Parata / Ruti', 'Vegetable', 'Khasir Kolija Bhuna', 'Egg Omelets/Boiled Egg', 'Bread', 'Jam & Jelly', 'Butter', 'Cornflakes & Milk', 'Honey', '2 Item Juice', 'Suji Halwa', 'Tea-Coffee'],
        snacks1: ['Fruits Cake', 'Banana', 'Chicken Shimgara', 'Tea-Coffee'],
        lunch: ['Plain Rice', 'Bhekti Fish Bhuna', 'Sea Fish Fry', 'Chicken Dopiaza', 'Lau Chingri', '3 Items Varta', 'Dal', 'Salad', 'Ice-Cream', 'Cold-Drinks', 'Tea-Coffee'],
        snacks2: ['Hot & Sour Soup', 'Chicken Negates', 'Potato Wedges', 'Tea-coffee'],
        dinner: {
          title: 'Grand Dinner',
          mainCourse: ['Mexican Fried Chicken', 'Chinese Vegetables', 'Chicken Sizzling', 'Prawn with Garlic Chili', 'Chicken Cashew Nut Salad'],
          dessert: ['Fruit Custard', 'Cold-Drinks', 'Tea-Coffee']
        }
      },
      {
        day: '2nd Day',
        morningSnacks: ['Dry Cake/Biscuit', 'Tea / Coffee'],
        breakfast: ['Chef\'s Special Dhuan Khichuri', 'Egg Curry', 'Chicken Bhuna', 'Begun Vaji', 'Achar', 'Green Salad', 'Juice 2 Item', 'Tea-Coffee'],
        snacks1: ['Apple', 'Green Coconut', 'Chicken Sandwich', 'Tea-Coffee'],
        lunch: ['Plain Rice', 'Fisha Fish', 'Rupchada Fish', 'Chicken Curry', 'Vegetable', '3 Items Varta', 'Dal', 'Salad', 'Dessert', 'Cold-Drinks', 'Tea-Coffee'],
        snacks2: ['Thai Soup', 'Fish Finger', 'French Fry', 'Tea-Coffee'],
        dinner: {
          title: 'Candle Light Dinner',
          mainCourse: ['Garlic Butter Nam', 'Mixed Fried Rice', 'Chicken BBQ', 'Spicy Sniper Fish BBQ', 'Duck Masala', 'Grilled Vegetables', 'Russian Salad'],
          dessert: ['Pudding', 'Soft Drinks', 'Tea-Coffee']
        }
      },
      {
        day: '3rd Day',
        morningSnacks: ['Dry Cake/Biscuit', 'Tea / Coffee'],
        breakfast: ['Plain Parata/Ruti', 'Vegetable', 'Solar Dal Bhuna', 'Mutton Nehari', 'Egg Omelets/Boiled Egg', 'Cornflakes & Milk', 'Honey', '2 Item Juice', 'Tea-Coffee'],
        snacks1: ['Chicken Roll', 'Mixed Fruits (Deshi)', 'Tea-Coffee'],
        lunch: ['Plain Pulao', 'Beef/Mutton Rezala (with Chui phal)', 'Golda Chingri', 'Murigonto (With Mutton Head)', 'Salad', 'Doi', 'Cold-Drinks', 'Tea-Coffee'],
        snacks2: ['Mixed Chowmning', 'Tea-Coffee'],
        dinner: undefined
      }
    ]
  };

  const MenuTable = ({ daysData, isWave2 }: { daysData: any[]; isWave2: boolean }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      className="overflow-x-auto"
    >
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gold/10 border-b-2 border-gold/40">
            <th className="border border-gold/20 px-6 py-4 text-left align-top font-heading text-gold uppercase text-sm">Day</th>
            {isWave2 && <th className="border border-gold/20 px-6 py-4 text-left align-top font-heading text-gold uppercase text-sm">Morning Snacks</th>}
            <th className="border border-gold/20 px-6 py-4 text-left align-top font-heading text-gold uppercase text-sm">Breakfast</th>
            <th className="border border-gold/20 px-6 py-4 text-left align-top font-heading text-gold uppercase text-sm">Snacks</th>
            <th className="border border-gold/20 px-6 py-4 text-left align-top font-heading text-gold uppercase text-sm">Lunch</th>
            <th className="border border-gold/20 px-6 py-4 text-left align-top font-heading text-gold uppercase text-sm">Tea/Coffee</th>
            <th className="border border-gold/20 px-6 py-4 text-left align-top font-heading text-gold uppercase text-sm">Dinner</th>
          </tr>
        </thead>
        <tbody>
          {daysData.map((dayData, dayIdx) => (
            <tr key={dayIdx} className="border-b border-gold/10 hover:bg-white/5 transition-colors">
              <td className="border border-gold/20 px-6 py-4 font-heading text-gold sticky left-0 bg-slate-900 align-top">
                {dayData.day}
              </td>
              {isWave2 && (
                <td className="border border-gold/20 px-6 py-4 text-slate-300 text-sm align-top">
                  <ul className="space-y-1">
                    {dayData.morningSnacks?.map((item: string, idx: number) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-gold">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </td>
              )}
              <td className="border border-gold/20 px-6 py-4 text-slate-300 text-sm align-top">
                <ul className="space-y-1">
                  {dayData.breakfast?.map((item: string, idx: number) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-gold">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </td>
              <td className="border border-gold/20 px-6 py-4 text-slate-300 text-sm align-top">
                <ul className="space-y-1">
                  {dayData.snacks1?.map((item: string, idx: number) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-gold">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </td>
              <td className="border border-gold/20 px-6 py-4 text-slate-300 text-sm align-top">
                <ul className="space-y-1">
                  {dayData.lunch?.map((item: string, idx: number) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-gold">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </td>
              <td className="border border-gold/20 px-6 py-4 text-slate-300 text-sm align-top">
                <ul className="space-y-1">
                  {dayData.snacks2?.map((item: string, idx: number) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-gold">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </td>
              <td className="border border-gold/20 px-6 py-4 text-slate-300 text-sm align-top">
                {dayData.dinner ? (
                  typeof dayData.dinner === 'object' && dayData.dinner.title ? (
                    <div className="space-y-2">
                      <p className="font-heading text-gold text-xs uppercase">{dayData.dinner.title}</p>
                      <ul className="space-y-1">
                        {dayData.dinner.mainCourse?.map((item: string, idx: number) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-gold">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                      <p className="font-heading text-gold text-xs uppercase mt-2">Dessert</p>
                      <ul className="space-y-1">
                        {dayData.dinner.dessert?.map((item: string, idx: number) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-gold">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : (
                    <ul className="space-y-1">
                      {dayData.dinner?.map((item: string, idx: number) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-gold">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )
                ) : (
                  <span className="text-slate-500 text-xs">—</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </motion.div>
  );

  const currentMenu = selectedShip === 'wave' ? waveMenu : wave2Menu;

  return (
    <div className="min-h-screen bg-slate-950">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center bg-gradient-to-b from-slate-900 to-slate-950 border-b border-white/5 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/2 w-96 h-96 bg-gold/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl translate-y-1/2" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center max-w-3xl mx-auto px-4"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <ChefHat className="text-gold" size={32} />
            <p className="editorial-label">Culinary Excellence</p>
          </div>
          <h1 className="text-5xl md:text-6xl font-heading text-white mb-6">
            Our Dining Experience
          </h1>
          <p className="text-lg text-slate-300">
            Discover our carefully curated menus featuring exquisite dishes and international cuisine prepared by our expert chefs.
          </p>
        </motion.div>
      </section>

      {/* Menu Selection */}
      <section className="luxury-container py-12">
        <div className="flex gap-4 justify-center flex-wrap">
          <button
            onClick={() => setSelectedShip('wave')}
            className={`px-6 py-3 rounded-lg font-heading uppercase tracking-widest transition-all ${
              selectedShip === 'wave'
                ? 'bg-gold/20 border border-gold/40 text-gold'
                : 'bg-white/5 border border-white/10 text-slate-300 hover:bg-white/10'
            }`}
          >
            M.V. The Wave & River Cruise
          </button>
          <button
            onClick={() => setSelectedShip('wave2')}
            className={`px-6 py-3 rounded-lg font-heading uppercase tracking-widest transition-all ${
              selectedShip === 'wave2'
                ? 'bg-gold/20 border border-gold/40 text-gold'
                : 'bg-white/5 border border-white/10 text-slate-300 hover:bg-white/10'
            }`}
          >
            M.V. The Wave 2
          </button>
        </div>
      </section>

      {/* Menus */}
      <section className="luxury-container py-16 space-y-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading text-white mb-2">
            {selectedShip === 'wave' ? 'Standard Food Menu' : 'Premium Food Menu'}
          </h2>
          <p className="text-slate-400">
            {currentMenu.ships.join(' & ')}
          </p>
        </div>

        <MenuTable daysData={currentMenu.days} isWave2={selectedShip === 'wave2'} />

        {/* Disclaimer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 p-8 bg-gold/10 border border-gold/20 rounded-lg text-center"
        >
          <p className="text-gold font-heading text-lg">
            ★ Food Menu can be changed as per Demand only for Corporate Tours
          </p>
        </motion.div>
      </section>
    </div>
  );
}
