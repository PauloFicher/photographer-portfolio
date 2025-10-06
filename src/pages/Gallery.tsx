// src/pages/Gallery.tsx
import React, { useState, useMemo } from 'react';
import { GalleryCategoryFilter } from '../components/gallery/GalleryCategoryFilter';
import { ImageGrid } from '../components/gallery/ImageGrid';
import { Lightbox } from '../components/gallery/Lightbox';
import { galleryData, getUniqueCategories } from '../data/galleryData';

export const Gallery: React.FC = () => {
  const categories = useMemo(() => getUniqueCategories(), []);
  const [activeCategory, setActiveCategory] = useState(categories[0] || 'Bodas');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const filteredImages = useMemo(() => {
    return galleryData.filter(img => img.category === activeCategory);
  }, [activeCategory]);

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
    <div className="min-h-screen pt-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header - SIN refs ni isVisible */}
        <div className="text-center mb-20">
         
          <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl font-light mb-6 leading-tight">
            <span className="italic text-gray-900">Galería</span>
          </h1>

          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-gray-300" />
            <p className="font-sans text-lg text-gray-600 leading-relaxed max-w-2xl">
              Explora nuestra colección completa de momentos capturados con{' '}
              <span className="text-gray-900 font-semibold">arte</span> y{' '}
              <span className="text-gray-900 font-semibold">pasión</span>
            </p>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-gray-300" />
          </div>

          <div className="inline-flex items-center gap-2 text-sm text-gray-500">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span>{filteredImages.length} imágenes en {activeCategory}</span>
          </div>
        </div>

        {/* Category Filter */}
        <div className="mb-16">
          <GalleryCategoryFilter 
            activeCategory={activeCategory}
            categories={categories}
            onCategoryChange={setActiveCategory}
          />
        </div>

        {/* Image Grid - SIN clases condicionales de visibilidad */}
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
export default Gallery;