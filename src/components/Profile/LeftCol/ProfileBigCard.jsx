import "../../../style/ProfileBigCard.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import {Row, Col} from "react-bootstrap";
import { useState } from "react";
import { MdAddAPhoto } from "react-icons/md";
import { LuPencil } from "react-icons/lu";
import Form from "react-bootstrap/Form";

const ProfileBigCard = ({ profile }) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <div className="ProfileBigCardContainer">
                <div className="profileBigCardCoverContainer">
                    <div className="photodiv">
                        <MdAddAPhoto className="photoicon" />
                    </div>
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
                        <Modal.Title className="aggiungifoto">
                            Aggiungi foto
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group controlId="formFile" className="mb-3">
                                <Form.Label>Seleziona</Form.Label>
                                <Form.Control type="file" />
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button
                            className="px-2 py-1 me-5 fw-bold fotogrammi"
                            onClick={handleClose}
                        >
                            Fotogrammi
                        </Button>
                        <Button
                            className="rounded-pill px-3 py-1 me-1 ms-4 fw-bold usafotocamera"
                            onClick={handleClose}
                        >
                            Usa fotocamera
                        </Button>
                        <Button
                            className="rounded-pill px-3 py-1 me-2 fw-bold disponibile"
                            variant="primary"
                            onClick={() => {
                                handleClose();
                            }}
                        >
                            Carica foto
                        </Button>
                    </Modal.Footer>
                </Modal>

                <div className="profileBigCardTextContainer">
                    <div className="pencildiv">
                        <LuPencil className="pencilicon" />
                    </div>
                    <Row className="maxrow">
                        <Col md={8}>
                            <h4 className="mb-0 bigcardname">
                                {profile.name} {profile.surname}
                            </h4>
                        </Col>
                        <Col md={4} className="d-flex align-items-center mt-1">
                            <img src="https://img.pixers.pics/pho_wat(s3:700/FO/12/99/66/51/5/700_FO129966515_3f01a48334a3f31c55463e6c6b1df900.jpg,700,700,cms:2018/10/5bd1b6b8d04b8_220x50-watermark.png,over,480,650,jpg)/poster-grandi-edifici-della-citta-icona-del-disegno-vettoriale-illustrazione.jpg.jpg" alt="edificio" className="edificio" />
                            <small>
                                <a
                                    href="www"
                                    className="mb-0 bigcardname fw-bold worklocation"
                                >
                                    {profile.bio}
                                </a>
                            </small>
                        </Col>
                    </Row>
                    <p className="mb-2 mt-1">
                        {profile.title} presso {profile.bio}
                    </p>

                    <p className="text-secondary mb-2">
                        <small>{profile.area} - </small>{" "}
                        <small
                            className="text-primary fw-bold"
                            style={{ cursor: "pointer" }}
                        >
                            Informazioni di contatto
                        </small>
                    </p>

                    <div className=" my-3 ProfilePicButtons">
                        <button
                            type="button"
                            className="rounded-pill px-3 py-1 btn btn-primary me-2 fw-bold disponibile"
                        >
                            Disponibile per
                        </button>
                        <button
                            type="button"
                            className="rounded-pill px-3 py-1 btn btn-outline-primary me-2 fw-bold sezioneprof"
                        >
                            Aggiungi sezione del profilo
                        </button>
                        <button
                            type="button"
                            className="rounded-pill px-3 py-1 btn btn-outline-secondary fw-bold altro"
                        >
                            Altro
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProfileBigCard