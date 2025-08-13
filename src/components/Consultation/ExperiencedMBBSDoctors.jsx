import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const specialties = [
  { title: 'Experienced MBBS Doctor', price: '৳149', description: 'Get consultation at just ৳149.', image: 'https://i.imgur.com/gK3768q.jpeg', hasButton: true },
  { title: 'Experienced Child Doctor', price: '৳129', description: 'See Doctor', image: 'https://i.imgur.com/83p1XbE.jpeg' },
  { title: 'Experienced Female Gynae Doctor', price: '৳129', description: 'See Doctor', image: 'https://i.imgur.com/uC5U5oP.jpeg', cardClass: 'bg-pink-100' },
  { title: 'Treatment For Dengue', price: '৳129', description: 'See Doctor', image: 'https://i.imgur.com/tYt3L2y.jpeg' },
  { title: 'Skin & Dermatology Expert', price: '৳159', description: 'See Doctor', image: 'https://i.imgur.com/hEo2v4z.jpeg' },
  { title: 'ENT Specialist', price: '৳139', description: 'See Doctor', image: 'https://i.imgur.com/k0T1n6q.jpeg' },
  { title: 'Cardiology Specialist', price: '৳179', description: 'See Doctor', image: 'https://i.imgur.com/9z8xV5K.jpeg' },
  { title: 'Orthopedic Surgeon', price: '৳169', description: 'See Doctor', image: 'https://i.imgur.com/VRzZLjX.jpeg' },
];

const ExperiencedMBBSDoctors = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -300 : 300,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="mb-12 relative">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        Consult an Experienced MBBS Doctor
      </h2>

      {/* Left Arrow */}
      <button
        onClick={() => scroll('left')}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full p-2 z-10 hover:bg-gray-100"
      >
        <ChevronLeft size={24} />
      </button>

      {/* Scrollable Cards */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto gap-4 scrollbar-hide scroll-smooth px-8"
      >
        {specialties.map((item, index) => (
          <div
            key={index}
className={`flex-none w-72 rounded-xl shadow-md p-4 bg-white hover:shadow-lg hover:scale-105 hover:border-blue-400 hover:bg-blue-50 transform transition duration-300 ease-in-out ${item.cardClass || ''}`}
          >
            <h4 className="text-lg font-bold text-gray-800 mb-1">{item.title}</h4>
            <p className="text-blue-600 font-semibold mb-2">{item.price}</p>
            <p className="text-sm text-gray-600 mb-3">{item.description}</p>
            <div className="h-40 flex justify-center items-end overflow-hidden rounded-lg bg-gray-50">
              <img src={item.image} alt={item.title} className="h-full object-contain" />
            </div>
            {item.hasButton && (
              <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition">
                See Doctor
              </button>
            )}
          </div>
        ))}
      </div>

      {/* Right Arrow */}
      <button
        onClick={() => scroll('right')}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full p-2 z-10 hover:bg-gray-100"
      >
        <ChevronRight size={24} />
      </button>
    </section>
  );
};

export default ExperiencedMBBSDoctors;
