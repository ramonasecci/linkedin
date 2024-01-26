import "../../style/RightCol2.css";
import { FiPlus } from "react-icons/fi";
import { Card } from "react-bootstrap";

const RightCol2 = () => {
    return (
        <Card>
            <Card.Body className="pt-3 ps-3 pb-2 pe-2">
                <a className="d-block mb-3 rc2" href="www">
                    Gruppi
                </a>
                <div className="d-flex align-items-center justify-content-between mb-3">
                    <a className="d-block rc2" href="www">
                        Eventi
                    </a>
                    <div className="piudiv d-flex align-items-center justify-content-center"><FiPlus className="piurighthome" /></div>
                </div>
                <a className="d-block pb-0 rc2" href="www">
                    Hashtag Seguiti
                </a>
            </Card.Body>
            <Card.Footer className="scopri">Scopri di più</Card.Footer>
        </Card>
    );
};
export default RightCol2;
