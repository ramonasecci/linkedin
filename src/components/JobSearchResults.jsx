import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import SingleJob from "./SingleJob"

const JobSearchResults = () =>{
    const [jobs, setJobs] = useState([])
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const {url} = useParams()
    console.log(url)



    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWFlM2FkOTYwMGJlMTAwMTgzYTg2OTUiLCJpYXQiOjE3MDU5MTcxNDUsImV4cCI6MTcwNzEyNjc0NX0.mVn1na9dJNZSG6UN1Yo40hQT9w8Yg0AUp8jP1aEqOkU';

    const getJobs = async () => {
        try {
            const response = await fetch(`https://strive-benchmark.herokuapp.com/api/jobs?${url}`, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
            });

            if (!response.ok) {
                setIsError(true);
                setIsLoading(false);
                throw new Error(`Errore nella richiesta: ${response.statusText}`);
            }

            const data = await response.json();
            setJobs(data.data)
            setIsError(false);
            console.log(jobs)
            ;
            setIsLoading(false);
        } catch (error) {
            console.error(error);
        }
    };


    useEffect(() => {
        getJobs()
    }, [url])

    return (
        <div style={{ marginTop: '100px' }}>
            {Array.isArray(jobs) && jobs.length > 0 && (
                jobs.slice(0, 10).map((job, i) =>
                (<SingleJob job={job} key={i} />)
                )
            )
            }

        </div>
    )
}


export default JobSearchResults