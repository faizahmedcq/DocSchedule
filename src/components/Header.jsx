import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from './ui/dropdown-menu';

// This is the complete Header component
const Header = () => {
  // State to manage the visibility of the login dropdown
  const [isOpen, setIsOpen] = useState(false);
  // Ref to the dropdown container to detect clicks outside
  const dropdownRef = useRef(null);

  // A hook to handle clicks outside of the dropdown to close it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    // Add the event listener to the document
    document.addEventListener('mousedown', handleClickOutside);
    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownRef]); // Rerun the effect if the dropdownRef changes

  return (
    <header className="bg-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          {/* Using a placeholder image URL for the logo */}
          <img
            src="https://placehold.co/40x40/5A67D8/ffffff?text=DT"
            alt="DocTime Logo"
            className="h-8 rounded-full"
          />
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

        {/* Log In Button and Dropdown */}
        <div className="relative inline-block text-left" ref={dropdownRef}>
          <div>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
            >
              Log In &gt;
            </button>
          </div>

          {/* Dropdown menu, conditionally rendered */}
          {isOpen && (
            <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="py-1">
                <a
                  href="/login"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={() => setIsOpen(false)} // Close dropdown on link click
                >
                  Log in
                </a>
                <a
                  href="/doctor-login"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={() => setIsOpen(false)} // Close dropdown on link click
                >
                  As a Doctor
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
