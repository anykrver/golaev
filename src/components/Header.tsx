'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredDropdown, setHoveredDropdown] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        if (window.scrollY > lastScrollY && window.scrollY > 100) {
          // Scrolling down and past 100px
          setIsVisible(false);
        } else {
          // Scrolling up or at top
          setIsVisible(true);
        }
        setLastScrollY(window.scrollY);
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);

  const rightNavigation = [
    {
      name: 'Investor Relations',
      hasDropdown: true,
      dropdown: [
        { name: 'Financial Reports', href: '/investor/reports' },
        { name: 'Press Releases', href: '/investor/press' },
        { name: 'Governance', href: '/investor/governance' },
      ]
    },
    {
      name: 'Smart Helmet & Accessories',
      hasDropdown: true,
      dropdown: [
        { name: 'Smart Helmet', href: '/accessories/helmet' },
        { name: 'Charging Accessories', href: '/accessories/charging' },
        { name: 'Performance Parts', href: '/accessories/performance' },
      ]
    },
    {
      name: 'GolaEV Ecosystem',
      hasDropdown: true,
      dropdown: [
        { name: 'Charging Network', href: '/ecosystem/charging' },
        { name: 'Service Centers', href: '/ecosystem/service' },
        { name: 'Mobile App', href: '/ecosystem/app' },
      ]
    },
  ];

  return (
    <motion.header 
      className="fixed top-0 left-0 right-0 z-50"
      initial={{ opacity: 1, y: 0 }}
      animate={{ 
        opacity: isVisible ? 1 : 0, 
        y: isVisible ? 0 : -100 
      }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
    >
      <nav className="bg-white/95 backdrop-blur-md lg:bg-white/85 lg:backdrop-blur-md border border-gray-100 rounded-lg mx-2 my-2 shadow-sm">
        <div className="max-w-8xl mx-auto px-0">
          <div className="flex justify-between items-center h-12 px-2">
            {/* Logo and Product Links */}
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="flex items-center pl-2">
                <div className="text-xl font-bold text-black tracking-wider">
                  GOLAEV
                </div>
              </Link>
              <div className="hidden lg:flex items-center space-x-5 ml-5">
                <Link
                  href="/rizta"
                  className="text-gray-800 hover:text-gray-600 text-sm font-medium transition-colors duration-200"
                >
                  Rizta
                </Link>
                <Link
                  href="/gola-450"
                  className="text-gray-800 hover:text-gray-600 text-sm font-medium transition-colors duration-200"
                >
                  Gola 450
                </Link>
                <Link
                  href="/450-apex"
                  className="text-gray-800 hover:text-gray-600 text-sm font-medium transition-colors duration-200"
                >
                  450 Apex
                </Link>
              </div>
            </div>

            {/* Right Navigation - Dropdown Menus */}
            <div className="hidden lg:flex items-center space-x-6">
              {rightNavigation.map((item) => (
                <div 
                  key={item.name} 
                  className="relative"
                  onMouseEnter={() => setHoveredDropdown(item.name)}
                  onMouseLeave={() => setHoveredDropdown(null)}
                >
                  <button className="text-gray-800 hover:text-gray-600 text-sm font-medium transition-colors duration-200 flex items-center">
                    {item.name}
                    <ChevronDown className="ml-1 h-3 w-3" />
                  </button>
                  <AnimatePresence>
                    {hoveredDropdown === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-100"
                      >
                        <div className="py-2">
                          {item.dropdown?.map((dropItem) => (
                            <Link
                              key={dropItem.name}
                              href={dropItem.href}
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors duration-200"
                            >
                              {dropItem.name}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}            
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-800 hover:text-gray-600 p-2"
              >
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>

      {/* Mobile Navigation - Full Screen Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-white lg:hidden sticky top-0"
          >
            {/* Header with Logo and Close Button */}
            <div className="flex justify-between items-center p-6 border-b border-gray-100">
    
              <div className="text-xl font-bold text-black tracking-wider">
                GOLAEV
              </div>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-2 text-gray-600 hover:text-gray-800"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Menu Content */}
            <div className="flex-1 overflow-y-auto">
              <div className="p-6">
                {/* Menu Grid */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                  {/* Buy Electric Scooters */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-6">Buy Electric Scooters</h3>
                    <div className="space-y-4">
                      <Link href="/products" className="block text-gray-600 hover:text-gray-900 transition-colors" onClick={() => setIsMenuOpen(false)}>
                        Explore Models
                      </Link>
                      <Link href="/dealers" className="block text-gray-600 hover:text-gray-900 transition-colors" onClick={() => setIsMenuOpen(false)}>
                        Locate GolaEV Dealers
                      </Link>
                      <Link href="/compare" className="block text-gray-600 hover:text-gray-900 transition-colors" onClick={() => setIsMenuOpen(false)}>
                        Compare Models
                      </Link>
                      <Link href="/book-rizta" className="block text-gray-600 hover:text-gray-900 transition-colors" onClick={() => setIsMenuOpen(false)}>
                        Book Rizta
                      </Link>
                      <Link href="/book-450" className="block text-gray-600 hover:text-gray-900 transition-colors" onClick={() => setIsMenuOpen(false)}>
                        Book 450
                      </Link>
                      <Link href="/flexipay" className="block text-gray-600 hover:text-gray-900 transition-colors" onClick={() => setIsMenuOpen(false)}>
                        Flexipay
                      </Link>
                    </div>
                  </div>

                  {/* GolaEV Ecosystem */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-6">GolaEV Ecosystem</h3>
                    <div className="space-y-4">
                      <Link href="/warranty" className="block text-gray-600 hover:text-gray-900 transition-colors" onClick={() => setIsMenuOpen(false)}>
                        GolaEV Battery Warranty
                      </Link>
                      <Link href="/charging" className="block text-gray-600 hover:text-gray-900 transition-colors" onClick={() => setIsMenuOpen(false)}>
                        Charging
                      </Link>
                      <Link href="/accessories/450" className="block text-gray-600 hover:text-gray-900 transition-colors" onClick={() => setIsMenuOpen(false)}>
                        GolaEV 450 Accessories
                      </Link>
                      <Link href="/accessories/rizta" className="block text-gray-600 hover:text-gray-900 transition-colors" onClick={() => setIsMenuOpen(false)}>
                        Rizta Accessories
                      </Link>
                      <Link href="/accessories/helmets" className="block text-gray-600 hover:text-gray-900 transition-colors" onClick={() => setIsMenuOpen(false)}>
                        Smart Helmets
                      </Link>
                    </div>
                  </div>

                  {/* Resources */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-6">Resources</h3>
                    <div className="space-y-4">
                      <Link href="/emi-calculator" className="block text-gray-600 hover:text-gray-900 transition-colors" onClick={() => setIsMenuOpen(false)}>
                        EMI Calculator
                      </Link>
                      <Link href="/fast-chargers" className="block text-gray-600 hover:text-gray-900 transition-colors" onClick={() => setIsMenuOpen(false)}>
                        Locate Fast Chargers
                      </Link>
                      <Link href="/blog" className="block text-gray-600 hover:text-gray-900 transition-colors" onClick={() => setIsMenuOpen(false)}>
                        GolaEV Blogs
                      </Link>
                      <Link href="/faqs" className="block text-gray-600 hover:text-gray-900 transition-colors" onClick={() => setIsMenuOpen(false)}>
                        FAQs
                      </Link>
                    </div>
                  </div>

                  {/* More */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-6">More</h3>
                    <div className="space-y-4">
                      <Link href="/investor" className="block text-gray-600 hover:text-gray-900 transition-colors" onClick={() => setIsMenuOpen(false)}>
                        Investor relations
                      </Link>
                      <Link href="/charger-refund" className="block text-gray-600 hover:text-gray-900 transition-colors" onClick={() => setIsMenuOpen(false)}>
                        Charger refund
                      </Link>
                      <Link href="/retail-partnership" className="block text-gray-600 hover:text-gray-900 transition-colors" onClick={() => setIsMenuOpen(false)}>
                        Retail Partnership
                      </Link>
                      <Link href="/press" className="block text-gray-600 hover:text-gray-900 transition-colors" onClick={() => setIsMenuOpen(false)}>
                        Press
                      </Link>
                      <Link href="/careers" className="block text-gray-600 hover:text-gray-900 transition-colors" onClick={() => setIsMenuOpen(false)}>
                        Careers
                      </Link>
                      <Link href="/support" className="block text-gray-600 hover:text-gray-900 transition-colors" onClick={() => setIsMenuOpen(false)}>
                        Support
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Product Showcase */}
                <div className="border-t border-gray-100 pt-8">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Rizta */}
                    <Link href="/rizta" onClick={() => setIsMenuOpen(false)} className="group">
                      <div className="bg-gradient-to-br from-green-400 to-green-600 rounded-2xl p-6 h-48 flex items-end relative overflow-hidden">
                        <div className="absolute inset-0 bg-black/20"></div>
                        <div className="relative z-10">
                          <h3 className="text-white text-xl font-bold mb-1">Rizta</h3>
                          <p className="text-white/90 text-sm">Family Scooter</p>
                        </div>
                      </div>
                    </Link>

                    {/* 450 Apex */}
                    <Link href="/450-apex" onClick={() => setIsMenuOpen(false)} className="group">
                      <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-6 h-48 flex items-end relative overflow-hidden">
                        <div className="absolute inset-0 bg-black/20"></div>
                        <div className="relative z-10">
                          <h3 className="text-white text-xl font-bold mb-1">450 Apex</h3>
                          <p className="text-white/90 text-sm">Performance Scooter</p>
                        </div>
                      </div>
                    </Link>

                    {/* GolaEV 450 */}
                    <Link href="/gola-450" onClick={() => setIsMenuOpen(false)} className="group">
                      <div className="bg-gradient-to-br from-orange-400 to-red-500 rounded-2xl p-6 h-48 flex items-end relative overflow-hidden">
                        <div className="absolute inset-0 bg-black/20"></div>
                        <div className="relative z-10">
                          <h3 className="text-white text-xl font-bold mb-1">GolaEV 450</h3>
                          <p className="text-white/90 text-sm">Smart Scooter</p>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>

                {/* Country Selector */}
                <div className="border-t border-gray-100 pt-6 mt-8">
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-4 bg-gradient-to-r from-orange-500 via-white to-green-500 rounded-sm"></div>
                    <span className="text-gray-700 font-medium">India</span>
                    <ChevronDown className="h-4 w-4 text-gray-500" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      </nav>
    </motion.header>
  );
};

export default Header;