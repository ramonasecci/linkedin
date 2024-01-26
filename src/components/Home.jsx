import { useNavigate } from "react-router-dom"
import { Button, Row, Col, Container, Card } from "react-bootstrap"
import { meInfoAction } from "../redux/actions";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { FooterHome } from "./FooterHome";
import Post from "./Post";
import UpdatePost from "./UpdatePost";
import { AiFillPlaySquare } from "react-icons/ai";
import { IoMdSettings } from "react-icons/io";
import { FaRegCalendarCheck } from "react-icons/fa";
import { CiCircleList } from "react-icons/ci";
import { FaBookmark } from "react-icons/fa";


const Home = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const [counter, setCounter] = useState(0)


    const updateCounter = () => {
        setCounter(counter + 1)
    }

    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWFlM2FkOTYwMGJlMTAwMTgzYTg2OTUiLCJpYXQiOjE3MDU5MTcxNDUsImV4cCI6MTcwNzEyNjc0NX0.mVn1na9dJNZSG6UN1Yo40hQT9w8Yg0AUp8jP1aEqOkU';

    const apiUrl = 'https://striveschool-api.herokuapp.com/api/profile/me';
    const headers = new Headers({
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
    });

    const options = {
        method: 'GET',
        headers: headers,
    };

    const getMyInfo = async () => {
        try {
            const response = await fetch(apiUrl, options);
            if (!response.ok) {
                setIsError(true);
                setIsLoading(false);
                throw new Error(`Errore nella richiesta: ${response.statusText}`);
            }
            const data = await response.json();
            setIsError(false);
            dispatch(meInfoAction(data))
            setIsLoading(false);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        getMyInfo()
    }, []);


    return (
        <>
            <Container className="pageContainer">
                <Row>
                    {/* COLONNA SX */}
                    <Col xs={3}>
                        <Card className="mb-2" id="scopriSticky">
                            <Row className="d-flex align-items-center p-2 flex-nowrap">
                                <Col xs={11} className="text-col-icons">
                                    <div className="d-flex flex-column align-items-start color-text">
                                        <Row className="d-flex align-items-center mb-2 justify-content-around">
                                            <Col xs={1} className="mx-2"><FaBookmark className="bookmark-home-s " /></Col>
                                            <Col xs={9} style={{ cursor: "pointer" }} className="linkHome text-dark mb-2 text-home-col fw-semibold">Le mie offerte di lavoro</Col>
                                        </Row>
                                        <Row className="d-flex align-items-baseline justify-content-between mb-2">
                                            <Col xs={1} className="mx-2"><CiCircleList className="circlelist-home-s" /></Col>
                                            <Col xs={9} style={{ cursor: "pointer" }} className="linkHome text-dark mb-2 text-home-col fw-semibold">Preferenze</Col>
                                        </Row>
                                        <Row className="d-flex align-items-baseline justify-content-between mb-2">
                                            <Col xs={1} className="mx-2"><FaRegCalendarCheck className="icons-home-s " /></Col>
                                            <Col xs={9} style={{ cursor: "pointer" }} className="linkHome text-dark mb-1 text-home-col fw-semibold">Valutazioni delle competenze</Col>
                                        </Row>
                                        <Row className="d-flex align-items-baseline justify-content-between mb-2">
                                            <Col xs={1} className="mx-2"><AiFillPlaySquare className="icons-home-s " /></Col>
                                            <Col xs={9} style={{ cursor: "pointer" }} className="linkHome text-dark mb-1 text-home-col fw-semibold">Indicazioni per chi cerca lavoro</Col>
                                        </Row>
                                        <Row className="d-flex align-items-baseline justify-content-between mb-2">
                                            <Col xs={1} className="mx-2"><IoMdSettings className="icons-home-s " /></Col>
                                            <Col xs={9} style={{ cursor: "pointer" }} className="linkHome text-dark mb-1 text-home-col fw-semibold">Impostazioni candidatura</Col>
                                        </Row>
                                    </div>
                                </Col>
                            </Row>
                        </Card>

                    </Col>
                    {/* FINE COLONNA DX */}
                    {/* COLONNA CENTRO */}
                    <Col xs={6} >
                        <Row xs={1}>
                            <Col><UpdatePost updateCounter={updateCounter} /></Col>
                            <Col><Post counter={counter} updateCounter={updateCounter} /></Col>

                        </Row>
                    </Col>
                    {/* FINE COLONNA CENTRO */}

                    {/* COLONNA DX */}
                    <Col xs={3}>
                        <Row>
                            <Col><FooterHome /></Col>
                        </Row>
                    </Col>
                    {/* FINE COLONNA DX */}
                </Row>
            </Container>


        </>
    )
}

export default Home
