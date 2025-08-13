import React from 'react';
import SearchOption from './SearchOption';
const HeroSection = () => {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-white py-12">
      <div className="container mx-auto px-4">
        {/* Search Bar */}
        
        <SearchOption />
        {/* Hero Content */}
        <div className="relative rounded-2xl overflow-hidden shadow-lg">
          <img
            src="https://i.imgur.com/hero-background-url.png"
            alt="Doctor and Patient"
            className="w-full h-auto object-cover opacity-75"
          />
          <div className="absolute inset-0 bg-blue-500 bg-opacity-10" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white p-4 md:p-8">
              <h1 className="text-3xl md:text-5xl font-bold mb-4">The Largest Online Doctor Platform Of The Country</h1>
              <p className="text-lg md:text-2xl font-medium mb-6">Trusted By 630,000 Patients</p>
              <button className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-full hover:bg-blue-700 transition duration-300">
                Consult a Doctor Now &rarr;
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;