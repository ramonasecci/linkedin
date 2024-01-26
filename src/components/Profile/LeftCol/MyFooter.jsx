import "../../../style/MyFooterProf.css";
import { FaQuestionCircle } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { IoShieldHalf } from "react-icons/io5";
import { Col, Row, NavDropdown } from "react-bootstrap";

const MyFooter = () => {
    return (
        <>
            <Row className="footer w-100 bottom">
                <Col xs={6} className="footer-col">
                    <ul className="d-flex ps-0 mt-5">
                        <Col className="firstcol" xs={4}>
                            <li className="lif">
                                <a
                                    className="lia"
                                    href="https://about.linkedin.com/it-it"
                                >
                                    Informazioni
                                </a>
                            </li>
                            <li className="lif">
                                <a
                                    className="lia"
                                    href="https://it.linkedin.com/legal/professional-community-policies?"
                                >
                                    Linee guida della comunity{" "}
                                </a>
                            </li>
                            <li className="lif">
                                <small>
                                    <NavDropdown
                                        className="privacy mb-3"
                                        title="Privacy e condizioni"
                                    >
                                        <NavDropdown.Item
                                            href="www"
                                            className="dropdown-text"
                                        >
                                            Informazioni sulla privacy
                                        </NavDropdown.Item>
                                        <NavDropdown.Item
                                            href="www"
                                            className="dropdown-text"
                                        >
                                            Contratto di licenza
                                        </NavDropdown.Item>
                                        <NavDropdown.Item
                                            href="www"
                                            className="dropdown-text"
                                        >
                                            Termini e condizioni delle pagine
                                        </NavDropdown.Item>
                                        <NavDropdown.Item
                                            href="www"
                                            className="dropdown-text"
                                        >
                                            Informativa sui coockie
                                        </NavDropdown.Item>
                                        <NavDropdown.Item
                                            href="www"
                                            className="dropdown-text"
                                        >
                                            Informativa sul copyright
                                        </NavDropdown.Item>
                                    </NavDropdown>
                                </small>
                            </li>
                            <li className="lif">
                                <a
                                    className="lia"
                                    href="https://business.linkedin.com/sales-solutions?trk=flagship_nav&veh=li-footer-lss-control&src=li-footer"
                                >
                                    Sales Solutions
                                </a>
                            </li>
                            <li className="lif">
                                <a
                                    className="lia"
                                    href="https://safety.linkedin.com/"
                                >
                                    Centro sicurezza
                                </a>
                            </li>
                        </Col>

                        <Col className="secondcol" xs={4}>
                            <li className="lif">
                                <a
                                    className="lia"
                                    href="https://it.linkedin.com/accessibility?"
                                >
                                    Accessibilità
                                </a>
                            </li>
                            <li className="lif">
                                <a
                                    className="lia"
                                    href="https://careers.linkedin.com/"
                                >
                                    Carriera
                                </a>
                            </li>
                            <li className="annunci mb-1">
                                <a
                                    className="lia"
                                    href="https://www.linkedin.com/help/linkedin/answer/a1342443?lang=it"
                                >
                                    Opzioni per gli annunci <br />
                                    pubblicitari
                                </a>
                            </li>
                            <li className="lif">
                                <a
                                    className="lia"
                                    href="https://mobile.linkedin.com/it-it"
                                >
                                    Mobile
                                </a>
                            </li>
                        </Col>

                        <Col className="thirdcol" xs={4}>
                            <li className="lif">
                                <a
                                    className="lia"
                                    href="https://business.linkedin.com/it-it/talent-solutions?trk=flagship_nav&veh=li-footer-lts-control-it-it&src=li-footer"
                                >
                                    Talent Solutions
                                </a>
                            </li>
                            <li className="lif">
                                <a
                                    className="lia"
                                    href="https://business.linkedin.com/it-it/marketing-solutions?trk=n_nav_lms_f&src=li-footer"
                                >
                                    Soluzioni di marketing
                                </a>
                            </li>
                            <li className="lif">
                                <a
                                    className="lia"
                                    href="https://business.linkedin.com/it-it/marketing-solutions/ads?trk=n_nav_ads_f"
                                >
                                    Pubblicità
                                </a>
                            </li>
                            <li className="lif">
                                <a
                                    className="lia"
                                    href="https://business.linkedin.com/grow?&src=li-footer"
                                >
                                    Piccole impresa
                                </a>
                            </li>
                        </Col>
                    </ul>
                </Col>
                <Col className="mt-5" xs={3}>
                    <Row>
                        <Col md={1}>
                            <FaQuestionCircle className="footericon" />
                        </Col>
                        <Col md={10} className="ms-1">
                            <h6 className="h6foot mb-0">
                                <a
                                    className="lia"
                                    href="https://www.linkedin.com/help/linkedin?trk=d_flagship3_profile_view_base"
                                >
                                    Domande?
                                </a>
                            </h6>
                            <p className="footerp">
                                Visita il nostro Centro assistenza.
                            </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={1}>
                            <IoMdSettings className="footericon" />
                        </Col>
                        <Col md={10} className="ms-1">
                            <h6 className="h6foot mb-0">
                                <a
                                    className="lia"
                                    href="https://www.linkedin.com/help/linkedin?trk=d_flagship3_profile_view_base"
                                >
                                    Gestisci il tuo account e la tua privacy
                                </a>
                            </h6>
                            <p className="footerp">Vai alle impostazioni</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={1}>
                            <IoShieldHalf className="footericon" />
                        </Col>
                        <Col md={10} className="ms-1">
                            <h6 className="h6foot mb-0">
                                <a
                                    className="lia"
                                    href="https://www.linkedin.com/help/linkedin?trk=d_flagship3_profile_view_base"
                                >
                                    Trasparenza sui contenuti consigliati
                                </a>
                            </h6>
                            <p className="footerp">
                                Scopri di più sui contenuti consigliati.
                            </p>
                        </Col>
                    </Row>
                </Col>
                <Col xs={3} className="mt-5 p-0">
                    <label className="footerp">Seleziona lingua</label>
                    <br />
                    <select name="language" className="selectlang mt-1">
                        <option value="0"> Italiano (Italiano) </option>
                        <option value="0"> Spagnolo </option>
                        <option value="1"> Inglese</option>
                        <option value="2">Francese</option>
                        <option value="3">Arabo</option>
                        <option value="4">Coreano</option>
                        <option value="5">Tedesco</option>
                        <option value="6">Danese </option>
                        <option value="7">Portoghese</option>
                        <option value="8">Russo</option>
                    </select>
                </Col>
                <span className="copy mb-4">
                    LinkedIn Corporation © {new Date().getFullYear()}
                </span>
            </Row>
        </>
    );
};

export default MyFooter;
