import { useParams } from "react-router-dom";
import useFetch from "../useFetch";
import HeaderWithoutSearch from "../constants/HeaderWithoutSearch";
import Footer from "../constants/Footer";
import useJobDetailContext from "../context/JobDetailContext";

const JobDetails = () => {
    const {data, loading, error, jobId} = useJobDetailContext();

    return <div className="d-flex flex-column min-vh-100">
                <HeaderWithoutSearch/>

        <div className="container mb-5 flex-grow-1">

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

        {data && data.Job && 
        <div>
            <h2>{data.Job.jobTitle}</h2>
            <div className="card p-3 mt-4 border-danger">
                <p><strong>CompanyName: </strong> {data.Job.companyName}</p>
                <p><strong>Location: </strong> {data.Job.location}</p>
                <p><strong>Salary: </strong> {data.Job.salary}</p>
                <p><strong>Description: </strong> {data.Job.jobDescription}</p>
                <p><strong>Qualifications: </strong> 
                    <ol className="mt-2">
                                {data.Job.qualifications
                                    .split(".")
                                    .filter(qualification => qualification.trim() !== "") 
                                    .map((qualification, index) => (
                                        <li key = {index}>{qualification.trim()}</li>
                                    ))
                                }
                    </ol>                
                </p>

            </div>

        </div>
        }
   

    </div>
    <Footer/>
    </div>
}

export default JobDetails;
