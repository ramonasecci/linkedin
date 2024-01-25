import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const JobDetails = () => {
    const params = useParams()
    console.log(params)
    const { id } = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const [details, setDetails] = useState(null);

    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWFlM2FkOTYwMGJlMTAwMTgzYTg2OTUiLCJpYXQiOjE3MDU5MTcxNDUsImV4cCI6MTcwNzEyNjc0NX0.mVn1na9dJNZSG6UN1Yo40hQT9w8Yg0AUp8jP1aEqOkU';

    const getJobsDetails = async () => {
        try {
            const response = await fetch(`https://strive-benchmark.herokuapp.com/api/jobs?search=${id}`, {
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
            setIsError(false);
            setDetails(data.data[0]);
            setIsLoading(false);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        getJobsDetails();
    }, []);

    return (
        <>
            {details && (
            <div style={{ marginTop: '100px' }}>
                <h1>{details.title}</h1>
                <h3>{details.company_name}</h3>
                <h5>{details.category}</h5>
                <div dangerouslySetInnerHTML={{ __html: details.description }} />
            </div>
                
            )}
        </>
    );
};

export default JobDetails;
