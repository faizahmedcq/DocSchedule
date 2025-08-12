import React from 'react';

// A reusable card component for each medical specialty
const SpecialtyCard = ({ title, description, icon }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-start transition-transform transform hover:scale-105 duration-300 border border-gray-200">
      <div className="text-blue-600 mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
};

const SpecialtiesGrid = () => {
  const specialties = [
    {
      title: "General Physician",
      description: "Cold, flu, fever, vomiting, infections, headaches or any other g...",
      icon: (
        <svg className="h-10 w-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.618a5.5 5.5 0 00-7.778 0L12 10.222l-2.83-2.83a5.5 5.5 0 00-7.778 7.778l2.83 2.83L7 22l4-4 4 4 4-4 1.293 1.293a5.5 5.5 0 007.778-7.778z" />
        </svg>
      ),
    },
    {
      title: "Pediatrics",
      description: "Any children's health related issues including physical, behavio...",
      icon: (
        <svg className="h-10 w-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.5v15m7.5-7.5h-15" />
        </svg>
      ),
    },
    {
      title: "Gynae & Obs",
      description: "Any women's health related issues including pregnancy, menstruat...",
      icon: (
        <svg className="h-10 w-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      title: "Dermatology",
      description: "Treatment of diseases related to skin, hair and nails and some c...",
      icon: (
        <svg className="h-10 w-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: "Internal Medicine",
      description: "Prevention, diagnosis, and treatment of adults across the spectr...",
      icon: (
        <svg className="h-10 w-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.618a5.5 5.5 0 00-7.778 0L12 10.222l-2.83-2.83a5.5 5.5 0 00-7.778 7.778l2.83 2.83L7 22l4-4 4 4 4-4 1.293 1.293a5.5 5.5 0 007.778-7.778z" />
        </svg>
      ),
    },
    {
      title: "Endocrinology",
      description: "Treatment of diseases related to problems with hormone.",
      icon: (
        <svg className="h-10 w-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800">Available Specialties</h2>
          <p className="text-xl text-gray-600 mt-2">Explore Doctors from 36+ clinical areas</p>
        </div>

        {/* Specialties Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {specialties.map((specialty, index) => (
            <SpecialtyCard
              key={index}
              title={specialty.title}
              description={specialty.description}
              icon={specialty.icon}
            />
          ))}
        </div>

        {/* More Section */}
        <div className="text-center mt-12">
          <button className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-full hover:bg-blue-700 transition duration-300">
            More
          </button>
          <p className="text-gray-600 mt-4">Explore many more...</p>
        </div>
      </div>
    </div>
  );
};

export default SpecialtiesGrid;