'use client';

import Image from 'next/image';
import Navbar from '../components/Navbar';
import FadeInUp from '../components/FadeInUp';
import { motion } from 'framer-motion';
import { FaCamera, FaHeart, FaMountain, FaBuilding, FaUmbrellaBeach, FaRing } from 'react-icons/fa';
import { useTheme } from '../components/ThemeProvider';

const services = [
  {
    icon: FaCamera,
    title: 'Portrait Photography',
    description: 'Professional headshots, personal portraits, and lifestyle sessions that capture your unique personality and style.',
    features: ['Studio Sessions', 'Outdoor Sessions', 'Multiple Outfit Changes', 'Professional Editing', 'High-Res Digital Files'],
    price: 'Starting at $299',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&q=80'
  },
  {
    icon: FaRing,
    title: 'Wedding Photography',
    description: 'Capturing your special day with elegance and emotion. Every moment, every detail, every emotion preserved forever.',
    features: ['Full Day Coverage', 'Engagement Session', 'Photo Album', 'Online Gallery', 'Second Shooter Available'],
    price: 'Starting at $2,999',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80'
  },
  {
    icon: FaBuilding,
    title: 'Event Photography',
    description: 'Corporate events, celebrations, and gatherings. Professional documentation of your important occasions.',
    features: ['Full Event Coverage', 'Candid Moments', 'Group Photos', 'Same-Day Delivery', 'Online Gallery'],
    price: 'Starting at $799',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=600&q=80'
  },
  {
    icon: FaMountain,
    title: 'Landscape Photography',
    description: 'Nature and landscape photography for personal collections, commercial use, or fine art prints.',
    features: ['Location Scouting', 'Golden Hour Sessions', 'Multiple Angles', 'Professional Editing', 'Print Ready Files'],
    price: 'Starting at $499',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&q=80'
  },
  {
    icon: FaHeart,
    title: 'Fashion Photography',
    description: 'Editorial and fashion photography for brands, designers, and creative projects.',
    features: ['Concept Development', 'Styling Coordination', 'Model Direction', 'Post-Production', 'Commercial License'],
    price: 'Starting at $1,499',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&q=80'
  },
  {
    icon: FaUmbrellaBeach,
    title: 'Travel Photography',
    description: 'Destination photography services for travel, tourism, and personal documentation of your adventures.',
    features: ['Location Photography', 'Cultural Documentation', 'Storytelling Approach', 'Travel Itinerary', 'Extended Sessions'],
    price: 'Custom Quote',
    image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=600&q=80'
  },
];

export default function Services() {
  const { theme } = useTheme();
  return (
    <main className={`min-h-screen transition-colors duration-300 ${
      theme === 'dark' ? 'bg-[#0a0a0a] text-white' : 'bg-white text-gray-900'
    }`}>
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-24 px-6 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px] -z-10"></div>
        <div className="max-w-7xl mx-auto text-center">
          <FadeInUp>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tighter">Services</h1>
          </FadeInUp>
          <FadeInUp delay={0.2}>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Comprehensive photography services tailored to your needs. 
              From intimate portraits to grand events, I capture moments that matter.
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* Services Grid */}
      <section className="px-6 pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <FadeInUp key={service.title} delay={index * 0.1}>
                  <motion.div
                    className="group relative bg-white/5 rounded-2xl overflow-hidden border border-white/10 hover:border-blue-500/50 transition-all duration-300"
                    whileHover={{ y: -8 }}
                  >
                    {/* Image Background */}
                    <div className="relative h-64 overflow-hidden">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                        className="w-full h-full"
                      >
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          className="object-cover"
                        />
                      </motion.div>
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent"></div>
                      <div className="absolute top-4 right-4">
                        <div className="w-12 h-12 bg-blue-500/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-blue-500/30">
                          <IconComponent className="text-blue-400 text-xl" />
                        </div>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                      <p className="text-gray-400 mb-4 leading-relaxed">{service.description}</p>
                      
                      <ul className="space-y-2 mb-6">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-500">
                            <span className="text-blue-400 mr-2">✓</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                      
                      <div className="flex items-center justify-between pt-4 border-t border-white/10">
                        <span className="text-xl font-bold text-blue-400">{service.price}</span>
                        <motion.a
                          href="/contact"
                          className="px-4 py-2 bg-blue-500/20 hover:bg-blue-500 text-blue-400 hover:text-white rounded-full text-sm font-medium transition-colors duration-300"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          Book Now
                        </motion.a>
                      </div>
                    </div>
                  </motion.div>
                </FadeInUp>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 border-t border-white/10">
        <div className="max-w-4xl mx-auto text-center">
          <FadeInUp>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tighter">
              Ready to Create Something Amazing?
            </h2>
          </FadeInUp>
          <FadeInUp delay={0.2}>
            <p className="text-xl text-gray-400 mb-8">
              Let's discuss your project and create a custom photography package that fits your vision and budget.
            </p>
            <motion.a
              href="/contact"
              className="inline-block px-8 py-4 bg-blue-500 text-white font-bold rounded-full hover:bg-blue-600 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.a>
          </FadeInUp>
        </div>
      </section>
    </main>
  );
}

