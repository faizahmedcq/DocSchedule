// src/components/CommonHealthConcerns.jsx

import React from 'react';

const concerns = [
  { title: 'Sexual problems', image: 'https://i.imgur.com/E8w9o2m.jpeg' },
  { title: 'Period problems, Gynae problems', image: 'https://i.imgur.com/m4P4Dq1.jpeg' },
  { title: 'Acne, Cold/Flu, Allergy', image: 'https://i.imgur.com/s6w9tB7.jpeg' },
  { title: 'Child diseases', image: 'https://i.imgur.com/gK3768q.jpeg' },
  { title: 'Pregnancy issues', image: 'https://i.imgur.com/uC5U5oP.jpeg' },
  { title: 'Weight loss, gain, Diet chart', image: 'https://i.imgur.com/2s4L5t3.jpeg' },
  { title: 'Acne, Cold & Skin problems', image: 'https://i.imgur.com/4J7C9m7.jpeg' },
  { title: 'Hair fall and Dandruff', image: 'https://i.imgur.com/uW6W8S1.jpeg' },
  { title: 'Urine infection or problems', image: 'https://i.imgur.com/k6lP0aE.jpeg' },
  { title: 'Acidity, Indigestion, Stomach, Constipation', image: 'https://i.imgur.com/fL3Jk5U.jpeg' },
];

const CommonHealthConcerns = () => {
  return (
    <section className="mb-12">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Common Health Concerns</h2>
        <a href="#" className="text-blue-600 font-medium hover:underline">View All &rarr;</a>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {concerns.map((concern, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-4 text-center">
            <img src={concern.image} alt={concern.title} className="h-32 w-full object-cover rounded-md mb-2" />
            <h4 className="text-md font-semibold text-gray-800">{concern.title}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CommonHealthConcerns;