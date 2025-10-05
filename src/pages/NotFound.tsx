import React from 'react';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

export const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center">
        <h1 className="font-serif text-9xl font-light mb-6 gradient-text">404</h1>
        <p className="font-sans text-2xl text-gray-400 mb-8">
          Página no encontrada
        </p>
        <Link 
          to="/"
          className="inline-flex items-center gap-3 bg-white text-black px-8 py-4 font-sans text-xs tracking-[0.2em] uppercase hover:bg-gray-200 transition-all duration-300"
        >
          <Home className="w-4 h-4" />
          Volver al inicio
        </Link>
      </div>
    </div>
  );
};