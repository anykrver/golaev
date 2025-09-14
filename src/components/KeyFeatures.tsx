'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { MapPin, Zap, Shield, Gauge, Battery, Navigation } from 'lucide-react';

const KeyFeatures = () => {
  const features = [
    {
      icon: MapPin,
      title: 'GPS',
      subtitle: 'Navigation',
      position: { top: '15%', left: '15%' },
      iconColor: 'text-orange-500',
      bgColor: 'bg-white'
    },
    {
      icon: Shield,
      title: 'Anti-Theft',
      subtitle: 'Protection',
      position: { top: '15%', right: '15%' },
      iconColor: 'text-orange-500',
      bgColor: 'bg-gray-800'
    },
    {
      icon: Zap,
      title: 'Fast Charging',
      subtitle: '0 - 100%',
      description: 'charge in less than 3.5 hrs',
      position: { bottom: '25%', left: '8%' },
      iconColor: 'text-orange-500',
      bgColor: 'bg-gray-800'
    },
    {
      icon: Gauge,
      title: '40 kmph',
      subtitle: 'Top speed',
      position: { top: '35%', right: '8%' },
      iconColor: 'text-orange-500',
      bgColor: 'bg-white'
    },
    {
      icon: Battery,
      title: '150 Km',
      subtitle: 'Certified Range',
      position: { bottom: '15%', right: '12%' },
      iconColor: 'text-orange-500',
      bgColor: 'bg-gray-800'
    },
    {
      icon: Navigation,
      title: 'Cruise Control',
      subtitle: 'At any Terrain',
      description: 'Top Notch',
      position: { bottom: '5%', left: '25%' },
      iconColor: 'text-orange-500',
      bgColor: 'bg-gray-800'
    }
  ];

  return (
    <section className="py-20 bg-gray-100 relative overflow-hidden">
      {/* Background Circle */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[600px] h-[600px] lg:w-[800px] lg:h-[800px] rounded-full bg-gray-200/50 opacity-30"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Key Features
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Advanced technology meets superior performance
          </p>
        </motion.div>

        {/* Scooter + Features */}
        <div className="relative flex justify-center items-center min-h-[600px] lg:min-h-[700px]">
          {/* Central Scooter Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative z-20"
          >
            <div className="relative w-80 h-80 lg:w-[500px] lg:h-[400px]">
              <Image
                src="https://acerelectric.in/wp-content/uploads/2024/11/Image-8-1024x985.png"
                alt="GolaEV Electric Scooter - Key Features"
                fill
                className="object-contain filter drop-shadow-2xl"
                sizes="(max-width: 1024px) 320px, 500px"
                priority
              />
            </div>
          </motion.div>

          {/* Feature Cards */}
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                viewport={{ once: true }}
                className="absolute z-30"
                style={feature.position}
              >
                {/* Dotted Line Connector */}
                <div className="absolute inset-0 -z-10">
                  <svg 
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 lg:w-48 lg:h-48"
                    viewBox="0 0 100 100"
                  >
                    <line 
                      x1="50" 
                      y1="50" 
                      x2="0" 
                      y2="50" 
                      stroke="#d1d5db" 
                      strokeWidth="2" 
                      strokeDasharray="4,4"
                      opacity="0.6"
                    />
                  </svg>
                </div>

                <motion.div
                  whileHover={{ scale: 1.05, y: -5 }}
                  className={`${feature.bgColor} rounded-2xl p-4 shadow-lg border border-gray-200 min-w-[160px] hover:shadow-xl transition-all duration-300`}
                >
                  <div className="flex items-center space-x-3">
                    <div className={`w-12 h-12 ${feature.bgColor === 'bg-white' ? 'bg-gray-800' : 'bg-orange-500'} rounded-xl flex items-center justify-center shadow-md`}>
                      <Icon className={`h-6 w-6 ${feature.bgColor === 'bg-white' ? 'text-orange-500' : 'text-white'}`} />
                    </div>
                    <div>
                      <h3 className={`font-bold text-lg ${feature.bgColor === 'bg-white' ? 'text-gray-900' : 'text-white'}`}>
                        {feature.title}
                      </h3>
                      <p className={`text-sm ${feature.bgColor === 'bg-white' ? 'text-gray-600' : 'text-gray-300'}`}>
                        {feature.subtitle}
                      </p>
                      {feature.description && (
                        <p className={`text-xs mt-1 ${feature.bgColor === 'bg-white' ? 'text-gray-500' : 'text-gray-400'}`}>
                          {feature.description}
                        </p>
                      )}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default KeyFeatures;
