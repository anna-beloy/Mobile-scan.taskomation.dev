import React from 'react';

export const Header: React.FC = () => {
  const scrollToBooking = () => {
    const element = document.getElementById('booking');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md border-b-4 border-primary">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="text-primary text-2xl">
            <i className="fa-solid fa-car-on-side"></i>
          </div>
          <div>
            <h1 className="font-heading font-bold text-lg md:text-xl leading-tight text-gray-800">
              Tampa Mobile Diag
            </h1>
            <p className="text-xs text-gray-500 font-medium">We Come To You • $89.95 Flat</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <a 
            href="tel:+18135550123" 
            className="hidden md:flex flex-col items-end text-right mr-2"
          >
            <span className="text-xs text-gray-500 uppercase tracking-wide">Call Tech Direct</span>
            <span className="font-heading font-bold text-lg text-primary hover:text-green-700 transition">
              (813) 555-0199
            </span>
          </a>
          
          <button 
            onClick={scrollToBooking}
            className="bg-accent hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-lg shadow-lg transform transition active:scale-95 text-sm md:text-base animate-pulse"
          >
            Book Now
          </button>
        </div>
      </div>
    </header>
  );
};
