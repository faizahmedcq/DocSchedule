import React, { useState } from "react";
import { Link } from 'react-router-dom';


const doctors = [
  {
    name: "Dr. Shafiul Quadry",
    degrees: "MBBS, BCS (Health), MRCP (Internal Medicine) (UK), MD (Pulmonology)",
    specialties: ["Medicine Specialist", "Pulmonologist"],
    rating: 4.5,
    reviews: 952,
    experience: "15+ Years",
    price: 700,
    imageUrl: "https://i.imgur.com/L13uH4w.jpeg"
  },
  {
    name: "Asst. Prof. Dr. Masrun Mostafa Ch...",
    degrees: "MBBS, DDV (Dermatology)",
    specialties: ["Dermatologist"],
    rating: 4.9,
    reviews: 1636,
    experience: "11+ Years",
    price: 399,
    oldPrice: 500,
    imageUrl: "https://i.imgur.com/vHqB5eE.jpeg"
  },
  {
    name: "Dr. Maria Seraj",
    degrees: "MBBS, BCS (Health) (Clinician), DDV (Dermatology), MCPS (Dermatology)",
    specialties: ["Dermatologist"],
    rating: 5.0,
    reviews: 779,
    experience: "10+ Years",
    price: 500,
    imageUrl: "https://i.imgur.com/C3nOQz1.jpeg"
  },
  {
    name: "Dr. Abdul Karim",
    degrees: "MBBS, MD (Cardiology)",
    specialties: ["Cardiologist"],
    rating: 5.0,
    reviews: 345,
    experience: "21+ Years",
    price: 800,
    imageUrl: "https://i.imgur.com/oE75M0J.jpeg"
  }
];

const DoctorCard = ({ doctor }) => (
  <Link to='/doctor-profile-view' className="border rounded-xl p-4 flex flex-col justify-between shadow-sm hover:shadow-lg transition-all">
    <div className="flex items-center space-x-3">
      <img
        src={doctor.imageUrl}
        alt={doctor.name}
        className="w-16 h-16 rounded-full object-cover"
      />
      <div>
        <h4 className="font-semibold text-gray-800 text-sm">{doctor.name}</h4>
        <p className="text-xs text-gray-500">{doctor.degrees}</p>
      </div>
    </div>

    <div className="mt-2 flex flex-wrap gap-1">
      {doctor.specialties.map((spec, idx) => (
        <span
          key={idx}
          className="bg-blue-100 text-blue-600 text-xs px-2 py-0.5 rounded-md"
        >
          {spec}
        </span>
      ))}
    </div>

    <div className="mt-2 flex items-center text-sm text-gray-600">
      <span className="text-yellow-500">★</span>
      <span className="ml-1 font-medium">{doctor.rating}</span>
      <span className="ml-1 text-gray-400">({doctor.reviews})</span>
    </div>

    <p className="mt-1 text-xs text-gray-500">{doctor.experience} Experience</p>

    <div className="mt-2 flex items-center space-x-2">
      {doctor.oldPrice && (
        <span className="text-gray-400 line-through">৳{doctor.oldPrice}</span>
      )}
      <span className="text-lg font-semibold text-blue-600">৳{doctor.price}</span>
    </div>

    <button className="mt-3 w-full border border-blue-600 text-blue-600 py-1 rounded-lg text-sm font-medium hover:bg-blue-50">
      See Doctor
    </button>
  </Link>
);

const PopularSpecialists = () => {
  const [page, setPage] = useState(0);
  const cardsPerPage = 3;
  const totalPages = Math.ceil(doctors.length / cardsPerPage);

  const handlePrev = () => setPage((prev) => Math.max(prev - 1, 0));
  const handleNext = () => setPage((prev) => Math.min(prev + 1, totalPages - 1));

  const visibleDoctors = doctors.slice(
    page * cardsPerPage,
    page * cardsPerPage + cardsPerPage
  );

  // Fill with blank divs so we always have 3 slots
  const slots = [...visibleDoctors];
  while (slots.length < cardsPerPage) {
    slots.push(null);
  }

  return (
    <section className="mb-12 relative">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Popular Specialists</h2>
        <a href="#" className="text-blue-600 font-medium hover:underline">
          View All →
        </a>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {slots.map((doctor, index) =>
          doctor ? <DoctorCard key={index} doctor={doctor} /> : <div key={index}></div>
        )}
      </div>

      {/* Side arrows */}
      <button
        onClick={handlePrev}
        disabled={page === 0}
        className="absolute top-1/2 -left-4 transform -translate-y-1/2 bg-white p-2 rounded-full border shadow hover:bg-gray-100 disabled:opacity-50"
      >
        ←
      </button>
      <button
        onClick={handleNext}
        disabled={page === totalPages - 1}
        className="absolute top-1/2 -right-4 transform -translate-y-1/2 bg-white p-2 rounded-full border shadow hover:bg-gray-100 disabled:opacity-50"
      >
        →
      </button>
    </section>
  );
};

export default PopularSpecialists;
