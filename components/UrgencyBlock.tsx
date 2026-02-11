import React, { useState, useEffect } from 'react';

export const UrgencyBlock: React.FC = () => {
  const [spotsLeft, setSpotsLeft] = useState(4);

  useEffect(() => {
    // Simple logic to keep spots low but strictly positive
    const interval = setInterval(() => {
      setSpotsLeft((prev) => (prev > 1 ? prev - 1 : 1));
    }, 150000); // Decrease every 2.5 minutes
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gray-900 text-white py-6 border-y-4 border-accent">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-col space-y-2">
                <div className="flex items-center text-accent font-bold animate-pulse">
                    <i className="fa-solid fa-bolt mr-2"></i>
                    <span>SAME-DAY APPOINTMENTS FILL BY 2PM</span>
                </div>
                <div className="flex items-center text-sm text-gray-300">
                    <i className="fa-solid fa-triangle-exclamation mr-2 text-yellow-500"></i>
                    <span>Warning lights worsen if ignored</span>
                </div>
            </div>

            <div className="bg-gray-800 px-6 py-3 rounded-lg border border-gray-700 flex items-center gap-4">
                <div className="text-right">
                    <p className="text-xs text-gray-400 uppercase">Tech Availability</p>
                    <p className="font-heading font-bold text-xl text-white">
                        <span className="text-accent text-2xl mr-1">{spotsLeft}</span>
                        Spots Left Today
                    </p>
                </div>
                <div className="h-10 w-10 bg-accent rounded-full flex items-center justify-center animate-spin-slow">
                    <i className="fa-regular fa-clock text-white"></i>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};
