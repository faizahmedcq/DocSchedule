import React from 'react';

const DoctorCard = ({ doctor }) => {
  return (
    <div className="flex flex-col md:flex-row bg-white p-6 rounded-lg shadow-md mb-6">
      <div className="flex flex-col items-center md:items-start md:flex-row md:space-x-6 w-full">
        <div className="w-24 h-24 rounded-full overflow-hidden mb-4 md:mb-0">
          {/* Replace with the doctor's actual image path */}
          <img src={doctor.profileImage} alt={`Dr. ${doctor.name}`} className="w-full h-full object-cover" />
        </div>
        <div className="text-center md:text-left flex-grow">
          <h2 className="text-xl font-semibold text-gray-800">Dr. {doctor.name}</h2>
          <p className="text-sm text-gray-600">{doctor.credentials}</p>
          <p className="text-sm text-blue-500 font-medium my-1">{doctor.specialty}</p>
          <div className="flex justify-center md:justify-start items-center space-x-4 mt-2">
            <div className="text-center">
              <span className="block text-xs text-gray-500">Total Experience</span>
              <p className="text-sm font-semibold">{doctor.experience}</p>
            </div>
            <div className="text-center">
              <span className="block text-xs text-gray-500">BMDC Number</span>
              <p className="text-sm font-semibold">{doctor.bmdcNumber}</p>
            </div>
            <div className="text-center">
              <span className="block text-xs text-gray-500">Total Rating</span>
              <div className="flex items-center justify-center">
                <span className="text-yellow-400">★</span>
                <p className="text-sm font-semibold ml-1">{doctor.rating} ({doctor.totalRatings})</p>
              </div>
            </div>
          </div>
          <p className="text-sm text-gray-500 mt-2">Working in {doctor.hospital}</p>
        </div>
      </div>
      <div className="flex flex-col items-center md:items-end md:ml-auto mt-4 md:mt-0">
        <p className="text-lg font-medium text-gray-700">Consultation Fee</p>
        <p className="text-2xl font-bold text-green-600">৳{doctor.consultationFee} <span className="text-sm text-gray-500 font-normal">(inc. VAT)</span></p>
        <button className="mt-4 px-6 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">
          Book Online Appointment
        </button>
      </div>
    </div>
  );
};

export default DoctorCard;