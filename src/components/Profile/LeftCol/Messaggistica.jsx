import "../../../style/Messaggistica.css";
import { Card, Dropdown } from "react-bootstrap";
import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { GiSettingsKnobs } from "react-icons/gi";
import {Button } from "react-bootstrap"

const Messaggistica = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);

    };

    const containerHeight = dropdownOpen ? "90vh" : "auto";

    return (
        <div id="messaggistica">
            <div
                style={{
                    height: containerHeight,
                }}
            >
                <Card className="d-flex messaggistica">
                    <Card.Header className="pt-2 pb-2 px-1">
                        <div className="d-flex justify-content-between">
                            <div className="d-flex align-items-center mb-2">
                                <img
                                    src="https://ec.europa.eu/info/funding-tenders/opportunities/portal/assets/img/user-icon.png"
                                    alt="placeholder"
                                    className="rounded-circle me-1 ms-0 mb-1"
                                    style={{ width: "30px" }}
                                />
                                <h6 className="m-0 ms-1 me-5 h6mess">
                                    Messaggistica
                                </h6>
                            </div>
                            <div className="d-flex justify-content-center align-items-center mb-2">
                                <Dropdown.Toggle
                                    variant="link"
                                    id="dropdown-basic"
                                    className="dropdown-icon messa"
                                    onClick={toggleDropdown}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        fill="#4a4a4a"
                                        className="bi bi-three-dots me-3"
                                        viewBox="0 0 16 16"
                                    >
                                        <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                                    </svg>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        fill="#4a4a4a"
                                        className="bi bi-pencil-square me-3"
                                        viewBox="0 0 16 16"
                                    >
                                        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                        <path
                                            fillRule="evenodd"
                                            d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                                        />
                                    </svg>
                                </Dropdown.Toggle>
                            </div>
                        </div>
                    </Card.Header>

                    {dropdownOpen && (
                        <Card.Body className="cardbody">
                            <div className="search-container pt-0">
                                <BsSearch className="search-icon" />
                                <input
                                    type="text"
                                    placeholder="Cerca messaggi"
                                    className="messearch"
                                />
                                <GiSettingsKnobs className="option-icon" />
                            </div>
                            <div
                                style={{
                                    textAlign: "center",
                                }}
                            >
                                <div>
                                    <img
                                        src="https://i.kym-cdn.com/photos/images/original/000/883/622/d2e.png"
                                        alt="FeelsBadMan"
                                        style={{
                                            width: "250px",
                                            marginTop: "30px",
                                        }}
                                    />
                                    <h4
                                        className="text-secondary mt-4 text-dark"
                                        style={{ display: "block" }}
                                    >
                                        Ancora nessun <br />
                                        messaggio
                                    </h4>
                                    <p
                                        className="text-secondary my-4 text-dark"
                                        style={{ display: "block" }}
                                    >
                                        Entra in contatto e dai il via a una
                                        <br />
                                        conversazione per far decollare la
                                        <br />
                                        tua carriera
                                    </p>
                                    <Button
                                        className="btn btn-outline-dark rounded-pill text-secondary buttonPepe d-flex align-items-center justify-content-center m-auto"
                                    >
                                        Invia un messaggio
                                    </Button>
                                </div>
                            </div>
                        </Card.Body>
                    )}
                </Card>
            </div>
        </div>
    );
};

export default Messaggistica;
