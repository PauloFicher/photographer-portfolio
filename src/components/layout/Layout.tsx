import React from 'react';
import type { ReactNode } from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { DevelopmentCredit } from './DevelopmentCredit';
import { ScrollToTop } from './ScrollToTop';

interface LayoutProps {
  children: ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="bg-white text-gray-900 min-h-screen">
      <div className="grain" />
      
      <Navbar />
      <main>{children}</main>
      <Footer />
      <DevelopmentCredit />
      <ScrollToTop />
    </div>
  );
};