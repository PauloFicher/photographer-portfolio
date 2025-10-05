import React, { useRef } from 'react';
import { Camera, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

export const GalleryPreview: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.1 });

  return (
    <section 
      id="galeria" 
      ref={sectionRef}
      className="py-40 px-6 bg-gradient-to-b from-gray-50 via-pink-50 to-white relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(236,72,153,0.05),transparent_70%)]" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className={`reveal-text ${isVisible ? 'visible' : ''} text-center mb-24`}>
          <h2 className="font-serif text-7xl md:text-8xl font-light mb-6 leading-tight text-gray-900">
            <span className="italic text-pink-600">Portfolio</span>
          </h2>
          <p className="font-sans text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Una colección curada de nuestros trabajos más significativos
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-16">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item, idx) => (
            <div 
              key={item}
              className={`reveal-text ${isVisible ? 'visible' : ''} relative overflow-hidden group cursor-pointer`}
              style={{ 
                transitionDelay: `${idx * 80}ms`,
                aspectRatio: idx % 5 === 0 ? '1/1.3' : '1/1'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gray-200 via-gray-100 to-white" />
              <div className="absolute inset-0 bg-gray-900/60 opacity-0 group-hover:opacity-100 transition-all duration-700 flex items-center justify-center">
                <div className="transform scale-0 group-hover:scale-100 transition-transform duration-700">
                  <Camera className="w-12 h-12 text-white mb-4" />
                  <p className="font-sans text-xs tracking-[0.2em] uppercase text-white">Ver más</p>
                </div>
              </div>
              <div className="absolute inset-0 border-2 border-gray-200 group-hover:border-gray-400 transition-all duration-700" />
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Link 
            to="/galeria"
            className="group inline-flex items-center gap-4 border-2 border-gray-300 text-gray-900 px-10 py-5 font-sans text-xs tracking-[0.2em] uppercase hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-all duration-500"
          >
            Galería Completa
            <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </section>
  );
};