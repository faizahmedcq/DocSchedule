// src/components/ClinicalAreas.jsx

import React from 'react';

const specialties = [
  { title: 'General Physician', description: 'Cold, flu, fever, vomiting, infections, headaches or any other g...', icon: 'https://i.imgur.com/1G6K2uJ.png' },
  { title: 'Pediatrics', description: 'Any children’s health related issues including physical, behavio...', icon: 'https://i.imgur.com/4gS1wJ7.png' },
  { title: 'Gynae & Obs', description: 'Any women’s health related issues including pregnancy, menstruat...', icon: 'https://i.imgur.com/Y3Uu6gQ.png' },
  { title: 'Dermatology', description: 'Treatment of diseases related to skin, hair and nails and some c...', icon: 'https://i.imgur.com/jM8c3aJ.png' },
  { title: 'Internal Medicine', description: 'Prevention, diagnosis, and treatment of adults across the spectr...', icon: 'https://i.imgur.com/5J3oN3v.png' },
  { title: 'Endocrinology', description: 'Treatment of diseases related to problems with hormone.', icon: 'https://i.imgur.com/7H6Tz0d.png' },
  { title: 'Neurology', description: 'Diagnosis, treatment for disease involving the...', icon: 'https://i.imgur.com/R3x3f6L.png' },
  { title: 'Gastroenterology', description: 'Diseases affecting the gastrointestinal tract...', icon: 'https://i.imgur.com/G4lE8jS.png' },
  { title: 'Cardiology', description: 'Diagnosis, treatment of congenital heart defects.', icon: 'https://i.imgur.com/5D6R7gJ.png' },
  { title: 'Urology', description: 'Diagnosis and treatment of diseases of the male...', icon: 'https://i.imgur.com/yA046tL.png' },
  { title: 'Nutrition & Food Science', description: 'Weight management, health, fitness, wellness...', icon: 'https://i.imgur.com/L125i9f.png' },
  { title: 'Dentistry', description: 'Diagnosis, treatment and prevention of defects...', icon: 'https://i.imgur.com/8Q0NqT9.png' },
  { title: 'Psychiatry', description: 'Diagnosis, treatment and prevention of mental...', icon: 'https://i.imgur.com/jM8c3aJ.png' },
  { title: 'Psychology', description: 'Diagnosis, treatment of mental, behavioral, and...', icon: 'https://i.imgur.com/7H6Tz0d.png' },
  { title: 'Orthopedics', description: 'Diseases and conditions related to bones, ligaments...', icon: 'https://i.imgur.com/yA046tL.png' },
];

const ClinicalAreas = () => {
  return (
    <section className="mb-12">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Find Your Doctor From 36+ Clinical Areas</h2>
        <a href="#" className="text-blue-600 font-medium hover:underline">View All &rarr;</a>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {specialties.map((specialty, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-4 text-center">
            <img src={specialty.icon} alt={specialty.title} className="h-12 w-12 mx-auto mb-2" />
            <h4 className="text-md font-semibold text-gray-800">{specialty.title}</h4>
            <p className="text-xs text-gray-500 mt-1">{specialty.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ClinicalAreas;