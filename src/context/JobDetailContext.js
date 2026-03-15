import { createContext, useContext } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../useFetch";

const JobDetailContext = createContext();
const useJobDetailContext = () => useContext(JobDetailContext);
export default useJobDetailContext;

export function JobDetailProvider({children}){
    const param = useParams();
    const jobId = param.jobId
    // console.log(param)
    const {data, loading, error} = useFetch(`${process.env.REACT_APP_API_URL}/jobs/${jobId}`)
    // console.log(data)

    return <JobDetailContext.Provider 
    value = {{data, loading, error, jobId}}
    >{children}</JobDetailContext.Provider>


}