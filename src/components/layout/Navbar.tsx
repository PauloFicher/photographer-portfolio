import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const navLinks = [
    { name: 'Inicio', href: '/' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Galería', href: '/galeria' },
    { name: 'Testimonios', href: '#testimonios' },
    { name: 'Contacto', href: '#contacto' },
  ];

  const handleNavClick = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.getElementById(href.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav
        // Mantenemos el z-index alto para que el navbar siempre flote sobre el contenido normal
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-lg border-b border-gray-200 shadow-sm'
            : 'bg-white/90 backdrop-blur-md border-b border-gray-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="text-3xl font-serif font-light tracking-wider text-gray-900">
            BF Fotografia
          </Link>

          {/* Botón de Menú (Solo se muestra en mobile/desktop como un icono) */}
          {/* NOTA: El botón ahora vive FUERA del z-50 del nav en el DOM
             y es la única excepción para que el menú pueda cubrirlo.*/}
        </div>
      </nav>

      {/* BOTÓN TOGGLE - MOVIDO FUERA DEL NAV PARA MEJOR CONTROL DE Z-INDEX */}
      {/* Colocamos el botón al final del DOM (z-60) para asegurar que el menú no lo cubra por accidente,
         y lo ponemos fijo para que siempre esté visible en la esquina superior derecha.
         En este diseño, la solución más limpia es colocar el botón DENTRO del menú fullscreen
         y no en el navbar principal. */}
      
      
      {/* FULLSCREEN MENU - AHORA CON Z-51 (Z-60 en el código) PARA CUBRIR EL NAVBAR */}
      <div
        className={`fixed inset-0 bg-gradient-to-br from-purple-50 via-white to-pink-50 z-[60] flex flex-col items-center justify-center transition-all duration-700 ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        {/* Botón de CERRAR Menú - Colocado en la esquina del Menú Fullscreen */}
        <button
          onClick={() => setIsMenuOpen(false)}
          className="absolute top-6 right-6 text-gray-900 z-[65] hover:text-purple-600 transition-colors"
          aria-label="Cerrar menú"
        >
            <X size={32} />
        </button>

        <nav className="flex flex-col items-center space-y-8 max-h-[80vh] overflow-y-auto px-6 py-8">
          {navLinks.map((link, idx) => (
            <div key={link.name} className="overflow-hidden">
              {link.href.startsWith('#') ? (
              
                <button
                  onClick={() => handleNavClick(link.href)}
                  className="text-4xl md:text-6xl font-serif font-light hover:text-purple-600 transition-colors duration-300 tracking-tight"
                  style={{
                    animation: isMenuOpen
                      ? `slideUp 0.6s ease-out ${idx * 0.1}s both`
                      : 'none',
                  }}
                >
                  {link.name}
                </button>
              ) : (
                <Link
                  to={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-5xl md:text-7xl font-serif font-light hover:text-purple-600 transition-colors duration-300 tracking-tight"
                  style={{
                    animation: isMenuOpen
                      ? `slideUp 0.6s ease-out ${idx * 0.1}s both`
                      : 'none',
                  }}
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="mt-12 overflow-hidden">
          <button
            onClick={() => handleNavClick('#contacto')}
            className="bg-gray-900 hover:bg-gray-800 text-white font-sans font-semibold text-lg px-12 py-5 rounded-full transition-all hover:scale-105 inline-block text-center tracking-wide"
            style={{
              animation: isMenuOpen
                ? `slideUp 0.6s ease-out ${navLinks.length * 0.1}s both`
                : 'none',
            }}
          >
            Reservar Sesión
          </button>
        </div>

        {/* Footer info */}
        <div className="absolute bottom-8 text-center text-gray-500 text-sm font-sans">
          <p
            style={{
              animation: isMenuOpen
                ? `fadeIn 1s ease-out ${navLinks.length * 0.1 + 0.2}s both`
                : 'none',
            }}
          >
              {/* Aquí se puede añadir info de redes o copyright */}
          </p>
        </div>
      </div>

      {/* Botón de Abrir Menú - Colocado en el navbar principal */}
      <div 
         className="fixed top-0 right-0 z-[70] p-6 lg:p-6" // Alto z-index para que esté sobre todo
      >
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-900 relative hover:text-purple-600 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
      </div>

      {/* Animaciones CSS */}
      <style>{`
        @keyframes slideUp {
          from {
            transform: translateY(100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </>
  );
};