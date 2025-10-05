export interface Service {
  id: string;
  icon: any;
  title: string;
  description: string;
  color: string;
}

export interface GalleryImage {
  id: number;
  category: string;
  title: string;
  src: string;
  thumbnail?: string;
  size: 'small' | 'medium' | 'large';
  aspect: 'portrait' | 'landscape' | 'square';
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  text: string;
  avatar?: string;
}

export interface Category {
  id: string;
  name: string;
}

export interface FormData {
  name: string;
  email: string;
  message: string;
}