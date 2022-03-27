import React from "react";

const Search = ({ onSubmit, onChange }) => {
  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="College_search">
        College Search
        <input
          type="text"
          id="College_search"
          name="College_search"
          placeholder="Type the name of the College to search"
          onChange={onChange}
          required
        />
      </label>
    </form>
  );
};

export default Search;
