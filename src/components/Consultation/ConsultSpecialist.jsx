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
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Consult a Specialist</h2>
      <div className="flex overflow-x-auto gap-4 scrollbar-hide">
        {specialists.map((item, index) => (
          <div
            key={index}
            className="flex-none w-72 rounded-xl shadow-md p-4 bg-white hover:shadow-lg transition-shadow"
          >
            <h4 className="text-lg font-bold text-gray-800 mb-1">{item.title}</h4>
            <p className="text-blue-600 font-semibold mb-2">{item.price}</p>
            <div className="h-40 flex justify-center items-end overflow-hidden rounded-lg bg-gray-50">
              <img src={item.image} alt={item.title} className="h-full object-contain" />
            </div>
            <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition">
              Book Now
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ConsultSpecialist;
