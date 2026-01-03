'use client';

import Image from 'next/image';
import Link from 'next/link';
import FadeInUp from './FadeInUp';
import { motion } from 'framer-motion';

const photos = [
  { id: 1, src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&q=80", category: "Portrait", title: "Portrait Elegance" },
  { id: 2, src: "https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?w=800&q=80", category: "Architecture", title: "Urban Structures" },
  { id: 3, src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&q=80", category: "Portrait", title: "Natural Beauty" },
  { id: 4, src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&q=80", category: "Landscape", title: "Mountain Vista" },
  { id: 5, src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80", category: "Nature", title: "Forest Pathway" },
  { id: 6, src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&q=80", category: "Nature", title: "Serene Lake" },
  { id: 7, src: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=80", category: "Fashion", title: "Style Statement" },
  { id: 8, src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80", category: "Wedding", title: "Special Moment" },
  { id: 9, src: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=800&q=80", category: "Street", title: "City Life" },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <FadeInUp>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">Selected Works</h2>
          </FadeInUp>
          <FadeInUp delay={0.2}>
            <Link 
              href="/gallery" 
              className="text-blue-400 hover:text-blue-300 font-medium flex items-center gap-2 group"
            >
              View All
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 1 }}
                className="inline-block"
              >
                →
              </motion.span>
            </Link>
          </FadeInUp>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map((photo, index) => (
            <FadeInUp key={photo.id} delay={index * 0.1}>
              <motion.div
                className="group relative aspect-[3/4] overflow-hidden rounded-xl bg-gray-900 cursor-pointer"
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                <Image 
                  src={photo.src}
                  alt={photo.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute bottom-0 left-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <p className="text-blue-400 text-sm font-medium uppercase tracking-wider mb-2">{photo.category}</p>
                    <h3 className="text-xl font-bold text-white">{photo.title}</h3>
                  </div>
                </div>
                <motion.div
                  className="absolute inset-0 border-2 border-blue-400/0 group-hover:border-blue-400/50 rounded-xl transition-all duration-500"
                  whileHover={{ borderColor: 'rgba(96, 165, 250, 0.5)' }}
                />
              </motion.div>
            </FadeInUp>
          ))}
        </div>
      </div>
    </section>
  );
}