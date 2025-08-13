import React from 'react';

const DoctorDetails = ({ doctor }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div>
        <h3 className="text-xl font-semibold text-gray-800 mb-3">About Doctor</h3>
        <p className="text-gray-600 leading-relaxed">{doctor.about}</p>
      </div>
      <div>
        <h3 className="text-xl font-semibold text-gray-800 mb-3">At a Glance</h3>
        <div className="space-y-4">
          <div>
            <h4 className="text-sm font-medium text-gray-500">Instant Consultation Time</h4>
            <p className="font-semibold text-gray-700">{doctor.instantConsultationTime}</p>
          </div>
          <div>
            <h4 className="text-sm font-medium text-gray-500">Appointment Consultation Time</h4>
            <p className="font-semibold text-gray-700">{doctor.appointmentConsultationTime}</p>
          </div>
        </div>
        
        <div className="flex justify-between items-center mt-6 p-4 bg-gray-50 rounded-md">
          <div>
            <h4 className="text-sm font-medium text-gray-500">Consultation Fee</h4>
            <p className="text-lg font-bold text-green-600">৳{doctor.consultationFee}</p>
            <p className="text-xs text-gray-500">(inc. VAT)</p>
          </div>
          <div>
            <h4 className="text-sm font-medium text-gray-500">Follow-up Fee</h4>
            <p className="text-lg font-bold text-green-600">৳{doctor.followUpFee}</p>
            <p className="text-xs text-gray-500">(inc. VAT) <br/>(Within 30 days)</p>
          </div>
        </div>
        
        <div className="flex justify-between mt-6">
          <div>
            <h4 className="text-sm font-medium text-gray-500">Patient Attended</h4>
            <p className="text-xl font-bold text-gray-800">{doctor.patientsAttended}</p>
          </div>
          <div>
            <h4 className="text-sm font-medium text-gray-500">Joined DocTime</h4>
            <p className="text-xl font-bold text-gray-800">{doctor.joinedDate}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorDetails;