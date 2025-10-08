import React from 'react';
import { AnimatedSection } from '../ui/AnimatedSection';

export const AboutSection: React.FC = () => {
  return (
    <section 
      id="sobre-mi" 
      className="py-20 md:py-32 lg:py-40 px-6 bg-gradient-to-b from-gray-50 to-white relative"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Foto Izquierda */}
          <AnimatedSection animation="slideLeft" delay={200}>
            <div className="relative rounded-3xl overflow-hidden shadow-xl bg-gray-200 aspect-[3/4] max-w-md mx-auto lg:mx-0">
              <img 
                src="/assets/aboutme.jpg"
                alt="Sobre mí"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </AnimatedSection>

          {/* Contenido Derecha */}
          <div className="space-y-6">
            <AnimatedSection animation="fadeUp" delay={300}>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-6">
                Sobre mí
              </h2>
            </AnimatedSection>
            
            <AnimatedSection animation="fadeUp" delay={450}>
              <p className="font-sans text-base md:text-lg text-gray-700 leading-relaxed">
              Desde pequeño, la fotografía estuvo presente en mi vida. Recuerdo a mi padre con su cámara compacta en cada viaje o festejo familiar; esas imágenes sembraron en mí una semilla que más tarde florecerá.
De joven, la pasión regresó a través de la naturaleza y los paisajes. Con mi cámara aprendí a observar el mundo de una forma distinta, a encontrar belleza en cada perspectiva, y descubrí que este arte podía ser mi manera de expresarme.

              </p>
            </AnimatedSection>

            

            <AnimatedSection animation="fadeUp" delay={900}>
              <div className="pt-4">
                <h3 className="font-serif text-2xl md:text-3xl font-light text-gray-900 mb-4">
                  Mi Trayectoria Profesional
                </h3>
                <p className="font-sans text-base md:text-lg text-gray-700 leading-relaxed">
                 Hace siete años convertí mi pasión por la fotografía en una carrera profesional. Me formé en la escuela “El Faro” y en diversos talleres de moda, retratos, parejas y bodas. Colaboré con la academia “Urban Agency”, donde impartí la clase de “Fotografía y Moda”, explorando la fotografía editorial.

Trabajé junto a profesionales que me ayudaron a definir mi propio estilo, basado en el arte y la atención al detalle.
Hoy, a través de SB Fotografía, transformo momentos en recuerdos únicos, ofreciendo un servicio personalizado, de alta calidad y con una experiencia que hace cada evento inolvidable.


                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fadeUp" delay={1050}>
              <div className="pt-6">
                <a 
                  href="#contacto"
                  className="inline-block bg-gray-900 text-white px-8 py-4 rounded-full font-sans text-sm tracking-wide hover:bg-gray-800 transition-all duration-300"
                >
                  Trabajemos juntos
                </a>
              </div>
            </AnimatedSection>
          </div>

        </div>
      </div>
    </section>
  );
};