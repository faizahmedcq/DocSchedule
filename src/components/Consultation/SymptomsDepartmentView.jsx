import React from 'react'
import ClinicalAreas from './ClinicalAreas'
import CommonHealthConcerns from './CommonHealthConcerns'


function SymptomsDepartmentView() {
  return (
    <div className="container mx-auto p-4">
      <ClinicalAreas />
      <CommonHealthConcerns />
    </div>    
  )
}

export default SymptomsDepartmentView