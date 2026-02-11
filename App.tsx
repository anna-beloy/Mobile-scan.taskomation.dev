import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProblemSolution } from './components/ProblemSolution';
import { ComparisonTable } from './components/ComparisonTable';
import { ProofSection } from './components/ProofSection';
import { PricingSection } from './components/PricingSection';
import { UrgencyBlock } from './components/UrgencyBlock';
import { BookingForm } from './components/BookingForm';
import { FloatingWidget } from './components/FloatingWidget';
import { Footer } from './components/Footer';
import { PersonaType } from './types';

const App: React.FC = () => {
  const [activePersona, setActivePersona] = useState<PersonaType>('mike');

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900">
      <Header />
      <main>
        <Hero activePersona={activePersona} setActivePersona={setActivePersona} />
        <ProblemSolution activePersona={activePersona} />
        <ComparisonTable />
        <ProofSection />
        <PricingSection />
        <UrgencyBlock />
        <BookingForm />
      </main>
      <Footer />
      <FloatingWidget />
    </div>
  );
};

export default App;
