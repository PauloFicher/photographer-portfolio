// src/components/gallery/Lightbox.tsx
import React, { useEffect, useRef, useState } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut } from 'lucide-react';
import type { GalleryImage } from '../../types';

interface LightboxProps {
  isOpen: boolean;
  currentIndex: number;
  images: GalleryImage[];
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export const Lightbox: React.FC<LightboxProps> = ({
  isOpen,
  currentIndex,
  images,
  onClose,
  onNext,
  onPrev,
}) => {
  const [zoom, setZoom] = useState(1);
  const [panX, setPanX] = useState(0);
  const [panY, setPanY] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const imageRef = useRef<HTMLDivElement>(null);
  const touchStartDistance = useRef(0);

  // Reset zoom cuando cambias de imagen
  useEffect(() => {
    setZoom(1);
    setPanX(0);
    setPanY(0);
  }, [currentIndex]);

  // Bloquear scroll cuando está abierto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Cerrar con Escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    
    if (isOpen) {
      window.addEventListener('keydown', handleEscape);
      return () => window.removeEventListener('keydown', handleEscape);
    }
  }, [isOpen, onClose]);

  // Navegar con flechas del teclado
  useEffect(() => {
    const handleKeyboard = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };
    
    if (isOpen) {
      window.addEventListener('keydown', handleKeyboard);
      return () => window.removeEventListener('keydown', handleKeyboard);
    }
  }, [isOpen, onNext, onPrev]);

  // Zoom con rueda del mouse (Desktop)
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (!isOpen) return;
      e.preventDefault();
      
      const delta = e.deltaY > 0 ? -0.1 : 0.1;
      setZoom(prev => Math.max(1, Math.min(prev + delta, 3)));
    };

    if (isOpen) {
      window.addEventListener('wheel', handleWheel, { passive: false });
      return () => window.removeEventListener('wheel', handleWheel);
    }
  }, [isOpen]);

  // Detectar distancia entre dos dedos (Pinch zoom - Mobile)
  const getTouchDistance = (touches: React.TouchList) => {
    if (touches.length < 2) return 0;
    const dx = touches[0].clientX - touches[1].clientX;
    const dy = touches[0].clientY - touches[1].clientY;
    return Math.sqrt(dx * dx + dy * dy);
  };

  // Manejar inicio del toque
  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 2) {
      touchStartDistance.current = getTouchDistance(e.touches);
    } else if (e.touches.length === 1) {
      setDragStart({
        x: e.touches[0].clientX - panX,
        y: e.touches[0].clientY - panY,
      });
      setIsDragging(true);
    }
  };

  // Manejar movimiento del toque
  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length === 2) {
      // Pinch zoom
      const currentDistance = getTouchDistance(e.touches);
      if (touchStartDistance.current > 0) {
        const scale = currentDistance / touchStartDistance.current;
        setZoom(prev => Math.max(1, Math.min(prev * scale, 3)));
        touchStartDistance.current = currentDistance;
      }
    } else if (e.touches.length === 1 && isDragging && zoom > 1) {
      // Drag/pan cuando está haciendo zoom
      setPanX(e.touches[0].clientX - dragStart.x);
      setPanY(e.touches[0].clientY - dragStart.y);
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    touchStartDistance.current = 0;
  };

  // Manejar mouse drag (Desktop)
  const handleMouseDown = (e: React.MouseEvent) => {
    if (zoom <= 1) return;
    setDragStart({
      x: e.clientX - panX,
      y: e.clientY - panY,
    });
    setIsDragging(true);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || zoom <= 1) return;
    setPanX(e.clientX - dragStart.x);
    setPanY(e.clientY - dragStart.y);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Controles de zoom
  const handleZoomIn = () => {
    setZoom(prev => Math.min(prev + 0.3, 3));
  };

  const handleZoomOut = () => {
    setZoom(prev => Math.max(prev - 0.3, 1));
  };

  const resetZoom = () => {
    setZoom(1);
    setPanX(0);
    setPanY(0);
  };

  if (!isOpen || images.length === 0) return null;

  const currentImage = images[currentIndex];

  return (
    <div 
      className="fixed inset-0 z-[9999] bg-black/90 backdrop-blur-sm flex items-center justify-center"
      onClick={onClose}
    >
      {/* Botón Cerrar */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 md:top-6 md:right-6 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/20 hover:bg-white/30 text-white transition-all duration-300 flex items-center justify-center shadow-lg hover:scale-110"
        aria-label="Cerrar"
      >
        <X className="w-5 h-5 md:w-6 md:h-6" />
      </button>

      {/* Controles de Zoom (Desktop) */}
      <div className="absolute top-4 right-20 md:top-6 md:right-24 z-10 hidden md:flex gap-2">
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleZoomOut();
          }}
          className="w-10 h-10 rounded-lg bg-white/20 hover:bg-white/30 text-white transition-all flex items-center justify-center"
          aria-label="Alejar"
          disabled={zoom <= 1}
        >
          <ZoomOut className="w-5 h-5" />
        </button>
        <div className="w-12 h-10 rounded-lg bg-white/20 flex items-center justify-center text-white text-sm font-semibold">
          {Math.round(zoom * 100)}%
        </div>
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleZoomIn();
          }}
          className="w-10 h-10 rounded-lg bg-white/20 hover:bg-white/30 text-white transition-all flex items-center justify-center"
          aria-label="Acercar"
          disabled={zoom >= 3}
        >
          <ZoomIn className="w-5 h-5" />
        </button>
        {zoom > 1 && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              resetZoom();
            }}
            className="px-3 h-10 rounded-lg bg-white/20 hover:bg-white/30 text-white transition-all text-xs font-semibold"
            aria-label="Resetear zoom"
          >
            Reset
          </button>
        )}
      </div>

      {/* Botón Anterior */}
      {images.length > 1 && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
          className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-14 md:h-14 rounded-full bg-white/20 hover:bg-white/30 text-white transition-all duration-300 flex items-center justify-center shadow-lg hover:scale-110"
          aria-label="Anterior"
        >
          <ChevronLeft className="w-5 h-5 md:w-7 md:h-7" />
        </button>
      )}

      {/* Botón Siguiente */}
      {images.length > 1 && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-14 md:h-14 rounded-full bg-white/20 hover:bg-white/30 text-white transition-all duration-300 flex items-center justify-center shadow-lg hover:scale-110"
          aria-label="Siguiente"
        >
          <ChevronRight className="w-5 h-5 md:w-7 md:h-7" />
        </button>
      )}

      {/* Contenedor de la imagen - Mejor layout */}
      <div 
        className="relative w-full h-full flex flex-col items-center justify-center p-4 md:p-8"
        onClick={(e) => e.stopPropagation()}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        ref={imageRef}
      >
        {/* Área de imagen con zoom */}
        <div className="relative flex-1 w-full flex items-center justify-center overflow-hidden rounded-lg">
          <div
            style={{
              transform: `scale(${zoom}) translate(${panX / zoom}px, ${panY / zoom}px)`,
              transformOrigin: 'center',
              transition: isDragging ? 'none' : 'transform 0.2s ease-out',
              cursor: zoom > 1 ? (isDragging ? 'grabbing' : 'grab') : 'default',
            }}
          >
            <img
              src={currentImage.src}
              alt={currentImage.title}
              className="max-w-full max-h-[70vh] w-auto h-auto object-contain rounded-lg shadow-2xl select-none pointer-events-none"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            />
          </div>
        </div>

        {/* Información - En la parte inferior */}
        <div className="w-full mt-6 text-center max-w-2xl">
          <h3 className="font-serif text-2xl md:text-3xl text-white mb-2">
            {currentImage.title}
          </h3>
          
          {/* Contador */}
          <div className="flex items-center justify-center gap-3">
            <div className="h-px w-12 bg-white/30" />
            <p className="font-sans text-xs md:text-sm text-white/70">
              {currentIndex + 1} de {images.length}
            </p>
            <div className="h-px w-12 bg-white/30" />
          </div>

          {/* Indicadores de zoom/gesto (Mobile) */}
          <p className="text-xs text-white/50 mt-3 md:hidden">
            {zoom > 1 ? 'Arrastra para mover' : 'Pellizca para aumentar zoom'}
          </p>
        </div>

        {/* Controles de Zoom (Mobile) */}
        <div className="absolute bottom-20 md:hidden left-1/2 -translate-x-1/2 flex gap-2 z-10">
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleZoomOut();
            }}
            className="w-10 h-10 rounded-lg bg-white/20 hover:bg-white/30 text-white transition-all flex items-center justify-center"
            aria-label="Alejar"
            disabled={zoom <= 1}
          >
            <ZoomOut className="w-4 h-4" />
          </button>
          <div className="w-12 h-10 rounded-lg bg-white/20 flex items-center justify-center text-white text-xs font-semibold">
            {Math.round(zoom * 100)}%
          </div>
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleZoomIn();
            }}
            className="w-10 h-10 rounded-lg bg-white/20 hover:bg-white/30 text-white transition-all flex items-center justify-center"
            aria-label="Acercar"
            disabled={zoom >= 3}
          >
            <ZoomIn className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};