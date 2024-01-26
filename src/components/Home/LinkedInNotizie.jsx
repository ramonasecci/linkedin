import "../../style/LinkedInNotizie.css";
import React, { useState } from "react";
import { BsInfoSquareFill } from "react-icons/bs";
import { MdExpandMore } from "react-icons/md";
import { MdExpandLess } from "react-icons/md";
import {Button} from "react-bootstrap"

const LinkedInNotizie = () => {
    const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  }
    
    return (
        <div className="divnotizie mb-2">
            <div className="d-flex justify-content-between align-items-center mb-3">
                <h6 className="ps-1 pe-1">LinkedIn Notizie</h6>
                <BsInfoSquareFill />
            </div>
            <ul className="ps-4">
                <li className="linotizie mb-2">
                    <p className="pnotizie">
                        I 15 lavori in più rapida crescita in Italia
                    </p>
                    <small>
                        <p className="smallnotizie">
                            Notizie principali - 390 lettori
                        </p>
                    </small>
                </li>

                <li className="linotizie mb-2">
                    <p className="pnotizie">Una Ferrari a vela</p>
                    <small>
                        <p className="smallnotizie">1 giorno fa</p>
                    </small>
                </li>

                <li className="linotizie mb-2">
                    <p className="pnotizie">
                        SONDAGGIO: Cosa valuti di più in un'offerta?
                    </p>
                    <small>
                        <p className="smallnotizie">3 giorno fa</p>
                    </small>
                </li>

                <li className="linotizie mb-2">
                    <p className="pnotizie">Come sta l'industria della pasta</p>
                    <small>
                        <p className="smallnotizie">20 ore fa</p>
                    </small>
                </li>
                <li className="linotizie mb-2">
                    <p className="pnotizie">Conti correnti sempre più cari</p>
                    <small>
                        <p className="smallnotizie">2 giorni fa</p>
                    </small>
                </li>
                <div className={isVisible ? "" : "d-none"}>
                    <li className="linotizie mb-2">
                        <p className="pnotizie">
                            La protesta degli agricoltori si allarga
                        </p>
                        <small>
                            <p className="smallnotizie">22 ore fa</p>
                        </small>
                    </li>
                    <li className="linotizie mb-2">
                        <p className="pnotizie">
                            Per essere più visibili sul lavoro
                        </p>
                        <small>
                            <p className="smallnotizie">4 giorni fa</p>
                        </small>
                    </li>
                    <li className="linotizie mb-2">
                        <p className="pnotizie">
                            Un modello GPT tutto italiano
                        </p>
                        <small>
                            <p className="smallnotizie">17 ore fa</p>
                        </small>
                    </li>
                    <li className="linotizie mb-2">
                        <p className="pnotizie">
                            Via libera al ddl Beneficenza
                        </p>
                        <small>
                            <p className="smallnotizie">1 ora fa</p>
                        </small>
                    </li>
                    <li className="linotizie mb-2">
                        <p className="pnotizie">
                            Le città dei lavori in crescita
                        </p>
                        <small>
                            <p className="smallnotizie">2 ore fa</p>
                        </small>
                    </li>
                </div>
            </ul>
            <div>
                <Button
                    className="buttonot fw-semibold ms-3 p-1 pe-1"
                    onClick={toggleVisibility}
                >
                    {isVisible ? (
                        <>
                            Meno dettagli
                            <MdExpandLess className="expand" />
                        </>
                    ) : (
                        <>
                            Più dettagli
                            <MdExpandMore className="expand" />
                        </>
                    )}
                </Button>
            </div>
        </div>
    );
};

export default LinkedInNotizie;
