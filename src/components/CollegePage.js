import React, { useState, useEffect } from "react";
import axios from "axios";
import Loading from "./Loading.js";
import { useParams } from 'react-router-dom';
import CourseList from "./CourseList.js";
import Back from "./Back.js";
import SearchCourse from "./SearchCourse.js";

const CollegePage = () => {
    const [search, setSearch] = useState("");
    const params = useParams();
    const [pending, setPending] = useState(true);
    const [collegedata, setCollegedata] = useState([]);
    useEffect(() => {
        axios
            .get(
                `https://api.data.gov.in/resource/614c4bb5-132a-478e-8872-682fd566397c?api-key=579b464db66ec23bdd000001c74477507bc340ba641dee5bb824579f%20&format=json&limit=2000&filters[college_id]=${params.id}`
            )
            .then(response => {
                setCollegedata(response.data.records);
                setPending(false);
            });
    }, []);
    return (
        <div className="container mx-auto">
            <SearchCourse
                onSubmit={(event) => event.preventDefault()}
                onChange={(event) => setSearch(event.target.value)}
            />
            {pending ? (<Loading />
            ) : (
                <CourseList collegedata={collegedata.filter((col_data) =>
                    search === ""
                        ? collegedata
                        : col_data.programme.match(new RegExp(search, "i"))
                )}
                />
            )}
            <Back />


        </div>
    )
}

export default CollegePage