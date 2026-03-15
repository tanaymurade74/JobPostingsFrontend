import { useEffect, useState } from "react"


const useFetch = (url) => {
    const [data, setData] = useState("");
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);

        async function fetchData(){
            
            try{
                const response = await fetch(url,{
                    headers: {
                        "Content-Type": "application/json"
                    }
                })

                const fetchedData = await response.json();
                setData(fetchedData);


            }catch(error){
                setError(error);
            }finally{
                setLoading(false)
            }
        }

        fetchData();

    }, [url])


    return {data, loading, error}
}

export default useFetch;