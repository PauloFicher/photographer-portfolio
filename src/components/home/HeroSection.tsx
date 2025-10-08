import React from 'react';
import { ChevronDown } from 'lucide-react';
import { AnimatedSection } from '../ui/AnimatedSection';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-blue-50 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Contenido Izquierda */}
          <div className="space-y-8">
            <div>
              <AnimatedSection animation="fadeUp" delay={200}>
                <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-light leading-tight text-gray-900 mb-6">
                  SB Florent – Fotógrafo Profesional
                </h1>
              </AnimatedSection>
              
              <AnimatedSection animation="fadeUp" delay={400}>
                <p className="font-sans text-lg md:text-xl text-gray-600 leading-relaxed max-w-xl">
                  La fotografía es mucho más que una imagen: es una ventana a los recuerdos, un portal para revivir los instantes más valiosos de nuestra vida. Con el paso del tiempo, cada fotografía se convierte en un tesoro; un puente hacia aquellos días en los que fuimos felices, para volver a sonreír cada vez que los miramos.
                </p>
              </AnimatedSection>
            </div>
            
            <AnimatedSection animation="fadeUp" delay={600}>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="#galeria"
                  className="inline-block bg-gray-900 text-white px-10 py-4 rounded-full font-sans text-sm tracking-wide hover:bg-gray-800 transition-all duration-300 text-center"
                >
                  Ver Portafolio
                </a>
                
                <a 
                  href="#contacto"
                  className="inline-block border-2 border-gray-900 text-gray-900 px-10 py-4 rounded-full font-sans text-sm tracking-wide hover:bg-gray-900 hover:text-white transition-all duration-300 text-center"
                >
                  Contáctanos
                </a>
              </div>
            </AnimatedSection>
          </div>

          {/* Grid de Fotos Derecha */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              
              {/* Imagen Grande - Ocupa 2 filas */}
              <AnimatedSection animation="scaleIn" delay={300} className="row-span-2">
                <div className="relative h-full min-h-[400px] md:min-h-[500px] lg:min-h-[800px] rounded-2xl md:rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                  <img 
                    src="/assets/verticalbanner.webp"
                    alt="Fotografía principal"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
              </AnimatedSection>

              {/* Imagen Superior Derecha */}
              <AnimatedSection animation="fadeUp" delay={500}>
                <div className="relative h-48 md:h-60 lg:h-72 rounded-2xl md:rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                  <img 
                    src="/assets/banner1.webp"
                    alt="Fotografía de retrato"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
              </AnimatedSection>

              {/* Imagen Inferior Derecha */}
              <AnimatedSection animation="fadeUp" delay={700}>
                <div className="relative h-48 md:h-60 lg:h-72 rounded-2xl md:rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                  <img 
                    src="/assets/banner2.webp"
                    alt="Fotografía artística"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
              </AnimatedSection>
              
            </div>
          </div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center gap-2 animate-bounce">
          <div className="w-px h-16 bg-gradient-to-b from-transparent via-gray-400 to-transparent" />
          <ChevronDown className="w-6 h-6 text-gray-400" />
        </div>
      </div>
    </section>
  );
};