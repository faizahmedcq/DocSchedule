import React from 'react'

function InfoForm({ formData, handleChange }) {
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
      <div>
        <label htmlFor="followUpFee" className="block text-sm font-medium text-gray-700">Follow-Up Fee (৳)</label>
        <input
          id="followUpFee"
          name="followUpFee"
          type="number"
          value={formData.followUpFee}
          onChange={handleChange}
          className="mt-1 block w-full px-4 py-3 rounded-lg border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 transition duration-300"
        />
      </div>
      <div>
        <label htmlFor="patientAttended" className="block text-sm font-medium text-gray-700">Patients Attended</label>
        <input
          id="patientAttended"
          name="patientAttended"
          type="number"
          value={formData.patientAttended}
          onChange={handleChange}
          className="mt-1 block w-full px-4 py-3 rounded-lg border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 transition duration-300"
        />
      </div>
      <div>
        <label htmlFor="bmdcNumber" className="block text-sm font-medium text-gray-700">BMDC / Doctor Code</label>
        <input
          id="bmdcNumber"
          name="bmdcNumber"
          type="text"
          value={formData.bmdcNumber}
          onChange={handleChange}
          className="mt-1 block w-full px-4 py-3 rounded-lg border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 transition duration-300"
        />
      </div>
      <div>
        <label htmlFor="joinedDocTime" className="block text-sm font-medium text-gray-700">Joined DocTime</label>
        <input
          id="joinedDocTime"
          name="joinedDocTime"
          type="text"
          value={formData.joinedDocTime}
          onChange={handleChange}
          className="mt-1 block w-full px-4 py-3 rounded-lg border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 transition duration-300"
        />
      </div>
      <div>
        <label htmlFor="avgConsultationTime" className="block text-sm font-medium text-gray-700">Avg. Consultation Time</label>
        <input
          id="avgConsultationTime"
          name="avgConsultationTime"
          type="text"
          value={formData.avgConsultationTime}
          onChange={handleChange}
          className="mt-1 block w-full px-4 py-3 rounded-lg border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 transition duration-300"
        />
      </div>
      <div className="col-span-1 md:col-span-2">
        <label htmlFor="consultationTimeInstant" className="block text-sm font-medium text-gray-700">Instant Consultation Time</label>
        <textarea
          id="consultationTimeInstant"
          name="consultationTimeInstant"
          rows="2"
          value={formData.consultationTimeInstant}
          onChange={handleChange}
          className="mt-1 block w-full px-4 py-3 rounded-lg border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 transition duration-300"
        ></textarea>
      </div>
      <div className="col-span-1 md:col-span-2">
        <label htmlFor="consultationTimeAppointment" className="block text-sm font-medium text-gray-700">Appointment Consultation Time</label>
        <textarea
          id="consultationTimeAppointment"
          name="consultationTimeAppointment"
          rows="4"
          value={formData.consultationTimeAppointment}
          onChange={handleChange}
          className="mt-1 block w-full px-4 py-3 rounded-lg border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 transition duration-300"
        ></textarea>
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
  
  )
}

export default InfoForm