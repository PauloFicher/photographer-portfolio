import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { testimonials } from '../../data/testimonials';
import { AnimatedSection } from '../ui/AnimatedSection';
export const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section 
      id="testimonios" 
      
      className="py-20 md:py-32 px-6 bg-gradient-to-b from-white via-pink-50/30 to-white relative overflow-hidden"
    >
      <div className="max-w-5xl mx-auto">
        <AnimatedSection animation="fadeUp" delay={100} className="text-center mb-12 md:mb-16">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light mb-4 leading-tight text-gray-900">
            Experiencias
          </h2>
          <p className="font-sans text-base md:text-lg text-gray-600 leading-relaxed">
            La confianza de nuestros clientes
          </p>
        </AnimatedSection>

        <AnimatedSection animation="scaleIn" delay={300} className="relative px-8 md:px-12">
          <div className="relative overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div 
                  key={testimonial.id}
                  className="min-w-full px-2 md:px-4"
                >
                  <div className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-10 shadow-lg border-2 border-gray-100">
                    <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8">
                      
                      <div className="flex-shrink-0">
                        <div className="relative">
                          <div className="w-20 h-20 md:w-28 md:h-28 rounded-full overflow-hidden border-4 border-purple-100 shadow-md">
                            <img 
                              src={testimonial.avatar}
                              alt={testimonial.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="absolute -bottom-1 -right-1 bg-purple-100 rounded-full p-1.5">
                            <Quote className="w-4 h-4 text-purple-600" />
                          </div>
                        </div>
                      </div>

                      <div className="flex-1 text-center md:text-left">
                        <div className="mb-4">
                          <h3 className="font-serif text-xl md:text-2xl text-gray-900 mb-1">
                            {testimonial.name}
                          </h3>
                          <p className="font-sans text-xs tracking-[0.15em] uppercase text-purple-600">
                            {testimonial.role}
                          </p>
                        </div>
                        
                        <p className="font-sans text-sm md:text-base text-gray-700 leading-relaxed line-clamp-4 md:line-clamp-none">
                          "{testimonial.text}"
                        </p>
                      </div>
                      
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-8 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-lg border-2 border-gray-200 flex items-center justify-center hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-all duration-300"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
          </button>

          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-8 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-lg border-2 border-gray-200 flex items-center justify-center hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-all duration-300"
            aria-label="Siguiente"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
          </button>
        </AnimatedSection>

        <div className="flex justify-center gap-2 mt-8 md:mt-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentIndex 
                  ? 'w-8 h-2 bg-purple-600' 
                  : 'w-2 h-2 bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Ir al testimonio ${index + 1}`}
            />
          ))}
        </div>

        <div className="text-center mt-4 md:mt-6">
          <p className="font-sans text-xs md:text-sm text-gray-500">
            {currentIndex + 1} / {testimonials.length}
          </p>
        </div>
      </div>
    </section>
  );
};