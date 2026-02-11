import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <h4 className="font-heading font-bold text-white text-lg">Tampa Mobile Diag</h4>
            <p className="text-sm">Serving Tampa Bay (Zip Codes 336xx)</p>
            <p className="text-sm mt-1">© {new Date().getFullYear()} All Rights Reserved.</p>
          </div>
          <div className="text-center md:text-right">
            <p className="font-bold text-white mb-2">Service Hours</p>
            <p className="text-sm">Mon-Fri: 8AM - 6PM</p>
            <p className="text-sm">Sat: 9AM - 2PM</p>
            <p className="text-sm">Sun: Emergency Only</p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-xs text-center text-gray-500">
            <p>Not affiliated with Autel Intelligent Technology Corp. "Autel" is a registered trademark of Autel.</p>
        </div>
      </div>
    </footer>
  );
};
