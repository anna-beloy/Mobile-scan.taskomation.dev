import React from 'react';

export const PricingSection: React.FC = () => {
  const scrollToBooking = () => {
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="bg-primary py-12 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-8">No Hidden Fees. No Upsells.</h2>
        
        <div className="bg-white text-gray-900 max-w-lg mx-auto rounded-2xl shadow-2xl overflow-hidden transform md:scale-110 border-4 border-accent">
            <div className="bg-gray-100 p-4 border-b border-gray-200">
                <span className="bg-trust text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                    Most Popular
                </span>
            </div>
            <div className="p-8">
                <h3 className="font-heading text-2xl font-bold text-gray-700 mb-2">Complete System Scan</h3>
                <div className="flex justify-center items-baseline mb-6">
                    <span className="text-5xl font-extrabold text-primary">$89.95</span>
                    <span className="text-gray-500 ml-2">/ flat</span>
                </div>
                
                <ul className="text-left space-y-4 mb-8">
                    <li className="flex items-start">
                        <i className="fa-solid fa-check text-accent mt-1 mr-3"></i>
                        <span><strong>Autel MaxiSys Ultra</strong> (Dealer-Level)</span>
                    </li>
                    <li className="flex items-start">
                        <i className="fa-solid fa-check text-accent mt-1 mr-3"></i>
                        <span><strong>We Come To You</strong> (Tampa 336xx)</span>
                    </li>
                    <li className="flex items-start">
                        <i className="fa-solid fa-check text-accent mt-1 mr-3"></i>
                        <span><strong>Instant PDF Report</strong> (100+ Pages)</span>
                    </li>
                    <li className="flex items-start">
                        <i className="fa-solid fa-check text-accent mt-1 mr-3"></i>
                        <span><strong>Unbiased Advice</strong> (We don't sell repairs)</span>
                    </li>
                    <li className="flex items-start">
                        <i className="fa-solid fa-check text-accent mt-1 mr-3"></i>
                        <span><strong>Same-Day Service</strong> (If booked by 2PM)</span>
                    </li>
                </ul>

                <button 
                    onClick={scrollToBooking}
                    className="w-full bg-accent hover:bg-orange-600 text-white font-bold py-4 rounded-lg text-xl shadow-lg transition transform active:scale-95"
                >
                    Book $89.95 Scan <i className="fa-solid fa-arrow-right ml-2"></i>
                </button>
                <p className="mt-3 text-xs text-gray-500">No credit card required to book.</p>
            </div>
        </div>
      </div>
    </section>
  );
};
