// src/pages/Gallery.tsx
import React, { useState, useMemo, useRef, useEffect } from 'react';
import { Lightbox } from '../components/gallery/Lightbox';
import { galleryData, getUniqueCategories } from '../data/galleryData';
import { ChevronDown } from 'lucide-react';

export const Gallery: React.FC = () => {
  const categories = useMemo(() => getUniqueCategories(), []);
  const [activeCategory, setActiveCategory] = useState(categories[0] || 'Bodas');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Filtrar y ORDENAR imágenes por tipo de aspect ratio
  const filteredImages = useMemo(() => {
    const images = galleryData.filter(img => img.category === activeCategory);
    
    // Ordenar por tipo de aspect: portrait primero, luego landscape, luego square
    const aspectOrder = { portrait: 0, landscape: 1, square: 2 };
    return images.sort((a, b) => {
      const orderA = aspectOrder[a.aspect as keyof typeof aspectOrder] ?? 3;
      const orderB = aspectOrder[b.aspect as keyof typeof aspectOrder] ?? 3;
      return orderA - orderB;
    });
  }, [activeCategory]);

  // Función para obtener el aspect ratio basado en el campo aspect de la imagen
  const getAspectClass = (aspect: string): string => {
    switch (aspect?.toLowerCase()) {
      case 'portrait':
        return 'aspect-[2/3]'; // Vertical: 1200x1800
      case 'landscape':
        return 'aspect-[3/2]'; // Horizontal: 1200x800
      case 'square':
        return 'aspect-square';
      default:
        return 'aspect-[3/2]'; // Default horizontal
    }
  };

  // Detectar cambio de slide en mobile
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollLeft = container.scrollLeft;
      const cardWidth = container.offsetWidth * 0.85 + 16; // 85vw + gap
      const index = Math.round(scrollLeft / cardWidth);
      setCurrentSlide(index);
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, [filteredImages]);

  // Reset slide position cuando cambia la categoría
  useEffect(() => {
    setCurrentSlide(0);
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft = 0;
    }
  }, [activeCategory]);

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    setIsDropdownOpen(false);
  };

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
        {/* Header */}
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

        {/* Category Filter - Dropdown en Mobile / Tabs en Desktop */}
        <div className="mb-16">
          {/* Mobile: Dropdown compacto */}
          <div className="md:hidden relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="w-full bg-gray-100 text-gray-900 px-4 py-3 rounded-lg flex items-center justify-between font-semibold hover:bg-gray-200 transition"
            >
              <span>{activeCategory}</span>
              <ChevronDown 
                size={20} 
                className={`transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}
              />
            </button>

            {isDropdownOpen && (
              <>
                {/* Overlay para cerrar */}
                <div 
                  className="fixed inset-0 z-10"
                  onClick={() => setIsDropdownOpen(false)}
                />
                
                {/* Dropdown menu */}
                <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-lg z-20 overflow-hidden border border-gray-200">
                  {categories.map(category => (
                    <button
                      key={category}
                      onClick={() => handleCategoryChange(category)}
                      className={`w-full text-left px-4 py-3 transition ${
                        activeCategory === category
                          ? 'bg-gray-900 text-white font-semibold'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Desktop: Tabs tradicionales */}
          <div className="hidden md:flex flex-wrap justify-center gap-3">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-full font-serif transition-all ${
                  activeCategory === category
                    ? 'bg-gray-900 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Image Grid - Slider en mobile, Grid masonry en desktop */}
        {filteredImages.length > 0 ? (
          <>
            {/* Mobile: Horizontal slider */}
            <div 
              ref={scrollContainerRef}
              className="md:hidden overflow-x-auto flex gap-4 snap-x snap-mandatory scrollbar-hide pb-4 -mx-6 px-6"
            >
              {filteredImages.map((image, index) => (
                <div key={image.id} className="min-w-[85vw] md:min-w-0 snap-center">
                  <div 
                    onClick={() => openLightbox(index)}
                    className={`group relative overflow-hidden rounded-lg cursor-pointer bg-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 ${getAspectClass(image.aspect)}`}
                  >
                    <img
                      src={image.src}
                      alt={image.title || image.category}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                    
                    {/* Overlay con info */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                        {image.title && <p className="font-serif text-lg font-semibold">{image.title}</p>}
                        <p className="text-sm text-gray-200">{image.category}</p>
                      </div>
                    </div>

                    {/* Icono de zoom */}
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-white/90 backdrop-blur-sm rounded-full p-2">
                        <svg className="w-5 h-5 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Desktop: Grid masonry responsivo */}
            <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-6 auto-rows-max">
              {filteredImages.map((image, index) => (
                <div key={image.id}>
                  <div 
                    onClick={() => openLightbox(index)}
                    className={`group relative overflow-hidden rounded-lg cursor-pointer bg-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 ${getAspectClass(image.aspect)}`}
                  >
                    <img
                      src={image.src}
                      alt={image.title || image.category}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                    
                    {/* Overlay con info */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                        {image.title && <p className="font-serif text-lg font-semibold">{image.title}</p>}
                        <p className="text-sm text-gray-200">{image.category}</p>
                      </div>
                    </div>

                    {/* Icono de zoom */}
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-white/90 backdrop-blur-sm rounded-full p-2">
                        <svg className="w-5 h-5 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Dots indicators - Solo en mobile */}
            {filteredImages.length > 1 && (
              <div className="flex justify-center gap-2 mt-6 md:hidden">
                {filteredImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      if (scrollContainerRef.current) {
                        const cardWidth = scrollContainerRef.current.offsetWidth * 0.85 + 16;
                        scrollContainerRef.current.scrollTo({
                          left: cardWidth * index,
                          behavior: 'smooth'
                        });
                      }
                    }}
                    className={`h-2 rounded-full transition-all ${
                      currentSlide === index 
                        ? 'w-8 bg-gray-900' 
                        : 'w-2 bg-gray-300 hover:bg-gray-400'
                    }`}
                    aria-label={`Ir a la imagen ${index + 1}`}
                  />
                ))}
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-20 bg-gray-50 rounded-lg">
            <p className="text-gray-500">No hay imágenes disponibles en esta categoría.</p>
          </div>
        )}
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