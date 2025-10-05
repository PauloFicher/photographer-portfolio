import React, { useState, useRef } from 'react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { services } from '../../data/services';

export const ServicesSection: React.FC = () => {
  const [_activeService, setActiveService] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.1 });

  return (
    <section 
      id="servicios" 
      ref={sectionRef}
      className="py-20 md:py-32 lg:py-40 px-6 bg-gradient-to-b from-white to-gray-50 relative"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-50/20 to-transparent" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className={`reveal-text ${isVisible ? 'visible' : ''} mb-12 md:mb-20 lg:mb-24 max-w-3xl`}>
          <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl font-light mb-4 md:mb-6 leading-tight text-gray-900">
            Mis
            <br />
            <span className="italic text-purple-600">servicios</span>
          </h2>
          <p className="font-sans text-sm md:text-base lg:text-lg text-gray-600 leading-relaxed">
            Especializado en crear narrativas visuales
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 lg:gap-6">
          {services.map((service, index) => (
            
             <a href="#contacto"
              key={service.id}
              className={`reveal-text ${isVisible ? 'visible' : ''} group relative overflow-hidden rounded-xl md:rounded-2xl bg-gradient-to-br ${service.color} backdrop-blur-xl border-2 border-gray-200 hover:border-gray-400 hover:shadow-xl transition-all duration-700 cursor-pointer block`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onMouseEnter={() => setActiveService(index)}
              onMouseLeave={() => setActiveService(null)}
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent" />
                <div className="shimmer absolute inset-0" />
              </div>
              
              <div className="relative p-6 md:p-8 lg:p-10 flex flex-col items-center justify-center text-center min-h-[160px] md:min-h-[200px] lg:min-h-[220px]">
                <service.icon className="w-10 h-10 md:w-14 md:h-14 lg:w-16 lg:h-16 mb-4 md:mb-6 text-gray-600 group-hover:text-gray-900 group-hover:scale-110 transition-all duration-500" />
                <h3 className="font-serif text-lg md:text-2xl lg:text-3xl font-light tracking-wide text-gray-900">
                  {service.title}
                </h3>
              </div>
              
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-gray-900 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};