import "../../../style/MyModale.css";
import { useState } from "react";
import { PiNotePencilFill } from "react-icons/pi";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const MyModale = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <Button variant="trasparent" onClick={handleShow}>
                <div className="d-flex flex-column ">
                    <div className="d-flex justify-content-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            fill="#666666"
                            class="bi bi-grid-3x3-gap-fill"
                            viewBox="0 0 16 16"
                        >
                            <path d="M1 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1zM1 7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1zM1 12a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1z" />
                        </svg>
                    </div>
                    <p className="navicon m-0 mt-1">Per le aziende</p>
                </div>
            </Button>

            <Modal
                size="md"
                className="modale"
                show={show}
                onHide={handleClose}
                dialogClassName="modal-dialog-right"
            >
                <Modal.Header closeButton className="modalsize">
                    <Modal.Title className="ms-2 aziende">
                        Per le aziende
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className="modalsize bodysize">
                    <div className="border rounded-4">
                        <div className="mt-2">
                            <h6 className="ms-4 py-2">
                                Scopri altri prodotti LinkedIn
                            </h6>
                            <hr />
                        </div>
                        <div className="d-flex flex-wrap">
                            <div className="mb-4 div-pointer div-width text-center mx-4">
                                <div className="d-flex justify-content-center border py-2 div-hover-shadow">
                                    <PiNotePencilFill className="modalicon" />
                                </div>
                                <p className="modalp text-secondary">
                                    Pubblica un'offerta di lavoro
                                </p>
                            </div>
                            <div className="mb-4 div-pointer div-width text-center mx-4">
                                <div className="d-flex justify-content-center border py-1 div-hover-shadow">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="38"
                                        height="38"
                                        fill="#0a66c2"
                                        class="bi bi-play-btn"
                                        viewBox="0 0 16 16"
                                    >
                                        <path d="M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814z" />
                                        <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1z" />
                                    </svg>
                                </div>
                                <p className="modalp text-secondary">
                                    Learning
                                </p>
                            </div>
                            <div className="mb-4 div-pointer div-width text-center mx-4">
                                <div className="d-flex justify-content-center border py-2 div-hover-shadow">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="30"
                                        height="30"
                                        fill="#0a66c2"
                                        class="bi bi-clipboard-data"
                                        viewBox="0 0 16 16"
                                    >
                                        <path d="M4 11a1 1 0 1 1 2 0v1a1 1 0 1 1-2 0zm6-4a1 1 0 1 1 2 0v5a1 1 0 1 1-2 0zM7 9a1 1 0 0 1 2 0v3a1 1 0 1 1-2 0z" />
                                        <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1z" />
                                        <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0z" />
                                    </svg>
                                </div>
                                <p className="modalp text-secondary">
                                    Talent Insights
                                </p>
                            </div>

                            <div className="mb-4 div-pointer div-width text-center mx-4">
                                <div className="d-flex justify-content-center border py-2 div-hover-shadow">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="30"
                                        height="30"
                                        fill="#0a66c2"
                                        class="bi bi-bullseye"
                                        viewBox="0 0 16 16"
                                    >
                                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                                        <path d="M8 13A5 5 0 1 1 8 3a5 5 0 0 1 0 10m0 1A6 6 0 1 0 8 2a6 6 0 0 0 0 12" />
                                        <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6m0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8" />
                                        <path d="M9.5 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
                                    </svg>
                                </div>
                                <p className="modalp text-secondary">
                                    Pubblicizza
                                </p>
                            </div>
                            <div className="div-pointer div-width text-center mb-3 mx-4">
                                <div className="d-flex justify-content-center border py-2 div-hover-shadow">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="30"
                                        height="30"
                                        fill="#0a66c2"
                                        class="bi bi-compass"
                                        viewBox="0 0 16 16"
                                    >
                                        <path d="M8 16.016a7.5 7.5 0 0 0 1.962-14.74A1 1 0 0 0 9 0H7a1 1 0 0 0-.962 1.276A7.5 7.5 0 0 0 8 16.016m6.5-7.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0" />
                                        <path d="m6.94 7.44 4.95-2.83-2.83 4.95-4.949 2.83 2.828-4.95z" />
                                    </svg>
                                </div>
                                <p className="modalp text-secondary">
                                    Trova nuovi clienti
                                </p>
                            </div>
                            <div className="div-pointer div-width text-center mx-4">
                                <div className="d-flex justify-content-center border py-2 div-hover-shadow">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="30"
                                        height="30"
                                        fill="#0a66c2"
                                        class="bi bi-people"
                                        viewBox="0 0 16 16"
                                    >
                                        <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1zm-7.978-1L7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002-.014.002zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4m3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0M6.936 9.28a6 6 0 0 0-1.23-.247A7 7 0 0 0 5 9c-4 0-5 3-5 4q0 1 1 1h4.216A2.24 2.24 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816M4.92 10A5.5 5.5 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0m3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4" />
                                    </svg>
                                </div>
                                <p className="modalp text-secondary">Gruppi</p>
                            </div>
                            <div className="div-pointer div-width text-center mx-4">
                                <div className="d-flex justify-content-center border py-2 div-hover-shadow">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="30"
                                        height="30"
                                        fill="#0a66c2"
                                        class="bi bi-check2"
                                        viewBox="0 0 16 16"
                                    >
                                        <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0" />
                                    </svg>
                                </div>
                                <p className="modalp text-secondary">
                                    Marketplace dei servizi
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="border rounded-4">
                        <div className="mt-2">
                            <h6 className="ms-4 py-2">
                                Scopri altro per il business
                            </h6>
                            <hr />
                        </div>
                        <div>
                            <div className="ms-3 lineh">
                                <a
                                    className="modalink"
                                    href="https://www.youtube.com/watch?v=N2B7AA4S5Zw"
                                >
                                    <h6>Assumi su LinkedIn</h6>
                                    <p className="modalp2">
                                        Trova, attrai e assumi
                                    </p>
                                </a>
                            </div>
                            <div className="ms-3 lineh">
                                <a
                                    className="modalink"
                                    href="https://www.youtube.com/watch?v=N3laPUVVQ0U"
                                >
                                    <h6>Vendi con LinkedIn</h6>
                                    <p className="modalp2">
                                        Sblocca nuove opportunita' di vendita
                                    </p>
                                </a>
                            </div>
                            <div className="ms-3 lineh">
                                <a
                                    className="modalink"
                                    href="https://www.youtube.com/shorts/cXYXewofsZU"
                                >
                                    <h6>Offerta di lavoro gratuita</h6>
                                    <p className="modalp2">
                                        Ottieni rapidamente candidati
                                        qualificati
                                    </p>
                                </a>
                            </div>
                            <div className="ms-3 lineh">
                                <a
                                    className="modalink"
                                    href="https://www.youtube.com/watch?v=wDH3AIq1LZo"
                                >
                                    <h6>Fai pubblicita' su LinkedIn</h6>
                                    <p className="modalp2">
                                        Acquisisci clienti e fai crescere la tua
                                        azienda
                                    </p>
                                </a>
                            </div>
                            <div className="ms-3 lineh">
                                <a className="modalink" href="www">
                                    <h6>Impara con LinkedIn</h6>
                                    <p className="modalp2">
                                        Corsi per formare i tuoi dipendenti
                                    </p>
                                </a>
                            </div>
                            <div className="ms-3 lineh">
                                <a className="modalink" href="www">
                                    <h6>Centro amministrazione</h6>
                                    <p className="modalp2">
                                        Gestisci i dettagli di fatturazione e
                                        account
                                    </p>
                                </a>
                            </div>
                            <hr />
                        </div>
                            <div className="d-flex align-items-center ms-3 mb-2">
                                <a className="modalink" href="www">
                                    <h6 className="me-2">
                                        Crea una pagina aziendale
                                    </h6>
                                </a>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="25"
                                    height="25"
                                    fill="currentColor"
                                    class="bi bi-plus-lg"
                                    viewBox="0 0 16 16"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"
                                    />
                                </svg>
                            </div>
                        </div>
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default MyModale;
