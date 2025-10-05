import React from 'react';
import { categories } from '../../data/galleryImages';

interface CategoryFilterProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export const CategoryFilter: React.FC<CategoryFilterProps> = ({ 
  activeCategory, 
  onCategoryChange 
}) => {
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-16">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onCategoryChange(category.id)}
          className={`
            px-6 py-3 font-sans text-xs tracking-[0.2em] uppercase transition-all duration-300
            ${activeCategory === category.id 
              ? 'bg-white text-black' 
              : 'bg-transparent border border-white/20 text-white hover:border-white/50'
            }
          `}
        >
          {category.name}
        </button>
      ))}
    </div>
  );
};