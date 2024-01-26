import 'bootstrap/dist/css/bootstrap.min.css'
import "../../../style/myLearning.css";
import { Card, CardBody, CardFooter } from 'react-bootstrap'
import foto from "../../data/marco.jpg";
import logoOf from "../../data/logoOf.png";
import poeta from "../../data/pacciani.jpeg";

const MyLearning = () => {
    return (

            <Card className='mb-2'>
                <div className="d-flex align-items-center">
                        <svg
                            id="logo"
                            className="mt-2 ms-3 bi bi-linkedin"
                            xmlns="http://www.w3.org/2000/svg"
                            width="15"
                            height="15"
                            fill="#0a66c2"
                            viewBox="0 0 16 16"
                        >
                            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                        </svg>

                    <p className="p-title ms-2 mb-2">L E A R N I N G</p>
                </div>
                <CardBody className='py-0'>
                    <p>
                        Aggiungi nuove competenze con questi corsi, gretuiti per
                        24 ore
                    </p>
                    <div className="d-flex">
                        <div className="pointer-cursor">
                            <img src={foto} alt="pubblicita kebab" width={70} />
                        </div>
                        <div className="ms-3 pointer-cursor underline-blue fw-semibold">
                            <p>Diventa un kebabbaro con il nostro corso</p>
                        </div>
                    </div>
                    <hr />
                    <div className="d-flex">
                        <div className="pointer-cursor">
                            <img src={logoOf} alt="of di gaetano" width={70} />
                        </div>
                        <div className="ms-3 pointer-cursor underline-blue fw-semibold">
                            <p>
                                Scopri tutti i segreti di Gaetano per diventare
                                una star di OF come lui!
                            </p>
                        </div>
                    </div>
                    <hr className='mt-0'/>
                    <div className="d-flex">
                        <div className="pointer-cursor">
                            <img src={poeta} alt="se ni mondo" width={70} />
                        </div>
                        <div className="ms-3 pointer-cursor underline-blue fw-semibold">
                            <p>
                                "Se ni mondo esistesse un po di bene.."
                                <br />
                                Diventa un poeta con questo corso!
                            </p>
                        </div>
                    </div>
                </CardBody>
                <CardFooter className="text-center suggerimenti opacity-75">
                    <p className="my-1 fw-semibold pointer-cursor suggerimenti">
                        Visualizza i miei suggerimenti
                    </p>
                </CardFooter>
            </Card>

    );
}
export default MyLearning