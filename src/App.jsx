

// src/App.jsx

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import necessary components
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ServicesGrid from './components/ServicesGrid';
import ConsultationPage from './components/Consultation/ConsultationPage'; // Import the new page component
import WhyDocTime from './components/WhyDocTime'; // Assuming this component exists
import SpecialtiesGrid from './components/SpecialtiesGrid'; // Assuming this component exists
import BuyMedicinesBanner from './components/BuyMedicinesBanner'; // Import the new component
import RecentBlogs from './components/RecentBlogs'; // Import the new component
import SymptomsDepartmentView from './components/Consultation/SymptomsDepartmentView';
import Search from './components/Search/AvailableDoctors';
import ProfilePage from './components/DcotorDetailsView/ProfilePage'

// login and signup components
import LoginUser from './components/Login/LoginUser'; // Import the login component
import SignupUser from './components/Login/SignupUser'; // Import the signup component
import DoctorLoginPage from './components/Login/DoctorLoginPage'; // Import the doctor login component
import DoctorRegistrationPage from './components/Login/DoctorRegistrationPage';
import DoctorDashboardPage from './components/DashboardDoctor/DoctorDashboardPage';

// Import other necessary components
// import Footer from './components/Footer'; // Uncomment if you have a Footer component
// ... other components

function App() {
  return (
    <Router>
      <div className="font-sans antialiased">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={
              <>
                <HeroSection />
                <ServicesGrid />
                <WhyDocTime /> 
                <SpecialtiesGrid /> {/* Add the new component here */}
                <BuyMedicinesBanner /> {/* Add the new component here */}
                <RecentBlogs /> {/* Add the new component here */}
                {/* ... other homepage components */}
              </>
            } />
            <Route path="/consultation" element={<ConsultationPage />} />
            <Route path="/symptoms-department-views" element={<SymptomsDepartmentView />} />
            <Route path="/search" element={<Search />} />
            <Route path="/doctor-profile-view" element={<ProfilePage />} />


            {/* Login and Doctor SignUp */}
            <Route path="/login" element={<LoginUser />} />
            <Route path="/signup" element={<SignupUser />} />
            <Route path="/doctor-login" element={<DoctorLoginPage />} />
            <Route path="/doctor-registration" element={<DoctorRegistrationPage />} />
            {/* Add other routes here */}

            {/* DoctorDashboard */}

            <Route path="/doctor-dashboard" element={<DoctorDashboardPage />} />

            {/* DoctorDashboard */}

          </Routes>
        </main>
        {/* You can add a Footer component here */}
      </div>
    </Router>
  );
}

export default App;