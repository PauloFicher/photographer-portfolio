import React, { useState } from 'react';
import {  Instagram, ArrowRight, MessageCircle, CheckCircle, Send } from 'lucide-react';
import { CONTACT_INFO } from '../../utils/constants';
import { AnimatedSection } from '../ui/AnimatedSection';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    whatsapp: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const services = [
    'Bodas',
    'Quince Años',
    'Cumpleaños Infantiles',
    'Cumpleaños de Adultos',
    'Primer Año & Bautismo',
    'Corporativas y Empresariales',
    'Sesiones de Fotos',
    'Otro'
  ];

  const handleWhatsAppChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const sanitized = value.replace(/\D/g, '').slice(0, 9);
    setFormData({...formData, whatsapp: sanitized});
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.whatsapp.length !== 9) {
      alert('El número de WhatsApp debe tener exactamente 9 dígitos');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: 'b18585d0-cf3c-4de9-9405-fbb148628c84',
          name: formData.name,
          phone: `+595${formData.whatsapp}`,
          service: formData.service,
          message: formData.message,
          from_name: 'Formulario de Contacto - Bernardo Florentin Fotografia WEB',
          subject: `Nueva consulta: ${formData.service}`
        })
      });

      if (response.ok) {
        setShowModal(true);
        setFormData({ name: '', whatsapp: '', service: '', message: '' });
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Hubo un error. Por favor intenta nuevamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWhatsAppClick = () => {
  window.open('https://wa.link/cuwjby', '_blank');
};

  return (
    <section 
      id="contacto" 
      className="py-20 md:py-32 px-4 md:px-6 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="max-w-5xl mx-auto">
        <AnimatedSection animation="fadeUp" delay={100} className="text-center mb-12 md:mb-16">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light mb-4 leading-tight text-gray-900">
            Conversemos
          </h2>
          <p className="font-sans text-sm md:text-base text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Cuéntanos sobre tu proyecto y te contactaremos
          </p>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          
          {/* Información de Contacto */}
          <AnimatedSection animation="slideLeft" delay={300}>
            <h3 className="font-serif text-2xl md:text-3xl font-light mb-6 md:mb-8 text-gray-900">
              Información de Contacto
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4 group">
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 border-2 border-gray-300 rounded-full flex items-center justify-center group-hover:border-green-600 group-hover:bg-green-600 transition-colors duration-300 flex-shrink-0">
                  <MessageCircle className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <p className="font-sans text-xs tracking-[0.2em] uppercase text-gray-500 mb-1">WhatsApp</p>
                  <a 
  href="https://wa.link/cuwjby" 
  target="_blank" 
  rel="noopener noreferrer"
  className="font-sans text-base md:text-lg text-gray-900 hover:text-green-600 transition-colors"
>
  +595984764866
</a>
                </div>
              </div>
              
              <div className="pt-6 border-t-2 border-gray-200">
                <p className="font-sans text-xs tracking-[0.2em] uppercase text-gray-500 mb-4">Síguenos</p>
                <div className="flex gap-3">
                  <a 
                    href={CONTACT_INFO.instagram} 
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Visita nuestro Instagram @sb_fotografia.py"
                    className="w-12 h-12 border-2 border-gray-300 rounded-full flex items-center justify-center hover:border-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-300"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </AnimatedSection>
          
          {/* Formulario */}
          <AnimatedSection animation="slideRight" delay={300}>
            <h3 className="font-serif text-2xl md:text-3xl font-light mb-6 md:mb-8 text-gray-900">
              Solicita una Cotización
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label 
                  htmlFor="contact-name"
                  className="font-sans text-xs tracking-[0.2em] uppercase text-gray-500 mb-2 block"
                >
                  Nombre Completo *
                </label>
                <input
                  id="contact-name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-white border-2 border-gray-200 focus:border-gray-900 rounded-xl px-4 py-3 text-gray-900 font-sans text-base outline-none transition-colors duration-300"
                  placeholder="Tu nombre"
                  required
                  disabled={isSubmitting}
                />
              </div>

              <div>
                <label 
                  htmlFor="contact-whatsapp"
                  className="font-sans text-xs tracking-[0.2em] uppercase text-gray-500 mb-2 block"
                >
                  WhatsApp *
                </label>
                <input
                  id="contact-whatsapp"
                  type="tel"
                  value={formData.whatsapp}
                  onChange={handleWhatsAppChange}
                  className="w-full bg-white border-2 border-gray-200 focus:border-gray-900 rounded-xl px-4 py-3 text-gray-900 font-sans text-base outline-none transition-colors duration-300"
                  placeholder="Ej: 098190000"
                  maxLength={9}
                  pattern="[0-9]{9}"
                  required
                  disabled={isSubmitting}
                />
                {formData.whatsapp && formData.whatsapp.length === 9 && (
                  <p className="text-xs text-green-600 mt-2">✓ Número válido (+595{formData.whatsapp})</p>
                )}
                {formData.whatsapp && formData.whatsapp.length > 0 && formData.whatsapp.length < 9 && (
                  <p className="text-xs text-amber-600 mt-2">Debe tener 9 dígitos</p>
                )}
              </div>

              <div>
                <label 
                  htmlFor="service-select"
                  className="font-sans text-xs tracking-[0.2em] uppercase text-gray-500 mb-2 block"
                >
                  Tipo de Servicio *
                </label>
                <select
                  id="service-select"
                  value={formData.service}
                  onChange={(e) => setFormData({...formData, service: e.target.value})}
                  className="w-full bg-white border-2 border-gray-200 focus:border-gray-900 rounded-xl px-4 py-3 text-gray-900 font-sans text-base outline-none transition-colors duration-300 cursor-pointer"
                  required
                  disabled={isSubmitting}
                >
                  <option value="">Selecciona un servicio</option>
                  {services.map((service) => (
                    <option key={service} value={service}>{service}</option>
                  ))}
                </select>
              </div>

              <div>
                <label 
                  htmlFor="contact-message"
                  className="font-sans text-xs tracking-[0.2em] uppercase text-gray-500 mb-2 block"
                >
                  Detalles del Evento *
                </label>
                <textarea
                  id="contact-message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full bg-white border-2 border-gray-200 focus:border-gray-900 rounded-xl px-4 py-3 text-gray-900 font-sans text-base outline-none transition-colors duration-300 resize-none"
                  placeholder="Cuéntanos sobre tu evento: fecha, ubicación, cantidad de personas, detalles especiales..."
                  required
                  disabled={isSubmitting}
                />
              </div>
              
              <button 
                type="submit"
                disabled={isSubmitting}
                className="group w-full bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-full font-sans text-sm tracking-[0.2em] uppercase transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="w-5 h-5" />
                {isSubmitting ? 'Enviando...' : 'Enviar Formulario'}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </form>

            <button
              onClick={handleWhatsAppClick}
              type="button"
              className="w-full mt-4 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full font-sans text-sm tracking-[0.2em] uppercase transition-all duration-300 flex items-center justify-center gap-3"
            >
              <MessageCircle className="w-5 h-5" />
              Contactar por WhatsApp
            </button>

            <p className="text-xs text-gray-500 text-center font-sans mt-4">
              Nos pondremos en contacto contigo a la brevedad
            </p>
          </AnimatedSection>
          
        </div>
      </div>

      {/* Modal de Confirmación */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-8 md:p-12 max-w-md w-full shadow-2xl animate-fadeIn">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-green-600" />
              </div>
              
              <h3 className="font-serif text-3xl md:text-4xl font-light text-gray-900 mb-4">
                ¡Mensaje Enviado!
              </h3>
              
              <p className="font-sans text-base text-gray-600 mb-8 leading-relaxed">
                Gracias por contactarnos. Hemos recibido tu consulta y te responderemos por WhatsApp a la brevedad.
              </p>
              
              <button
                onClick={() => setShowModal(false)}
                className="w-full bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-full font-sans text-sm tracking-[0.2em] uppercase transition-all duration-300"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </section>
  );
};