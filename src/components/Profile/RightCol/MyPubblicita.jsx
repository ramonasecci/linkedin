import 'bootstrap/dist/css/bootstrap.min.css'
import "../../../style/myPubblicita.css";
import { Card, CardBody } from 'react-bootstrap'
import dario from "../../data/dario.png";

const myPubblicita = () => {
    return (
        <div>
            <Card>
                <div className="text-end me-3 mt-2">
                    <p className="fw-semibold">
                        Annuncio{" "}
                        <span className="ms-2 pointer-cursor fw-bold">···</span>
                    </p>
                </div>
                <CardBody className="text-center pt-0">
                    <div className="d-flex justify-content-center">
                        <img
                            src={dario}
                            alt="prof Dario piripiripiri"
                            className="pointer-cursor w-100"
                        />
                    </div>
                    <div className="mt-4">
                        <p className="pointer-cursor fw-semibold fs-4 piripiri">
                            Dona il tuo 5X1000 alla chiesa Epicode
                        </p>
                        <p className="pointer-cursor fw-semibold fs-6">
                            Piripiripiripiripi
                        </p>
                    </div>
                    <button
                        type="button"
                        className="rounded-pill px-3 py-1 btn btn-outline-primary me-2 mt-1 fw-bold sezioneprof"
                    >
                        Dona ora
                    </button>
                </CardBody>
            </Card>
        </div>
    );
}
export default myPubblicita