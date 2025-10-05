import type { GalleryImage } from '../types';

export const galleryImages: GalleryImage[] = [
  { id: 1, category: 'bodas', title: 'María & Carlos', src: '/images/gallery/bodas/boda-1.jpg', size: 'large', aspect: 'portrait' },
  { id: 2, category: 'bodas', title: 'Ceremonia', src: '/images/gallery/bodas/boda-2.jpg', size: 'medium', aspect: 'landscape' },
  { id: 3, category: 'quince', title: 'Valentina XV', src: '/images/gallery/quince/quince-1.jpg', size: 'medium', aspect: 'portrait' },
  { id: 4, category: 'bodas', title: 'Detalles', src: '/images/gallery/bodas/boda-3.jpg', size: 'small', aspect: 'square' },
  { id: 5, category: 'infantiles', title: 'Cumpleaños Sofía', src: '/images/gallery/infantiles/infantil-1.jpg', size: 'medium', aspect: 'landscape' },
  { id: 6, category: 'corporativas', title: 'Team Building', src: '/images/gallery/corporativas/corp-1.jpg', size: 'large', aspect: 'landscape' },
  { id: 7, category: 'bautismo', title: 'Primer Año', src: '/images/gallery/bautismo/bautismo-1.jpg', size: 'medium', aspect: 'portrait' },
  { id: 8, category: 'quince', title: 'Sesión de Fotos', src: '/images/gallery/quince/quince-2.jpg', size: 'small', aspect: 'square' },
  { id: 9, category: 'bodas', title: 'Atardecer', src: '/images/gallery/bodas/boda-4.jpg', size: 'large', aspect: 'landscape' },
  { id: 10, category: 'adultos', title: 'Celebración', src: '/images/gallery/adultos/adulto-1.jpg', size: 'medium', aspect: 'portrait' },
  { id: 11, category: 'corporativas', title: 'Headshots', src: '/images/gallery/corporativas/corp-2.jpg', size: 'small', aspect: 'portrait' },
  { id: 12, category: 'infantiles', title: 'Diversión', src: '/images/gallery/infantiles/infantil-2.jpg', size: 'medium', aspect: 'square' },
  { id: 13, category: 'bodas', title: 'Recepción', src: '/images/gallery/bodas/boda-5.jpg', size: 'medium', aspect: 'landscape' },
  { id: 14, category: 'quince', title: 'Vals', src: '/images/gallery/quince/quince-3.jpg', size: 'large', aspect: 'portrait' },
  { id: 15, category: 'bautismo', title: 'Ceremonia', src: '/images/gallery/bautismo/bautismo-2.jpg', size: 'small', aspect: 'square' },
  { id: 16, category: 'adultos', title: 'Sorpresa', src: '/images/gallery/adultos/adulto-2.jpg', size: 'medium', aspect: 'landscape' },
];

export const categories = [
  { id: 'all', name: 'Todo' },
  { id: 'bodas', name: 'Bodas' },
  { id: 'quince', name: 'Quince Años' },
  { id: 'infantiles', name: 'Infantiles' },
  { id: 'adultos', name: 'Adultos' },
  { id: 'bautismo', name: 'Bautismos' },
  { id: 'corporativas', name: 'Corporativas' }
];