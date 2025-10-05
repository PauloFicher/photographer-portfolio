import React, { useState, useRef } from 'react';
import { Phone, Instagram, ArrowRight, MessageCircle, CheckCircle } from 'lucide-react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { CONTACT_INFO } from '../../utils/constants';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    whatsapp: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  
  const sectionRef = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.1 });

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Enviar datos a Web3Forms
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: '494120e7-5d62-4eaa-9f7f-45158e23825d', // Reemplazar con tu key de Web3Forms
          name: formData.name,
          phone: formData.whatsapp,
          service: formData.service,
          message: formData.message,
          from_name: 'Formulario Atelier',
          subject: `Nueva consulta: ${formData.service}`
        })
      });

      if (response.ok) {
        setSubmitSuccess(true);
        
        // Abrir WhatsApp (opcional, después de guardar)
        const mensaje = `Hola! Mi nombre es ${formData.name}.\n\nEstoy interesado en: ${formData.service}\n\nDetalles: ${formData.message}`;
        const mensajeCodificado = encodeURIComponent(mensaje);
        const numeroWhatsApp = '595981234567'; // Número del fotógrafo
        window.open(`https://wa.me/${numeroWhatsApp}?text=${mensajeCodificado}`, '_blank');
        
        // Limpiar formulario
        setFormData({ name: '', whatsapp: '', service: '', message: '' });
        
        // Ocultar mensaje de éxito después de 5 segundos
        setTimeout(() => setSubmitSuccess(false), 5000);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Hubo un error. Por favor intenta nuevamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section 
      id="contacto" 
      ref={sectionRef}
      className="py-20 md:py-32 px-4 md:px-6 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="max-w-5xl mx-auto">
        <div className={`reveal-text ${isVisible ? 'visible' : ''} text-center mb-12 md:mb-16`}>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light mb-4 leading-tight text-gray-900">
            Conversemos
          </h2>
          <p className="font-sans text-sm md:text-base text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Cuéntanos sobre tu proyecto y te contactaremos
          </p>
        </div>
        
        <div className={`reveal-text ${isVisible ? 'visible' : ''} grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12`}>
          
          {/* Información de Contacto */}
          <div>
            <h3 className="font-serif text-2xl md:text-3xl font-light mb-6 md:mb-8 text-gray-900">
              Información de Contacto
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 border-2 border-gray-300 rounded-full flex items-center justify-center group-hover:border-gray-900 group-hover:bg-gray-900 transition-colors duration-300 flex-shrink-0">
                  <Phone className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <p className="font-sans text-xs tracking-[0.2em] uppercase text-gray-500 mb-1">Teléfono</p>
                  <p className="font-sans text-base md:text-lg text-gray-900">{CONTACT_INFO.phone}</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 border-2 border-gray-300 rounded-full flex items-center justify-center group-hover:border-green-600 group-hover:bg-green-600 transition-colors duration-300 flex-shrink-0">
                  <MessageCircle className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <p className="font-sans text-xs tracking-[0.2em] uppercase text-gray-500 mb-1">WhatsApp</p>
                  <a 
                    href="https://wa.me/595981234567" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="font-sans text-base md:text-lg text-gray-900 hover:text-green-600 transition-colors"
                  >
                    +595 981 234 567
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
                    className="w-12 h-12 border-2 border-gray-300 rounded-full flex items-center justify-center hover:border-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-300"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Formulario */}
          <div>
            <h3 className="font-serif text-2xl md:text-3xl font-light mb-6 md:mb-8 text-gray-900">
              Solicita una Cotización
            </h3>

            {submitSuccess && (
              <div className="mb-6 p-4 bg-green-50 border-2 border-green-200 rounded-xl flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                <p className="font-sans text-sm text-green-800">
                  ¡Mensaje guardado! Te contactaremos pronto.
                </p>
              </div>
            )}
            
            <div className="space-y-5">
              <div>
                <label className="font-sans text-xs tracking-[0.2em] uppercase text-gray-500 mb-2 block">
                  Nombre Completo *
                </label>
                <input
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
                <label className="font-sans text-xs tracking-[0.2em] uppercase text-gray-500 mb-2 block">
                  WhatsApp *
                </label>
                <input
                  type="tel"
                  value={formData.whatsapp}
                  onChange={(e) => setFormData({...formData, whatsapp: e.target.value})}
                  className="w-full bg-white border-2 border-gray-200 focus:border-gray-900 rounded-xl px-4 py-3 text-gray-900 font-sans text-base outline-none transition-colors duration-300"
                  placeholder="+595 981 234 567"
                  required
                  disabled={isSubmitting}
                />
              </div>

              <div>
                <label className="font-sans text-xs tracking-[0.2em] uppercase text-gray-500 mb-2 block">
                  Tipo de Servicio *
                </label>
                <select
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
                <label className="font-sans text-xs tracking-[0.2em] uppercase text-gray-500 mb-2 block">
                  Detalles del Evento *
                </label>
                <textarea
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
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="group w-full bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full font-sans text-sm tracking-[0.2em] uppercase transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <MessageCircle className="w-5 h-5" />
                {isSubmitting ? 'Enviando...' : 'Enviar Consulta'}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </button>

              <p className="text-xs text-gray-500 text-center font-sans">
                Guardaremos tu consulta y te contactaremos por WhatsApp
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};