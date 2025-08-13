import React from 'react';
import DoctorCard from './DoctorCard';
import Tabs from './Tabs';
import DoctorDetails from './DoctorDetails';

// Mock data to simulate fetching from an API
const mockDoctorData = {
  name: "Maria Seraj",
  profileImage: "https://via.placeholder.com/150", // Use a placeholder image
  credentials: "MBBS, BCS (Health) (Clinician), MCPS (Dermatology), DDV (Dermatology)",
  specialty: "Dermatologist",
  experience: "10+ Years",
  bmdcNumber: "A-73025",
  rating: "5",
  totalRatings: "770",
  hospital: "Dhaka North City Corporation Hospital",
  consultationFee: "500",
  followUpFee: "350",
  about: "Clinical and Aesthetic Dermatologist, Hydrofacial Chemical Peeling Microneedling Electro Surgery. একজন অভিজ্ঞ চর্মরোগ এবং সৌন্দর্য চিকিৎসক। তিনি বর্তমানে ঢাকা উত্তর সিটি কর্পোরেশন হাসপাতালে কর্মরত আছেন।",
  instantConsultationTime: "Sat-Fri (7 PM-11 PM)",
  appointmentConsultationTime: "Sat-Fri (7 PM-11 PM)",
  patientsAttended: "2991",
  joinedDate: "September 22, 2022",
};


const tabsData = [
  {
    id: 'info',
    label: 'Info',
    content: <DoctorDetails doctor={mockDoctorData} />,
  },
  {
    id: 'experience',
    label: 'Experience',
    content: (
      <div>
        <h3 className="text-lg font-medium text-gray-800 mb-2">Work History</h3>
        <ul className="list-disc list-inside text-gray-600">
          <li>Dhaka North City Corporation Hospital - (2015-Present)</li>
          <li>XYZ Clinic - (2010-2015)</li>
        </ul>
        <h3 className="text-lg font-medium text-gray-800 mt-4 mb-2">Education</h3>
        <ul className="list-disc list-inside text-gray-600">
          <li>DDV (Dermatology) - University of Dhaka</li>
          <li>MBBS, BCS (Health)</li>
        </ul>
      </div>
    ),
  },
  {
    id: 'reviews',
    label: 'Reviews',
    content: (
      <div>
        <h3 className="text-lg font-medium text-gray-800 mb-2">Patient Reviews</h3>
        <div className="space-y-4">
          <div className="bg-gray-50 p-4 rounded-md">
            <p className="font-semibold">John Doe</p>
            <p className="text-sm text-gray-600">"Dr. Seraj was very thorough and helpful. Highly recommended!"</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-md">
            <p className="font-semibold">Jane Smith</p>
            <p className="text-sm text-gray-600">"Excellent service and friendly staff. Very professional."</p>
          </div>
        </div>
      </div>
    ),
  },
];

const ProfilePage = () => {
  return (
    <div className="container mx-auto p-4 md:p-8">
      <DoctorCard doctor={mockDoctorData} />
      <Tabs tabsData={tabsData} />
    </div>
  );
};

export default ProfilePage;