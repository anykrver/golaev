'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, ArrowRight } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ = () => {
  const [expandedItem, setExpandedItem] = useState<number | null>(null);

  const faqItems: FAQItem[] = [
    {
      question: "How do I charge an electric scooter?",
      answer: "GolaEV has the largest EV two-wheeler fast charging grid network in India. There are 3 ways to charge a GolaEV Electric Scooter. The first is with the portable charger provided with your GolaEV scooter that can be plugged into any 5 amp socket at home, just like you charge your mobile phone. The second is through 3100+ fast-charging grids across the country that can give you up to 15 kms range for every 10 minutes of charging. The third is at public spaces like apartment complexes, malls, university campuses and office buildings where GolaEV Neighbourhood charges are installed. To request for one to be installed in your building, contact us here."
    },
    {
      question: "Can I use an electric scooter if I live in an apartment?",
      answer: "Yes, our electric scooters are designed for apartment living. You can easily charge them using a regular 5 amp socket. The portable charger can be carried to your apartment, and many apartment complexes also have dedicated charging stations."
    },
    {
      question: "Do I need a Drivers' License, Helmet and Registration to use an electric scooter?",
      answer: "Yes, you need a valid driving license for electric scooters above 250W power. Helmet is mandatory for safety, and the scooter needs to be registered with RTO. We assist with all registration processes and provide necessary documentation."
    },
    {
      question: "Why do Electric Scooters have riding modes?",
      answer: "Electric scooters have different riding modes to optimize performance for various conditions. Eco mode maximizes range for longer trips, City mode provides balanced performance for daily commuting, and Sport mode delivers maximum power for quick acceleration when needed."
    },
    {
      question: "What is the cost of charging an electric scooter?",
      answer: "Charging costs are minimal - approximately ₹10-15 for a full charge at home. At our fast charging network, costs range from ₹20-50 depending on the charging speed and location. This makes electric scooters extremely cost-effective compared to petrol vehicles."
    },
    {
      question: "Do I ever need to replace an electric scooter's battery?",
      answer: "Our batteries are designed to last 3-5 years with normal usage. With our Battery as a Service (BaaS) program, you don't need to worry about battery replacement costs - we handle maintenance and replacement as part of the service plan."
    },
    {
      question: "Can electric scooters be used in the rain?",
      answer: "Yes, our electric scooters have IP67 water resistance rating, making them safe to ride in rain and through puddles. However, we recommend avoiding deep water and extreme weather conditions for optimal safety and performance."
    },
    {
      question: "What is the range of GolaEV scooters?",
      answer: "Our scooters offer a range of 100-150km on a single charge, depending on the model and riding conditions."
    },
    {
      question: "What is the price of electric scooter?",
      answer: "Our electric scooters start from ₹75,999 with our Battery as a Service option. Prices vary based on model, features, and whether you choose to purchase or lease the battery."
    },
    {
      question: "What is the price of ather electric scooter?",
      answer: "GolaEV scooters are competitively priced against other premium electric scooters in the market. Our BaaS option makes them even more affordable with lower upfront costs."
    },
    {
      question: "Which electric scooter is best in India with price?",
      answer: "GolaEV offers the best combination of performance, features, and value. With our extensive charging network, smart connectivity, and BaaS option, we provide comprehensive electric mobility solutions at competitive prices."
    },
    {
      question: "What is the lowest price of electric scooter?",
      answer: "With our Battery as a Service program, you can own a GolaEV scooter starting at ₹75,999, making premium electric mobility accessible to everyone."
    }
  ];

  const toggleExpand = (index: number) => {
    setExpandedItem(expandedItem === index ? null : index);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Side - Title */}
          <div className="lg:sticky lg:top-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-8 lg:mb-0">
                Your questions,<br />answered
              </h2>
            </motion.div>
          </div>

          {/* Right Side - FAQ Items */}
          <div className="space-y-1">
            {faqItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="border-b border-gray-200"
              >
                <button
                  onClick={() => toggleExpand(index)}
                  className="w-full py-6 flex items-center justify-between text-left hover:bg-gray-50 transition-colors duration-200 group"
                >
                  <h3 className="text-lg font-medium text-gray-900 pr-4 group-hover:text-gray-700">
                    {item.question}
                  </h3>
                  <div className="flex-shrink-0">
                    {expandedItem === index ? (
                      <Minus className="h-6 w-6 text-gray-500" />
                    ) : (
                      <Plus className="h-6 w-6 text-gray-500" />
                    )}
                  </div>
                </button>
                
                <AnimatePresence>
                  {expandedItem === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="pb-6 pr-10">
                        <p className="text-gray-600 leading-relaxed">
                          {item.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>

        {/* View All FAQs Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            href="/faq"
            className="inline-flex items-center text-gray-900 font-medium hover:text-gray-700 transition-colors border-b-2 border-gray-900 pb-1"
          >
            View all FAQs
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;