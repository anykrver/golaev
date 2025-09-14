'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import KeyFeatures from '@/components/KeyFeatures';
import FAQ from '@/components/FAQ';
import WhyChooseGolaEV from '@/components/WhyChooseGolaEV';
import AtherSpace from '@/components/AtherSpace';

export default function Home() {

  const stats = [
    { number: '10,000+', label: 'Happy Customers' },
    { number: '50+', label: 'Cities' },
    { number: '150km', label: 'Max Range' },
    { number: '24/7', label: 'Support' }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <Hero />

      {/* GolaEV Electric Scooters Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              GolaEV Electric Scooters
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Experience the perfect harmony of cutting-edge technology, exceptional performance, 
              and sustainable mobility. Our electric scooters are designed to redefine your daily 
              commute with smart features, long-range batteries, and zero emissions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pick your GolaEV Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Pick your GolaEV
            </h2>
          </motion.div>

          {/* Featured Product - Rizta */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 mb-16 shadow-sm"
          >
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center mb-4">
                  <span className="bg-green-600 text-white px-3 py-1 rounded text-sm font-medium">
                    ✓ All New
                  </span>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">GolaEV Rizta</h3>
                <p className="text-gray-600 text-lg mb-2">Starting price ₹ 1,04,999</p>
                <p className="text-gray-500 mb-8">Or Flexipay ₹ 2,199/month ⓘ</p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-black text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors">
                    Book now
                  </button>
                  <button className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                    Explore Offers
                  </button>
                </div>
              </div>
              
              <div className="relative">
                <div className="w-full h-80 rounded-2xl overflow-hidden relative">
                  <Image
                    src="https://www.atherenergy.com/_next/image?url=https%3A%2F%2Fmedia.atherenergy.com%2FAthe%2520Home%2520Rizta%25202%2520Dec.webp&w=1080&q=75"
                    alt="GolaEV Rizta Electric Scooter"
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Product Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* GolaEV 450S */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="h-48 rounded-xl mb-6 overflow-hidden relative">
                <Image
                  src="https://acerelectric.in/wp-content/uploads/2024/11/Image-8-1024x985.png"
                  alt="GolaEV 450S White Electric Scooter"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-2">GolaEV 450S</h3>
              <p className="text-gray-600 mb-1">Starting price ₹ 1,19,841</p>
              <p className="text-gray-500 text-sm mb-6">Or Flexipay ₹ 2,475/month ⓘ</p>
              
              <div className="flex flex-col gap-3">
                <button className="bg-black text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors">
                  Home test ride
                </button>
                <button className="border border-gray-300 text-gray-700 py-2 px-4 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
                  Explore 450
                </button>
              </div>
            </motion.div>

            {/* GolaEV 450X */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="h-48 rounded-xl mb-6 overflow-hidden relative">
                <Image
                  src="https://www.atherenergy.com/_next/image?url=https%3A%2F%2Fmedia.atherenergy.com%2FProd%2520card%2520450X%2520web.png&w=1080&q=75"
                  alt="GolaEV 450X Red Electric Scooter"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-2">GolaEV 450X</h3>
              <p className="text-gray-600 mb-1">Starting price ₹ 1,46,999</p>
              <p className="text-gray-500 text-sm mb-6">Or Flexipay ₹ 2,789/month ⓘ</p>
              
              <div className="flex flex-col gap-3">
                <button className="bg-black text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors">
                  Home test ride
                </button>
                <button className="border border-gray-300 text-gray-700 py-2 px-4 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
                  Explore 450
                </button>
              </div>
            </motion.div>

            {/* GolaEV 450 Apex */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="h-48 rounded-xl mb-6 overflow-hidden relative">
                <Image
                  src="https://images.unsplash.com/photo-1571068316344-75bc76f77890?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                  alt="GolaEV 450 Apex Blue Electric Scooter"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-2">GolaEV 450 Apex</h3>
              <p className="text-gray-600 mb-1">Starting price ₹ 1,89,999</p>
              <p className="text-gray-500 text-sm mb-6">Or Flexipay ₹ 3,439/month ⓘ</p>
              
              <div className="flex flex-col gap-3">
                <button className="bg-black text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors">
                  Home test ride
                </button>
                <button className="border border-gray-300 text-gray-700 py-2 px-4 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
                  Explore 450 Apex
                </button>
              </div>
            </motion.div>
          </div>

          {/* Compare Models Link */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link
              href="/compare"
              className="inline-flex items-center text-gray-900 font-medium hover:text-gray-700 transition-colors border-b-2 border-gray-900 pb-1"
            >
              Compare models
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className=""
              >
                <div className="text-3xl lg:text-4xl font-bold text-green-600 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Charging Network Section */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-6 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold mb-3">
                India&apos;s largest<br />
                EV two-wheeler<br />
                fast charging<br />
                network
              </h2>
              <div className="flex items-center space-x-8">
                <div>
                  <div className="text-3xl font-bold text-green-400">2500+</div>
                  <div className="text-gray-300">Charging points</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-400">180+</div>
                  <div className="text-gray-300">Cities</div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="w-full h-80 rounded-2xl overflow-hidden relative">
                <Image
                  src="https://media.atherenergy.com/Map_Desktop_result_db0d31ab3d.webp"
                  alt="EV Charging Network Map India"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Ather Space Section */}
      <AtherSpace />

      {/* Key Features Section */}
      <KeyFeatures />

      {/* Stories Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Stories at GolaEV
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-2xl overflow-hidden"
            >
              <div className="h-48 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                  alt="Customer story - young professional with electric scooter" 
                  className="w-full h-full object-cover"
                  width={600}
                  height={192}
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  From concept to the first ride
                </h3>
                <p className="text-gray-600 text-sm">
                  Discover how GolaEV transformed urban mobility through innovation and customer-centric design.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-2xl overflow-hidden"
            >
              <div className="h-48 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                  alt="Technology team working on sustainable future" 
                  className="w-full h-full object-cover"
                  width={600}
                  height={192}
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Racing towards a sustainable future
                </h3>
                <p className="text-gray-600 text-sm">
                  Learn about our commitment to sustainable transportation and clean energy solutions.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-2xl overflow-hidden"
            >
              <div className="h-48 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                  alt="Innovation team discussing future of electric mobility" 
                  className="w-full h-full object-cover"
                  width={600}
                  height={192}
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  An Incremental step ahead
                </h3>
                <p className="text-gray-600 text-sm">
                  Explore our latest technological breakthroughs and what&apos;s coming next in electric mobility.
                </p>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link
              href="/stories"
              className="inline-flex items-center text-gray-900 font-medium hover:text-gray-700 transition-colors border-b-2 border-gray-900 pb-1"
            >
              View all stories
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Experience Enhancement Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Top up your GolaEV experience.
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 shadow-sm"
            >
              <div className="h-40 rounded-xl mb-6 overflow-hidden">
                <Image
                  src="https://motorcycle-soul.com/34721-thickbox_default/premier-devil-ev-6-blue-yellow-2206-helmet.jpg" 
                  alt="Smart motorcycle helmet with advanced features" 
                  className="w-full h-full object-cover"
                  width={400}
                  height={160}
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Smart Helmet with advanced features
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Stay connected and safe with our intelligent helmet featuring Bluetooth, navigation, and safety alerts.
              </p>
              <Link href="/accessories/helmet" className="text-green-600 font-medium hover:text-green-700">
                Learn more →
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 shadow-sm"
            >
              <div className="h-40 rounded-xl mb-6 overflow-hidden">
                <Image
                  src="https://mgmotor.scene7.com/is/image/mgmotor/evpedia-bn-0060?$mg-rgb-4k-image-responsive$" 
                  alt="Portable EV charger and charging accessories" 
                  className="w-full h-full object-cover"
                  width={400}
                  height={160}
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Portable charger for on-the-go charging
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Never worry about running out of charge with our compact and efficient portable charging solutions.
              </p>
              <Link href="/accessories/charger" className="text-green-600 font-medium hover:text-green-700">
                Learn more →
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 shadow-sm"
            >
              <div className="h-40 rounded-xl mb-6 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                  alt="Premium motorcycle accessories and gear" 
                  className="w-full h-full object-cover"
                  width={400}
                  height={160}
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Premium accessories and merchandise
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Complete your GolaEV experience with our range of premium accessories and branded merchandise.
              </p>
              <Link href="/accessories" className="text-green-600 font-medium hover:text-green-700">
                Learn more →
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Wish to know more about GolaEV?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Stay updated with our latest news, product launches, and exclusive offers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 bg-white text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <button className="px-8 py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors duration-200">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ />
      
      {/* Why Choose GolaEV Section */}
      <WhyChooseGolaEV />
    </Layout>
  );
}
