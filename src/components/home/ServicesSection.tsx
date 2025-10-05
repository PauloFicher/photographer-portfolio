import React, { useState, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
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
            <div
              key={service.id}
              className={`reveal-text ${isVisible ? 'visible' : ''} group relative overflow-hidden rounded-xl md:rounded-2xl bg-gradient-to-br ${service.color} backdrop-blur-xl border-2 border-gray-200 hover:border-gray-400 hover:shadow-xl transition-all duration-700 cursor-pointer`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onMouseEnter={() => setActiveService(index)}
              onMouseLeave={() => setActiveService(null)}
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent" />
                <div className="shimmer absolute inset-0" />
              </div>
              
              <div className="relative p-4 md:p-6 lg:p-10">
                <service.icon className="w-8 h-8 md:w-12 md:h-12 lg:w-14 lg:h-14 mb-4 md:mb-6 lg:mb-8 text-gray-600 group-hover:text-gray-900 group-hover:scale-110 transition-all duration-500" />
                <h3 className="font-serif text-xl md:text-2xl lg:text-4xl font-light mb-2 md:mb-3 lg:mb-4 tracking-wide text-gray-900">{service.title}</h3>
                <p className="font-sans text-xs md:text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-500 leading-relaxed line-clamp-2 md:line-clamp-3 lg:line-clamp-none">
                  {service.description}
                </p>
                
                <div className="mt-3 md:mt-4 lg:mt-6 flex items-center gap-1 md:gap-2 text-[10px] md:text-xs font-sans tracking-[0.2em] uppercase text-gray-500 group-hover:text-gray-900 group-hover:gap-2 md:group-hover:gap-4 transition-all duration-500">
                  Explorar.
                  <ArrowRight className="w-3 h-3 md:w-4 md:h-4" />
                </div>
              </div>
              
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-gray-900 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};