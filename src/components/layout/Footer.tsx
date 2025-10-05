import React from 'react';
import { Instagram, Facebook } from 'lucide-react';
import { CONTACT_INFO } from '../../utils/constants';

export const Footer: React.FC = () => {
  return (
    <footer className="py-16 px-6 bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="font-serif text-3xl font-light tracking-wider text-gray-900">Atelier</div>
          
          <div className="flex gap-4">
            <a 
              href={CONTACT_INFO.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 border-2 border-gray-300 rounded-full flex items-center justify-center hover:border-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-300"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a 
              href={CONTACT_INFO.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 border-2 border-gray-300 rounded-full flex items-center justify-center hover:border-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-300"
            >
              <Facebook className="w-5 h-5" />
            </a>
          </div>
          
          <div className="font-sans text-sm text-gray-500">
            © 2025 Atelier Fotográfico. Todos los derechos reservados.
          </div>
        </div>
      </div>
    </footer>
  );
};