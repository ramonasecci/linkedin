import 'bootstrap/dist/css/bootstrap.min.css'
import '../../style/myProfileLeftHome.css'
import { BsSquareHalf } from "react-icons/bs";
import { Card, CardBody} from 'react-bootstrap'
import logoOf from "../../components/data/EPICODE.png";
import { FaBookmark } from "react-icons/fa"
import { useSelector } from 'react-redux';

const MyProfileLeftHome = () => {
    const myInfo = useSelector((state) => state.meInfo.result)


    return (
        <Card className="mb-2 profhome">
            <CardBody className="p-0">
                <CardBody className="text-center p-0 pt-4">
                    <div className="px-0">
                        <img
                            src={logoOf}
                            alt="onlyfans"
                            className="copertina"
                        />
                        <img
                            src={myInfo.image}
                            alt="pro pic marco"
                            width={70}
                            className="rounded-circle pointer marcohome"
                        />
                    </div>
                    <p className="mt-3 mb-1 pointer fw-semibold underline-hover">
                        {myInfo.name} e {myInfo.surname}
                    </p>
                    <small>
                        <p className="opacity-50 mb-3">{myInfo.bio}</p>
                    </small>
                </CardBody>
                <hr className="m-0" />
                <CardBody className="p-3 ">
                    <div className="d-flex justify-content-between pointer hover-gray">
                        <p className="opacity-50 mb-2 fw-semibold">
                            Visitatori del profilo
                        </p>
                        <p className="text-primary fw-semibold mb-1">12</p>
                    </div>
                    <div className="d-flex justify-content-between pointer hover-gray">
                        <p className="opacity-50 mb-0 fw-semibold">
                            Impressioni del post
                        </p>
                        <p className="text-primary fw-semibold mb-0">120</p>
                    </div>
                </CardBody>
                <hr className="m-0" />
                <CardBody className="pointer hover-gray p-0 px-3 py-3">
                    <p className="opacity-50 mb-0">
                        Accedi a strumenti e informazioni in esclusiva
                    </p>
                    <p className="fw-semibold hover-blue mb-0">
                        <BsSquareHalf className="me-1" />
                        Fatti assumere piu' velocemente. <br /> Prova Premium
                        gratis.
                    </p>
                </CardBody>
                <hr className="m-0" />
                <CardBody className="d-flex align-items-center pointer hover-gray p-0 ps-3 py-2">
                    <div>
                        <FaBookmark fill="#5E5E5E" />
                    </div>
                    <p className="fw-semibold ms-2 mb-0 py-2">
                        I miei elementi
                    </p>
                </CardBody>
            </CardBody>
        </Card>
    );
}
export default MyProfileLeftHome