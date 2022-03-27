import React, { useState, useEffect } from "react";
import axios from "axios";
import Loading from "./Loading.js";
import Search from "./Search";
import CollegeList from "./CollegeList";

const Home = () => {
  const [search, setSearch] = useState("");
  const [pending, setPending] = useState(true);
  const [colleges, setColleges] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.data.gov.in/resource/614c4bb5-132a-478e-8872-682fd566397c?api-key=579b464db66ec23bdd000001c74477507bc340ba641dee5bb824579f%20&format=json&limit=2000"
      )
      .then((response) => {
        setColleges(response.data.records);
        setPending(false);
      });
  }, []);

  return (
    <div className="container mx-auto">
          <center><h1>List of Colleges</h1></center>
      <Search
        onSubmit={(event) => event.preventDefault()}
        onChange={(event) => setSearch(event.target.value)}
      />
      {pending ? (
        <Loading />
      ) : (
        <CollegeList
          colleges={colleges.filter((college) =>
            search === ""
              ? colleges
              : college.college_name.match(new RegExp(search, "i"))
          )}
        />
      )}
    </div>
  );
};

export default Home;
