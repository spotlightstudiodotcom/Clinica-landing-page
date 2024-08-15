"use client";
import React, { useEffect, useState } from 'react';

export const Hero = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="relative h-screen w-full">
      {isClient && (
        <div className="absolute inset-0 w-full h-full">
          <video
            src="/assets/hero.mp4"
            autoPlay
            muted
            loop
            className="w-full h-full object-cover"
          />
        </div>
      )}
      <div className="absolute inset-0 w-full bg-black opacity-60"></div>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
        <h1 className="text-5xl font-bold mb-4">Seu Sorriso, Nossa paixão</h1>
        <p className="text-xl mb-8">Cuidados Dentários Especializados para um Sorriso Saudável e Bonito</p>
        <button
          color="warning"
          className="font-semibold bg-blue-600 hover:bg-blue-500 transition-background rounded-full py-3.5 px-6"
        >
          Marque sua visita
        </button>
      </div>
    </div>
  );
};
