'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Battery, Zap, Leaf, Smartphone } from 'lucide-react';

const WhyChooseGolaEV = () => {
  const features = [
    {
      icon: Battery,
      title: 'Long Range Battery',
      description: 'Up to 150km range on a single charge with our advanced lithium-ion battery technology.',
    },
    {
      icon: Zap,
      title: 'Fast Charging',
      description: 'Quick charge from 0-80% in just 60 minutes with our smart charging solutions.',
    },
    {
      icon: Leaf,
      title: 'Zero Emissions',
      description: 'Contribute to a cleaner environment with our 100% electric, zero-emission vehicles.',
    },
    {
      icon: Smartphone,
      title: 'Smart Connectivity',
      description: 'Connected features with mobile app integration for tracking and remote control.',
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Why Choose GolaEV?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience cutting-edge technology, exceptional performance, and sustainable mobility 
            with our innovative electric vehicles.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <motion.div
                key={feature.title}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                  <IconComponent className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseGolaEV;