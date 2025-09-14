'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Battery, Smartphone, Zap, Lightbulb, Plus, Minus } from 'lucide-react';

const KeyFeatures = () => {
  const [expandedFeature, setExpandedFeature] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  });

  // Parallax transforms
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '-30%']);
  const featureY1 = useTransform(scrollYProgress, [0, 1], ['0%', '-20%']);
  const featureY2 = useTransform(scrollYProgress, [0, 1], ['0%', '10%']);
  const featureY3 = useTransform(scrollYProgress, [0, 1], ['0%', '-15%']);
  const featureY4 = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);

  const features = [
    {
      icon: Battery,
      title: 'Long Range Battery',
      description: '150km range',
      position: { top: '10%', left: '8%' },
      details:
        'Advanced lithium-ion battery pack with smart management system for maximum performance and durability.'
    },
    {
      icon: Zap,
      title: 'Fast Charging',
      description: '0-80% in 60min',
      position: { top: '8%', right: '12%' },
      details:
        'Revolutionary fast-charging technology compatible with standard and fast charging stations.'
    },
    {
      icon: Smartphone,
      title: 'Smart Control',
      description: 'App integration',
      position: { bottom: '15%', left: '5%' },
      details:
        'Complete vehicle control through advanced mobile app with GPS tracking and ride modes.'
    },
    {
      icon: Lightbulb,
      title: 'LED Lighting',
      description: 'Customizable colors',
      position: { bottom: '12%', right: '8%' },
      details:
        'Premium LED headlight with adaptive brightness and 16 million color customization options.'
    }
  ];

  return (
    <section
      ref={containerRef}
      className="py-20 bg-black text-white relative overflow-hidden"
    >
      {/* Background */}
      <motion.div className="absolute inset-0 opacity-20" style={{ y: backgroundY }}>
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black"></div>
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full">
            <svg
              className="w-full h-full"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              <defs>
                <pattern
                  id="3dgrid"
                  x="0"
                  y="0"
                  width="10"
                  height="10"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M 10 0 L 0 0 0 10"
                    fill="none"
                    stroke="rgba(255,255,255,0.1)"
                    strokeWidth="0.5"
                  />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#3dgrid)" />
            </svg>
          </div>
          {/* Floating glow elements */}
          <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-full blur-xl"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-br from-purple-500/20 to-green-500/20 rounded-full blur-xl"></div>
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-xl"></div>
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-gray-300 text-sm sm:text-base mb-2">
            Harness the Full Potential of Functionality
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8">
            Key Features - Ev Bike
          </h2>
        </motion.div>

        {/* Scooter + Features */}
        <div className="relative flex justify-center items-center min-h-[500px] sm:min-h-[600px] lg:min-h-[700px]">
          {/* Central Scooter Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            style={{ y: imageY }}
            className="relative z-20"
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
              <Image
                src="https://acerelectric.in/wp-content/uploads/2024/11/Image-8-1024x985.png"
                alt="GolaEV Electric Scooter - Key Features"
                fill
                className="object-contain filter drop-shadow-2xl"
                sizes="(max-width: 768px) 256px, (max-width: 1024px) 320px, 384px"
                priority
              />
            </div>
          </motion.div>

          {/* Feature Bubbles */}
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isExpanded = expandedFeature === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                viewport={{ once: true }}
                className="absolute z-30"
                style={{
                  ...feature.position,
                  y: index === 0 ? featureY1 : index === 1 ? featureY2 : index === 2 ? featureY3 : featureY4
                }}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="relative cursor-pointer"
                  onClick={() =>
                    setExpandedFeature(isExpanded ? null : index)
                  }
                >
                  <div className="bg-gray-900/90 backdrop-blur-md border border-gray-700 rounded-2xl p-2 sm:p-3 w-20 sm:w-22 md:w-24 shadow-2xl hover:shadow-green-500/20 transition-all duration-300 hover:scale-105">
                    <div className="flex flex-col items-center space-y-1.5 mb-1.5">
                      <div className="w-6 h-6 sm:w-7 sm:h-7 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg">
                        <Icon className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-white" />
                      </div>
                      <div className="text-center px-1">
                        <h3 className="text-white font-semibold text-[8px] sm:text-[9px] leading-tight mb-0.5">
                          {feature.title}
                        </h3>
                        <p className="text-green-400 text-[7px] sm:text-[8px] font-medium">
                          {feature.description}
                        </p>
                      </div>
                      <motion.div
                        animate={{ rotate: isExpanded ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-1"
                      >
                        {isExpanded ? (
                          <Minus className="h-3 w-3 text-green-400" />
                        ) : (
                          <Plus className="h-3 w-3 text-green-400" />
                        )}
                      </motion.div>
                    </div>

                    <motion.div
                      initial={false}
                      animate={{
                        height: isExpanded ? 'auto' : 0,
                        opacity: isExpanded ? 1 : 0
                      }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="pt-1 border-t border-gray-700 px-1">
                        <p className="text-gray-400 text-[7px] sm:text-[8px] leading-tight text-center">
                          {feature.details}
                        </p>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-20"
          >
            <div className="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-6">
              <div className="bg-white/10 backdrop-blur-md rounded-lg p-2 sm:p-3 border border-white/20">
                <div className="text-green-400 text-base sm:text-lg font-bold">
                  150km
                </div>
                <div className="text-white text-xs">Max Range</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-lg p-2 sm:p-3 border border-white/20">
                <div className="text-green-400 text-base sm:text-lg font-bold">
                  60min
                </div>
                <div className="text-white text-xs">Fast Charge</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating Decorative Elements */}
      <motion.div
        className="absolute top-10 left-10 w-20 h-20 bg-green-500/20 rounded-full blur-xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      ></motion.div>
      <motion.div
        className="absolute bottom-10 right-10 w-32 h-32 bg-blue-500/20 rounded-full blur-xl"
        animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.3, 0.2] }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1
        }}
      ></motion.div>
      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-purple-500/10 rounded-full blur-2xl"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      ></motion.div>
    </section>
  );
};

export default KeyFeatures;
