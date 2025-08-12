import React from 'react';

const BuyMedicinesBanner = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-blue-700 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Text Content */}
        <div className="text-center md:text-left mb-6 md:mb-0">
          <h2 className="text-3xl sm:text-4xl font-bold leading-tight">
            Buy Medicines online from home
          </h2>
          <p className="mt-2 text-lg sm:text-xl font-light">
            Authentic medicines with discounts & free home delivery <br className="hidden sm:inline" /> within Dhaka city
          </p>
          <p className="mt-1 text-sm font-light italic opacity-80">*Conditions apply</p>
        </div>

        {/* Call-to-Action Button */}
        <div className="flex-shrink-0">
          <a
            href="#"
            className="bg-white text-blue-700 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-gray-100 transition duration-300 transform hover:scale-105"
          >
            Buy Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default BuyMedicinesBanner;