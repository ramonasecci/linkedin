
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { Alert } from 'react-bootstrap';
import Card from 'react-bootstrap/Card'
import ShowExperience from './ShowExperience';

const Experience = ({ profile }) => {
    const [show, setShow] = useState(false);
    const [experience, setExperience] = useState({
        role: '',
        company: '',
        startDate: '',
        endDate: '',
        description: '',
        area: '',
    });
    const [showAlert, setShowAlert] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const formDataExperienceImg = new FormData();

    const handleClose = () => {
        setShow(false);
        setShowAlert(false);
    };

    const handleShow = () => setShow(true);
    const showExperience = () => setModalExperience(true);
    const closeExperience = () => setModalExperience(false);

    const [modalExperience, setModalExperience] = useState(false);



    const handleInputChange = (property, value) => {
        setExperience({
            ...experience,
            [property]: value,
        });
    };

    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWFlM2FkOTYwMGJlMTAwMTgzYTg2OTUiLCJpYXQiOjE3MDU5MTcxNDUsImV4cCI6MTcwNzEyNjc0NX0.mVn1na9dJNZSG6UN1Yo40hQT9w8Yg0AUp8jP1aEqOkU';


    // AGGIUNGE ESPERIENZA
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch(
                `https://striveschool-api.herokuapp.com/api/profile/${profile._id}/experiences`,
                {
                    method: 'POST',
                    body: JSON.stringify(experience),
                    headers: {
                        Authorization: `Bearer ${token}`,
                        'Content-Type': 'application/json',
                    },
                }
            );
            if (res.ok) {
                setExperience({
                    role: '',
                    company: '',
                    startDate: '',
                    endDate: '',
                    description: '',
                    area: '',
                });
                setShowAlert(true);
            } else {
                throw new Error('Errore nel salvataggio dell\'esperienza');
            }
        } catch (error) {
            console.log('Errore:', error);
        }
    };

   

    return (
        <>
            <Card className="mb-3">
                <Card.Body>
                    <div className="d-flex justify-content-between">
                        <Card.Title>Esperienza</Card.Title>
                        <div>
                            <i
                                type="button"
                                className="bi bi-plus-lg px-3"
                                onClick={showExperience}
                            >aggiungi</i>
                        </div>
                    </div>

                    <Modal show={modalExperience} onHide={closeExperience}>
                        <Modal.Header closeButton>
                            <Modal.Title>Aggiungi nuova esperienza</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form >
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label className="mb-1">Ruolo ricoperto</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Inserisci il ruolo ricoperto..."
                                        value={experience.role}
                                        onChange={(e) => handleInputChange('role', e.target.value)}
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label className="mb-1">Nome azienda</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Inserisci il nome dell'azienda..."
                                        value={experience.company}
                                        onChange={(e) => handleInputChange('company', e.target.value)}
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label className="mb-1">Descrizione</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Inserisci la descrizione del lavoro svolto..."
                                        value={experience.description}
                                        onChange={(e) => handleInputChange('description', e.target.value)}
                                    />

                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label className="mb-1">Località</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Inserisci la località..."
                                        value={experience.area}
                                        onChange={(e) => handleInputChange('area', e.target.value)}
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label className="mb-1">Data di inizio</Form.Label>
                                    <Form.Control
                                        type="date"
                                        value={experience.startDate}
                                        onChange={(e) => handleInputChange('startDate', e.target.value)}
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label className="mb-1">Data di fine</Form.Label>
                                    <Form.Control
                                        type="date"
                                        value={experience.endDate}
                                        onChange={(e) => handleInputChange('endDate', e.target.value || "ancora in corso")}
                                    />
                                </Form.Group>
                            </Form>
                        </Modal.Body>
                        <Modal.Footer className="d-flex justify-content-center">
                            <Button
                                variant="primary"
                                type='submit'
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleSubmit(e)
                                    closeExperience();
                                    
                                }}
                            >
                                Aggiungi esperienza
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </Card.Body>
            </Card>
            <ShowExperience profile={profile} />

        </>
    )
}
{/* 

                    {experiences.sort((a, b) => new Date(b.startDate) - new Date(a.startDate)).map((experience, index) => {
                        let startDate = new Date(experience.startDate);
                        let startYear = startDate.getFullYear();
                        let endDate = new Date(experience.endDate);
                        let endYear = endDate.getFullYear();
                        return (
                            
                        );
                    })}
                </Card.Body>
            </Card>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Change Experience Image</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="formFile" className="mb-3">
                            <Form.Label>Choose a pic.</Form.Label>
                            <Form.Control
                                type="file"
                                onChange={(e) => {
                                    file = e.target.files[0];
                                    formData.append("experience", file);
                                }}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button
                        variant="primary"
                        onClick={() => {
                            changeExperiencePic(selectedExperienceId);
                            handleClose();
                        }}
                    >
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
            {experienceModInfo && (
                <Modal show={modalModifyExperience} onHide={closeExperienceMod}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modifica esperienza</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label className="mb-1">Ruolo ricoperto</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={experienceModInfo.role}
                                    onChange={e => {
                                        setExperienceModInfo({
                                            role: e.target.value,
                                            company: experienceModInfo.company,
                                            startDate: experienceModInfo.startDate,
                                            endDate: experienceModInfo.endDate, // could be null
                                            description: experienceModInfo.description,
                                            area: experienceModInfo.area,
                                        })
                                        //console.log(experienceModInfo.role)
                                    }}

                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label className="mb-1">Nome azienda</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={experienceModInfo.company}
                                    onChange={e => {
                                        setExperienceModInfo({
                                            role: experienceModInfo.role,
                                            company: e.target.value,
                                            startDate: experienceModInfo.startDate,
                                            endDate: experienceModInfo.endDate, // could be null
                                            description: experienceModInfo.description,
                                            area: experienceModInfo.area,
                                        })
                                    }}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label className="mb-1">Descrizione</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={experienceModInfo.description}
                                    onChange={e => {
                                        setExperienceModInfo({
                                            role: experienceModInfo.role,
                                            company: experienceModInfo.company,
                                            startDate: experienceModInfo.startDate,
                                            endDate: experienceModInfo.endDate, // could be null
                                            description: e.target.value,
                                            area: experienceModInfo.area,
                                        })
                                    }}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label className="mb-1">Località</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={experienceModInfo.area}
                                    onChange={e => {
                                        setExperienceModInfo({
                                            role: experienceModInfo.role,
                                            company: experienceModInfo.company,
                                            startDate: experienceModInfo.startDate,
                                            endDate: experienceModInfo.endDate, // could be null
                                            description: experienceModInfo.description,
                                            area: e.target.value,
                                        })
                                    }}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label className="mb-1">Data di inizio</Form.Label>
                                <Form.Control
                                    type="date"
                                    value={experienceModInfo.startDate.slice(0, 10)}
                                    onChange={e => {
                                        setExperienceModInfo({
                                            role: experienceModInfo.role,
                                            company: experienceModInfo.company,
                                            startDate: e.target.value,
                                            endDate: experienceModInfo.endDate, // could be null
                                            description: experienceModInfo.description,
                                            area: experienceModInfo.area,
                                        })
                                    }}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label className="mb-1">Data di fine</Form.Label>
                                <Form.Control
                                    type="date"
                                    value={experienceModInfo.endDate ? experienceModInfo.endDate.slice(0, 10) : null}
                                    onChange={e => {
                                        setExperienceModInfo({
                                            role: experienceModInfo.role,
                                            company: experienceModInfo.company,
                                            startDate: experienceModInfo.startDate,
                                            endDate: e.target.value, // could be null
                                            description: experienceModInfo.description,
                                            area: experienceModInfo.area,
                                        })
                                    }}
                                />
                            </Form.Group>
                            <Form.Group controlId="formFile" className="mb-3">
                                <Form.Label className="mb-1">Allega un'immagine</Form.Label>
                                <Form.Control
                                    type="file"
                                    onChange={(e) => {
                                        file = e.target.files[0];
                                        ModifyFormData.append("experience", file);
                                    }}
                                />
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer className="d-flex justify-content-center">
                        <Button
                            variant="primary"
                            onClick={() => {
                                fillInputExperience()
                                closeExperienceMod();
                                console.log(idExperience)
                            }}
                        >
                            Modifica esperienza
                        </Button>
                    </Modal.Footer>
                </Modal>
            )}


        </>
            {
        showAlert === true && (
            <Alert variant="info">Esperienza salvata</Alert>
        )
    }
            <Button variant="primary" onClick={handleShow}>
                Aggiungi Esperienza
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Aggiungi Esperienza</Modal.Title>
                </Modal.Header>
                <Form onSubmit={handleSubmit}>
                    <Modal.Body>
                        <Form.Group className="mb-3">
                            <Form.Label>Qualifica</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Qualifica"
                                required
                                value={experience.role}
                                onChange={(e) => handleInputChange('role', e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Azienda</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Azienda"
                                required
                                value={experience.company}
                                onChange={(e) => handleInputChange('company', e.target.value)}
                            />
                        </Form.Group>
                        <div className='d-flex '>
                            <Form.Group className="mb-3 me-4">
                                <Form.Label>Data inizio</Form.Label>
                                <Form.Control
                                    type="date"
                                    placeholder="Data inizio"
                                    required
                                    value={experience.startDate}
                                    onChange={(e) => handleInputChange('startDate', e.target.value)}
                                />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Data fine</Form.Label>
                                <Form.Control
                                    type="date"
                                    placeholder="Data fine"
                                    value={experience.endDate}
                                    onChange={(e) => handleInputChange('endDate', e.target.value || "ancora in corso")}
                                />

                            </Form.Group>
                        </div>
                        <Form.Group className="mb-3">
                            <Form.Label>Descrizione</Form.Label>
                            <Form.Control
                                as="textarea"
                                placeholder="Descrizione"
                                value={experience.description}
                                onChange={(e) => handleInputChange('description', e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Località</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Località"
                                required
                                value={experience.area}
                                onChange={(e) => handleInputChange('area', e.target.value)}
                            />
                        </Form.Group>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Chiudi
                        </Button>
                        <Button variant="primary" type="submit" onClick={handleClose}>
                            Aggiungi
                        </Button>
                    </Modal.Footer>
                </Form>
            </Modal >
        </> */}
  
export default Experience;
