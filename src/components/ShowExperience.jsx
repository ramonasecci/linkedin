import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { Alert, Row, Col, Dropdown } from 'react-bootstrap';
import Card from 'react-bootstrap/Card'


const ShowExperience = ({ profile }) => {

    const [experiences, setExperiences] = useState([])
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    //MOSTRA ESPERIENZE 

    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWFlM2FkOTYwMGJlMTAwMTgzYTg2OTUiLCJpYXQiOjE3MDU5MTcxNDUsImV4cCI6MTcwNzEyNjc0NX0.mVn1na9dJNZSG6UN1Yo40hQT9w8Yg0AUp8jP1aEqOkU';

    const apiUrl = `https://striveschool-api.herokuapp.com/api/profile/${profile._id}/experiences/`;
    const headers = new Headers({
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
    });

    const options = {
        method: 'GET',
        headers: headers,
    };

    const getExpirience = async () => {
        try {
            const response = await fetch(apiUrl, options);
            if (!response.ok) {
                setIsError(true);
                setIsLoading(false);
                throw new Error(`Errore nella richiesta: ${response.statusText}`);
            }
            const data = await response.json();
            setIsError(false)
            setExperiences(data);
            setIsLoading(false);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        getExpirience();
    }, [profile._id]);

    return (
        <>
            {experiences && (
                experiences.map((expe, i) =>
                    <div key={i}>
                        <Card className="my-3 insideCards position-relative">
                            <Row>
                                <Col>
                                    <Card.Body className="p-0">
                                        <p className="fw-bold m-0">{expe.role}</p>
                                        <p className="m-0">{expe.company}</p>
                                        <small className="text-muted">
                                            {expe.startDate} - {expe.endDate ? expe.endDate : "In corso"}
                                        </small>
                                        <p>{expe.description}</p>
                                    </Card.Body>

                                    <div className="dotsDivAbsolute">
                                        <Dropdown>
                                            <Dropdown.Toggle id="dropdown-basic" className="drop">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16">
                                                    <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3" />
                                                </svg>
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu className="p-3 d-flex flex-column">
                                                <div
                                                    className="mb-2 cursor"
                                                    onClick={() => {
                                                        if (
                                                            window.confirm(
                                                                "Vuoi davvero rimuovere questa esperienza"
                                                            )
                                                        ) {
                                                            // cancelExperience(experience._id);
                                                            // console.log("esperienza eliminata");
                                                        }
                                                    }}
                                                >
                                                    Elimina{" "}
                                                </div>
                                                <div className="cursor" onClick={() => {
                                                    // showExperienceMod()
                                                    // setExperienceModInfo(experience)
                                                    // setIdExperience(experience._id)
                                                    // //console.log(experience._id)

                                                }}>Modifica </div>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                                </Col>
                            </Row>
                        </Card>
                        {i !== experiences.length - 1 ? (
                            <hr className="my-4" />
                        ) : null}
                    </div>
                )

            )}



        </>)

}

export default ShowExperience