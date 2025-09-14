'use client';

import React from 'react';
import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    products: [
      { name: 'Electric Scooters', href: '/products/scooters' },
      { name: 'Electric Bikes', href: '/products/bikes' },
      { name: 'Accessories', href: '/products/accessories' },
      { name: 'Charging Solutions', href: '/products/charging' },
    ],
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Careers', href: '/careers' },
      { name: 'Press', href: '/press' },
      { name: 'Investors', href: '/investors' },
    ],
    support: [
      { name: 'Help Center', href: '/support' },
      { name: 'Service Centers', href: '/service-centers' },
      { name: 'Warranty', href: '/warranty' },
      { name: 'User Manual', href: '/manual' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Cookie Policy', href: '/cookies' },
      { name: 'Refund Policy', href: '/refund' },
    ],
  };

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: 'https://facebook.com/golaev' },
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/golaev' },
    { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/golaev' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/company/golaev' },
    { name: 'YouTube', icon: Youtube, href: 'https://youtube.com/golaev' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="text-2xl font-bold text-green-400 mb-4">
              GolaEV
            </div>
            <p className="text-gray-300 mb-6 text-sm leading-6">
              Leading the electric revolution in India with smart, sustainable, and stylish electric vehicles. 
              Join us in creating a cleaner, greener future for transportation.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                <div className="text-sm text-gray-300">
                  <p>7F55+VMF, JK Rd, Neeraja Nagar Phase 2,</p>
                  <p>Bharat Nagar, Govindpura Industrial Area,</p>
                  <p>Bhopal, Madhya Pradesh 462022</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-green-400" />
                <span className="text-sm text-gray-300">+91 755 123 4567</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-green-400" />
                <span className="text-sm text-gray-300">info@golaev.com</span>
              </div>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Products</h3>
            <ul className="space-y-2">
              {footerLinks.products.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-sm text-gray-300 hover:text-green-400 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-sm text-gray-300 hover:text-green-400 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Support</h3>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-sm text-gray-300 hover:text-green-400 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Legal</h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-sm text-gray-300 hover:text-green-400 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <div className="mb-4 lg:mb-0">
              <h3 className="text-lg font-semibold mb-2">Stay Updated</h3>
              <p className="text-sm text-gray-300">Get the latest news and updates about our products and services.</p>
            </div>
            <div className="flex w-full lg:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 lg:w-64 px-4 py-2 bg-gray-800 border border-gray-700 rounded-l-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
              <button className="px-6 py-2 bg-green-600 text-white rounded-r-md hover:bg-green-700 transition-colors duration-200 font-medium">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <div className="text-sm text-gray-400 mb-4 lg:mb-0">
              © {currentYear} GolaEV. All rights reserved.
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-green-400 transition-colors duration-200"
                    aria-label={social.name}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;