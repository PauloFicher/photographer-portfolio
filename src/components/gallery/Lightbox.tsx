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
  onPrev
}) => {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [isOpen, onClose, onNext, onPrev]);

  if (!isOpen || images.length === 0) return null;

  const currentImage = images[currentIndex];

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center"
      onClick={onClose}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 w-12 h-12 border border-white/30 rounded-full flex items-center justify-center hover:border-white hover:bg-white hover:text-black transition-all duration-300 z-50"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Previous button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        className="absolute left-6 w-14 h-14 border border-white/30 rounded-full flex items-center justify-center hover:border-white hover:bg-white hover:text-black transition-all duration-300 z-50"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Next button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        className="absolute right-6 w-14 h-14 border border-white/30 rounded-full flex items-center justify-center hover:border-white hover:bg-white hover:text-black transition-all duration-300 z-50"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Image container */}
      <div 
        className="max-w-6xl max-h-[80vh] p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative w-full h-full flex items-center justify-center">
          {/* Placeholder for image */}
          <div className="relative w-full aspect-video bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-lg overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <p className="font-serif text-4xl mb-4">{currentImage.title}</p>
                <p className="font-sans text-sm tracking-[0.2em] uppercase text-gray-400">
                  {currentIndex + 1} / {images.length}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Image info */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-center">
        <p className="font-serif text-2xl mb-2">{currentImage.title}</p>
        <p className="font-sans text-sm tracking-[0.2em] uppercase text-gray-400">
          {currentIndex + 1} de {images.length}
        </p>
      </div>
    </div>
  );
};