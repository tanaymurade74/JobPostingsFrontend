import useFetch from "../useFetch";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import Header from "../constants/Header";
import Footer from "../constants/Footer";
import useJobListContext from "../context/JobListContext";

const JobsList = () => {
    const {data, loading, error, handleDelete, jobsList, setJobsList, search, setSearch} = useJobListContext();
//   const [jobsList, setJobsList] = useState([]);
//   const [search, setSearch] = useState("");

//   const url =
//     search.trim() === ""
//       ? `http://localhost:3000/jobs`
//       : `http://localhost:3000/jobs/search/${search}`;

//   const { data, loading, error } = useFetch(url);
//   console.log(data);
//   console.log(data.Jobs);

//   useEffect(() => {
//     if (data && data.Jobs) {
//       setJobsList(data.Jobs);
//     }
//   }, [data, url]);

//   const handleDelete = async (id) => {
//     const filteredJobs = jobsList.filter((job) => job._id != id);
//     setJobsList(filteredJobs);

//     try {
//       const response = await fetch(`http://localhost:3000/jobs/${id}`, {
//         method: "DELETE",
//         headers: {
//           "Content-Type": "application/json",
//         },
//       });

//       const deletedJob = await response.json();
//       console.log(deletedJob);
//     } catch {}
//   };


  return  <div className="d-flex flex-column min-vh-100">
            <Header search = {search} setSearch = {setSearch}/>

    <div className="container mb-5 flex-grow-1">

        {/* <Header search = {search} setSearch = {setSearch}/> */}
        <h1>All Jobs</h1>

        {loading && (
                <div
                  className="d-flex justify-content-center align-items-center"
                  style={{ minHeight: "400px" }}
                >
                  <div className="text-center">
                    <div
                      className="spinner-border text-primary"
                      style={{ width: "3rem", height: "3rem" }}
                      role="status"
                    >
                      <span className="visually-hidden">Loading...</span>
                    </div>
                    <p className="mt-3 fs-5 text-muted">Fetching...</p>
                  </div>
                </div>
              )}
        {error && <p>Error...</p>}

        {!loading && jobsList  && jobsList.length > 0 ?

        <div >
        <div className="row g-4">
            {jobsList.map(job => (
                <div className="col-md-4" key = {job._id}>
                    <div className="card p-3 mt-4 h-100 d-flex flex-column text-center">
                        <h3>{job.jobTitle}</h3>
                        <p><strong>Company Name: </strong>{job.companyName}</p>
                        <p><strong>Location: </strong>{job.location}</p>
                        <p><strong>JobType: </strong>{job.jobType}</p>
                       <div className="d-flex gap-4 mt-auto justify-content-center">
                        <Link to={`/jobs/${job._id}`} className="btn btn-primary ">See Details</Link>
                                        
                       <Link onClick = {()=>handleDelete(`${job._id}`)} className="btn btn-outline-danger">Delete</Link>
                       </div>

                    </div>

                </div>
            ))}

        </div>
        </div>
       : 
                    <div>
                    { !loading && <div className="text-center">
                        <img className="img-fluid " 
                        alt = ""
                        style ={{height: "35rem", width: "45rem"}} src = "https://media.istockphoto.com/id/1220109413/vector/no-job-icon-with-red-traffic-sign.jpg?s=612x612&w=0&k=20&c=Z7SH2V61PYk6mh-24Grap4hZo911wOZT1_e1kikh8Ew="/>
                    </div>
                    }
                    </div>
      
        }
        
    </div>
    <Footer/>
    </div>
   
   
};

export default JobsList;
