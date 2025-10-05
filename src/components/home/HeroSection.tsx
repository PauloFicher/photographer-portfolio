import React from 'react';
import { ChevronDown } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-blue-50 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Contenido Izquierda */}
          <div className="space-y-8">
            <div>
              <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl font-light leading-tight text-gray-900 mb-6">
                Bienvenidos
              </h1>
              <p className="font-sans text-lg md:text-xl text-gray-600 leading-relaxed max-w-xl">
                Me gusta que una imagen logre decir mucho más que mil palabras, y que a través de los ojos de las personas, podamos conocer su mundo.
              </p>
            </div>
            
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
          </div>

          {/* Grid de Fotos Derecha */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              
              {/* Imagen Grande - Ocupa 2 filas */}
              <div className="row-span-2">
                <div 
                  // CLASES AJUSTADAS AQUÍ: 
                  // Se reduce la altura mínima en móvil (min-h-[300px])
                  // Se aumenta la altura en MD (md:min-h-[500px]) y LG (lg:min-h-[700px] si es necesario)
                  className="relative h-full min-h-[300px] md:min-h-[450px] lg:min-h-[700px] rounded-2xl md:rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
                >
                  <img 
                    src="/assets/bannergrid3.jpg"
                    alt="Fotografía principal"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Imagen Superior Derecha */}
              <div>
                <div 
                  // Se reduce la altura en móvil (h-40)
                  className="relative h-40 md:h-52 lg:h-64 rounded-2xl md:rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
                >
                  <img 
                    src="/assets/bannergrid1.jpg"
                    alt="Fotografía de retrato"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Imagen Inferior Derecha */}
              <div>
                <div 
                  // Se reduce la altura en móvil (h-40)
                  className="relative h-40 md:h-52 lg:h-64 rounded-2xl md:rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
                >
                  <img 
                    src="/assets/bannergrid2.jpg"
                    alt="Fotografía artística"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
              </div>
              
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