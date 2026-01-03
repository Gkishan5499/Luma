'use client';

import Image from 'next/image';
import Navbar from '../components/Navbar';
import FadeInUp from '../components/FadeInUp';
import { motion } from 'framer-motion';
import { useTheme } from '../components/ThemeProvider';

const stats = [
  { number: '500+', label: 'Photos Captured' },
  { number: '10+', label: 'Years Experience' },
  { number: '200+', label: 'Happy Clients' },
  { number: '50+', label: 'Awards Won' },
];

const skills = [
  { name: 'Portrait Photography', level: 95 },
  { name: 'Landscape Photography', level: 90 },
  { name: 'Event Photography', level: 88 },
  { name: 'Photo Editing', level: 92 },
  { name: 'Studio Lighting', level: 85 },
];

export default function About() {
  const { theme } = useTheme();
  return (
    <main className={`min-h-screen transition-colors duration-300 ${
      theme === 'dark' ? 'bg-[#0a0a0a] text-white' : 'bg-white text-gray-900'
    }`}>
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-24 px-6 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px] -z-10"></div>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <FadeInUp>
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80"
                  alt="Photographer"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
            </FadeInUp>
            
            <div>
              <FadeInUp>
                <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tighter">
                  The Artist Behind The Lens
                </h1>
              </FadeInUp>
              <FadeInUp delay={0.2}>
                <p className="text-xl text-gray-400 mb-6 leading-relaxed">
                  I'm a photographer with a passion for capturing raw, authentic moments. 
                  My style is inspired by cinema and natural light, aiming to turn fleeting instants into timeless art.
                </p>
                <p className="text-lg text-gray-500 mb-8 leading-relaxed">
                  With over a decade of experience, I've had the privilege of working with clients from around the world, 
                  creating visual narratives that resonate with emotion and authenticity. Each photograph tells a story, 
                  and I'm here to help you tell yours.
                </p>
              </FadeInUp>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <FadeInUp>
            <h2 className="text-4xl font-bold mb-16 text-center tracking-tighter">Achievements & Experience</h2>
          </FadeInUp>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <FadeInUp key={stat.label} delay={index * 0.1}>
                <motion.div
                  className="text-center p-6 rounded-xl bg-white/5 hover:bg-white/10 transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  <motion.div
                    className="text-4xl md:text-5xl font-bold text-blue-400 mb-2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
                  >
                    {stat.number}
                  </motion.div>
                  <div className="text-gray-400 font-medium">{stat.label}</div>
                </motion.div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <FadeInUp>
            <h2 className="text-4xl font-bold mb-16 text-center tracking-tighter">Skills & Expertise</h2>
          </FadeInUp>
          <div className="space-y-8">
            {skills.map((skill, index) => (
              <FadeInUp key={skill.name} delay={index * 0.1}>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-lg">{skill.name}</span>
                    <span className="text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="h-3 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-blue-500 to-blue-400 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1.5, delay: index * 0.2 + 0.3, ease: "easeOut" }}
                    />
                  </div>
                </div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 px-6 border-t border-white/10">
        <div className="max-w-4xl mx-auto text-center">
          <FadeInUp>
            <h2 className="text-4xl font-bold mb-8 tracking-tighter">My Philosophy</h2>
          </FadeInUp>
          <FadeInUp delay={0.2}>
            <p className="text-xl text-gray-400 leading-relaxed mb-6">
              Photography is not just about capturing images; it's about preserving emotions, 
              telling stories, and creating connections that transcend time and space.
            </p>
            <p className="text-lg text-gray-500 leading-relaxed">
              Every click of the shutter is a moment frozen in eternity, a piece of art that 
              reflects the beauty and complexity of the human experience. I believe in authenticity, 
              in capturing real moments that reveal the true essence of my subjects.
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-24 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <FadeInUp>
            <h2 className="text-4xl font-bold mb-12 text-center tracking-tighter">Behind The Scenes</h2>
          </FadeInUp>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600&q=80",
              "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=600&q=80",
              "https://images.unsplash.com/photo-1517586979036-b7d1e86b3345?w=600&q=80",
              "https://images.unsplash.com/photo-1493863641943-9b68992a8d07?w=600&q=80",
            ].map((src, index) => (
              <FadeInUp key={index} delay={index * 0.1}>
                <motion.div
                  className="relative aspect-square rounded-xl overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src={src}
                    alt={`Behind the scenes ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </motion.div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

