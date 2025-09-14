'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote: "Their work brought our entire brand to life—subtle, thoughtful, and timeless. Every element felt carefully crafted, both visually and emotionally.",
      name: "Amelia Hart",
      company: "Vale Studio",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
      quote: "The team captured our vision better than we imagined. From mood boards to final space, everything felt clear, smooth, and perfectly on-brand.",
      name: "Daniel Rees",
      company: "Rees & Co",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
      quote: "We felt heard and understood at every step. Their design choices not only impressed—but told our story in ways we never could with words.",
      name: "Julian Meyer",
      company: "Partner",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      isFeatured: true
    },
    {
      quote: "Working with GolaEV transformed our understanding of electric mobility. The attention to detail and innovative approach exceeded all expectations.",
      name: "Sophie Lang",
      company: "Atelier Nine",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    }
  ];

  const brands = [
    { 
      name: "45 Degrees°", 
      icon: "📐",
      className: "text-black font-semibold"
    },
    { 
      name: "Cooperative", 
      icon: "⚡",
      className: "text-black font-semibold"
    },
    { 
      name: "CoreOS", 
      icon: "⚫",
      className: "text-black font-semibold"
    },
    { 
      name: "Frequencli", 
      icon: "📊",
      className: "text-black font-semibold"
    },
    { 
      name: "LaunchSimple", 
      icon: "🚀",
      className: "text-black font-semibold"
    },
    { 
      name: "45 Degrees°", 
      icon: "📐",
      className: "text-black font-semibold"
    },
    { 
      name: "Cooperative", 
      icon: "⚡",
      className: "text-black font-semibold"
    },
    { 
      name: "CoreOS", 
      icon: "⚫",
      className: "text-black font-semibold"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Don&apos;t just listen to us—see<br />what our partners have to say.
          </h2>
        </motion.div>

        {/* Testimonials Grid Layout */}
        <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {/* Top Left Testimonial */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-1 bg-gray-50 p-8 rounded-2xl"
          >
            {/* Star Rating */}
            <div className="flex items-center mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-red-500 fill-current mr-1" />
              ))}
            </div>

            {/* Quote */}
            <p className="text-gray-900 text-lg leading-relaxed mb-8 font-medium">
              {testimonials[0].quote}
            </p>

            {/* Author */}
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                <Image
                  src={testimonials[0].image}
                  alt={testimonials[0].name}
                  width={48}
                  height={48}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <div className="font-semibold text-gray-900">{testimonials[0].name}</div>
                <div className="text-gray-600 text-sm">{testimonials[0].company}</div>
              </div>
            </div>
          </motion.div>

          {/* Top Right Testimonial */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="lg:col-span-1 bg-gray-50 p-8 rounded-2xl"
          >
            {/* Star Rating */}
            <div className="flex items-center mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-red-500 fill-current mr-1" />
              ))}
            </div>

            {/* Quote */}
            <p className="text-gray-900 text-lg leading-relaxed mb-8 font-medium">
              {testimonials[1].quote}
            </p>

            {/* Author */}
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                <Image
                  src={testimonials[1].image}
                  alt={testimonials[1].name}
                  width={48}
                  height={48}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <div className="font-semibold text-gray-900">{testimonials[1].name}</div>
                <div className="text-gray-600 text-sm">{testimonials[1].company}</div>
              </div>
            </div>
          </motion.div>

          {/* Bottom Right Testimonial */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-1 bg-gray-50 p-8 rounded-2xl"
          >
            {/* Star Rating */}
            <div className="flex items-center mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-red-500 fill-current mr-1" />
              ))}
            </div>

            {/* Quote */}
            <p className="text-gray-900 text-lg leading-relaxed mb-8 font-medium">
              {testimonials[3].quote}
            </p>

            {/* Author */}
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                <Image
                  src={testimonials[3].image}
                  alt={testimonials[3].name}
                  width={48}
                  height={48}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <div className="font-semibold text-gray-900">{testimonials[3].name}</div>
                <div className="text-gray-600 text-sm">{testimonials[3].company}</div>
              </div>
            </div>
          </motion.div>

          {/* Central Featured Image with Testimonial */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="lg:col-start-2 lg:row-start-1 lg:row-span-2 relative"
          >
            <div className="relative bg-gray-800 rounded-3xl overflow-hidden h-full min-h-[500px]">
              <Image
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Julian Meyer - Partner"
                fill
                className="object-cover"
              />
              
              {/* Overlay with testimonial info */}
              <div className="absolute bottom-8 left-8 right-8">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4 border-2 border-white">
                    <Image
                      src={testimonials[2].image}
                      alt={testimonials[2].name}
                      width={48}
                      height={48}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-semibold text-white text-lg">{testimonials[2].name}</div>
                    <div className="text-gray-300 text-sm">{testimonials[2].company}</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* As seen on section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-gray-200 pt-12"
        >
          <p className="text-gray-500 text-sm font-medium mb-8">
            As seen on:
          </p>
          
          <div className="relative overflow-hidden">
            {/* Left fade gradient */}
            <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
            
            {/* Right fade gradient */}
            <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
            
            <motion.div
              className="flex items-center gap-12 whitespace-nowrap"
              animate={{
                x: ["-50%", "0%"]
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 20,
                  ease: "linear"
                }
              }}
            >
              {/* First set of brands */}
              {brands.map((brand, index) => (
                <div
                  key={`first-${index}`}
                  className="flex items-center gap-3 opacity-60 hover:opacity-100 transition-opacity duration-300 flex-shrink-0"
                >
                  <span className="text-lg text-black">{brand.icon}</span>
                  <span className={brand.className}>{brand.name}</span>
                </div>
              ))}
              
              {/* Duplicate set for seamless loop */}
              {brands.map((brand, index) => (
                <div
                  key={`second-${index}`}
                  className="flex items-center gap-3 opacity-60 hover:opacity-100 transition-opacity duration-300 flex-shrink-0"
                >
                  <span className="text-lg text-black">{brand.icon}</span>
                  <span className={brand.className}>{brand.name}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;