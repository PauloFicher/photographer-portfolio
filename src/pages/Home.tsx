import React from 'react';
import { HeroSection } from '../components/home/HeroSection';
import { ServicesSection } from '../components/home/ServicesSection';
import { GalleryPreview } from '../components/home/GalleryPreview';
import { TestimonialsSection } from '../components/home/TestimonialsSection';
import { ContactSection } from '../components/home/ContactSection';

export const Home: React.FC = () => {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <GalleryPreview />
      <TestimonialsSection />
      <ContactSection />
    </>
  );
};