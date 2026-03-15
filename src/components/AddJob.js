import { useState } from "react";
import HeaderWithoutSearch from "../constants/HeaderWithoutSearch";
import Footer from "../constants/Footer";
import { useNavigate } from "react-router-dom";
import useAddJobContext from "../context/AddJobContext";
const AddJob = () => {

    const {handleAddJob, title, setTitle, companyName, setCompanyName, location, setLocation
    , salary, setSalary, jobType, setJobType, description, setDescription, qualification, setQualification} = useAddJobContext();

//     const navigate = useNavigate();

//   const [title, setTitle] = useState("");
//   const [companyName, setCompanyName] = useState("");
//   const [location, setLocation] = useState("");
//   const [salary, setSalary] = useState(0);
//   const [jobType, setJobType] = useState("Full Time (OnSite)");
//   const [description, setDescription] = useState("");
//   const [qualification, setQualification] = useState("");

//   const handleAddJob = async (e) => {
//     e.preventDefault();

//     const payload = {
//         jobTitle: title,
//         companyName,
//         location,
//         salary,
//         jobType,
//         jobDescription: description,
//         qualifications: qualification

//     }
//     console.log(payload)

//     try{
//         const response = await fetch("http://localhost:3000/jobs", {
//             method: "POST",
//             headers: {
//                 "Content-Type" : "application/json"
//             },
//             body: JSON.stringify(payload)
//         })

//         if(!response.ok){
//             throw new Error ("Unable to add Job")
//         }

//         const data = await response.json();

//         console.log(data);
//         navigate("/jobs"); 
        
//     }catch(error){
//         console.error("Submission failed:", error);
//         alert("Failed to add job");

//     }
//   };

  return (
    <div className="d-flex flex-column min-vh-100">
    <HeaderWithoutSearch/>

    <div className="container mb-5 flex-grow-1">
        {/* <HeaderWithoutSearch/> */}

      <h2>Add Job</h2>
      <form onSubmit={handleAddJob} className="form-control">
        <label  className="form-label">Job Title: </label>
        <br />
        <input
          required
          className="form-control"
          type="text"
          onChange={(e) => setTitle(e.target.value)}
        />{" "}
        <br />
        <label className="form-label">Company Name: </label>
        <br />
        <input
        required
          type="text"
          className="form-control"
          onChange={(e) => setCompanyName(e.target.value)}
        />{" "}
        <br />
        <label className="form-label">Location: </label>
        <br />
        <input
        required
          className="form-control"
          type="text"
          onChange={(e) => setLocation(e.target.value)}
        />{" "}
        <br />
        <label className="form-label">Salary: </label>
        <br />
        <input
        required
          className="form-control"
          type="number"
          onChange={(e) => setSalary(Number(e.target.value))}
        />{" "}
        <br />
        <label className="form-label">JobType: </label>
        <br />
        {/* <input type="text" /> <br /> */}
        <select
          className="form-select"
          value={jobType}
          onChange={(e) => setJobType(e.target.value)}
        >
          <option value="Full Time (OnSite)">Full Time (OnSite)</option>
          <option value="Full Time (Remote)">Full Time (Remote)</option>
          <option value="Part Time (OnSite)">Part Time (OnSite)</option>
          <option value="Part Time (Remote)">Part Time (Remote)</option>
        </select>
        <br />
        <label className="form-label">Job Description: </label>
        <br />
        <input
        required
          className="form-control"
          onChange={(e) => setDescription(e.target.value)}
          type="text"
        />{" "}
        <br />
        <label className="form-label">Qualifications (FullStop separated items): </label>
        <br />
        <input
        placeholder="Backend Development. Business Analysis. 1+ year experience"
        required
          className="form-control"
          onChange={(e) => setQualification(e.target.value)}
          type="text"
        />{" "}
        <br />
        <button type="submit" className="btn btn-primary">
          {" "}
          Add Job
        </button>
      </form>
    </div>
    <Footer/>
    </div>
  );
};

export default AddJob;
