import React from 'react';
import { Link } from 'react-router-dom'; // Import Link

const Header = () => {
  return (
    <header className="bg-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center">
        <img src="https://i.imgur.com/your-logo-url.png" alt="DocTime Logo" className="h-8" />
        <span className="ml-2 font-bold text-xl text-blue-600">DocTime</span>
      </Link>

        {/* Navigation Menu */}
        <nav className="hidden md:flex space-x-6">
        <Link to="/consultation" className="text-gray-700 hover:text-blue-600 font-medium">Consultation</Link>
          <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Order Medicine</a>
          <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Home Diagnostic</a>
          <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Health Plan</a>
          <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Blogs</a>
          <div className="relative group">
            <button className="text-gray-700 hover:text-blue-600 font-medium flex items-center">
              More
              <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
            {/* Dropdown menu can be added here */}
          </div>
        </nav>

        {/* Log In Button */}
        <a href="#" className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition duration-300">
          Log In &gt;
        </a>
      </div>
    </header>
  );
};

export default Header;