

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
            {/* Add other routes here */}
          </Routes>
        </main>
        {/* You can add a Footer component here */}
      </div>
    </Router>
  );
}

export default App;