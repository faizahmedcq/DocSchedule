// src/components/ExperiencedMBBSDoctors.jsx

import React from 'react';

const specialties = [
  { title: 'Experienced MBBS Doctor', price: '৳149', description: 'Get consultation at just ৳149.', image: 'https://i.imgur.com/gK3768q.jpeg', hasButton: true },
  { title: 'Experienced Child Doctor', price: '৳129', description: 'See Doctor', image: 'https://i.imgur.com/83p1XbE.jpeg' },
  { title: 'Experienced Female Gynae Doctor', price: '৳129', description: 'See Doctor', image: 'https://i.imgur.com/uC5U5oP.jpeg', cardClass: 'bg-pink-100' },
  { title: 'Treatment For Dengue', price: '৳129', description: 'See Doctor', image: 'https://i.imgur.com/tYt3L2y.jpeg' },
];

const ExperiencedMBBSDoctors = () => {
  return (
    <section className="mb-12">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Consult on an Experienced MBBS Doctor</h2>
      </div>
      <div className="flex overflow-x-auto space-x-4 scrollbar-hide">
        {specialties.map((item, index) => (
          <div key={index} className={`flex-none w-80 bg-white rounded-lg shadow-md p-6 ${item.cardClass}`}>
            <h4 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h4>
            <p className="text-sm text-gray-600 mb-4">{item.description}</p>
            <div className="relative h-40">
              <img src={item.image} alt={item.title} className="absolute bottom-0 right-0 h-full w-auto object-cover rounded-b-lg" />
            </div>
            {item.hasButton && (
              <button className="bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg hover:bg-blue-700 transition-colors mt-4">
                Buy Now
              </button>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperiencedMBBSDoctors;