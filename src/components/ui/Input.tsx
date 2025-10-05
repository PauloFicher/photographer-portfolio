import React from 'react';
import type { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const Input: React.FC<InputProps> = ({ label, className = '', ...props }) => {
  return (
    <div className="w-full">
      {label && (
        <label className="font-sans text-xs tracking-[0.2em] uppercase text-gray-500 mb-3 block">
          {label}
        </label>
      )}
      <input
        className={`w-full bg-transparent border-b-2 border-white/10 focus:border-white px-0 py-4 text-white font-sans text-lg outline-none transition-colors duration-300 ${className}`}
        {...props}
      />
    </div>
  );
};