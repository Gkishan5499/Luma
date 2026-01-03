'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { FaCamera, FaPaw, FaLeaf, FaGlobeAmericas } from 'react-icons/fa';
import { useTheme } from './ThemeProvider';

// Define animation variants outside component for better performance
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const } },
};

// Hero images array - wildlife/otter themed
const heroImages = [
  {
    src: "https://images.unsplash.com/photo-1633685528691-17b205c7701e?q=80&w=687&auto=format&fit=crop",
    alt: "Sea otter portrait"
  },
  {
    src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80",
    alt: "Swimming otter"
  },
  {
    src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&q=80",
    alt: "Otter group"
  },
  {
    src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&q=80",
    alt: "Wildlife photography"
  },
  {
    src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80",
    alt: "Nature scene"
  },
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { theme } = useTheme();

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, []);
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 relative overflow-hidden pt-32 pb-20 lg:pt-24 lg:pb-0">
      {/* --- Enhanced Animated Background (Theme: Water & Nature) --- */}
      <div className="absolute inset-0 -z-10 select-none">
        {/* Main blue/water orb */}
        <motion.div 
          className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[140px]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
            x: [0, 30, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Teal/Aqua orb for shallow water feel */}
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-teal-500/15 rounded-full blur-[120px]"
          animate={{
            scale: [1, 1.3, 1],
            y: [0, 40, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        {/* Subtle green hint for nature/kelp */}
        <motion.div 
          className="absolute top-1/2 right-1/3 w-[300px] h-[300px] bg-emerald-500/10 rounded-full blur-[100px]"
          animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
      </div>

      {/* --- Floating Otter Cards --- */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden -z-5 hidden md:block">
        {/* Card 1: Swimming Otter */}
        <motion.div
          className="absolute top-24 right-[5%] lg:right-[10%] w-48 h-64 rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm opacity-60 shadow-lg"
          animate={{ y: [0, -25, 0], rotate: [0, 3, -3, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        >
          <Image
            src="https://images.unsplash.com/photo-1633685528691-17b205c7701e?q=80&w=687&auto=format&fit=crop" // Swimming otter
            alt="Swimming otter"
            fill
            className="object-cover"
          />
        </motion.div>
        {/* Card 2: Otter Raft/Group */}
        <motion.div
          className="absolute bottom-32 left-[2%] lg:left-[5%] w-56 h-40 rounded-xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm opacity-50 shadow-lg"
          animate={{ y: [0, 20, 0], rotate: [0, -2, 2, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        >
          <Image
            src="https://images.unsplash.com/photo-1633685528691-17b205c7701e?q=80&w=687&auto=format&fit=crop" // Group of otters
            alt="Otter raft"
            fill
            className="object-cover"
          />
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* --- Left Column: Text Content --- */}
          <motion.div variants={containerVariants} initial="hidden" animate="show">
            {/* Badge */}
            <motion.div variants={itemVariants} className="mb-6">
              <motion.span 
                className="inline-flex items-center gap-2 px-4 py-2 bg-teal-500/10 border border-teal-500/30 rounded-full text-teal-300 text-sm font-medium backdrop-blur-sm"
                whileHover={{ scale: 1.05, backgroundColor: "rgba(45, 212, 191, 0.2)" }}
              >
                <FaPaw className="text-xs" />
                Wildlife Photography
              </motion.span>
            </motion.div>

            {/* Headline */}
            <motion.h1 
              variants={itemVariants} 
              className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 leading-[1.1] tracking-tight"
            >
              <span className={`block ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Documenting</span>
              <motion.span
                className="inline-block relative pb-2"
                animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                style={{
                  backgroundImage: theme === 'dark' 
                    ? 'linear-gradient(90deg, #fff, #2dd4bf, #60a5fa, #fff)'
                    : 'linear-gradient(90deg, #1f2937, #2dd4bf, #60a5fa, #1f2937)',
                  backgroundSize: '200% 100%',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                The Wild & Whimsical
              </motion.span>
            </motion.h1>

            {/* Body Text */}
            <motion.p 
              variants={itemVariants} 
              className={`text-lg md:text-xl max-w-xl mb-8 leading-relaxed ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
              }`}
            >
              Specializing in capturing the character of aquatic life. 
              Focusing on <span className="text-teal-500 font-medium">wildlife</span>,{' '}
              <span className="text-blue-500 font-medium">aquatic environments</span>, and{' '}
              <span className="text-green-500 font-medium">conservation</span> storytelling.
            </motion.p>

            {/* Buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mb-12">
              <motion.a 
                href="#portfolio" 
                className={`px-8 py-4 font-bold rounded-full inline-flex items-center gap-2 transition-all duration-300 ${
                  theme === 'dark'
                    ? 'bg-white text-black hover:bg-teal-500 hover:text-white'
                    : 'bg-gray-900 text-white hover:bg-teal-600'
                }`}
                whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(45, 212, 191, 0.3)" }}
                whileTap={{ scale: 0.95 }}
              >
                <FaCamera />
                View Gallery
              </motion.a>
              
              <motion.a 
                href="/contact"
                className={`px-8 py-4 backdrop-blur-sm border font-bold rounded-full transition-all duration-300 ${
                  theme === 'dark'
                    ? 'bg-white/5 border-white/20 text-white hover:bg-white/10'
                    : 'bg-gray-100/80 border-gray-300 text-gray-900 hover:bg-gray-200'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Work Together
              </motion.a>
            </motion.div>

            {/* Stats - Themed for Nature */}
            <motion.div variants={itemVariants} className="grid grid-cols-2 sm:grid-cols-3 gap-6">
              {[
                { icon: FaPaw, value: "150+", label: "Species Tracked" },
                { icon: FaGlobeAmericas, value: "40+", label: "Expeditions Led" },
                { icon: FaLeaf, value: "12", label: "Conservation Partners" },
              ].map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <motion.div
                    key={stat.label}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 + index * 0.1, duration: 0.6 }}
                  >
                    <div className={`w-10 h-10 mt-1 rounded-lg flex items-center justify-center border shrink-0 ${
                      theme === 'dark'
                        ? 'bg-teal-500/20 border-teal-500/30'
                        : 'bg-teal-100 border-teal-300'
                    }`}>
                      <IconComponent className={`text-sm ${theme === 'dark' ? 'text-teal-300' : 'text-teal-600'}`} />
                    </div>
                    <div>
                      <div className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                        {stat.value}
                      </div>
                      <div className={`text-xs uppercase tracking-wider leading-tight ${
                        theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                      }`}>
                        {stat.label}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>

          {/* --- Right Column: Main Hero Image --- */}
          <motion.div
            className="hidden lg:flex relative lg:ml-8 justify-center items-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Main Image Container - Medium Size with Auto-Slide */}
            <div className="relative w-full max-w-md aspect-[3/4] rounded-3xl overflow-hidden border-2 border-white/20 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] z-10 group">
              {/* Glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-teal-500/20 via-blue-500/20 to-teal-500/20 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500 -z-10"></div>
              
              {/* Auto-sliding images */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0"
                >
                  <Image
                    src={heroImages[currentIndex].src}
                    alt={heroImages[currentIndex].alt}
                    fill
                    className="object-cover"
                    priority={currentIndex === 0}
                  />
                </motion.div>
              </AnimatePresence>
              
              {/* Subtle overlay gradient */}
              <div className={`absolute inset-0 bg-gradient-to-t pointer-events-none ${
                theme === 'dark' ? 'from-black/20 via-transparent to-transparent' : 'from-gray-900/10 via-transparent to-transparent'
              }`}></div>
              
              {/* Frame border highlight */}
              <div className={`absolute inset-0 rounded-3xl border pointer-events-none ${
                theme === 'dark' ? 'border-white/10' : 'border-gray-200/50'
              }`}></div>

              {/* Image indicators/dots */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                {heroImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? 'w-8 bg-white'
                        : 'w-2 bg-white/40 hover:bg-white/60'
                    }`}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Decorative spinning element behind image */}
            <motion.div
              className="absolute -top-6 -right-6 w-20 h-20 bg-teal-500/10 backdrop-blur-md rounded-full border border-teal-500/20 flex items-center justify-center -z-10"
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            >
              <div className="w-14 h-14 rounded-full border border-dashed border-teal-400/40"></div>
            </motion.div>

            {/* Floating Stats Badge */}
            <motion.div
              className={`absolute -bottom-6 -left-6 backdrop-blur-xl rounded-2xl p-4 shadow-[0_20px_40px_rgba(0,0,0,0.5)] z-20 ${
                theme === 'dark'
                  ? 'bg-[#0a0a0a]/90 border border-white/10'
                  : 'bg-white/90 border border-gray-200'
              }`}
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="flex items-center gap-3">
                <div className={`p-2 rounded-full border ${
                  theme === 'dark'
                    ? 'bg-teal-500/20 border-teal-500/30'
                    : 'bg-teal-100 border-teal-300'
                }`}>
                  <FaGlobeAmericas className={`text-sm ${theme === 'dark' ? 'text-teal-300' : 'text-teal-600'}`} />
                </div>
                <div>
                  <div className={`text-lg font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    50+
                  </div>
                  <div className={`text-xs leading-tight ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                    Habitats
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* --- Scroll Indicator --- */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.8, duration: 1 }}
      >
        <span className={`text-[10px] uppercase tracking-[0.2em] ${
          theme === 'dark' ? 'text-gray-500' : 'text-gray-400'
        }`}>
          Explore Wild
        </span>
        <motion.div 
          className={`w-px h-12 relative overflow-hidden ${
            theme === 'dark' ? 'bg-gradient-to-b from-white/10 to-white/50' : 'bg-gradient-to-b from-gray-300/50 to-gray-400/80'
          }`}
        >
          <motion.div
            className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-teal-400 to-blue-500"
            animate={{ y: ['-100%', '200%'] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}