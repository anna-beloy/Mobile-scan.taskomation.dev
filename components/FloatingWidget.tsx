import React from 'react';

export const FloatingWidget: React.FC = () => {
  return (
    <a
      href="https://wa.me/18135550123?text=Hi%2C%20I%20need%20a%20car%20diagnostic%20scan"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#128C7E] text-white p-4 rounded-full shadow-2xl transition transform hover:scale-110 flex items-center gap-2 group"
    >
      <i className="fa-brands fa-whatsapp text-3xl"></i>
      <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 ease-in-out font-bold">
        Text Us Now
      </span>
    </a>
  );
};
