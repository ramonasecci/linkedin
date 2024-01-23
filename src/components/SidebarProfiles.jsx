import { useState, useEffect } from "react";
import { Button, Spinner, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";



const SideBarProfiles = () => {

    const [profiles, setProfiles] = useState([])
    const [showOther, setShowOther] = useState(5)
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const navigate = useNavigate()


    const apiUrl = 'https://striveschool-api.herokuapp.com/api/profile/';


    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWFlM2FkOTYwMGJlMTAwMTgzYTg2OTUiLCJpYXQiOjE3MDU5MTcxNDUsImV4cCI6MTcwNzEyNjc0NX0.mVn1na9dJNZSG6UN1Yo40hQT9w8Yg0AUp8jP1aEqOkU';

    const headers = new Headers({
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
    });

    const options = {
        method: 'GET',
        headers: headers,
    };

    const fetchData = async () => {
        try {
            const response = await fetch(apiUrl, options);
            if (!response.ok) {
                setIsError(true)
                setIsLoading(false)
                throw new Error(`Errore nella richiesta: ${response.statusText}`);
            }
            const data = await response.json();
            setProfiles(data)
            console.log(data)
            setIsLoading(false)

        } catch (error) {
            console.error(error);

        }
    };

    useEffect(() => {
        fetchData();
    }, []);


    return (
        <div>
            {isLoading && (
                <div className="text-center mb-2">
                    <Spinner animation="border" variant="info" />
                </div>
            )}
            {isError && (
                <Alert variant="danger" className="text-center">
                    Errore nel recupero delle informazioni
                </Alert>
            )}
            {profiles && (
                profiles.slice(0, showOther).map((profile, i) => (
                    <div key={i}>
                        <p className="text-dark" onClick={() => { navigate(`/profile/${profile._id}`) }} >{profile.name}</p>
                    </div>
                ))
            )}
            {showOther === 20 ? (
                <Button onClick={() => { setShowOther(8); }}>
                    Nascondi
                </Button>
            ) : (
                <Button onClick={() => { setShowOther(20); }}>
                    Mostra Altro
                </Button>
            )}
        </div>

    )
}

export default SideBarProfiles