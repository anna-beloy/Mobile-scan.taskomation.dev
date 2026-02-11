import React from 'react';
import { PersonaType } from '../types';
import { PERSONA_DATA } from '../constants';

interface Props {
  activePersona: PersonaType;
}

export const ProblemSolution: React.FC<Props> = ({ activePersona }) => {
  const content = PERSONA_DATA[activePersona];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-gray-50 rounded-2xl p-8 shadow-sm border border-gray-100">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            
            <div className="w-full md:w-1/3">
                {/* Dynamic Image based on persona */}
                <div className="aspect-square bg-gray-200 rounded-xl overflow-hidden relative shadow-inner">
                    {activePersona === 'mike' && (
                         <img src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=600" alt="Used car lot" className="object-cover w-full h-full" />
                    )}
                    {activePersona === 'annie' && (
                         <img src="https://images.unsplash.com/photo-1574169208507-84376144848b?auto=format&fit=crop&q=80&w=600" alt="Office parking lot" className="object-cover w-full h-full" />
                    )}
                    {activePersona === 'rita' && (
                         <img src="https://images.unsplash.com/photo-1516738901171-8eb4fc13bd20?auto=format&fit=crop&q=80&w=600" alt="Elderly person with car" className="object-cover w-full h-full" />
                    )}
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                        <i className="fa-solid fa-triangle-exclamation text-5xl text-accent opacity-90 animate-pulse"></i>
                    </div>
                </div>
            </div>

            <div className="w-full md:w-2/3">
              <h3 className="text-accent font-bold uppercase tracking-wider text-sm mb-2">The Situation</h3>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                {content.problemTitle}
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                {content.problemText}
              </p>
              
              <div className="bg-primary/10 border-l-4 border-primary p-4 rounded-r-lg">
                <h4 className="font-bold text-primary mb-1">
                    <i className="fa-solid fa-check-circle mr-2"></i>
                    The $89.95 Solution
                </h4>
                <p className="text-gray-700 text-sm">
                    We arrive within hours. We scan with dealer-grade tech. We give you a PDF report you can trust. No upselling, just the raw data and expert interpretation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
