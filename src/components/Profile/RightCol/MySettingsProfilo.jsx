import 'bootstrap/dist/css/bootstrap.min.css'
import "../../../style/mySettingsProfile.css";
import { LuPencil } from "react-icons/lu"
import { Card, CardBody} from 'react-bootstrap'
const MySettingsProfilo = () => {
    return (
        <Card className="mb-2 p-0">
            <CardBody className="pt-3 pb-1 px-3">
                <div className="d-flex justify-content-between align-items-baseline">
                    <h5 className=" fw-semibold">
                        Lingua del profilo
                    </h5>
                    <div>
                        <LuPencil className="pencillingua" />
                    </div>
                </div>
                <small><p className="opacity-50">Italiano</p></small>
                <hr />
                <div className="d-flex justify-content-between align-items-baseline">
                    <h5 className="fw-semibold">
                        Public profile & URL
                    </h5>
                    <div>
                        <LuPencil className="pencillingua mb-2" />
                    </div>
                </div>
                <small><p className="opacity-50">www.ètornatoilcanegrassoehaportatounlinklungo.it</p></small>
            </CardBody>
        </Card>
    );
}
export default MySettingsProfilo