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
                src="/assets/about-photo.jpg"
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
                Soy un fotógrafo apasionado, especializado en retratos artísticos que capturan la esencia de cada quien, sea un personaje o alguien real. Mi formación en cinematografía me permite contar historias a través de mis imágenes.
              </p>
            </AnimatedSection>

            <AnimatedSection animation="fadeUp" delay={600}>
              <p className="font-sans text-base md:text-lg text-gray-700 leading-relaxed">
                Soy del tipo de fotógrafos a los que no les importa tanto la herramienta, sino las ideas y las relaciones interpersonales, siempre y cuando haya luz, seré feliz.
              </p>
            </AnimatedSection>

            <AnimatedSection animation="fadeUp" delay={750}>
              <p className="font-sans text-base md:text-lg text-gray-700 leading-relaxed">
                Por cierto, tengo un canal de YouTube donde enseño todo lo que sé...
              </p>
            </AnimatedSection>

            <AnimatedSection animation="fadeUp" delay={900}>
              <div className="pt-4">
                <h3 className="font-serif text-2xl md:text-3xl font-light text-gray-900 mb-4">
                  Mi Trayectoria Profesional
                </h3>
                <p className="font-sans text-base md:text-lg text-gray-700 leading-relaxed">
                  He trabajado tanto en cine como en fotografía comercial, acumulando más de 15 años de experiencia, siendo director de videos musicales, productor y fotógrafo. Dentro de mis clientes más importantes están Adobe, BMW Motorrad, Royal Enfield, Zhiyun Tech, Apple, Hax Helmets, Smallrig, Ulanzi, Oakley, Tissot, Vivo, y más...
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