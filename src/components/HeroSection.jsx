import React from 'react';

const HeroSection = () => {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-white py-12">
      <div className="container mx-auto px-4">
        {/* Search Bar */}
        <div className="mb-8">
          <div className="flex items-center border border-gray-300 rounded-full px-4 py-2 bg-white max-w-2xl mx-auto">
            <input
              type="text"
              placeholder="Search by doctor name/code or department"
              className="flex-grow outline-none text-gray-700"
            />
            <button className="text-gray-500 hover:text-blue-600">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </button>
          </div>
        </div>

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