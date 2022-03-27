import React from 'react'
import Course from './Course'
import SearchCourse from './SearchCourse'

const CourseList = ({collegedata}) => {
  return (
      <>
    <table role="grid">
    <caption><h1>{collegedata.length ==  0 ? <p>No Course Found</p> : collegedata[0].college_name}</h1></caption>
      <thead>
        <tr>
          <th scope="col">Programme ID</th>
          <th scope="col">Programme Name</th>
          <th scope="col">Discipline Group</th>
          <th scope="col">Duration(Year)</th>
          <th scope="col">Level</th>
          <th scope="col">Intake</th>
        </tr>
      </thead>
      <tbody>
        {collegedata.map((college_data,index) => (
          <Course
            key={index+1}
            id={college_data.programme_id}
            name={college_data.programme}
            discipline={college_data.discipline_group_category}
            duration={college_data.duration_year}
            level={college_data.levell}
            intake={college_data.intake}
          />
        ))}
      </tbody>
    </table>
    </>
  )
}

export default CourseList