import React from 'react';
import { Link } from 'react-router-dom';

// Component for a list item with an icon and label
const ListItem = ({ title, description, icon }) => (
  <div className="flex items-center space-x-4">
    <div className="w-12 h-12 flex-shrink-0 bg-gray-200 rounded-full flex items-center justify-center text-gray-600">
      {icon}
    </div>
    <div>
      <h3 className="text-lg font-medium text-gray-800">{title}</h3>
      {description && <p className="text-sm text-gray-500">{description}</p>}
    </div>
  </div>
);

// Component for a grid item with an image and label
const GridItem = ({ title, imageUrl }) => (
  <div className="flex flex-col items-center space-y-2 p-4 bg-gray-50 rounded-lg shadow-sm border border-gray-200">
    <div className="w-24 h-24 overflow-hidden rounded-lg">
      <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
    </div>
    <h3 className="text-sm font-medium text-gray-700 text-center">{title}</h3>
  </div>
);

// Main Reports & Profile Navigation component
const ReportsComponent = () => {
  // We'll use a simple state to handle responsiveness instead of a library
  const [isMobile, setIsMobile] = React.useState(window.innerWidth <= 768);

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-4 font-sans">
      <div className="w-full max-w-6xl mx-auto bg-white rounded-2xl shadow-xl p-8 md:p-12">
        {/* Header Section */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden border-2 border-gray-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
              </svg>
            </div>
            <div>
              <p className="text-lg font-bold text-gray-800">01576756401</p>
              <p className="text-sm text-gray-500">n/a</p>
              <p className="text-xs text-gray-400">DocTime Points</p>
            </div>
          </div>
          <Link
            to="/edit-profile"
            className="px-4 py-2 rounded-lg bg-blue-500 text-white font-medium hover:bg-blue-600 transition duration-300 shadow-sm"
          >
            Edit Profile
          </Link>
        </div>

        {/* Patients Section (Desktop) */}
        {!isMobile && (
          <div className="flex justify-center items-center p-4 mb-8">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center text-gray-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16.5 12c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5-1.5.67-1.5 1.5.67 1.5 1.5 1.5zM12 18.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5-1.5.67-1.5 1.5.67 1.5 1.5 1.5zM7.5 12c.83 0 1.5-.67 1.5-1.5S8.33 9 7.5 9 6 9.67 6 10.5s.67 1.5 1.5 1.5zM12 7.5c.83 0 1.5-.67 1.5-1.5S12.83 4.5 12 4.5 10.5 5.17 10.5 6s.67 1.5 1.5 1.5zM22 12c0 5.52-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2s10 4.48 10 10zm-2 0c0-4.41-3.59-8-8-8s-8 3.59-8 8 3.59 8 8 8 8-3.59 8-8z" />
                </svg>
              </div>
              <p className="text-sm mt-2 text-gray-700">Click to see all patients</p>
            </div>
          </div>
        )}

        {/* Reports Section */}
        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-4">Reports</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <GridItem
            title="All Prescriptions"
            imageUrl="https://placehold.co/150x150/E2E8F0/A0AEC0?text=Prescriptions"
          />
          {/* Add other report types here */}
        </div>

        {/* Consultations Section */}
        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-4">Consultations</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <GridItem
            title="Past Consultations"
            imageUrl="https://placehold.co/150x150/E2E8F0/A0AEC0?text=Past"
          />
          <GridItem
            title="Appointment Schedule"
            imageUrl="https://placehold.co/150x150/E2E8F0/A0AEC0?text=Appointment"
          />
          <GridItem
            title="Follow-up Consultations"
            imageUrl="https://placehold.co/150x150/E2E8F0/A0AEC0?text=Follow-up"
          />
          {/* Add other consultation types here */}
        </div>

        {/* Legals & Support Section */}
        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-4">Legals & Support</h2>
        <ul className="space-y-4">
          <li>
            <Link to="/terms" className="text-blue-600 hover:underline">
              Terms & Conditions
            </Link>
          </li>
          <li>
            <Link to="/permissions" className="text-blue-600 hover:underline">
              Permissions
            </Link>
          </li>
          <li>
            <Link to="/privacy-policy" className="text-blue-600 hover:underline">
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link to="/faq" className="text-blue-600 hover:underline">
              FAQ
            </Link>
          </li>
          <li>
            <Link to="/about-us" className="text-blue-600 hover:underline">
              About Us
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ReportsComponent;
