import React, { useState } from 'react';
import {Link} from 'react-router-dom';
const doctors = [
  {
    name: 'Dr. Jasmin Ara Zaman',
    qualifications: 'MBBS,Diploma (Gynge & Obs), FCPS (Gynae & Obs)',
    rating: 5,
    reviews: 985,
    experience: '19+ Years',
    price: 400,
    oldPrice: null,
    image: 'https://i.imgur.com/yourImage1.jpeg', // Replace with actual image url
  },
  {
    name: 'Dr. Raihana Musawwir',
    qualifications: 'MBBS, FCPS (Gynae & Obs)',
    rating: 5,
    reviews: 102,
    experience: '18+ Years',
    price: 1050,
    oldPrice: null,
    image: 'https://i.imgur.com/yourImage2.jpeg',
  },
  {
    name: 'Dr. Mohammad Aminul Islam',
    qualifications: 'MBBS, MD (Endocrinology)',
    rating: 5,
    reviews: 17,
    experience: '10+ Years',
    price: 699,
    oldPrice: null,
    image: 'https://i.imgur.com/yourImage3.jpeg',
    featured: true, // to highlight card with filled button and shadow
  },
  {
    name: 'Dr. Mohammad Aminul Islam',
    qualifications: 'MBBS, MD (Endocrinology)',
    rating: 5,
    reviews: 17,
    experience: '10+ Years',
    price: 699,
    oldPrice: null,
    image: 'https://i.imgur.com/yourImage3.jpeg',
    featured: true, // to highlight card with filled button and shadow
  },
  {
    name: 'Dr. Mohammad Aminul Islam',
    qualifications: 'MBBS, MD (Endocrinology)',
    rating: 5,
    reviews: 17,
    experience: '10+ Years',
    price: 699,
    oldPrice: null,
    image: 'https://i.imgur.com/yourImage3.jpeg',
    featured: true, // to highlight card with filled button and shadow
  },
  {
    name: 'Dr. Mohammad Aminul Islam',
    qualifications: 'MBBS, MD (Endocrinology)',
    rating: 5,
    reviews: 17,
    experience: '10+ Years',
    price: 699,
    oldPrice: null,
    image: 'https://i.imgur.com/yourImage3.jpeg',
    featured: true, // to highlight card with filled button and shadow
  },
  {
    name: 'Dr. Mohammad Aminul Islam',
    qualifications: 'MBBS, MD (Endocrinology)',
    rating: 5,
    reviews: 17,
    experience: '10+ Years',
    price: 699,
    oldPrice: null,
    image: 'https://i.imgur.com/yourImage3.jpeg',
    featured: true, // to highlight card with filled button and shadow
  },
  // ... add other doctors similarly
];

const INITIAL_SHOW_COUNT = 5;

export default function AvailableDoctors() {
  const [showAll, setShowAll] = useState(false);

  const doctorsToShow = showAll ? doctors : doctors.slice(0, INITIAL_SHOW_COUNT);

  return (
    <section className="px-6 py-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-xl font-bold text-gray-900 inline">
            Available doctors
          </h2>
          <span className="text-blue-600 ml-2 text-sm cursor-pointer hover:underline">
            {doctors.length} Doctors online now
          </span>
        </div>
        <button
          onClick={() => setShowAll(!showAll)}
          className="text-blue-600 font-medium flex items-center hover:underline"
        >
          {showAll ? 'View Less' : 'View All'} &rarr;
        </button>
      </div>

      {/* Cards container */}
      <div className="flex gap-6 overflow-x-auto scrollbar-hide pb-4">
        {doctorsToShow.map((doc, idx) => (
          <Link to="/doctor-profile-view"
            key={idx}
            className={`flex-none w-64 bg-white rounded-xl shadow-md p-4 ${
              doc.featured ? 'shadow-lg scale-105' : ''
            }`}
          >
            {/* Image */}
            <div className="bg-gray-100 rounded-lg flex justify-center items-center h-40 mb-4">
              <img
                src={doc.image}
                alt={doc.name}
                className="h-full object-contain rounded-lg"
              />
            </div>

            {/* Info */}
            <h3 className="font-semibold text-gray-900 mb-1">{doc.name}</h3>
            <p className="text-xs text-gray-600 mb-2">{doc.qualifications}</p>

            <div className="flex items-center text-yellow-400 text-sm mb-1">
              <svg
                className="w-4 h-4 fill-current mr-1"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10 15l-5.878 3.09 1.123-6.545L.49 6.91l6.564-.955L10 0l2.946 5.955 6.564.955-4.755 4.635 1.123 6.545z" />
              </svg>
              <span>{doc.rating}</span>
              <span className="text-gray-400 ml-1">({doc.reviews})</span>
              <span className="mx-2 text-gray-400">|</span>
              <span className="text-gray-500 text-xs">{doc.experience}</span>
            </div>

            {/* Price */}
            <div className="text-lg font-bold text-gray-900 mb-3">
              ৳{doc.price}{' '}
              <span className="text-xs font-normal text-gray-500">(Incl. VAT)</span>
              {doc.oldPrice && (
                <span className="line-through text-gray-400 text-sm ml-2">
                  ৳{doc.oldPrice}
                </span>
              )}
              <span className="font-normal text-gray-700 ml-1">/Consultation</span>
            </div>

            {/* Button */}
            <button
              className={`w-full py-2 rounded-lg font-semibold ${
                doc.featured
                  ? 'bg-blue-600 text-white hover:bg-blue-700'
                  : 'border border-blue-600 text-blue-600 hover:bg-blue-50'
              } transition`}
            >
              See Doctor Now
            </button>
          </Link>
        ))}
      </div>
    </section>
  );
}
