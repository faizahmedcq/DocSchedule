import React from 'react';

const DoctorCard = ({ doctor }) => {
  const { name, degree, specialties, location, rating, ratingCount, experience, fee, originalFee, consultationType, isOnline, image } = doctor;

  return (
    <div className="flex bg-white rounded-xl shadow-lg p-4 justify-between items-center">
        
      <div className="flex items-start flex-1">
        <img
          src={image}
          alt={name}
          className="w-24 h-24 rounded-full mr-4 object-cover border-2 border-gray-200"
        />
        <div className="flex-1">
          <h3 className="text-xl font-bold text-gray-800">{name}</h3>
          <p className="text-sm text-gray-500 mb-1">{degree}</p>
          <div className="my-2">
            {specialties.map(spec => (
              <span
                key={spec}
                className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded-full mr-2"
              >
                {spec}
              </span>
            ))}
          </div>
          <p className="text-sm text-gray-600 mt-2">
            Working in <span className="font-semibold">{location}</span>
          </p>
        </div>
      </div>
      
      <div className="flex flex-col items-end">
        {isOnline ? (
          <button className="text-white font-bold py-2 px-4 rounded-lg bg-green-500 hover:bg-green-600">
            Online
          </button>
        ) : (
          <button className="text-white font-bold py-2 px-4 rounded-lg bg-blue-500 hover:bg-blue-600">
            Appointment
          </button>
        )}

        <div className="flex items-center my-2">
          <div className="flex items-center text-sm font-medium">
            <span className="text-yellow-500 mr-1">★ {rating}</span>
            <span className="text-gray-500 text-sm">({ratingCount})</span>
          </div>
          <span className="ml-2 text-sm text-gray-600 font-medium">
            {experience}+ Years Experience
          </span>
        </div>

        <div className="my-2 text-right">
          <div className="flex items-baseline justify-end">
            {originalFee && (
              <p className="text-sm text-gray-400 line-through mr-2">
                ৳{originalFee}
              </p>
            )}
            <p className="text-2xl font-bold text-gray-800">
              ৳{fee} <span>(Inc. VAT)</span>
            </p>
          </div>
          <small className="text-gray-500 text-xs">Per Consultation</small>
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;