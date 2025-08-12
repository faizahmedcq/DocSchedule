// src/components/PopularSpecialists.jsx

import React from 'react';

const doctors = [
  { name: 'Dr. Mithun Sarkar', specialty: 'Neurology Specialist', rating: '4.9', price: '৳1000', imageUrl: 'https://i.imgur.com/L13uH4w.jpeg' },
  { name: 'Dr. Jannatul Jahan', specialty: 'Child Disease Specialist', rating: '4.7', price: '৳900', imageUrl: 'https://i.imgur.com/vHqB5eE.jpeg' },
  { name: 'Dr. Anuva Prodhan', specialty: 'Gynae & Obs Specialist', rating: '4.8', price: '৳1100', imageUrl: 'https://i.imgur.com/C3nOQz1.jpeg' },
  { name: 'Dr. Jannatul Jafrin', specialty: 'Skin Disease Specialist', rating: '5.0', price: '৳800', imageUrl: 'https://i.imgur.com/kS94v7O.jpeg' },
  { name: 'Dr. Shafali Qualey', specialty: 'Sex Disease Specialist', rating: '4.6', price: '৳700', imageUrl: 'https://i.imgur.com/S9sJc9B.jpeg' },
  { name: 'Dr. MD. ABDULKHALAK', specialty: 'Psychiatrist', rating: '4.9', price: '৳1200', imageUrl: 'https://i.imgur.com/oE75M0J.jpeg' },
  { name: 'Dr. Mithun Sarkar', specialty: 'Neurology Specialist', rating: '4.9', price: '৳1000', imageUrl: 'https://i.imgur.com/L13uH4w.jpeg' },
];

const DoctorCard = ({ doctor }) => (
  <div className="flex-none w-64 bg-white rounded-lg shadow-md p-4 m-2">
    <div className="flex items-center space-x-4 mb-4">
      <img src={doctor.imageUrl} alt={doctor.name} className="w-16 h-16 rounded-full object-cover" />
      <div>
        <h4 className="text-md font-semibold text-gray-800">{doctor.name}</h4>
        <p className="text-sm text-gray-500">{doctor.specialty}</p>
      </div>
    </div>
    <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
      <div className="flex items-center">
        <span className="text-yellow-500">★</span>
        <span className="ml-1">{doctor.rating}</span>
      </div>
      <span>{doctor.price}</span>
    </div>
    <button className="w-full bg-blue-100 text-blue-600 font-semibold py-2 rounded-lg hover:bg-blue-200 transition-colors">
      See Doctor
    </button>
  </div>
);

const PopularSpecialists = () => {
  return (
    <section className="mb-12">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Popular Specialists</h2>
        <a href="#" className="text-blue-600 font-medium hover:underline">View All &rarr;</a>
      </div>
      <div className="flex overflow-x-auto space-x-4 scrollbar-hide">
        {doctors.map((doctor, index) => (
          <DoctorCard key={index} doctor={doctor} />
        ))}
      </div>
    </section>
  );
};

export default PopularSpecialists;