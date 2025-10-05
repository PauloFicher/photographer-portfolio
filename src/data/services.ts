import { Heart, Cake, Users, Baby, Building2, Camera } from 'lucide-react';

interface Service {
  id: string;
  icon: any;
  title: string;
  description: string;
  color: string;
  image: string;
}

export const services: Service[] = [
  {
    id: 'bodas',
    icon: Heart,
    title: 'Bodas',
    description: 'Capturamos la magia de tu día más especial',
    color: 'from-rose-100 to-pink-100',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=1000&fit=crop'
  },
  {
    id: 'quince',
    icon: Cake,
    title: 'Quince Años',
    description: 'Celebramos tu transición con elegancia',
    color: 'from-purple-100 to-pink-100',
    image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&h=1000&fit=crop'
  },
  {
    id: 'infantiles',
    icon: Users,
    title: 'Cumpleaños Infantiles',
    description: 'Inmortalizamos la alegría de la niñez',
    color: 'from-blue-100 to-cyan-100',
    image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&h=1000&fit=crop'
  },
  {
    id: 'adultos',
    icon: Users,
    title: 'Cumpleaños de Adultos',
    description: 'Momentos de celebración capturados',
    color: 'from-amber-100 to-orange-100',
    image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&h=1000&fit=crop'
  },
  {
    id: 'bautismo',
    icon: Baby,
    title: 'Primer Año & Bautismo',
    description: 'Los primeros pasos eternizados',
    color: 'from-emerald-100 to-teal-100',
    image: 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=800&h=1000&fit=crop'
  },
  {
    id: 'corporativas',
    icon: Building2,
    title: 'Corporativas',
    description: 'Imagen profesional de primer nivel',
    color: 'from-slate-100 to-gray-100',
    image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&h=1000&fit=crop'
  }
];