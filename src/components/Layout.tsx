'use client';

import React from 'react';
import Header from './Header';
import Footer from './Footer';
import ContactPopup from './ContactPopup';
import { useContactPopup } from '../hooks/useContactPopup';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { isPopupOpen, closePopup } = useContactPopup();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-16">
        {children}
      </main>
      <Footer />
      
      {/* Contact Popup */}
      <ContactPopup isOpen={isPopupOpen} onClose={closePopup} />
    </div>
  );
};

export default Layout;