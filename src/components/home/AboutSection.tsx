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
                 
Hace siete años decidí llevar este hobby a otro nivel y comenzar mi camino como fotógrafo profesional. Estudié en la escuela de fotógrafos “El Faro”, donde concluí mi formación, y además participé en talleres y cursos especializados en dirección de modelos, fotografía de moda, retratos cinematográficos, fotografía de parejas y fotografía de bodas. También tuve la oportunidad de trabajar con la academia de moda “Urban Agency” con quienes desarrollé la clase de “Fotografía y Moda”, donde exploramos la fotografía editorial y de moda.
Tuve la fortuna de trabajar junto a profesionales de gran trayectoria, quienes me guiaron y compartieron sus conocimientos para consolidar mi propio estilo.
Hoy, agradezco profundamente a todas las personas que confían en mí sus recuerdos únicos e irrepetibles. Ser fotógrafo profesional me permite transformar momentos en memorias eternas, y compartir con ustedes el talento y la pasión que me acompañan en cada disparo.
SB Fotografía es la fusión entre la pasión por el arte y la excelencia en el servicio. Mi atención al detalle en cada etapa del proceso hace que el resultado no sean solo fotografías, sino una experiencia que eleva tus momentos y convierte tu evento en algo inolvidable.
Me entusiasma ser parte de tus proyectos y celebraciones. Disfruto ofreciendo un servicio personalizado, exclusivo y con un acabado de la más alta calidad, porque cada recuerdo merece ser contado con la belleza que lo distingue.

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