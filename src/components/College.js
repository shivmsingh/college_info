import React from "react";
import { Link } from "react-router-dom";

const College = ({ id, name, university }) => {
  return (
    <tr>
      <td>{id}</td>
      <td>
        <Link to={`college/${id}`}>{name}</Link>
      </td>
      <td>{university}</td>
    </tr>
  );
};

export default College;
