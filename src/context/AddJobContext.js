import { createContext, useContext } from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {toast} from "react-toastify"

const AddJobContext = createContext();
const useAddJobContext = () => useContext(AddJobContext);
export default useAddJobContext;

export function AddJobProvider({children}){
    const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [location, setLocation] = useState("");
  const [salary, setSalary] = useState(0);
  const [jobType, setJobType] = useState("Full Time (OnSite)");
  const [description, setDescription] = useState("");
  const [qualification, setQualification] = useState("");

  const handleAddJob = async (e) => {
    e.preventDefault();

    const payload = {
        jobTitle: title,
        companyName,
        location,
        salary,
        jobType,
        jobDescription: description,
        qualifications: qualification

    }
    console.log(payload)

    try{
        const response = await fetch(`${process.env.REACT_APP_API_URL}/jobs`, {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(payload)
        })

        if(!response.ok){
            throw new Error ("Unable to add Job")
        }

        const data = await response.json();

        console.log(data);
        toast.success("Job Added Successfully!!")
        navigate("/jobs"); 
        
    }catch(error){
        console.error("Submission failed:", error);
        toast.error("Failed to add job");

    }
  };


  return <AddJobContext.Provider value = {{handleAddJob, title, setTitle, companyName, setCompanyName, location, setLocation
    , salary, setSalary, jobType, setJobType, description, setDescription, qualification, setQualification}
  }>

    {children}
  </AddJobContext.Provider>

}