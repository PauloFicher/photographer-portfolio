import React from 'react';
import { ZoomIn } from 'lucide-react';
import type { GalleryImage } from '../../types';

interface ImageCardProps {
  image: GalleryImage;
  onClick: () => void;
  index: number;
}

export const ImageCard: React.FC<ImageCardProps> = ({ image, onClick, index }) => {
  const getSizeClasses = () => {
    const sizeMap = {
      large: 'md:col-span-2 md:row-span-2',
      medium: 'md:col-span-1 md:row-span-1',
      small: 'md:col-span-1 md:row-span-1'
    };
    
    const aspectMap = {
      portrait: 'aspect-[3/4]',
      landscape: 'aspect-[4/3]',
      square: 'aspect-square'
    };
    
    return `${sizeMap[image.size]} ${aspectMap[image.aspect]}`;
  };

  return (
    <div 
      className={`
        ${getSizeClasses()} 
        relative overflow-hidden group cursor-pointer 
        reveal-text visible
      `}
      style={{ transitionDelay: `${index * 50}ms` }}
      onClick={onClick}
    >
      {/* Placeholder background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-900 to-black" />
      
      {/* Hover overlay */}
      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-center">
        <ZoomIn className="w-12 h-12 text-white mb-4 transform scale-0 group-hover:scale-100 transition-transform duration-500 delay-100" />
        <p className="font-serif text-2xl text-white transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-150">
          {image.title}
        </p>
      </div>
      
      {/* Border effect */}
      <div className="absolute inset-0 border-2 border-white/0 group-hover:border-white/30 transition-all duration-500" />
      
      {/* Image would go here - for now using gradient */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: `linear-gradient(135deg, rgba(${Math.random() * 100}, ${Math.random() * 100}, ${Math.random() * 100}, 0.3), rgba(0,0,0,0.8))`
        }}
      />
    </div>
  );
};