import React from 'react';
import FilterSidebar from './FilterSidebar.jsx';
import DoctorList from './DoctorList.jsx';
import SearchOption from '../SearchOption.jsx'; // Import the SearchOption component

// The search and doctor list section
const AvailableDoctors = () => {
  return (

      <div className="container mx-auto py-12 px-4">
    <div className="flex bg-gray-100 p-4">
      <FilterSidebar />
      <div className="flex-1 ml-4">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center">
            <div className="text-gray-600 mr-4">1066 Doctors found</div>
            <SearchOption />
          </div>
          <button className="ml-4 text-blue-500 font-medium">Reset</button>
        </div>
        <DoctorList />
      </div>
    </div>
    </div>
    
  );
};

export default AvailableDoctors;