// src/components/AvailableDoctors.jsx

import React from 'react';

const doctors = [
  {
    name: 'Dr. Joysree Karmaker',
    degrees: 'MBBS,FCPS (Pediatrics)',
    rating: 5,
    reviews: 3084,
    experience: '9+',
    price: 500,
    oldPrice: null,
    imageUrl: 'https://i.imgur.com/L13uH4w.jpeg'
  },
  {
    name: 'Dr. Tahmina Hoque Pinki',
    degrees: 'MBBS,MCPS (Gynae & Obs),FCPS (Gynae & Obs),MS (Gynae & Obs)',
    rating: 5,
    reviews: 172,
    experience: '14+',
    price: 600,
    oldPrice: null,
    imageUrl: 'https://i.imgur.com/vHqB5eE.jpeg'
  },
  {
    name: 'Dr. Shahana Parveen',
    degrees: 'MBBS,DEM (Endocrinology)',
    rating: 4.9,
    reviews: 488,
    experience: '35+',
    price: 630,
    oldPrice: null,
    imageUrl: 'https://i.imgur.com/C3nOQz1.jpeg'
  },
  {
    name: 'Dr. Raihana Musawwir',
    degrees: 'MBBS,FCPS (Gynae & Obs)',
    rating: 5,
    reviews: 102,
    experience: '18+',
    price: 1050,
    oldPrice: null,
    imageUrl: 'https://i.imgur.com/kS94v7O.jpeg'
  },
  {
    name: 'Dr. Shafkat Hasan',
    degrees: 'MBBS,DDV (Dermatology)',
    rating: 5,
    reviews: 3416,
    experience: '21+',
    price: 450,
    oldPrice: 500,
    imageUrl: 'https://i.imgur.com/S9sJc9B.jpeg'
  },
  {
    name: 'Dr. Md. Zahidul Islam',
    degrees: 'MBBS,MD (Pediatrics)',
    rating: 4.9,
    reviews: 836,
    experience: '18+',
    price: 400,
    oldPrice: 500,
    imageUrl: 'https://i.imgur.com/oE75M0J.jpeg'
  },
];

const DoctorCard = ({ doctor }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center transition-transform transform hover:scale-105 duration-300">
      <img src={doctor.imageUrl} alt={doctor.name} className="h-24 w-24 rounded-full object-cover mb-4" />
      <h3 className="text-lg font-bold text-gray-800">{doctor.name}</h3>
      <p className="text-sm text-gray-600 mb-2">{doctor.degrees}</p>
      
      <div className="flex items-center text-sm text-gray-500 mb-2">
        <span className="text-yellow-500">★</span>
        <span className="ml-1 font-semibold">{doctor.rating}</span>
        <span className="ml-1">({doctor.reviews})</span>
        <span className="mx-2">•</span>
        <span>{doctor.experience} Years</span>
      </div>

      <div className="flex items-baseline text-lg font-bold text-gray-800 mb-4">
        {doctor.oldPrice && (
          <span className="text-gray-400 line-through mr-2">৳{doctor.oldPrice}</span>
        )}
        <span>৳{doctor.price}</span>
        <span className="text-sm font-normal text-gray-600 ml-1">/Consultation</span>
      </div>

      <button className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition-colors">
        See Doctor Now
      </button>
    </div>
  );
};

const AvailableDoctors = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
            Available doctors <span className="text-blue-600">255</span>
          </h2>
          <a
            href="#"
            className="bg-blue-600 text-white font-semibold py-2 px-6 rounded-full hover:bg-blue-700 transition duration-300"
          >
            View All
          </a>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {doctors.map((doctor, index) => (
            <DoctorCard key={index} doctor={doctor} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AvailableDoctors;