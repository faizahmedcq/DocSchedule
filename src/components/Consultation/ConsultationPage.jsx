// src/components/ConsultationPage.jsx

import React from 'react';
import PopularSpecialists from './PopularSpecialists';
import ExperiencedMBBSDoctors from './ExperiencedMBBSDoctors';
import ClinicalAreas from './ClinicalAreas';
import CommonHealthConcerns from './CommonHealthConcerns';
import ConsultSpecialist from './ConsultSpecialist';
import AvailableDoctors from './AvailableDoctors';

const ConsultationPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto py-12 px-4">
        <PopularSpecialists />
        <ExperiencedMBBSDoctors />
        <ConsultSpecialist />
        <ClinicalAreas />
        <CommonHealthConcerns />
        <AvailableDoctors />
      </div>
    </div>
  );
};

export default ConsultationPage;