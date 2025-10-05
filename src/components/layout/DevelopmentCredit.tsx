import React from 'react';

export const DevelopmentCredit: React.FC = () => {
  return (
    <div className="py-6 px-6 bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto text-center">
        <p className="font-sans text-xs text-gray-500">
          Desarrollado por{' '}
          <a 
            href="https://www.dinamowebdesign.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-900 hover:text-purple-600 font-medium transition-colors duration-300"
          >
            Agencia Dinamo
          </a>
        </p>
      </div>
    </div>
  );
};