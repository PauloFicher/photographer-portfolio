// src/components/gallery/GalleryCategoryFilter.tsx
import React from 'react';

interface GalleryCategoryFilterProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
  categories: string[];
}

export const GalleryCategoryFilter: React.FC<GalleryCategoryFilterProps> = ({
  activeCategory,
  onCategoryChange,
  categories,
}) => {
  return (
    <div className="flex flex-wrap justify-center gap-3">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`
            px-8 py-3 rounded-full font-medium text-sm tracking-wide
            transition-all duration-300 transform
            ${
              activeCategory === category
                ? 'bg-black text-white shadow-lg scale-105'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-102 hover:shadow-md'
            }
          `}
        >
          {category.charAt(0).toUpperCase() + category.slice(1)}
        </button>
      ))}
    </div>
  );
};