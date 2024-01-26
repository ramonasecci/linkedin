import 'bootstrap/dist/css/bootstrap.min.css'
import "../../../style/myPersoneConoscere.css";
import { Card, CardBody, CardFooter } from 'react-bootstrap'
import marco from "../../data/marco.jpg";
import { MdOutlinePersonAddAlt } from "react-icons/md"
import { useNavigate } from "react-router-dom";
import { Spinner, Alert } from "react-bootstrap";
import { useState, useEffect } from "react";

const MyPersoneChePotrestiConoscere = () => {

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

        <Card className="mb-2 p-2">
            <p className="fw-semibold ms-3 pt-3 margin-bottom-0">
                Persone che potresti conoscere
            </p>
            <p className="opacity-50 ms-3 mb-1">Dal tuo settore</p>
            <CardBody className="p-0">
                {profiles && (
                    profiles.slice(0, showOther).map((profile, i) => (
                        <div key={i}>
                            <div className="d-flex ms-3 align-items-center">
                                <img
                                    src={profile.image}
                                    alt="immagine profilo"
                                    className="rounded-circle pointer-cursor marco"
                                />
                                <div className="ms-2 mt-2">
                                    <p className="margin-bottom-0 fw-semibold p-hover">
                                        {profile.name} {profile.surname}
                                    </p>
                                    <small>
                                        <p className="pointer-cursor">{profile.bio}</p>
                                    </small>
                                </div>
                            </div>
                            <div>
                                <div className="d-flex align-items-center justify-content-center border border-dark border-1 rounded-pill  div-box-hover collegati" onClick={() => { navigate(`/profile/${profile._id}`) }}>
                                    <div className="me-1 mb-1">
                                        <MdOutlinePersonAddAlt />
                                    </div>
                                    <p className="margin-bottom-0 my-1 fw-semibold"  >
                                        Collegati
                                    </p>
                                </div>
                            </div>
                            <div className="hrstrano"></div>
                        </div>

                    ))
                )}
                <div className="d-flex ms-3 align-items-center">
                    <img
                        src={marco}
                        alt="immagine profilo"
                        width={80}
                        className="rounded-circle pointer-cursor marco"
                    />
                    <div className="ms-2 mt-2">
                        <p className="margin-bottom-0 fw-semibold p-hover">
                            Markebab Pelato
                        </p>
                        <small>
                            <p className="pointer-cursor">Lanciatore di Coriandoli</p>
                        </small>
                    </div>
                </div>
                <div>
                    <div className="d-flex align-items-center justify-content-center border border-dark border-1 rounded-pill  div-box-hover collegati">
                        <div className="me-1 mb-1">
                            <MdOutlinePersonAddAlt />
                        </div>
                        <p className="margin-bottom-0 my-1 fw-semibold">
                            Collegati
                        </p>
                    </div>
                </div>
            </CardBody>
            {showOther === 5 ? (<CardFooter className="text-center footer-div mt-3" onClick={() => { setShowOther(10); }}>
                <p className="margin-bottom-0 fw-semibold opacity-50 pointer-cursor" >
                    Mostra tutto
                </p>
            </CardFooter>) : (<CardFooter className="text-center footer-div mt-3" onClick={() => { setShowOther(5); }}>
                <p className="margin-bottom-0 fw-semibold opacity-50 pointer-cursor" >
                    Nascondi
                </p>
            </CardFooter>)}
        </Card>
    );
}

export default MyPersoneChePotrestiConoscere