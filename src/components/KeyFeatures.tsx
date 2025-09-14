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
      angle: 0, // top
      iconColor: 'text-orange-500',
      bgColor: 'bg-white',
      size: 'medium'
    },
    {
      icon: Shield,
      title: 'Anti-Theft',
      subtitle: 'Protection',
      angle: 60, // top right
      iconColor: 'text-orange-500',
      bgColor: 'bg-gray-800',
      size: 'small'
    },
    {
      icon: Gauge,
      title: '40 kmph',
      subtitle: 'Top speed',
      angle: 120, // right
      iconColor: 'text-orange-500',
      bgColor: 'bg-white',
      size: 'small'
    },
    {
      icon: Battery,
      title: '150 Km',
      subtitle: 'Certified Range',
      angle: 180, // bottom
      iconColor: 'text-orange-500',
      bgColor: 'bg-gray-800',
      size: 'medium'
    },
    {
      icon: Zap,
      title: 'Fast Charging',
      subtitle: '0 - 100%',
      description: 'charge in less than 3.5 hrs',
      angle: 240, // bottom left
      iconColor: 'text-orange-500',
      bgColor: 'bg-gray-800',
      size: 'large'
    },
    {
      icon: Navigation,
      title: 'Cruise Control',
      subtitle: 'At any Terrain',
      description: 'Top Notch',
      angle: 300, // left
      iconColor: 'text-orange-500',
      bgColor: 'bg-gray-800',
      size: 'medium'
    }
  ];

  // Calculate circular position based on angle
  const getCircularPosition = (angle: number, radius: { mobile: number; desktop: number }) => {
    const radian = (angle * Math.PI) / 180;
    return {
      mobile: {
        x: Math.cos(radian) * radius.mobile,
        y: Math.sin(radian) * radius.mobile
      },
      desktop: {
        x: Math.cos(radian) * radius.desktop,
        y: Math.sin(radian) * radius.desktop
      }
    };
  };

  // Size configurations for responsive design
  const getSizeClasses = (size: string) => {
    switch (size) {
      case 'small':
        return {
          container: 'min-w-[100px] sm:min-w-[120px] lg:min-w-[140px]',
          icon: 'w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10',
          iconText: 'h-3 w-3 sm:h-4 sm:w-4 lg:h-5 lg:w-5',
          title: 'text-xs sm:text-sm lg:text-base',
          subtitle: 'text-xs',
          description: 'text-xs'
        };
      case 'medium':
        return {
          container: 'min-w-[120px] sm:min-w-[140px] lg:min-w-[160px]',
          icon: 'w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12',
          iconText: 'h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6',
          title: 'text-sm sm:text-base lg:text-lg',
          subtitle: 'text-xs sm:text-sm',
          description: 'text-xs'
        };
      case 'large':
      default:
        return {
          container: 'min-w-[140px] sm:min-w-[160px] lg:min-w-[180px]',
          icon: 'w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14',
          iconText: 'h-5 w-5 sm:h-6 sm:w-6 lg:h-7 lg:w-7',
          title: 'text-base sm:text-lg lg:text-xl',
          subtitle: 'text-sm',
          description: 'text-xs sm:text-sm'
        };
    }
  };

  const handleFeatureClick = (feature: any) => {
    console.log(`Feature clicked: ${feature.title}`);
    // Add your click handling logic here
  };

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
        <div className="relative flex justify-center items-center min-h-[500px] sm:min-h-[600px] lg:min-h-[700px] px-4">
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

          {/* Feature Buttons in Circle */}
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const sizeClasses = getSizeClasses(feature.size);
            const radius = { mobile: 150, desktop: 240 }; // Circle radius
            const position = getCircularPosition(feature.angle, radius);
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                viewport={{ once: true }}
                className="absolute z-30"
                style={{
                  transform: `translate(-50%, -50%)`,
                  left: `calc(50% + ${position.mobile.x}px)`,
                  top: `calc(50% - ${position.mobile.y}px)`,
                  '--lg-left': `calc(50% + ${position.desktop.x}px)`,
                  '--lg-top': `calc(50% - ${position.desktop.y}px)`
                } as React.CSSProperties}
              >
                {/* Dotted Line Connector to Center */}
                <div className="absolute inset-0 -z-10">
                  <svg 
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-28 h-28 sm:w-40 sm:h-40 lg:w-56 lg:h-56"
                    viewBox="0 0 100 100"
                  >
                    <line 
                      x1="50" 
                      y1="50" 
                      x2={50 - (position.mobile.x / radius.mobile) * 30}
                      y2={50 + (position.mobile.y / radius.mobile) * 30}
                      stroke="#d1d5db" 
                      strokeWidth="1.5" 
                      strokeDasharray="3,3"
                      opacity="0.4"
                      className="lg:hidden"
                    />
                    <line 
                      x1="50" 
                      y1="50" 
                      x2={50 - (position.desktop.x / radius.desktop) * 30}
                      y2={50 + (position.desktop.y / radius.desktop) * 30}
                      stroke="#d1d5db" 
                      strokeWidth="2" 
                      strokeDasharray="4,4"
                      opacity="0.5"
                      className="hidden lg:block"
                    />
                  </svg>
                </div>

                {/* Interactive Feature Button */}
                <motion.button
                  onClick={() => handleFeatureClick(feature)}
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className={`${
                    feature.bgColor
                  } rounded-lg sm:rounded-xl lg:rounded-2xl p-2 sm:p-3 lg:p-4 shadow-md lg:shadow-lg border border-gray-200 ${
                    sizeClasses.container
                  } hover:shadow-lg lg:hover:shadow-xl active:shadow-sm transition-all duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50 lg:absolute lg:top-[var(--lg-top)] lg:left-[var(--lg-left)] lg:transform lg:-translate-x-1/2 lg:-translate-y-1/2`}
                >
                  <div className="flex items-center space-x-1 sm:space-x-2 lg:space-x-3">
                    <div className={`${
                      sizeClasses.icon
                    } ${feature.bgColor === 'bg-white' ? 'bg-gray-800' : 'bg-orange-500'} rounded-md sm:rounded-lg lg:rounded-xl flex items-center justify-center shadow-sm lg:shadow-md`}>
                      <Icon className={`${
                        sizeClasses.iconText
                      } ${feature.bgColor === 'bg-white' ? 'text-orange-500' : 'text-white'}`} />
                    </div>
                    <div className="text-left min-w-0 flex-1">
                      <h3 className={`font-bold ${
                        sizeClasses.title
                      } ${feature.bgColor === 'bg-white' ? 'text-gray-900' : 'text-white'} leading-tight`}>
                        {feature.title}
                      </h3>
                      <p className={`${
                        sizeClasses.subtitle
                      } ${feature.bgColor === 'bg-white' ? 'text-gray-600' : 'text-gray-300'} leading-tight`}>
                        {feature.subtitle}
                      </p>
                      {feature.description && (
                        <p className={`${
                          sizeClasses.description
                        } mt-1 ${feature.bgColor === 'bg-white' ? 'text-gray-500' : 'text-gray-400'} leading-tight hidden sm:block`}>
                          {feature.description}
                        </p>
                      )}
                    </div>
                  </div>
                </motion.button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default KeyFeatures;