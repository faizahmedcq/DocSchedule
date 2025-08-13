import React from 'react';
import DoctorCard from './DoctorCard.jsx';

// Sample data for doctors
const sampleDoctors = [
  {
    id: 1,
    name: "Dr. Mehedi Hasan",
    degree: "MBBS, BCS (Health) MD (Pediatric Hematology & Oncology)",
    specialties: ["Pediatric Hematologist and Oncologist", "General Physician"],
    location: "Satkhira Medical College Hospital, Satkhira.",
    rating: 4.9,
    ratingCount: 370,
    experience: 13,
    fee: 685,
    consultationType: "Online",
    isOnline: true,
    image: "https://via.placeholder.com/100", // Placeholder image
  },
  {
    id: 2,
    name: "Dr. Mamunur Rashid",
    degree: "MBBS, BCS (Health) (General Physician) MRCS (General Surgery) (UK) MRCS (Orthopedics)",
    specialties: ["Orthopedist", "General Physician"],
    location: "Kurmitola General Hospital, Dhaka Cantonment.",
    rating: 5,
    ratingCount: 108,
    experience: 12,
    fee: 450,
    originalFee: 1000,
    consultationType: "Appointment",
    isOnline: false,
    image: "https://via.placeholder.com/100",
  },
  {
    id: 3,
    name: "Dr. Raihan Ahmad",
    degree: "MBBS, BCS (Health) (Clinician) FCPS (Internal Medicine)",
    specialties: ["Medicine Specialist", "Neurology, Endocrinology", "General Physician"],
    location: "National Institute of Neurosciences and Hospital (NINS), Medicine Specialist, Diabetologist & Experienced in Neuromedicine",
    rating: 5,
    ratingCount: 604,
    experience: 12,
    fee: 750,
    consultationType: "Appointment",
    isOnline: false,
    image: "https://via.placeholder.com/100",
  },
  {
    id: 4,
    name: "Dr. Farah Naz",
    degree: "MBBS, FCPS (Gynae & Obs)",
    specialties: ["Gynecologist", "Obstetrics"],
    location: "Dhaka Medical College & Hospital.",
    rating: 4.8,
    ratingCount: 255,
    experience: 10,
    fee: 500,
    consultationType: "Online",
    isOnline: true,
    image: "https://via.placeholder.com/100",
  },
  {
    id: 5,
    name: "Dr. Shamim Ahmed",
    degree: "MBBS, DDV (Dermatology)",
    specialties: ["Dermatologist", "Venereologist"],
    location: "Square Hospital, Dhaka.",
    rating: 4.7,
    ratingCount: 98,
    experience: 8,
    fee: 600,
    consultationType: "Appointment",
    isOnline: false,
    image: "https://via.placeholder.com/100",
  },
];

const DoctorList = () => {
  return (
    <div className="space-y-4">
      {sampleDoctors.map(doctor => (
        <DoctorCard key={doctor.id} doctor={doctor} />
      ))}
    </div>
  );
};

export default DoctorList;