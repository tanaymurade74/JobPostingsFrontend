import { createContext, useContext } from "react";
import { useState, useEffect } from "react";
import useFetch from "../useFetch";
import {toast} from "react-toastify"

const JobListContext = createContext();
const useJobListContext = () => useContext(JobListContext);
export default useJobListContext;

export function JobListProvider({children}){
    const [jobsList, setJobsList] = useState([]);
  const [search, setSearch] = useState("");

  const url =
    search.trim() === ""
      ? `${process.env.REACT_APP_API_URL}/jobs`
      : `${process.env.REACT_APP_API_URL}/jobs/search/${search}`;

  const { data, loading, error } = useFetch(url);
  console.log(data);
  console.log(data.Jobs);

  useEffect(() => {
    if (data && data.Jobs) {
      setJobsList(data.Jobs);
    }
  }, [data, url]);

  const handleDelete = async (id) => {
    const filteredJobs = jobsList.filter((job) => job._id != id);
    setJobsList(filteredJobs);

    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/jobs/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const deletedJob = await response.json();
      console.log(deletedJob);
      toast.success("Job Deleted Successfully!!")
    } catch {
        toast.error("Error while deleting job")
    }
  };


  return <JobListContext.Provider value = {{data, loading, error, handleDelete, jobsList, setJobsList, search, setSearch}}>
    {children}
    </JobListContext.Provider>
}