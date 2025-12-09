import React from 'react';

export const SantekLogo: React.FC<{ className?: string }> = ({ className = "h-12" }) => {
  return (
    <img 
      src="https://i.ibb.co/HfHvXyqr/logof.png" 
      alt="Santek Soluções em Tecnologias" 
      width="200"
      height="80"
      className={`block ${className} object-contain`}
    />
  );
};

export const SantekTextLogo: React.FC<{ className?: string }> = ({ className = "h-12" }) => (
    <div className={`flex items-center justify-center ${className}`}>
        <SantekLogo className="h-full w-auto" />
    </div>
);