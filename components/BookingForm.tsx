import React, { useState } from 'react';

export const BookingForm: React.FC = () => {
  const [formData, setFormData] = useState({
    reason: 'check_engine',
    phone: '',
    time: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // In a real app, this would send data to API/Zapier
  };

  return (
    <section id="booking" className="py-16 bg-gray-50 scroll-mt-24">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-xl p-8 border-t-8 border-primary">
          <div className="text-center mb-8">
            <h2 className="font-heading text-3xl font-bold text-gray-900">Secure Your Slot</h2>
            <p className="text-gray-600 mt-2">Takes 30 seconds. We'll text to confirm. Cancel anytime.</p>
          </div>

          {submitted ? (
            <div className="bg-green-50 border border-green-200 text-green-800 p-6 rounded-lg text-center">
              <i className="fa-solid fa-circle-check text-4xl mb-4 text-green-600"></i>
              <h3 className="font-bold text-xl mb-2">Request Received!</h3>
              <p>We are reviewing your request now. Expect a text at <strong>{formData.phone}</strong> within 10 minutes to confirm your location.</p>
              <button 
                onClick={() => setSubmitted(false)}
                className="mt-6 text-green-700 underline text-sm"
              >
                Book another scan
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div>
                <label className="block text-gray-700 font-bold mb-2" htmlFor="reason">
                  What brings you in today?
                </label>
                <div className="relative">
                  <select
                    id="reason"
                    className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-primary focus:border-primary block p-4 appearance-none"
                    value={formData.reason}
                    onChange={(e) => setFormData({...formData, reason: e.target.value})}
                    required
                  >
                    <option value="check_engine">Check Engine Light (Most Common)</option>
                    <option value="used_car">Buying Used Car (Marketplace)</option>
                    <option value="family">Family Vehicle / Elderly Parent</option>
                    <option value="other">Other Warning Light</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-700">
                    <i className="fa-solid fa-chevron-down"></i>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-gray-700 font-bold mb-2" htmlFor="phone">
                  Phone Number (for text confirmation)
                </label>
                <input
                  type="tel"
                  id="phone"
                  placeholder="(813) 555-xxxx"
                  className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-primary focus:border-primary block p-4"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 font-bold mb-2" htmlFor="time">
                  Preferred Time
                </label>
                <select
                  id="time"
                  className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-primary focus:border-primary block p-4"
                  value={formData.time}
                  onChange={(e) => setFormData({...formData, time: e.target.value})}
                  required
                >
                  <option value="" disabled>Select a time window</option>
                  <option value="asap">ASAP (Same-Day)</option>
                  <option value="morning">Tomorrow Morning (8AM - 11AM)</option>
                  <option value="afternoon">Tomorrow Afternoon (12PM - 4PM)</option>
                  <option value="evening">Tomorrow Evening (4PM - 6PM)</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full bg-primary hover:bg-green-800 text-white font-bold py-4 rounded-lg text-xl shadow-md transition transform hover:-translate-y-0.5"
              >
                Confirm $89.95 Scan
              </button>

              <div className="text-center text-xs text-gray-400 flex justify-center items-center gap-4 mt-4">
                <span><i className="fa-solid fa-lock mr-1"></i> HTTPS Secure</span>
                <span><i className="fa-solid fa-shield-halved mr-1"></i> No Spam Guarantee</span>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
