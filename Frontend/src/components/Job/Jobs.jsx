import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../main";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Jobs = () => {
  const [jobs, setJobs] = useState({});
  const { isAuthorized } = useContext(Context);
  const navigateTo = useNavigate();

  useEffect(() => {
    try {
      axios.get("http://localhost:6005/api/v1/job/getall", {
        withCredentials: true,
      }).then((res) =>{
        setJobs(res.data);
      })
    } catch (error) {
      console.log(error);
    }
  }, []);

  if(!isAuthorized){
    navigateTo("/login");
  }

  return <>
  <section className="jobs page">
    <div className="container">
      <h1>Available Jobs</h1>
      <div className="banner">
        {
          jobs.jobs && jobs.jobs.map((element)=>{
            return(
              <div className="card" key={element.id}>
                <p>{element.title}</p>
                <p>{element.category}</p>
                <p>{element.country}</p>
                <Link to={`/job/${element._id}`}>Job Details</Link>
              </div>
            )
          })
        }
      </div>
    </div>
  </section>
  </>;
};

export default Jobs;
