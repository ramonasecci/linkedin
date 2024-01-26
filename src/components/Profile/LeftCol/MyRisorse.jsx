import 'bootstrap/dist/css/bootstrap.min.css'
import "../../../style/MyRisorse.css";
import { IoEyeSharp } from "react-icons/io5"
import { MdPeopleAlt } from "react-icons/md"
import { FaSatelliteDish } from "react-icons/fa"
import { Card, CardBody, CardFooter } from 'react-bootstrap'

const MyRisorse = () => {
    return (
        <Card className='mb-2'>
            <CardBody className="pb-0">
                <div>
                    <h5 className="margin-bottom-0 fw-bold">Risorse</h5>
                    <div className="d-flex align-items-baseline opacity-50">
                        <div>
                            <IoEyeSharp className="analisieye" />
                        </div>
                        <p className="ms-2 mb-2 soloperte">Solo per te</p>
                    </div>
                </div>
                <div>
                    <div className="d-flex align-items-baseline">
                        <div>
                            <FaSatelliteDish className="sateicon" />
                        </div>
                        <div className="ms-2">
                            <div className="d-flex">
                                <p className="fw-semibold margin-bottom-0 text-underline">
                                    Modalita' creazione di contenuti
                                </p>
                                <span className="rispan ms-2 fw-semibold">
                                    No
                                </span>
                            </div>
                            <p className="font-size-small">
                                Fatti scoprire, metti in risalto i contenuti sul
                                tuo profilo e accedi agli strumenti di creazione
                            </p>
                        </div>
                    </div>
                    <hr className="mt-0" />
                    <div className="d-flex align-items-baseline">
                        <div>
                            <MdPeopleAlt className="peopleicon" />
                        </div>
                        <div className="ms-2">
                            <p className="fw-semibold margin-bottom-0 text-underline">
                                La mia rete
                            </p>
                            <p className="font-size-small">
                                Salva e gestisci i tuoi collegamenti e interessi
                            </p>
                        </div>
                    </div>
                </div>
            </CardBody>
            <CardFooter className="box-gray fw-semibold pb-0 ">
                <p className="mostra mb-2">Mostra tutte le risorse (5) ➝</p>
            </CardFooter>
        </Card>
    );
}

export default MyRisorse