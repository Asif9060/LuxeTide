'use client';

import { motion } from 'motion/react';

export default function Gallery() {
  const images = [
    'https://images.unsplash.com/photo-1544735716-392fe2489ffa',
    'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4',
    'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
    'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff',
    'https://images.unsplash.com/photo-1534190239940-9ba8944ef261',
    'https://images.unsplash.com/photo-1776993298456-98c71c0e177e',
    'https://images.pexels.com/photos/12652920/pexels-photo-12652920.jpeg',
    'https://images.pexels.com/photos/32609063/pexels-photo-32609063.jpeg',
    'https://images.unsplash.com/photo-1540541338287-41700207dee6',
    'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4',
  ];

  return (
    <div className="py-32 bg-slate-950 min-h-screen">
      <div className="luxury-container">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="text-left space-y-6 mb-32 max-w-2xl"
        >
          <span className="editorial-label text-gold">The Visual Record</span>
          <h1 className="text-6xl md:text-9xl font-heading text-white leading-none">Photo <br /><span className="italic-accent text-gold">Gallery</span></h1>
          <p className="text-slate-400 font-light text-xl leading-relaxed">A glimpse into the life of a voyager. Unrehearsed elegance and curated moments across the seas.</p>
        </motion.div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className="relative overflow-hidden group luxury-card"
            >
               <img 
                 src={`${img}?auto=format&fit=crop&q=80&w=800`} 
                 alt="Gallery" 
                 className="w-full h-auto object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-[1.5s] cursor-pointer scale-105 group-hover:scale-100" 
               />
               <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-8">
                  <span className="editorial-label text-white border-b border-white pb-1">Enlarge Experience</span>
               </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
