'use client';

import { useState } from 'react';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import FadeInUp from '../components/FadeInUp';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../components/ThemeProvider';

const categories = ['All', 'Portrait', 'Landscape', 'Nature', 'Architecture', 'Street', 'Fashion', 'Wedding'];
const allPhotos = [
  { id: 1, src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&q=80", category: "Portrait", title: "Portrait Elegance" },
  { id: 2, src: "https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?w=800&q=80", category: "Architecture", title: "Urban Structures" },
  { id: 3, src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&q=80", category: "Portrait", title: "Natural Beauty" },
  { id: 4, src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&q=80", category: "Landscape", title: "Mountain Vista" },
  { id: 5, src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80", category: "Nature", title: "Forest Pathway" },
  { id: 6, src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&q=80", category: "Nature", title: "Serene Lake" },
  { id: 7, src: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=80", category: "Fashion", title: "Style Statement" },
  { id: 8, src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80", category: "Wedding", title: "Special Moment" },
  { id: 9, src: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=800&q=80", category: "Street", title: "City Life" },
  { id: 10, src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80", category: "Portrait", title: "Professional Headshot" },
  { id: 11, src: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&q=80", category: "Landscape", title: "Sunset Horizon" },
  { id: 12, src: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=800&q=80", category: "Nature", title: "Misty Morning" },
  { id: 13, src: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800&q=80", category: "Street", title: "Urban Exploration" },
  { id: 14, src: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&q=80", category: "Fashion", title: "Runway Ready" },
  { id: 15, src: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800&q=80", category: "Portrait", title: "Candid Portrait" },
  { id: 16, src: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=800&q=80", category: "Architecture", title: "Modern Design" },
  { id: 17, src: "https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?w=800&q=80", category: "Landscape", title: "Ocean Waves" },
  { id: 18, src: "https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=800&q=80", category: "Nature", title: "Wilderness" },
  { id: 19, src: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=800&q=80", category: "Wedding", title: "Forever Together" },
  { id: 20, src: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&q=80", category: "Portrait", title: "Studio Portrait" },
  { id: 21, src: "https://images.unsplash.com/photo-1514565131-fce0801e5785?w=800&q=80", category: "Street", title: "City Lights" },
  { id: 22, src: "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=800&q=80", category: "Architecture", title: "Geometric Lines" },
  { id: 23, src: "https://images.unsplash.com/photo-1464207687429-7505649dae38?w=800&q=80", category: "Fashion", title: "Editorial" },
  { id: 24, src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80", category: "Landscape", title: "Mountain Peak" },
];

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const { theme } = useTheme();

  const filteredPhotos = selectedCategory === 'All' 
    ? allPhotos 
    : allPhotos.filter(photo => photo.category === selectedCategory);

  return (
    <main className={`min-h-screen transition-colors duration-300 ${
      theme === 'dark' ? 'bg-[#0a0a0a] text-white' : 'bg-white text-gray-900'
    }`}>
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px] -z-10"></div>
        <div className="max-w-7xl mx-auto text-center">
          <FadeInUp>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tighter">Gallery</h1>
          </FadeInUp>
          <FadeInUp delay={0.2}>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Explore my collection of photographic works across different styles and genres.
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="px-6 mb-12">
        <div className="max-w-7xl mx-auto">
          <FadeInUp>
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-blue-500 text-white scale-105'
                      : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="px-6 pb-24">
        <div className="max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              {filteredPhotos.map((photo, index) => (
                <motion.div
                  key={photo.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  onHoverStart={() => setHoveredId(photo.id)}
                  onHoverEnd={() => setHoveredId(null)}
                  className="group relative aspect-[4/5] overflow-hidden rounded-xl bg-gray-900 cursor-pointer"
                >
                  <Image
                    src={photo.src}
                    alt={photo.title}
                    fill
                    className="object-cover transition-all duration-700 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-opacity duration-500 ${
                    hoveredId === photo.id ? 'opacity-100' : 'opacity-0'
                  }`}>
                    <div className={`absolute bottom-0 left-0 p-6 transition-transform duration-500 ${
                      hoveredId === photo.id ? 'translate-y-0' : 'translate-y-4'
                    }`}>
                      <p className="text-blue-400 text-sm font-medium uppercase tracking-wider mb-2">
                        {photo.category}
                      </p>
                      <h3 className="text-xl font-bold text-white">{photo.title}</h3>
                    </div>
                  </div>
                  <motion.div
                    className="absolute inset-0 border-2 border-blue-400/0 group-hover:border-blue-400/50 rounded-xl transition-all duration-500"
                    whileHover={{ borderColor: 'rgba(96, 165, 250, 0.5)' }}
                  />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </main>
  );
}

