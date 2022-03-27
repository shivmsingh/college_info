import React from 'react'

const SearchCourse = ({ onSubmit, onChange }) => {
  return (
    <div> <form onSubmit={onSubmit}>
    <label htmlFor="Course_search">
      Course Search
      <input
        type="text"
        id="Course_search"
        name="Course_search"
        placeholder="Type the name of the course to search"
        onChange={onChange}
        required
      />
    </label>
  </form></div>
  )
}

export default SearchCourse