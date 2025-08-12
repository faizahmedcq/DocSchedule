// src/components/ConsultSpecialist.jsx

import React from 'react';

const specialists = [
  { title: 'Child Disease Specialist', price: '৳1499', image: 'https://i.imgur.com/83p1XbE.jpeg' },
  { title: 'Female Gynecologist', price: '৳1399', image: 'https://i.imgur.com/uC5U5oP.jpeg' },
  { title: 'Skin Disease Specialist', price: '৳1349', image: 'https://i.imgur.com/kS94v7O.jpeg' },
  { title: 'Sex Disease Specialist', price: '৳1549', image: 'https://i.imgur.com/S9sJc9B.jpeg' },
  { title: 'Psychiatrist', price: '৳1599', image: 'https://i.imgur.com/oE75M0J.jpeg' },
  { title: 'Nutritionist', price: '৳1299', image: 'https://i.imgur.com/Qj0476I.jpeg' },
  { title: 'Mental Health Counselor', price: '৳1899', image: 'https://i.imgur.com/bQ9x9hW.jpeg' },
];

const ConsultSpecialist = () => {
  return (
    <section className="mb-12">
      <div className="flex items-center mb-6">
        <div className="w-1/4">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Consult a Specialist</h2>
          <p className="text-sm text-gray-600">Get an expert with 20 years of experience in their respective fields.</p>
        </div>
        <div className="flex-grow flex overflow-x-auto space-x-4 scrollbar-hide">
          {specialists.map((item, index) => (
            <div key={index} className="flex-none w-48 bg-white rounded-lg shadow-md p-4 text-center">
              <img src={item.image} alt={item.title} className="h-24 w-auto mx-auto object-cover mb-2" />
              <h4 className="text-md font-semibold text-gray-800">{item.title}</h4>
              <p className="text-sm text-gray-500 mt-1">{item.price}</p>
              <a href="#" className="text-blue-600 font-semibold text-sm mt-2 block">Book Now</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ConsultSpecialist;