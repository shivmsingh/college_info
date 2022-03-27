import React from 'react'

const Course = ({id,name,discipline,duration,level,intake}) => {
  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>{discipline}</td>
      <td>{duration}</td>
      <td>{level}</td>
      <td>{intake}</td>
    </tr>
  )
}

export default Course