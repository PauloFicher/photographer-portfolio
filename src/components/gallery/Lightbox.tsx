// src/components/gallery/Lightbox.tsx
import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import type { GalleryImage } from '../../types';

interface LightboxProps {
  isOpen: boolean;
  currentIndex: number;
  images: GalleryImage[];
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export const Lightbox: React.FC<LightboxProps> = ({
  isOpen,
  currentIndex,
  images,
  onClose,
  onNext,
  onPrev,
}) => {
  // Bloquear scroll cuando está abierto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Cerrar con Escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    
    if (isOpen) {
      window.addEventListener('keydown', handleEscape);
      return () => window.removeEventListener('keydown', handleEscape);
    }
  }, [isOpen, onClose]);

  // Navegar con flechas del teclado
  useEffect(() => {
    const handleKeyboard = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };
    
    if (isOpen) {
      window.addEventListener('keydown', handleKeyboard);
      return () => window.removeEventListener('keydown', handleKeyboard);
    }
  }, [isOpen, onNext, onPrev]);

  if (!isOpen || images.length === 0) return null;

  const currentImage = images[currentIndex];

  return (
    <div 
      className="fixed inset-0 z-[9999] bg-white/95 backdrop-blur-sm flex items-center justify-center"
      onClick={onClose}
    >
      {/* Botón Cerrar - Esquina superior derecha, lejos del menú */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 z-10 w-12 h-12 rounded-full bg-gray-900 text-white hover:bg-gray-800 transition-all duration-300 flex items-center justify-center shadow-lg hover:scale-110"
        aria-label="Cerrar"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Botón Anterior */}
      {images.length > 1 && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
          className="absolute left-6 top-1/2 -translate-y-1/2 z-10 w-14 h-14 rounded-full bg-gray-900 text-white hover:bg-gray-800 transition-all duration-300 flex items-center justify-center shadow-lg hover:scale-110"
          aria-label="Anterior"
        >
          <ChevronLeft className="w-7 h-7" />
        </button>
      )}

      {/* Botón Siguiente */}
      {images.length > 1 && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          className="absolute right-6 top-1/2 -translate-y-1/2 z-10 w-14 h-14 rounded-full bg-gray-900 text-white hover:bg-gray-800 transition-all duration-300 flex items-center justify-center shadow-lg hover:scale-110"
          aria-label="Siguiente"
        >
          <ChevronRight className="w-7 h-7" />
        </button>
      )}

      {/* Contenedor de la imagen */}
      <div 
        className="relative w-full h-full flex flex-col items-center justify-center p-6 md:p-12"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Imagen */}
        <div className="relative max-w-6xl max-h-[80vh] w-full flex items-center justify-center">
          <img
            src={currentImage.src}
            alt={currentImage.title}
            className="max-w-full max-h-[75vh] w-auto h-auto object-contain rounded-lg shadow-2xl"
          />
        </div>

        {/* Información de la imagen */}
        <div className="mt-6 text-center max-w-2xl">
          <h3 className="font-serif text-3xl text-gray-900 mb-2">
            {currentImage.title}
          </h3>
          
          {/* Contador */}
          <div className="flex items-center justify-center gap-3 mt-4">
            <div className="h-px w-12 bg-gray-300" />
            <p className="font-sans text-sm text-gray-500">
              {currentIndex + 1} de {images.length}
            </p>
            <div className="h-px w-12 bg-gray-300" />
          </div>
        </div>

        {/* Thumbnails navegables (opcional) */}
        {images.length > 1 && (
          <div className="mt-8 flex gap-2 overflow-x-auto max-w-full px-4 pb-2 scrollbar-hide">
            {images.map((img, idx) => (
              <button
                key={img.id}
                onClick={() => {
                  const diff = idx - currentIndex;
                  if (diff > 0) {
                    for (let i = 0; i < diff; i++) onNext();
                  } else if (diff < 0) {
                    for (let i = 0; i < Math.abs(diff); i++) onPrev();
                  }
                }}
                className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                  idx === currentIndex 
                    ? 'border-gray-900 scale-110 shadow-lg' 
                    : 'border-gray-300 opacity-60 hover:opacity-100 hover:border-gray-500'
                }`}
              >
                <img
                  src={img.thumbnail || img.src}
                  alt={img.title}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Indicador de gestos (mobile) */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-gray-400 text-xs md:hidden">
        Desliza para navegar
      </div>
    </div>
  );
};