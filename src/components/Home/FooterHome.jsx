import "../../style/FooterHome.css";
import { FiPlus } from "react-icons/fi";
import { Container, NavDropdown } from "react-bootstrap";

const FooterHome = () => {
    return (
        <Container id="footerHome" className="text-center text-secondary my-3">
            <div className="mb-2">
                <a href="www" className="mx-2 afooter">
                    Informazioni
                </a>
                <a href="www" className="mx-2 afooter">
                    Accessibilità
                </a>
            </div>
            <div className="mb-2 d-flex">
                <a href="www" className="afooter mx-3">
                    Centro Assistenza
                </a>
                <NavDropdown title="Privacy e condizioni" className="afooter">
                    <NavDropdown.Item href="www" className="droprivacy">
                        Informativa sulla privacy
                    </NavDropdown.Item>
                    <NavDropdown.Item href="www" className="droprivacy">
                        Contratto di licenza
                    </NavDropdown.Item>
                    <NavDropdown.Item href="www" className="droprivacy">
                        Termini e condizioni delle pagine
                    </NavDropdown.Item>
                    <NavDropdown.Item href="www" className="droprivacy">
                        Informativa sui cookie
                    </NavDropdown.Item>
                    <NavDropdown.Item href="www" className="droprivacy">
                        Informativa sul copyright
                    </NavDropdown.Item>
                </NavDropdown>
            </div>
            <div className="mb-2">
                <a href="www" className="afooter">
                    Opzioni per gli annunci pubblicitari
                </a>
            </div>
            <div className="mb-2 d-flex">
                <a href="www" className="afooter ms-5 me-3">
                    Pubblicità
                </a>

                <NavDropdown title="Servizi alle aziende" className="afooter ">
                    <NavDropdown.Item href="www" className="drophover">
                        <h6 className="m-0 hdrop text-black">
                            Assumi su LinkedIn
                        </h6>
                        <small>
                            <span className="text-secondary">
                                Trova, attrai e assumi
                            </span>
                        </small>
                    </NavDropdown.Item>
                    <NavDropdown.Item href="www" className="drophover">
                        <h6 className="m-0 hdrop text-black">
                            Vendi con LinkedIn
                        </h6>
                        <small>
                            <span className="text-secondary">
                                Sblocca nuove opportunità di <br />
                                vendita
                            </span>
                        </small>
                    </NavDropdown.Item>
                    <NavDropdown.Item href="www" className="drophover">
                        <h6 className="m-0 hdrop text-black">
                            Offerta di lavoro gratuita
                        </h6>
                        <small>
                            <span className="text-secondary">
                                Raggiungi i migliori candidati con la <br /> tua
                                offerta di lavoro
                            </span>
                        </small>
                    </NavDropdown.Item>
                    <NavDropdown.Item href="www" className="drophover">
                        <h6 className="m-0 hdrop text-black">
                            Fai Pubblicità su LinkedIn
                        </h6>
                        <small>
                            <span className="text-secondary">
                                Acquisisci clienti e fai crescere la <br /> tua
                                azienda
                            </span>
                        </small>
                    </NavDropdown.Item>
                    <NavDropdown.Item href="www" className="drophover">
                        <h6 className="m-0 hdrop text-black">
                            Impara con LinkedIn
                        </h6>
                        <small>
                            <span className="text-secondary">
                                Corsi per formare i tuoi dipendenti
                            </span>
                        </small>
                    </NavDropdown.Item>
                    <NavDropdown.Item href="www" className="drophover">
                        <h6 className="m-0 hdrop text-black">
                            Centro amministrazione
                        </h6>
                        <small>
                            <span className="text-secondary">
                                Gestisci i dettagli di fatturazione <br /> e
                                account
                            </span>
                        </small>
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item
                        href="www"
                        className="dropdown-text2 d-flex align-items-center"
                    >
                        <h6 className="ms-2 drophover  creapagina ">
                            Crea una pagina aziendale
                        </h6>
                        <FiPlus className="me-1 my-2 ms-1" />
                    </NavDropdown.Item>
                </NavDropdown>
            </div>
            <div className="mb-3">
                <a href="www" className="mx-2 afooter">
                    Scarica l'app Linkedin
                </a>
                <a href="www" className="mx-2 afooter">
                    Altro
                </a>
            </div>
            <div className="mb-1">
                <img
                    src="https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Logo.svg.original.svg"
                    alt="logo"
                    height={14}
                    style={{ display: "inline" }}
                />
                <span className="text-dark">
                    LinkedIn Corporation © {new Date().getFullYear()}
                </span>
            </div>
        </Container>
    );
};

export default FooterHome;
