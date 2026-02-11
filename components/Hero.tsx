import React from 'react';
import { PersonaType } from '../types';
import { PERSONA_DATA } from '../constants';

interface HeroProps {
  activePersona: PersonaType;
  setActivePersona: (p: PersonaType) => void;
}

export const Hero: React.FC<HeroProps> = ({ activePersona, setActivePersona }) => {
  const content = PERSONA_DATA[activePersona];

  const scrollToBooking = () => {
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative bg-gradient-to-b from-gray-900 to-gray-800 text-white pb-12 pt-8 overflow-hidden">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 opacity-20">
         <img 
            src="https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&q=80&w=2000" 
            alt="Mechanic working on car" 
            className="w-full h-full object-cover"
         />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Persona Toggles */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {(Object.keys(PERSONA_DATA) as PersonaType[]).map((key) => (
            <button
              key={key}
              onClick={() => setActivePersona(key)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs md:text-sm font-bold transition-all border-2
                ${activePersona === key 
                  ? 'bg-accent border-accent text-white shadow-lg scale-105' 
                  : 'bg-transparent border-gray-500 text-gray-300 hover:border-white hover:text-white'
                }`}
            >
              <i className={`fa-solid ${PERSONA_DATA[key].icon}`}></i>
              {PERSONA_DATA[key].label}
            </button>
          ))}
        </div>

        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          
          {/* Text Content */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <div className="inline-block bg-primary px-3 py-1 rounded-sm text-xs font-bold uppercase tracking-wider mb-4 animate-bounce">
              <i className="fa-solid fa-bolt mr-1"></i> Same-Day Service Available
            </div>
            
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4 text-white">
              {content.heroHeadline}
            </h1>
            
            <p className="text-gray-300 text-lg md:text-xl mb-6 leading-relaxed border-l-4 border-accent pl-4 md:pl-0 md:border-l-0">
              {content.heroSubhead}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button 
                onClick={scrollToBooking}
                className="bg-primary hover:bg-green-700 text-white font-bold py-4 px-8 rounded-lg shadow-xl text-lg transform transition hover:-translate-y-1"
              >
                {content.heroCta}
                <i className="fa-solid fa-arrow-right ml-2"></i>
              </button>
            </div>

            <p className="mt-4 text-sm text-gray-400 italic">
              <i className="fa-solid fa-quote-left mr-2 text-gray-600"></i>
              {content.heroPain}
            </p>

            {/* Trust Badges */}
            <div className="mt-8 flex items-center justify-center md:justify-start gap-4 opacity-90">
                <div className="flex items-center gap-1">
                    <i className="fa-solid fa-star text-yellow-400"></i>
                    <span className="font-bold text-sm">4.9/5 (127 Reviews)</span>
                </div>
                <div className="h-4 w-px bg-gray-600"></div>
                <div className="text-xs font-bold uppercase bg-white text-trust px-2 py-1 rounded">
                    Autel Certified
                </div>
                <div className="h-4 w-px bg-gray-600"></div>
                <div className="text-xs font-bold uppercase border border-gray-500 px-2 py-1 rounded">
                    BBB Accredited
                </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="w-full md:w-1/2 relative">
            <div className="relative rounded-xl overflow-hidden shadow-2xl border-4 border-white/10">
               {/* Simulating Autel Scanner Image */}
              <img 
                src="https://images.unsplash.com/photo-1632823471448-9f33ae9e1261?auto=format&fit=crop&q=80&w=800"
                alt="Autel MaxiSys Ultra Scanner connected to vehicle" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-4">
                <p className="text-white font-bold flex items-center gap-2">
                    <i className="fa-solid fa-tablet-screen-button text-accent"></i>
                    Autel MaxiSys Ultra Scanner
                </p>
                <p className="text-xs text-gray-300">Dealer-level diagnostics, not a cheap code reader.</p>
              </div>
            </div>
            
            {/* Floating Price Tag */}
            <div className="absolute -top-4 -right-2 bg-accent text-white font-heading font-bold p-4 rounded-full shadow-lg transform rotate-3 border-4 border-gray-800 text-center w-24 h-24 flex flex-col justify-center items-center z-20">
              <span className="text-xs line-through opacity-75">$200</span>
              <span className="text-xl">$89.95</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
