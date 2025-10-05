import React from 'react';
import { ImageCard } from './ImageCard';
import type { GalleryImage } from '../../types';

interface ImageGridProps {
  images: GalleryImage[];
  onImageClick: (index: number) => void;
}

export const ImageGrid: React.FC<ImageGridProps> = ({ images, onImageClick }) => {
  if (images.length === 0) {
    return (
      <div className="text-center py-20">
        <p className="font-sans text-lg text-gray-400">
          No hay imágenes en esta categoría
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[200px] gap-4">
      {images.map((image, index) => (
        <ImageCard 
          key={image.id} 
          image={image} 
          onClick={() => onImageClick(index)}
          index={index}
        />
      ))}
    </div>
  );
};