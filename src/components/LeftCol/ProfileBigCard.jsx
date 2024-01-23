import "../../style/ProfileBigCard.css";
import { useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import Form from "react-bootstrap/Form";

const ProfileBigCard = ({ profile }) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <div className="ProfileBigCardContainer">
                <div className="profileBigCardCoverContainer">
                    <img
                        alt="cover"
                        src="https://i.ibb.co/C6zmzQ2/cover-linkedin.jpg"
                    />
                </div>
                <div className="profilepicContainer">
                            <img
                                className="profilepic profilepichover"
                                alt="profilepic"
                                src={profile.image}
                                onClick={handleShow}
                            />
                            <div
                                className="edit-text text-dark"
                                onClick={handleShow}
                                style={{ cursor: "pointer" }}
                            >
                                Edit Image
                            </div>
    
                </div>
                <div className="pencil-right">
                    <i className="bi bi-pencil"></i>
                </div>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Change Profile Image</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group controlId="formFile" className="mb-3">
                                <Form.Label>Choose a pic.</Form.Label>
                                <Form.Control
                                    type="file"
                                    onChange={(e) => {
                                        // const file = e.target.files[0];
                                        // console.log(file);

                                        // formData.append("profile", file);
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
                                // changeProfilePic();
                                handleClose();
                            }}
                        >
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>

                <div className="profileBigCardTextContainer">
                    <h5 className="mb-0">
                        {profile.name} {profile.surname}
                    </h5>
                    <p className="mb-2">
                        <small>{profile.title}</small>
                    </p>
                    <p className="mb-2 text-secondary">
                        <small>{profile.bio} </small>
                    </p>
                    <p className="text-secondary mb-2">
                        <small>{profile.area}</small>
                    </p>
                    <p>
                        <span
                            className="text-primary"
                            style={{ cursor: "pointer" }}
                        >
                            Informazioni di contatto{" "}
                        </span>{" "}
                    </p>
                    <span className="text-primary" style={{ cursor: "pointer" }}>
                        78 collegamenti{" "}
                    </span>
                    <div className=" my-3 ProfilePicButtons">
                        <button
                            type="button"
                            className="rounded-pill px-3 py-1 btn btn-primary me-2"
                        >
                            Disponibile per
                        </button>
                        <button
                            type="button"
                            className="rounded-pill px-3 py-1 btn btn-outline-primary me-2"
                        >
                            Aggiungi sezione del profilo
                        </button>
                        <button
                            type="button"
                            className="rounded-pill px-3 py-1 btn btn-outline-secondary"
                        >
                            Altro
                        </button>
                    </div>
                    <div className="carousel container mt-3">
                        <div className="carouselCard1 d-flex me-2">
                            <div className="carouselTextContainer">
                                <p className="mb-0" style={{ cursor: "pointer" }}>
                                    <strong>Disponibile a lavorare </strong>
                                </p>
                                <p className="mb-0">
                                    Ruoli di Sviluppatore Html5, Sviluppatore{" "}
                                </p>
                                <p
                                    className="mb-0 text-primary"
                                    style={{ cursor: "pointer" }}
                                >
                                    Mostra dettagli
                                </p>
                            </div>
                            <div>
                                <i
                                    className="bi bi-pencil"
                                    style={{ cursor: "pointer" }}
                                ></i>
                            </div>
                        </div>
                        <div className="carouselCard1 d-flex bg-light me-2">
                            <div className="carouselTextContainer">
                                <p className="mb-0">
                                    <strong style={{ cursor: "pointer" }}>
                                        {" "}
                                        Fai sapere che stai facendo selezione
                                    </strong>{" "}
                                    e attrai candidati qualificati.
                                </p>
                                <p
                                    className="mb-0 text-primary"
                                    style={{ cursor: "pointer" }}
                                >
                                    {" "}
                                    Inizia
                                </p>
                            </div>
                            <div>
                                <svg
                                    style={{ cursor: "pointer" }}
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 16 16"
                                    data-supported-dps="16x16"
                                    fill="currentColor"
                                    className="mercado-match"
                                    width="16"
                                    height="16"
                                    focusable="false"
                                >
                                    <path d="M14 3.41L9.41 8 14 12.59 12.59 14 8 9.41 3.41 14 2 12.59 6.59 8 2 3.41 3.41 2 8 6.59 12.59 2z"></path>
                                </svg>
                            </div>
                        </div>

                        <div className="carouselCard1 d-flex bg-light">
                            <div className="carouselTextContainer">
                                <p className="mb-0">
                                    <strong style={{ cursor: "pointer" }}>
                                        Metti in risalto i servizi
                                    </strong>{" "}
                                    che offri, così tu e la tua azienda potrete
                                    apparire nei risultati di ricerca.
                                </p>
                                <p
                                    className="mb-0 text-primary"
                                    style={{ cursor: "pointer" }}
                                >
                                    {" "}
                                    Inizia
                                </p>
                            </div>
                            <div>
                                <svg
                                    style={{ cursor: "pointer" }}
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 16 16"
                                    data-supported-dps="16x16"
                                    fill="currentColor"
                                    className="mercado-match"
                                    width="16"
                                    height="16"
                                    focusable="false"
                                >
                                    <path d="M14 3.41L9.41 8 14 12.59 12.59 14 8 9.41 3.41 14 2 12.59 6.59 8 2 3.41 3.41 2 8 6.59 12.59 2z"></path>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProfileBigCard