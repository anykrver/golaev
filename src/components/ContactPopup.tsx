'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MapPin } from 'lucide-react';

interface ContactPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactPopup: React.FC<ContactPopupProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    pincode: '',
    model: 'Rizta'
  });

  const [errors, setErrors] = useState({
    name: '',
    phone: '',
    pincode: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleModelChange = (model: string) => {
    setFormData(prev => ({ ...prev, model }));
  };

  const validateForm = () => {
    const newErrors = {
      name: '',
      phone: '',
      pincode: ''
    };

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[0-9]{10}$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid 10-digit phone number';
    }

    if (!formData.pincode.trim()) {
      newErrors.pincode = 'Pin code is required';
    } else if (!/^[0-9]{6}$/.test(formData.pincode)) {
      newErrors.pincode = 'Please enter a valid 6-digit pin code';
    }

    setErrors(newErrors);
    return !Object.values(newErrors).some(error => error !== '');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Handle form submission here
      // TODO: Implement actual form submission logic
      
      // Close popup after successful submission
      onClose();
      
      // Reset form
      setFormData({
        name: '',
        phone: '',
        pincode: '',
        model: 'Rizta'
      });
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
          />
          
          {/* Popup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md mx-auto relative">
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="h-5 w-5 text-gray-500" />
              </button>

              {/* Content */}
              <div className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Talk to us, directly.
                </h2>
                <p className="text-gray-600 mb-8">
                  Drop your details &amp; we&apos;ll reach out to you.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Field */}
                  <div>
                    <input
                      type="text"
                      name="name"
                      placeholder="Name*"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-colors placeholder:text-gray-400 ${
                        errors.name
                          ? 'border-red-500 focus:ring-red-500'
                          : 'border-gray-300 focus:ring-green-500'
                      }`}
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                    )}
                  </div>

                  {/* Phone Field */}
                  <div>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone number*"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-colors placeholder:text-gray-400 ${
                        errors.phone
                          ? 'border-red-500 focus:ring-red-500'
                          : 'border-gray-300 focus:ring-green-500'
                      }`}
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                    )}
                  </div>

                  {/* Pin Code Field */}
                  <div className="relative">
                    <input
                      type="text"
                      name="pincode"
                      placeholder="Enter Pin Code or Area*"
                      value={formData.pincode}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 pr-12 border rounded-lg focus:outline-none focus:ring-2 transition-colors placeholder:text-gray-400 ${
                        errors.pincode
                          ? 'border-red-500 focus:ring-red-500'
                          : 'border-gray-300 focus:ring-green-500'
                      }`}
                    />
                    <MapPin className="absolute right-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    {errors.pincode && (
                      <p className="text-red-500 text-sm mt-1">{errors.pincode}</p>
                    )}
                  </div>

                  {/* Model Selection */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      Pick your model*
                    </label>
                    <div className="flex space-x-4">
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="model"
                          value="Rizta"
                          checked={formData.model === 'Rizta'}
                          onChange={(e) => handleModelChange(e.target.value)}
                          className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300"
                        />
                        <span className="ml-2 text-gray-700">Rizta</span>
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="model"
                          value="Ather 450"
                          checked={formData.model === 'Ather 450'}
                          onChange={(e) => handleModelChange(e.target.value)}
                          className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300"
                        />
                        <span className="ml-2 text-gray-700">Ather 450</span>
                      </label>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-gray-300 hover:bg-gray-400 text-gray-700 font-medium py-3 px-6 rounded-lg transition-colors duration-200"
                  >
                    Submit
                  </button>
                </form>

                {/* Privacy Notice */}
                <p className="text-xs text-gray-500 mt-6 leading-relaxed">
                  By clicking on &quot;Submit&quot; you are agreeing to our{' '}
                  <a href="/privacy-policy" className="text-green-600 hover:underline">
                    Privacy Policy
                  </a>{' '}
                  and are allowing us (Ather Energy) and our service partners to get in touch with you.
                </p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ContactPopup;