'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const AtherSpace = () => {
  return (
    <section className="relative w-full h-[500px] lg:h-[600px] overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://framerusercontent.com/images/s16J2lH0B6tG5iEW50pxO7u0bM.png?scale-down-to=2048')`,
        }}
      />

      {/* Content Card - Starting from middle Y */}
      <div className="absolute inset-0">
        <div className="flex flex-col justify-center">
          <div className="max-w-10xl w-full mx-auto px-8">\r
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white/90 backdrop-blur-md rounded-3xl shadow-xl p-8 lg:p-12 ml-auto w-full md:w-3/5 lg:w-1/2"
            >
              <div className="mb-6">
                <span className="text-gray-700 text-lg font-medium">Ather Space</span>
              </div>
              
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8 leading-tight">
                Take back all the answers.<br />
                And a great test ride<br />
                experience.
              </h2>
              
              <div className="flex justify-between items-center mb-8">
                <div className="text-center">
                  <div className="text-4xl lg:text-5xl font-bold text-gray-900 mb-1">316+</div>
                  <div className="text-gray-600 text-base font-medium">Cities</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl lg:text-5xl font-bold text-gray-900 mb-1">463+</div>
                  <div className="text-gray-600 text-base font-medium">Ather Space</div>
                </div>
              </div>
              
              <Link
                href="/experience-centers"
                className="inline-flex items-center text-gray-900 font-medium hover:text-gray-700 transition-colors border-b-2 border-gray-900 pb-1 text-lg"
              >
                Locate experience centre
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AtherSpace;
