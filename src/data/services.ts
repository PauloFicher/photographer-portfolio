import { Heart, Cake, Users, Baby, Building2 } from 'lucide-react';

interface Service {
  id: string;
  icon: any;
  title: string;
  description: string;
  color: string;
}

export const services: Service[] = [
  {
    id: 'bodas',
    icon: Heart,
    title: 'Bodas',
    description: 'Capturamos la magia de tu día más especial con un enfoque artístico y emocional',
    color: 'from-rose-100 to-pink-100'
  },
  {
    id: 'quince',
    icon: Cake,
    title: 'Quince Años',
    description: 'Celebramos tu transición con elegancia y estilo contemporáneo',
    color: 'from-purple-100 to-pink-100'
  },
  {
    id: 'infantiles',
    icon: Users,
    title: 'Cumpleaños Infantiles',
    description: 'Inmortalizamos la alegría y espontaneidad de la niñez',
    color: 'from-blue-100 to-cyan-100'
  },
  {
    id: 'adultos',
    icon: Users,
    title: 'Cumpleaños de Adultos',
    description: 'Momentos de celebración capturados con sofisticación',
    color: 'from-amber-100 to-orange-100'
  },
  {
    id: 'bautismo',
    icon: Baby,
    title: 'Primer Año & Bautismo',
    description: 'Los primeros pasos de una nueva vida, eternizados',
    color: 'from-emerald-100 to-teal-100'
  },
  {
    id: 'corporativas',
    icon: Building2,
    title: 'Corporativas',
    description: 'Imagen profesional que eleva tu marca al siguiente nivel',
    color: 'from-slate-100 to-gray-100'
  }
];