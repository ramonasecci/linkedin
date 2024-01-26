import "bootstrap/dist/css/bootstrap.min.css";
import "../../../style/MyAnalisi.css";
import { IoEyeSharp } from "react-icons/io5";
import { MdPeopleAlt } from "react-icons/md";
import { Card, CardBody, CardFooter } from "react-bootstrap";

const MyAnalisi = () => {
    return (
        <Card className="mb-2">
            <CardBody className="p-0 ps-4 pt-4">
                <div>
                    <h5 className="mb-0 ">Analisi</h5>
                    <div className="d-flex align-items-baseline opacity-50 ">
                        <div>
                            <IoEyeSharp className="analisieye"/>
                        </div>
                        <p className="ms-2 soloperte">Solo per te</p>
                    </div>
                </div>
                <div>
                    <div className="d-flex align-items-baseline">
                        <div>
                            <MdPeopleAlt className="peopleicon" />
                        </div>
                        <div className="ms-2">
                            <p className="fw-semibold mb-0 text-underline">
                                0 visualizzazioni del profilo
                            </p>
                            <p className="font-size-small">
                                Aggiorna il tuo profilo per <br /> attrarre
                                visitatori.
                            </p>
                        </div>
                    </div>
                </div>
            </CardBody>
            <CardFooter className="box-gray fw-semibold">
                <p className="mb-0 mostra">Mostra tutte le analisi ➝</p>
            </CardFooter>
        </Card>
    );
};

export default MyAnalisi;
