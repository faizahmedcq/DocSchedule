import React from 'react'

function ExperienceForm({ experiences, setExperiences }) {
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
   )
}

export default ExperienceForm