import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const UserSignupPage = () => {
  // State for all form inputs
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    mobileNumber: '',
    email: '',
    password: '',
    acceptTerms: false,
  });
  const [showPassword, setShowPassword] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send this data to your backend
    console.log('User signup data submitted:', formData);
    if (!formData.acceptTerms) {
      alert('You must accept the terms and conditions.');
      return;
    }
    // You would add your API call here
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-xl p-8 md:p-12">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Create Your Account</h1>

        {/* Signup Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* First Name */}
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                First Name *
              </label>
              <input
                id="firstName"
                name="firstName"
                type="text"
                value={formData.firstName}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-3 rounded-lg border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 transition duration-300"
                required
              />
            </div>

            {/* Last Name */}
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                Last Name *
              </label>
              <input
                id="lastName"
                name="lastName"
                type="text"
                value={formData.lastName}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-3 rounded-lg border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 transition duration-300"
                required
              />
            </div>

            {/* Mobile number */}
            <div className="col-span-1 md:col-span-2">
              <label htmlFor="mobileNumber" className="block text-sm font-medium text-gray-700">
                Mobile number *
              </label>
              <input
                id="mobileNumber"
                name="mobileNumber"
                type="tel"
                value={formData.mobileNumber}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-3 rounded-lg border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 transition duration-300"
                required
              />
            </div>

            {/* Email */}
            <div className="col-span-1 md:col-span-2">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email *
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-3 rounded-lg border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 transition duration-300"
                required
              />
            </div>
          </div>

          {/* Password Input */}
          <div className="relative">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password *
            </label>
            <input
              id="password"
              name="password"
              type={showPassword ? 'text' : 'password'}
              value={formData.password}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-3 rounded-lg border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 pr-12 transition duration-300"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-0 top-6 pr-3 flex items-center text-gray-400 hover:text-gray-600 focus:outline-none"
            >
              {showPassword ? (
                // Eye-slash icon (hide password)
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-2.658m11.192 4.416a4.5 4.5 0 11-4.5-4.5m-2.581 6.829a8.965 8.965 0 01-1.282-1.786m0 0a1 1 0 111.414 1.414l-1.414 1.414zm-5.028-2.581a8.965 8.965 0 01-1.282-1.786m0 0a1 1 0 111.414 1.414l-1.414 1.414zm-5.028-2.581a8.965 8.965 0 01-1.282-1.786m0 0a1 1 0 111.414 1.414l-1.414 1.414z" />
                </svg>
              ) : (
                // Eye icon (show password)
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              )}
            </button>
          </div>
          
          {/* Accepting Terms & conditions */}
          <div className="flex items-center space-x-2">
            <input
              id="acceptTerms"
              name="acceptTerms"
              type="checkbox"
              checked={formData.acceptTerms}
              onChange={handleChange}
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              required
            />
            <label htmlFor="acceptTerms" className="text-sm text-gray-900">
              I accept and agree <a href="#" className="text-blue-600 hover:underline">Terms of services</a> and <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a>.
            </label>
          </div>

          {/* Sign Up button */}
          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-300"
            >
              CREATE ACCOUNT
            </button>
          </div>
        </form>

        {/* Link to Login page */}
        <div className="mt-8 text-center text-sm">
          <p className="text-gray-600">
            Already have an account?{' '}
            <Link to="/login" className="font-medium text-blue-600 hover:text-blue-500">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserSignupPage;
