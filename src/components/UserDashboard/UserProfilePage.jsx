import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const UserProfilePage = () => {
  // State for all form inputs
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    gender: 'Male', // Default to Male
    dobYear: '',
    dobMonth: '',
    dobDay: '',
    district: '',
    subDistrict: '',
    emailAddress: '',
    profession: '',
    heightFeet: '',
    heightInch: '',
    weight: '',
    bloodGroup: '',
  });

  // Handle changes for all form inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send this data to your backend
    console.log('User profile data updated:', formData);
    alert('Profile updated successfully!');
  };

  // Dummy data for dropdowns
  const years = Array.from({ length: 100 }, (_, i) => new Date().getFullYear() - i);
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const districts = ['Dhaka', 'Chittagong', 'Khulna'];
  const professions = ['Student', 'Service Holder', 'Business', 'Other'];
  const bloodGroups = ['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'];

  return (
    <div className="flex items-start justify-center min-h-screen bg-gray-100 p-4 font-sans">
      <div className="w-full max-w-6xl bg-white rounded-2xl shadow-xl p-8 md:p-12">
        {/* Header */}
        <div className="flex items-center mb-8">
          <Link to="/" className="text-gray-500 hover:text-gray-700 transition-colors duration-200">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </Link>
          <h1 className="text-3xl font-bold text-gray-800 ml-4">Update Patient</h1>
        </div>

        {/* Profile Form */}
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Photo & Basic Info */}
            <div className="lg:col-span-1 space-y-6">
              {/* Photo Upload */}
              <div className="flex flex-col items-center justify-center space-y-4 p-6 bg-gray-50 rounded-lg border border-gray-200">
                <div className="w-36 h-36 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden border-2 border-gray-300">
                  {/* Placeholder for photo */}
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                  </svg>
                </div>
                <button
                  type="button"
                  className="w-full py-2 px-4 rounded-lg bg-blue-500 text-white font-medium hover:bg-blue-600 transition duration-300 shadow-sm"
                >
                  Upload Photo
                </button>
              </div>

              {/* Full Name */}
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">Full Name *</label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="mt-1 block w-full px-4 py-3 rounded-lg border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 transition duration-300"
                  required
                />
              </div>

              {/* Phone Number */}
              <div>
                <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">Phone Number *</label>
                <input
                  id="phoneNumber"
                  name="phoneNumber"
                  type="tel"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className="mt-1 block w-full px-4 py-3 rounded-lg border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 transition duration-300"
                  required
                />
              </div>

              {/* Gender */}
              <div>
                <label className="block text-sm font-medium text-gray-700">Gender *</label>
                <div className="mt-2 flex items-center space-x-6">
                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="gender"
                      value="Male"
                      checked={formData.gender === 'Male'}
                      onChange={handleChange}
                      className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                    />
                    <span className="text-gray-700">Male</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="gender"
                      value="Female"
                      checked={formData.gender === 'Female'}
                      onChange={handleChange}
                      className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                    />
                    <span className="text-gray-700">Female</span>
                  </label>
                </div>
              </div>

              {/* Date of Birth */}
              <div>
                <label className="block text-sm font-medium text-gray-700">Date of Birth *</label>
                <div className="mt-1 flex space-x-2">
                  <select
                    id="dobYear"
                    name="dobYear"
                    value={formData.dobYear}
                    onChange={handleChange}
                    className="block w-1/3 px-4 py-3 rounded-lg border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 transition duration-300"
                  >
                    <option value="">Year</option>
                    {years.map(year => <option key={year} value={year}>{year}</option>)}
                  </select>
                  <select
                    id="dobMonth"
                    name="dobMonth"
                    value={formData.dobMonth}
                    onChange={handleChange}
                    className="block w-1/3 px-4 py-3 rounded-lg border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 transition duration-300"
                  >
                    <option value="">Month</option>
                    {months.map(month => <option key={month} value={month}>{month}</option>)}
                  </select>
                  <select
                    id="dobDay"
                    name="dobDay"
                    value={formData.dobDay}
                    onChange={handleChange}
                    className="block w-1/3 px-4 py-3 rounded-lg border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 transition duration-300"
                  >
                    <option value="">Day</option>
                    {days.map(day => <option key={day} value={day}>{day}</option>)}
                  </select>
                </div>
              </div>
            </div>

            {/* Right Column - Additional Info */}
            <div className="lg:col-span-2 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* District & Sub-District */}
                <div>
                  <label htmlFor="district" className="block text-sm font-medium text-gray-700">District *</label>
                  <select
                    id="district"
                    name="district"
                    value={formData.district}
                    onChange={handleChange}
                    className="mt-1 block w-full px-4 py-3 rounded-lg border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 transition duration-300"
                  >
                    <option value="">Select District</option>
                    {districts.map(d => <option key={d} value={d}>{d}</option>)}
                  </select>
                </div>
                <div>
                  <label htmlFor="subDistrict" className="block text-sm font-medium text-gray-700">Sub District *</label>
                  <select
                    id="subDistrict"
                    name="subDistrict"
                    value={formData.subDistrict}
                    onChange={handleChange}
                    className="mt-1 block w-full px-4 py-3 rounded-lg border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 transition duration-300"
                  >
                    <option value="">Select Sub-District</option>
                    {/* Sub-districts would be populated based on the selected district */}
                  </select>
                </div>
              </div>

              {/* Email Address */}
              <div>
                <label htmlFor="emailAddress" className="block text-sm font-medium text-gray-700">Email Address</label>
                <input
                  id="emailAddress"
                  name="emailAddress"
                  type="email"
                  value={formData.emailAddress}
                  onChange={handleChange}
                  className="mt-1 block w-full px-4 py-3 rounded-lg border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 transition duration-300"
                />
              </div>

              {/* Profession */}
              <div>
                <label htmlFor="profession" className="block text-sm font-medium text-gray-700">Profession *</label>
                <select
                  id="profession"
                  name="profession"
                  value={formData.profession}
                  onChange={handleChange}
                  className="mt-1 block w-full px-4 py-3 rounded-lg border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 transition duration-300"
                >
                  <option value="">Select Profession</option>
                  {professions.map(p => <option key={p} value={p}>{p}</option>)}
                </select>
              </div>

              <div className="grid grid-cols-2 gap-6">
                {/* Height */}
                <div>
                  <label htmlFor="height" className="block text-sm font-medium text-gray-700">Height</label>
                  <div className="mt-1 flex space-x-2">
                    <input
                      id="heightFeet"
                      name="heightFeet"
                      type="number"
                      placeholder="Feet"
                      value={formData.heightFeet}
                      onChange={handleChange}
                      className="block w-1/2 px-4 py-3 rounded-lg border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 transition duration-300"
                    />
                    <input
                      id="heightInch"
                      name="heightInch"
                      type="number"
                      placeholder="Inch"
                      value={formData.heightInch}
                      onChange={handleChange}
                      className="block w-1/2 px-4 py-3 rounded-lg border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 transition duration-300"
                    />
                  </div>
                </div>

                {/* Weight */}
                <div>
                  <label htmlFor="weight" className="block text-sm font-medium text-gray-700">Weight</label>
                  <input
                    id="weight"
                    name="weight"
                    type="number"
                    placeholder="Weight (kg)"
                    value={formData.weight}
                    onChange={handleChange}
                    className="mt-1 block w-full px-4 py-3 rounded-lg border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 transition duration-300"
                  />
                </div>
              </div>

              {/* Blood Group */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Blood Group</label>
                <div className="flex flex-wrap gap-2">
                  {bloodGroups.map((group) => (
                    <button
                      key={group}
                      type="button"
                      onClick={() => setFormData(prevData => ({ ...prevData, bloodGroup: group }))}
                      className={`px-4 py-2 rounded-lg font-medium transition duration-300 ${
                        formData.bloodGroup === group
                          ? 'bg-blue-600 text-white shadow-md'
                          : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                      }`}
                    >
                      {group}
                    </button>
                  ))}
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex justify-end pt-4">
                <button
                  type="submit"
                  className="w-full md:w-auto px-6 py-3 border border-transparent rounded-lg shadow-sm text-lg font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-300"
                >
                  Update Profile
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserProfilePage;
