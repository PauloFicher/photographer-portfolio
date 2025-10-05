import React, { useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

const categories = [
  { id: 'bodas', name: 'Bodas', image: '/assets/gallery/bodas-preview.jpg', span: 'md:col-span-2 md:row-span-2' },
  { id: 'quince', name: 'Quince Años', image: '/assets/gallery/quince-preview.jpg', span: 'md:col-span-1 md:row-span-1' },
  { id: 'infantiles', name: 'Infantiles', image: '/assets/gallery/infantiles-preview.jpg', span: 'md:col-span-1 md:row-span-1' },
  { id: 'corporativas', name: 'Corporativas', image: '/assets/gallery/corporativas-preview.jpg', span: 'md:col-span-1 md:row-span-2' },
  { id: 'bautismo', name: 'Bautismo', image: '/assets/gallery/bautismo-preview.jpg', span: 'md:col-span-1 md:row-span-1' },
];

export const GalleryPreview: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.1 });

  return (
    <section 
      id="galeria" 
      ref={sectionRef}
      className="py-16 md:py-20 lg:py-24 px-4 md:px-6 bg-gradient-to-b from-white via-pink-50/30 to-white relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto relative z-10">
        <div className={`reveal-text ${isVisible ? 'visible' : ''} text-center mb-8 md:mb-10`}>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light mb-3 leading-tight text-gray-900">
            <span className="italic text-pink-600">Portfolio</span>
          </h2>
          <p className="font-sans text-sm md:text-base text-gray-600 leading-relaxed">
            Explora nuestro trabajo
          </p>
        </div>
        
        {/* Grid Asimétrico - Más compacto */}
        <div className="grid grid-cols-2 md:grid-cols-3 auto-rows-[180px] md:auto-rows-[180px] lg:auto-rows-[200px] gap-2 md:gap-3 mb-8 md:mb-10">
          {categories.map((category, idx) => (
            <Link
              key={category.id}
              to={`/galeria?categoria=${category.id}`}
              className={`${category.span} reveal-text ${isVisible ? 'visible' : ''} relative overflow-hidden group cursor-pointer rounded-xl md:rounded-2xl`}
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              {/* Imagen de fondo */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-200 via-gray-100 to-white">
                <img 
                  src={category.image}
                  alt={category.name}
                  className="absolute inset-0 w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/50 to-transparent opacity-70 group-hover:opacity-85 transition-opacity duration-500" />
              
              {/* Contenido */}
              <div className="absolute inset-0 p-4 md:p-5 flex flex-col justify-end">
                <h3 className="font-serif text-lg md:text-xl lg:text-2xl font-light text-white mb-1 leading-tight">
                  {category.name}
                </h3>
                <div className="flex items-center gap-1 md:gap-2 text-white/80 group-hover:text-white group-hover:gap-2 transition-all duration-300">
                  <span className="font-sans text-[10px] md:text-xs tracking-[0.15em] uppercase">Ver más</span>
                  <ArrowRight className="w-3 h-3 md:w-4 md:h-4" />
                </div>
              </div>

              {/* Border */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-white/20 rounded-xl md:rounded-2xl transition-all duration-500" />
            </Link>
          ))}
        </div>
        
        {/* Botón ver todo */}
        <div className="text-center">
          <Link 
            to="/galeria"
            className="group inline-flex items-center gap-3 border-2 border-gray-300 text-gray-900 px-6 md:px-8 py-3 md:py-4 rounded-full font-sans text-[10px] md:text-xs tracking-[0.15em] uppercase hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-all duration-500"
          >
            Ver Todas
            <ArrowRight className="w-3 h-3 md:w-4 md:h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </section>
  );
};