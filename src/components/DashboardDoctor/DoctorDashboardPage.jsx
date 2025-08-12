import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Component for the dashboard header
const DashboardHeader = ({ profile }) => {
  return (
    <div className="flex items-center justify-between mb-8">
      <div className="flex items-center space-x-4">
        <img
          src="https://placehold.co/100x100/A0AEC0/ffffff?text=Doctor"
          alt="Doctor Avatar"
          className="w-24 h-24 rounded-full border-4 border-white shadow-md"
        />
        <div>
          <h2 className="text-3xl font-bold text-gray-800">{profile.name}</h2>
          <p className="text-sm text-gray-500">{profile.specialty}</p>
        </div>
      </div>
      <div className="text-right">
        <p className="text-lg font-medium text-gray-700">Consultation Fee</p>
        <p className="text-3xl font-bold text-blue-600">৳{profile.consultationFee}</p>
        <p className="text-xs text-gray-500">(inc. VAT)</p>
      </div>
    </div>
  );
};

// Component for the navigation tabs
const DashboardTabs = ({ activeSection, setActiveSection, reviewCount }) => {
  return (
    <div className="border-b border-gray-200 mb-8">
      <nav className="-mb-px flex space-x-8" aria-label="Tabs">
        <a
          href="#"
          onClick={() => setActiveSection('info')}
          className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm transition-colors duration-200 ${
            activeSection === 'info'
              ? 'border-blue-500 text-blue-600'
              : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
          }`}
        >
          Info
        </a>
        <a
          href="#"
          onClick={() => setActiveSection('experience')}
          className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm transition-colors duration-200 ${
            activeSection === 'experience'
              ? 'border-blue-500 text-blue-600'
              : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
          }`}
        >
          Experience
        </a>
        <a
          href="#"
          onClick={() => setActiveSection('reviews')}
          className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm transition-colors duration-200 ${
            activeSection === 'reviews'
              ? 'border-blue-500 text-blue-600'
              : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
          }`}
        >
          Reviews ({reviewCount})
        </a>
      </nav>
    </div>
  );
};

// Component for the "Info" form section
const InfoForm = ({ formData, handleChange }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
        <input
          id="name"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          className="mt-1 block w-full px-4 py-3 rounded-lg border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 transition duration-300"
        />
      </div>
      <div>
        <label htmlFor="title" className="block text-sm font-medium text-gray-700">Medical Title</label>
        <input
          id="title"
          name="title"
          type="text"
          value={formData.title}
          onChange={handleChange}
          className="mt-1 block w-full px-4 py-3 rounded-lg border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 transition duration-300"
        />
      </div>
      <div>
        <label htmlFor="specialty" className="block text-sm font-medium text-gray-700">Specialty</label>
        <input
          id="specialty"
          name="specialty"
          type="text"
          value={formData.specialty}
          onChange={handleChange}
          className="mt-1 block w-full px-4 py-3 rounded-lg border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 transition duration-300"
        />
      </div>
      <div>
        <label htmlFor="consultationFee" className="block text-sm font-medium text-gray-700">Consultation Fee (৳)</label>
        <input
          id="consultationFee"
          name="consultationFee"
          type="number"
          value={formData.consultationFee}
          onChange={handleChange}
          className="mt-1 block w-full px-4 py-3 rounded-lg border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 transition duration-300"
        />
      </div>
      <div className="md:col-span-2">
        <label htmlFor="info" className="block text-sm font-medium text-gray-700">About Me</label>
        <textarea
          id="info"
          name="info"
          rows="4"
          value={formData.info}
          onChange={handleChange}
          className="mt-1 block w-full px-4 py-3 rounded-lg border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 transition duration-300"
        ></textarea>
      </div>
    </div>
  );
};

// Component for the "Experience" form section
const ExperienceForm = ({ experiences, setExperiences }) => {
  const handleAddExperience = () => {
    const newExperience = {
      hospital: '',
      designation: '',
      department: '',
      employmentStatus: '',
      period: '',
    };
    setExperiences(prevExperiences => [...prevExperiences, newExperience]);
  };

  const handleDeleteExperience = (index) => {
    setExperiences(prevExperiences => prevExperiences.filter((_, i) => i !== index));
  };

  const handleChange = (e, index, field) => {
    const { value } = e.target;
    const newExperiences = [...experiences];
    newExperiences[index][field] = value;
    setExperiences(newExperiences);
  };

  return (
    <div className="space-y-6">
      {experiences.map((exp, index) => (
        <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-200 relative">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">{exp.hospital || 'New Experience'}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor={`hospital-${index}`} className="block text-sm font-medium text-gray-700">Hospital</label>
              <input
                id={`hospital-${index}`}
                name={`hospital`}
                type="text"
                value={exp.hospital}
                onChange={(e) => handleChange(e, index, 'hospital')}
                className="mt-1 block w-full px-3 py-2 rounded-lg border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 transition duration-300"
              />
            </div>
            <div>
              <label htmlFor={`designation-${index}`} className="block text-sm font-medium text-gray-700">Designation</label>
              <input
                id={`designation-${index}`}
                name={`designation`}
                type="text"
                value={exp.designation}
                onChange={(e) => handleChange(e, index, 'designation')}
                className="mt-1 block w-full px-3 py-2 rounded-lg border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 transition duration-300"
              />
            </div>
            <div className="col-span-1 md:col-span-2">
              <label htmlFor={`period-${index}`} className="block text-sm font-medium text-gray-700">Period</label>
              <input
                id={`period-${index}`}
                name={`period`}
                type="text"
                value={exp.period}
                onChange={(e) => handleChange(e, index, 'period')}
                className="mt-1 block w-full px-3 py-2 rounded-lg border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 transition duration-300"
              />
            </div>
          </div>
          <button
            type="button"
            onClick={() => handleDeleteExperience(index)}
            className="absolute top-2 right-2 text-red-500 hover:text-red-700 transition duration-200 focus:outline-none"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
          </button>
        </div>
      ))}
      <div className="flex justify-end">
        <button
          type="button"
          onClick={handleAddExperience}
          className="px-4 py-2 bg-green-500 text-white font-medium rounded-lg shadow-sm hover:bg-green-600 transition duration-200"
        >
          Add New Experience
        </button>
      </div>
    </div>
  );
};

// Component for the "Reviews" section
const ReviewsSection = ({ reviews }) => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Customer Reviews</h2>
      {reviews.length > 0 ? (
        <div className="space-y-6">
          {reviews.map((review) => (
            <div key={review.id} className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-2">
                <span className="text-yellow-400">{'★'.repeat(review.rating)}</span>
                <span className="text-gray-300">{'★'.repeat(5 - review.rating)}</span>
                <h4 className="ml-4 font-semibold text-gray-800">{review.author}</h4>
              </div>
              <p className="text-gray-600">{review.comment}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500 italic">No reviews yet.</p>
      )}
    </div>
  );
};

// Main parent component
const DoctorDashboardPage = () => {
  // State to hold the doctor's profile data
  const [profile, setProfile] = useState({
    name: 'Dr. Mithun Sarker',
    title: 'MBBS, BCS (Health), DCH (Pediatrics)',
    specialty: 'Child Specialist',
    consultationFee: '400',
    experienceYears: '11+',
    bmdcNumber: 'A68341',
    rating: '5 (2337)',
    workingAt: 'Shaheed Suhrawardy Medical College Hospital',
    info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    experiences: [
      {
        hospital: 'Shaheed Suhrawardy Medical College Hospital',
        designation: 'Child Specialist',
        department: 'Department Of Pediatric',
        employmentStatus: 'current',
        period: 'Feb 26, 2021 - current',
      },
      {
        hospital: 'DR MR Khan Sisu Hospital',
        designation: 'Non Residency Course',
        department: 'Pediatric',
        employmentStatus: '',
        period: 'Jul 1, 2019 - Feb 25, 2021',
      },
      {
        hospital: 'Birdem General Hospital',
        designation: 'Resident Medical Officer',
        department: 'Nephrology',
        employmentStatus: '',
        period: 'Jan 1, 2016 - Dec 31, 2016',
      },
      {
        hospital: 'Kalai Upozilla Health Complex',
        designation: 'Medical Officer',
        department: '',
        employmentStatus: '',
        period: 'May 10, 2017 - Jun 30, 2019',
      },
    ],
    reviews: [], // This will be auto-populated from customer reviews
  });

  // State for form data, making fields editable
  const [formData, setFormData] = useState({ ...profile });

  // State to manage which section is active
  const [activeSection, setActiveSection] = useState('info');

  // Handle input changes for the info section
  const handleInfoChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle experience changes
  const handleExperienceChange = (newExperiences) => {
    setFormData(prevData => ({
      ...prevData,
      experiences: newExperiences
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send formData to your backend to save changes
    console.log('Profile updated:', formData);
    // After a successful API call, you would update the profile state
    setProfile(formData);
    // You can also add a success message here instead of alert
    alert('Profile updated successfully!');
  };

  // Effect to load reviews (simulating an API call)
  useEffect(() => {
    // In a real app, this would be a fetch request to get customer reviews
    const fetchReviews = async () => {
      // Dummy review data
      const dummyReviews = [
        { id: 1, author: 'Jane Doe', rating: 5, comment: 'Dr. Sarker is an excellent doctor, very patient and knowledgeable.' },
        { id: 2, author: 'John Smith', rating: 4, comment: 'Good service, but the wait time was a bit long.' },
      ];
      setProfile(prevProfile => ({ ...prevProfile, reviews: dummyReviews }));
    };
    fetchReviews();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-4 font-sans">
      <div className="max-w-7xl mx-auto bg-white rounded-2xl shadow-xl p-8 md:p-12">
        <DashboardHeader profile={profile} />
        <DashboardTabs
          activeSection={activeSection}
          setActiveSection={setActiveSection}
          reviewCount={profile.reviews.length}
        />
        <form onSubmit={handleSubmit} className="space-y-8">
          {activeSection === 'info' && (
            <InfoForm formData={formData} handleChange={handleInfoChange} />
          )}
          {activeSection === 'experience' && (
            <ExperienceForm
              experiences={formData.experiences}
              setExperiences={handleExperienceChange}
            />
          )}
          {activeSection === 'reviews' && (
            <ReviewsSection reviews={profile.reviews} />
          )}

          {activeSection !== 'reviews' && (
            <div className="flex justify-end pt-4">
              <button
                type="submit"
                className="w-full md:w-auto px-6 py-3 border border-transparent rounded-lg shadow-sm text-lg font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-300"
              >
                Save Changes
              </button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default DoctorDashboardPage;
