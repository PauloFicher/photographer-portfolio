import React, { useState, useRef } from 'react';
import { Phone, Mail, Instagram, Facebook, ArrowRight } from 'lucide-react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { CONTACT_INFO } from '../../utils/constants';
import type { FormData } from '../../types';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({ name: '', email: '', message: '' });
  const sectionRef = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.1 });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Mensaje enviado correctamente');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section 
      id="contacto" 
      ref={sectionRef}
      className="py-40 px-6 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="max-w-5xl mx-auto">
        <div className={`reveal-text ${isVisible ? 'visible' : ''} text-center mb-24`}>
          <h2 className="font-serif text-7xl md:text-8xl font-light mb-6 leading-tight text-gray-900">
            Conversemos
          </h2>
          <p className="font-sans text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Cada proyecto comienza con una conversación. Cuéntanos tu visión
          </p>
        </div>
        
        <div className={`reveal-text ${isVisible ? 'visible' : ''} grid grid-cols-1 md:grid-cols-2 gap-16`}>
          <div>
            <h3 className="font-serif text-3xl font-light mb-10 text-gray-900">Contacto Directo</h3>
            <div className="space-y-8">
              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 border-2 border-gray-300 rounded-full flex items-center justify-center group-hover:border-gray-900 group-hover:bg-gray-900 transition-colors duration-300">
                  <Phone className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <p className="font-sans text-xs tracking-[0.2em] uppercase text-gray-500 mb-2">Teléfono</p>
                  <p className="font-sans text-lg text-gray-900">{CONTACT_INFO.phone}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 border-2 border-gray-300 rounded-full flex items-center justify-center group-hover:border-gray-900 group-hover:bg-gray-900 transition-colors duration-300">
                  <Mail className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <p className="font-sans text-xs tracking-[0.2em] uppercase text-gray-500 mb-2">Email</p>
                  <p className="font-sans text-lg text-gray-900">{CONTACT_INFO.email}</p>
                </div>
              </div>
              
              <div className="pt-8 border-t-2 border-gray-200">
                <p className="font-sans text-xs tracking-[0.2em] uppercase text-gray-500 mb-6">Síguenos</p>
                <div className="flex gap-4">
                  <a href={CONTACT_INFO.instagram} className="w-12 h-12 border-2 border-gray-300 rounded-full flex items-center justify-center hover:border-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-300">
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a href={CONTACT_INFO.facebook} className="w-12 h-12 border-2 border-gray-300 rounded-full flex items-center justify-center hover:border-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-300">
                    <Facebook className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="font-serif text-3xl font-light mb-10 text-gray-900">Envíanos un Mensaje</h3>
            <div className="space-y-6">
              <div>
                <label className="font-sans text-xs tracking-[0.2em] uppercase text-gray-500 mb-3 block">Nombre</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-transparent border-b-2 border-gray-300 focus:border-gray-900 px-0 py-4 text-gray-900 font-sans text-lg outline-none transition-colors duration-300"
                />
              </div>
              
              <div>
                <label className="font-sans text-xs tracking-[0.2em] uppercase text-gray-500 mb-3 block">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full bg-transparent border-b-2 border-gray-300 focus:border-gray-900 px-0 py-4 text-gray-900 font-sans text-lg outline-none transition-colors duration-300"
                />
              </div>
              
              <div>
                <label className="font-sans text-xs tracking-[0.2em] uppercase text-gray-500 mb-3 block">Mensaje</label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full bg-transparent border-b-2 border-gray-300 focus:border-gray-900 px-0 py-4 text-gray-900 font-sans text-lg outline-none transition-colors duration-300 resize-none"
                />
              </div>
              
              <button 
                onClick={handleSubmit}
                className="group w-full bg-gray-900 text-white px-10 py-5 font-sans text-xs tracking-[0.2em] uppercase hover:bg-gray-800 transition-all duration-300 flex items-center justify-center gap-3 mt-8"
              >
                Enviar Mensaje
                <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};