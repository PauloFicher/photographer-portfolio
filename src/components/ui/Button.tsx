import React from 'react';
import type { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  children, 
  className = '',
  ...props 
}) => {
  const baseStyles = 'px-8 py-4 font-sans text-xs tracking-[0.2em] uppercase transition-all duration-300';
  
  const variants = {
    primary: 'bg-white text-black hover:bg-gray-200',
    secondary: 'bg-transparent border-2 border-white/20 text-white hover:bg-white hover:text-black hover:border-white',
    outline: 'border border-white/30 text-white hover:bg-white hover:text-black'
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};