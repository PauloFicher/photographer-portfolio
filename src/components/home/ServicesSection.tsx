import React from 'react';
import { services } from '../../data/services';
import { AnimatedSection } from '../ui/AnimatedSection';
import { ArrowUpRight } from 'lucide-react';

export const ServicesSection: React.FC = () => {
  return (
    <section 
      id="servicios" 
      className="py-20 md:py-32 lg:py-40 px-6 bg-gradient-to-b from-white to-gray-50 relative"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-50/20 to-transparent" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Título centrado */}
        <AnimatedSection animation="fadeUp" delay={100} className="mb-12 md:mb-20 lg:mb-24 text-center max-w-3xl mx-auto">
          <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl font-light mb-4 md:mb-6 leading-tight text-gray-900">
            Mis
            <br />
            <span className="italic text-purple-600">servicios</span>
          </h2>
          <p className="font-sans text-sm md:text-base lg:text-lg text-gray-600 leading-relaxed">
            Especializado en crear narrativas visuales
          </p>
        </AnimatedSection>
        
        {/* Grid con cards más pequeñas */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-3 md:gap-4">
          {services.map((service, index) => (
            <AnimatedSection 
              key={service.id}
              animation="scaleIn" 
              delay={200 + (index * 150)}
            >
              
            <a    href="#contacto"
                className="group relative overflow-hidden rounded-2xl md:rounded-3xl cursor-pointer block aspect-[3/4]"
              >
                {/* Imagen de fondo */}
                <div className="absolute inset-0">
                  <img 
                    src={service.image}
                    alt={service.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                {/* Gradiente overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                
                {/* Contenido */}
                <div className="absolute inset-0 p-4 md:p-6 flex flex-col justify-between">
                  {/* Icono superior */}
                  <div className="flex justify-end">
                    <div className="w-8 h-8 md:w-10 md:h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                      <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5 text-white" />
                    </div>
                  </div>

                  {/* Título y descripción */}
                  <div className="transform transition-all duration-500 group-hover:-translate-y-2">
                    <h3 className="font-serif text-xl md:text-2xl lg:text-3xl font-light text-white mb-2 transition-all duration-500 group-hover:text-purple-200">
                      {service.title}
                    </h3>
                    <p className="font-sans text-xs md:text-sm text-white/90 leading-relaxed transition-all duration-500 group-hover:text-white">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Borde animado */}
                <div className="absolute inset-0 border-2 border-white/0 group-hover:border-white/30 rounded-2xl md:rounded-3xl transition-all duration-500" />
              </a>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};