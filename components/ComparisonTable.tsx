import React from 'react';

export const ComparisonTable: React.FC = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="font-heading text-3xl font-bold text-gray-900 mb-2">Why Us Over The Chains?</h2>
          <p className="text-gray-600">Save time, save money, get better data.</p>
        </div>

        <div className="max-w-3xl mx-auto overflow-hidden rounded-xl shadow-lg bg-white">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-800 text-white">
                <th className="py-4 px-4 text-left font-heading text-lg">Feature</th>
                <th className="py-4 px-4 text-center bg-gray-700 w-1/4 md:w-1/3">National Chains</th>
                <th className="py-4 px-4 text-center bg-primary w-1/4 md:w-1/3 relative">
                  <span className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-accent text-white text-xs px-2 py-1 rounded shadow">WINNER</span>
                  Tampa Mobile Diag
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="py-4 px-4 font-medium text-gray-700">Diagnostic Fee</td>
                <td className="py-4 px-4 text-center text-red-500 font-bold">$160 - $220+</td>
                <td className="py-4 px-4 text-center text-green-700 font-bold bg-green-50">$89.95 Flat</td>
              </tr>
              <tr>
                <td className="py-4 px-4 font-medium text-gray-700">Wait Time</td>
                <td className="py-4 px-4 text-center text-gray-500">2-3 Days</td>
                <td className="py-4 px-4 text-center text-gray-900 font-bold bg-green-50">Same-Day</td>
              </tr>
              <tr>
                <td className="py-4 px-4 font-medium text-gray-700">Convenience</td>
                <td className="py-4 px-4 text-center text-gray-500">Tow/Drive to Shop</td>
                <td className="py-4 px-4 text-center text-gray-900 font-bold bg-green-50">We Come To You</td>
              </tr>
              <tr>
                <td className="py-4 px-4 font-medium text-gray-700">Equipment</td>
                <td className="py-4 px-4 text-center text-gray-500">Basic Generic Scan</td>
                <td className="py-4 px-4 text-center text-gray-900 font-bold bg-green-50">Autel MaxiSys Ultra</td>
              </tr>
              <tr>
                <td className="py-4 px-4 font-medium text-gray-700">Goal</td>
                <td className="py-4 px-4 text-center text-red-500">Sell Repairs</td>
                <td className="py-4 px-4 text-center text-green-700 font-bold bg-green-50">Truth & Facts</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};
