// src/components/gallery/ImageCard.tsx
import React, { useState } from 'react';
import { ZoomIn } from 'lucide-react';
import type { GalleryImage } from '../../types';

interface ImageCardProps {
  image: GalleryImage;
  onClick: () => void;
  index: number;
}

export const ImageCard: React.FC<ImageCardProps> = ({ image, onClick, index }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  return (
    <div 
      className="relative overflow-hidden group cursor-pointer w-full h-full bg-gray-200 rounded-lg"
      onClick={onClick}
    >
      {/* Loading placeholder */}
      {!imageLoaded && !imageError && (
        <div className="absolute inset-0 bg-gradient-to-br from-gray-300 to-gray-400 animate-pulse" />
      )}

      {/* Error placeholder */}
      {imageError && (
        <div className="absolute inset-0 bg-gray-300 flex items-center justify-center">
          <span className="text-gray-500 text-sm">Error al cargar</span>
        </div>
      )}
      
      {/* Imagen real */}
      {!imageError && (
        <img
          src={image.thumbnail || image.src}
          alt={image.title}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-110 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          loading="lazy"
          onLoad={() => setImageLoaded(true)}
          onError={() => setImageError(true)}
        />
      )}
      
      {/* Hover overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-center z-10">
        <ZoomIn className="w-10 h-10 text-white mb-3 transform scale-0 group-hover:scale-100 transition-transform duration-500 delay-100" />
        <p className="font-serif text-xl text-white px-4 text-center transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-150">
          {image.title}
        </p>
      </div>
      
      {/* Border effect */}
      <div className="absolute inset-0 border-2 border-white/0 group-hover:border-white/50 transition-all duration-500 pointer-events-none rounded-lg" />
    </div>
  );
};