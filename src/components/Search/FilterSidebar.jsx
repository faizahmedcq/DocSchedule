import React from 'react';

const FilterSidebar = () => {
  return (
    <aside className="w-72 bg-white rounded-xl shadow-lg p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Filter</h2>
        <button className="text-blue-500 font-medium text-sm">Reset</button>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Consultation Fee</h3>
        {/* Sliders or inputs would go here */}
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Availability</h3>
        <label className="flex items-center text-sm mb-1 cursor-pointer">
          <input type="checkbox" className="mr-2 accent-blue-500" />
          Online Now
        </label>
        <label className="flex items-center text-sm mb-1 cursor-pointer">
          <input type="checkbox" className="mr-2 accent-blue-500" />
          Available in next 2 hours
        </label>
        <label className="flex items-center text-sm mb-1 cursor-pointer">
          <input type="checkbox" className="mr-2 accent-blue-500" />
          Available today
        </label>
        <label className="flex items-center text-sm mb-1 cursor-pointer">
          <input type="checkbox" className="mr-2 accent-blue-500" />
          Free doctors only
        </label>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Rating</h3>
        {/* Star rating component would go here */}
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Sort by</h3>
        <div className="flex flex-col space-y-1">
          <label className="flex items-center text-sm cursor-pointer">
            <input type="radio" name="sort" className="mr-2 accent-blue-500" /> Relevance
          </label>
          <label className="flex items-center text-sm cursor-pointer">
            <input type="radio" name="sort" className="mr-2 accent-blue-500" /> Popularity
          </label>
          {/* More radio buttons */}
        </div>
      </div>
    </aside>
  );
};

export default FilterSidebar;