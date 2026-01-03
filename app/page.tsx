'use client';

import FadeInUp from "./components/FadeInUp";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "./components/ThemeProvider";


export default function Home() {
  const { theme } = useTheme();
  
  return (
    <main className={`min-h-screen overflow-x-hidden transition-colors duration-300 ${
      theme === 'dark' ? 'bg-[#0a0a0a] text-white' : 'bg-white text-gray-900'
    }`}>
      <Navbar />
      <Hero />
      <Portfolio />

      {/* About Preview Section */}
      <section className={`py-24 px-6 border-t ${
        theme === 'dark' ? 'border-white/10' : 'border-gray-200'
      }`}>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <FadeInUp>
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80"
                  alt="About"
                  fill
                  className="object-cover"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${
                  theme === 'dark' ? 'from-black/50' : 'from-gray-900/30'
                } to-transparent`}></div>
              </div>
            </FadeInUp>
            
            <div>
              <FadeInUp>
                <h2 className={`text-4xl md:text-5xl font-bold mb-6 tracking-tighter ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  The Artist Behind The Lens
                </h2>
              </FadeInUp>
              <FadeInUp delay={0.2}>
                <p className={`text-xl mb-6 leading-relaxed ${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  I'm a photographer with a passion for capturing raw, authentic moments. 
                  My style is inspired by cinema and natural light, aiming to turn fleeting instants into timeless art.
                </p>
                <p className={`text-lg mb-8 leading-relaxed ${
                  theme === 'dark' ? 'text-gray-500' : 'text-gray-500'
                }`}>
                  With over a decade of experience, I've had the privilege of working with clients from around the world, 
                  creating visual narratives that resonate with emotion and authenticity.
                </p>
                <Link 
                  href="/about"
                  className={`inline-block px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    theme === 'dark'
                      ? 'bg-white/5 hover:bg-white/10 border border-white/10 hover:border-blue-500/50'
                      : 'bg-gray-100 hover:bg-gray-200 border border-gray-300 hover:border-blue-500'
                  }`}
                >
                  Learn More About Me
                </Link>
              </FadeInUp>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className={`py-24 px-6 border-t ${
        theme === 'dark' ? 'border-white/10' : 'border-gray-200'
      }`}>
        <div className="max-w-7xl mx-auto">
          <FadeInUp>
            <div className="text-center mb-16">
              <h2 className={`text-4xl md:text-5xl font-bold mb-6 tracking-tighter ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                Services
              </h2>
              <p className={`text-xl max-w-2xl mx-auto ${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
              }`}>
                Comprehensive photography services tailored to your needs
              </p>
            </div>
          </FadeInUp>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              { title: 'Portrait Photography', desc: 'Professional portraits that capture your unique personality', icon: '👤' },
              { title: 'Wedding Photography', desc: 'Capturing your special day with elegance and emotion', icon: '💍' },
              { title: 'Event Photography', desc: 'Professional documentation of your important occasions', icon: '🎉' },
            ].map((service, index) => (
              <FadeInUp key={service.title} delay={index * 0.1}>
                <div className={`p-8 rounded-2xl border transition-all duration-300 ${
                  theme === 'dark'
                    ? 'bg-white/5 border-white/10 hover:border-blue-500/50 hover:bg-white/10'
                    : 'bg-gray-50 border-gray-200 hover:border-blue-500 hover:bg-gray-100'
                }`}>
                  <div className="text-5xl mb-4">{service.icon}</div>
                  <h3 className={`text-xl font-bold mb-3 ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>
                    {service.title}
                  </h3>
                  <p className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>
                    {service.desc}
                  </p>
                </div>
              </FadeInUp>
            ))}
          </div>

          <FadeInUp delay={0.3}>
            <div className="text-center">
              <Link 
                href="/services"
                className="inline-block px-8 py-4 bg-blue-500 text-white font-bold rounded-full hover:bg-blue-600 transition-colors duration-300"
              >
                View All Services
              </Link>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* Contact/Footer Section */}
      <footer className={`py-24 px-6 border-t ${
        theme === 'dark' ? 'bg-black border-white/10' : 'bg-gray-50 border-gray-200'
      }`}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <FadeInUp>
              <h2 className={`text-4xl md:text-6xl font-bold mb-8 tracking-tighter ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                Let's Create Together
              </h2>
            </FadeInUp>
            <FadeInUp delay={0.2}>
              <p className={`text-xl mb-8 max-w-2xl mx-auto ${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
              }`}>
                Have a project in mind? I'd love to hear from you and bring your vision to life.
              </p>
              <Link 
                href="/contact"
                className="inline-block px-8 py-4 bg-blue-500 text-white font-bold rounded-full hover:bg-blue-600 transition-colors duration-300 mb-6"
              >
                Get In Touch
              </Link>
            </FadeInUp>
            <FadeInUp delay={0.3}>
              <div className={`flex justify-center gap-6 ${
                theme === 'dark' ? 'text-gray-500' : 'text-gray-500'
              }`}>
                <a href="mailto:hello@luma.com" className="hover:text-blue-400 transition-colors">
                  hello@luma.com
                </a>
                <span>•</span>
                <a href="tel:+15551234567" className="hover:text-blue-400 transition-colors">
                  +1 (555) 123-4567
                </a>
              </div>
            </FadeInUp>
          </div>
          
          <div className={`border-t pt-12 mt-12 ${
            theme === 'dark' ? 'border-white/10' : 'border-gray-200'
          }`}>
            <div className={`flex flex-col md:flex-row justify-between items-center text-sm ${
              theme === 'dark' ? 'text-gray-500' : 'text-gray-500'
            }`}>
              <div>© {new Date().getFullYear()} Luma Photography. All rights reserved.</div>
              <div className="flex gap-6 mt-4 md:mt-0">
                <Link href="/" className={`transition-colors ${
                  theme === 'dark' ? 'hover:text-white' : 'hover:text-gray-900'
                }`}>
                  Home
                </Link>
                <Link href="/gallery" className={`transition-colors ${
                  theme === 'dark' ? 'hover:text-white' : 'hover:text-gray-900'
                }`}>
                  Gallery
                </Link>
                <Link href="/about" className={`transition-colors ${
                  theme === 'dark' ? 'hover:text-white' : 'hover:text-gray-900'
                }`}>
                  About
                </Link>
                <Link href="/services" className={`transition-colors ${
                  theme === 'dark' ? 'hover:text-white' : 'hover:text-gray-900'
                }`}>
                  Services
                </Link>
                <Link href="/contact" className={`transition-colors ${
                  theme === 'dark' ? 'hover:text-white' : 'hover:text-gray-900'
                }`}>
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
