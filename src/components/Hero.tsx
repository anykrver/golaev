'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useTransform, useScroll } from 'framer-motion';

const Hero = () => {
  const { scrollYProgress } = useScroll();
  
  // Parallax transforms for different elements
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  const pillsY = useTransform(scrollYProgress, [0, 1], ['0%', '150%']);
  const videoCardY = useTransform(scrollYProgress, [0, 1], ['0%', '80%']);
  return (
    <section className="relative h-screen flex items-center justify-start overflow-hidden -mt-16">
      {/* Background Image with Parallax */}
      <motion.div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-110"
        style={{
          backgroundImage: `url('https://media.atherenergy.com/Desk%20-%20BaaS%20Banner%20%283%29.webp')`,
          y: backgroundY
        }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
      </motion.div>
      
      {/* Hero Content with Parallax - Desktop */}
      <motion.div 
        className="absolute top-12 left-12 z-10 hidden lg:block"
        style={{ y: textY }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            {/* Hero Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-left"
              style={{ paddingTop: '79px' }}
            >
              <motion.h1 
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4 sm:mb-6 lg:mb-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <span className="block text-white">Introducing</span>
                <span className="block text-white font-extrabold">
                  GolaEV BaaS
                </span>
              </motion.h1>
              <motion.p 
                className="text-sm sm:text-base md:text-lg lg:text-xl text-white mb-6 sm:mb-8 lg:mb-10 max-w-2xl font-light leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                With <span className="font-semibold text-white">Battery as a Service</span>,<br className="hidden sm:block" />
                buy Rizta starting at <span className="font-bold text-white text-lg sm:text-xl lg:text-2xl">₹75,999</span><span className="text-white/80">*</span>
              </motion.p>
              <motion.div 
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <Link
                  href="/baas"
                  className="bg-white/90 hover:bg-white text-black px-6 py-3 sm:px-8 lg:px-10 lg:py-4 rounded-full text-sm sm:text-base lg:text-lg font-bold shadow-lg hover:shadow-xl transition-all duration-300 inline-block text-center w-fit transform hover:scale-105"
                >
                  Explore BaaS
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Hero Content - Mobile */}
      <motion.div 
        className="absolute top-18 left-12 z-10 lg:hidden"
        style={{ y: textY }}
      >
        <div className="w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left"
          >
            <motion.h1 
              className="text-2xl sm:text-3xl font-bold text-white leading-tight mb-3 sm:mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="block text-white">Introducing</span>
              <span className="block text-white font-extrabold">
                GolaEV BaaS
              </span>
            </motion.h1>
            <motion.p 
              className="text-sm sm:text-base text-white mb-4 sm:mb-6 font-light leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              With <span className="font-semibold text-white">Battery as a Service</span>,<br />
              buy Rizta starting at <span className="font-bold text-white text-lg sm:text-xl">₹75,999</span><span className="text-white/80">*</span>
            </motion.p>
            <motion.div 
              className="flex"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link
                href="/baas"
                className="bg-white/90 hover:bg-white text-black px-5 py-2.5 sm:px-6 sm:py-3 rounded-full text-sm sm:text-base font-bold shadow-lg hover:shadow-xl transition-all duration-300 inline-block text-center transform hover:scale-105"
              >
                Explore BaaS
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
      
      {/* Bottom Navigation Pills - Desktop with Parallax */}
      <motion.div 
        className="absolute bottom-18 left-12 z-10 hidden lg:block"
        style={{ y: pillsY }}
      >
        <motion.div 
          className="flex space-x-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <Link href="/rizta" className="text-gray-400 hover:text-white transition-colors duration-300 px-4 py-2 rounded-full text-sm">
            Rizta
          </Link>
          <Link href="/450-apex" className="backdrop-blur-sm text-gray-400 hover:text-white transition-colors duration-300 px-4 py-2 rounded-full text-sm">
            450 Apex
          </Link>
          <Link href="/advantage" className="backdrop-blur-sm text-gray-400 hover:text-white transition-colors duration-300 px-4 py-2 rounded-full text-sm">
            GolaEV Advantage
          </Link>
          <div className="backdrop-blur-sm text-gray-400 hover:text-white transition-colors duration-300 px-4 py-2 rounded-full text-sm cursor-pointer">
            GolaEV BaaS
          </div>
        </motion.div>
      </motion.div>

      {/* Video Discovery Card - Bottom Right with Parallax */}
      <motion.div 
        className="absolute bottom-8 right-12 z-10 hidden lg:block"
        style={{ y: videoCardY }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="bg-black/60 backdrop-blur-md rounded-2xl p-4 flex items-center space-x-4 max-w-sm cursor-pointer hover:bg-black/70 transition-all duration-300"
        >
          {/* Video Thumbnail */}
          <div className="w-20 h-16 rounded-lg flex-shrink-0 relative overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1571068316344-75bc76f77890?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
              alt="Electric scooter video"
              fill
              className="object-cover"
              sizes="80px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-black ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
            </div>
          </div>
          
          {/* Text Content */}
          <div className="text-white">
            <div className="text-sm font-medium">Discover full</div>
            <div className="text-sm font-medium">video</div>
          </div>
        </motion.div>
      </motion.div>

      {/* Mobile Video Discovery Card - Full Width with Parallax */}
      <motion.div 
        className="absolute bottom-7 left-4 right-4 z-10 lg:hidden"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="bg-black/60 backdrop-blur-md rounded-2xl p-4 cursor-pointer hover:bg-black/70 transition-all duration-300"
        >
          {/* Trust Indicator */}
          <div className="flex items-center space-x-2 mb-3">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full border-2 border-white overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" 
                  alt="User 1" 
                  className="w-full h-full object-cover"
                  width={32}
                  height={32}
                />
              </div>
              <div className="w-8 h-8 rounded-full border-2 border-white overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1494790108755-2616c64c8c2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" 
                  alt="User 2" 
                  className="w-full h-full object-cover"
                  width={32}
                  height={32}
                />
              </div>
              <div className="w-8 h-8 rounded-full border-2 border-white overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" 
                  alt="User 3" 
                  className="w-full h-full object-cover"
                  width={32}
                  height={32}
                />
              </div>
            </div>
            <span className="text-white text-sm font-medium">Trusted by over 10K people</span>
          </div>
          
          {/* Video Content */}
          <div className="flex items-center space-x-4">
            {/* Video Thumbnail */}
            <div className="w-24 h-18 rounded-lg flex-shrink-0 relative overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1571068316344-75bc76f77890?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Electric scooter video"
                fill
                className="object-cover"
                sizes="96px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-black ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
              </div>
            </div>
            
            {/* Text Content */}
            <div className="text-white">
              <div className="text-base font-medium">Discover full video</div>
            </div>
          </div>
        </motion.div>
      </motion.div>

    </section>
  );
};

export default Hero;