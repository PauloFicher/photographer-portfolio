import React, { useState, useRef } from 'react';
import { CategoryFilter } from '../components/gallery/CategoryFilter';
import { ImageGrid } from '../components/gallery/ImageGrid';
import { Lightbox } from '../components/gallery/Lightbox';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { galleryImages } from '../data/galleryImages';

export const Gallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const sectionRef = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.1 });

  const filteredImages = activeCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % filteredImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + filteredImages.length) % filteredImages.length);
  };

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div 
          ref={sectionRef}
          className={`reveal-text ${isVisible ? 'visible' : ''} text-center mb-20`}
        >
          <h1 className="font-serif text-7xl md:text-8xl font-light mb-6 leading-tight">
            <span className="italic">Galería</span>
          </h1>
          <p className="font-sans text-lg text-gray-400 leading-relaxed max-w-2xl mx-auto mb-12">
            Explora nuestra colección completa de momentos capturados con arte y pasión
          </p>
        </div>

        {/* Category Filter */}
        <CategoryFilter 
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />

        {/* Image Grid */}
        <ImageGrid 
          images={filteredImages}
          onImageClick={openLightbox}
        />
      </div>

      {/* Lightbox */}
      <Lightbox
        isOpen={lightboxOpen}
        currentIndex={currentImageIndex}
        images={filteredImages}
        onClose={() => setLightboxOpen(false)}
        onNext={nextImage}
        onPrev={prevImage}
      />
    </div>
  );
};