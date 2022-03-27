import React from 'react'
import College from "./College";

const CollegeList = ({ colleges }) => {
  return (
    <table role="grid">
      <thead>
        <tr>
          <th scope="col">College ID</th>
          <th scope="col">College Name</th>
          <th scope="col">University Name</th>
        </tr>
      </thead>
      <tbody>
        {colleges.map((college,index) => (
          <College
            key={index+1}
            id={college.college_id}
            name={college.college_name}
            university={college.university_name}
          />
        ))}
      </tbody>
    </table>
  )
}

export default CollegeList