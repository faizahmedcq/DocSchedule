import React from 'react'

function SearchOption() {
  return (
    <div className="mb-8">
          <div className="flex items-center border border-gray-300 rounded-full px-4 py-2 bg-white max-w-2xl mx-auto">
            <input
              type="text"
              placeholder="Search by doctor name/code or department"
              className="flex-grow outline-none text-gray-700"
            />
            <button className="text-gray-500 hover:text-blue-600">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </button>
          </div>
    </div>
  )
}

export default SearchOption