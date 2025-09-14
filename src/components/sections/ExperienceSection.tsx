'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const ExperienceSection: React.FC = () => {
  const experiences = [
    {
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      title: "Smart Helmet with advanced features",
      description: "Stay connected and safe with our intelligent helmet featuring Bluetooth, navigation, and safety alerts.",
      link: "/accessories/helmet",
      color: "from-blue-500 to-cyan-500"
    },
    {
      image: "https://mgmotor.scene7.com/is/image/mgmotor/evpedia-bn-0060?$mg-rgb-4k-image-responsive$",
      title: "Portable charger for on-the-go charging",
      description: "Never worry about running out of charge with our compact and efficient portable charging solutions.",
      link: "/accessories/charger",
      color: "from-green-500 to-emerald-500"
    },
    {
      image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      title: "Premium accessories and merchandise",
      description: "Complete your GolaEV experience with our range of premium accessories and branded merchandise.",
      link: "/accessories",
      color: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <div className="h-screen w-full bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Top up your GolaEV experience
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Enhance your electric journey with premium accessories and smart solutions
          </p>
        </motion.div>

        {/* Experience Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.2 }}
              className="group"
            >
              <div className="relative bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-500 transform hover:scale-105">
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${experience.color} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-500`}></div>
                
                <div className="relative z-10">
                  <div className="h-48 rounded-2xl mb-6 overflow-hidden">
                    <Image
                      src={experience.image}
                      alt={experience.title}
                      width={400}
                      height={192}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-4">
                    {experience.title}
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {experience.description}
                  </p>
                  
                  <Link 
                    href={experience.link}
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium transition-colors duration-300"
                  >
                    Learn more →
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;