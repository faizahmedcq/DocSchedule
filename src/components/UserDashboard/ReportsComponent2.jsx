import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ReportsComponent = () => {
  // Dummy data for patient reports
  const [reports, setReports] = useState([
    {
      id: 1,
      date: 'Aug 20, 2025',
      doctor: 'Dr. Mithun Sarker',
      specialty: 'Child Specialist',
      summary: 'Follow-up consultation for cough and fever. The patient is recovering well and the fever has subsided.',
    },
    {
      id: 2,
      date: 'Jul 15, 2025',
      doctor: 'Dr. Ahmed Khan',
      specialty: 'Cardiologist',
      summary: 'Initial consultation for chest pain. Advised for an ECG and further blood tests.',
    },
    {
      id: 3,
      date: 'Jun 10, 2025',
      doctor: 'Dr. Liza Rahman',
      specialty: 'Dermatologist',
      summary: 'Consultation for skin rash. Prescribed a topical cream and advised to avoid certain foods.',
    },
  ]);

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
          <h1 className="text-3xl font-bold text-gray-800 ml-4">My Reports</h1>
        </div>

        {/* Reports List */}
        <div className="space-y-6">
          {reports.length > 0 ? (
            reports.map((report) => (
              <div key={report.id} className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-200">
                <div className="flex items-start justify-between">
                  <div>
                    <h2 className="text-lg font-semibold text-gray-800">{report.date}</h2>
                    <p className="text-sm text-gray-600">
                      <span className="font-medium">{report.doctor}</span> - {report.specialty}
                    </p>
                    <p className="mt-2 text-gray-700">{report.summary}</p>
                  </div>
                  <button
                    type="button"
                    className="flex-shrink-0 ml-4 px-4 py-2 rounded-lg bg-blue-500 text-white font-medium hover:bg-blue-600 transition duration-300 shadow-sm"
                  >
                    View Details
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center p-8 text-gray-500 italic">No reports found.</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ReportsComponent;
