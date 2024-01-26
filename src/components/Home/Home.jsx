import { useNavigate } from "react-router-dom";
import { Row, Col, Container } from "react-bootstrap";
import { meInfoAction } from "../../redux/actions";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import MyProfileLeftHome from "./MyProfileLeftHome"
import RightCol2 from "./RightCol2";
import Post from "./Post";
import LinkedInNotizie from "./LinkedInNotizie";
import UpdatePost from "./UpdatePost";
import FooterHome from "./FooterHome";
import LinkedInAnnuncio from "./LinkedInAnnuncio";

const Home = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const [counter, setCounter] = useState(0);

    const updateCounter = () => {
        setCounter(counter + 1);
    };

    const token =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWFlM2FkOTYwMGJlMTAwMTgzYTg2OTUiLCJpYXQiOjE3MDU5MTcxNDUsImV4cCI6MTcwNzEyNjc0NX0.mVn1na9dJNZSG6UN1Yo40hQT9w8Yg0AUp8jP1aEqOkU";

    const apiUrl = "https://striveschool-api.herokuapp.com/api/profile/me";
    const headers = new Headers({
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
    });

    const options = {
        method: "GET",
        headers: headers,
    };

    const getExperiences = async () => {
        try {
            const response = await fetch(apiUrl, options);
            if (!response.ok) {
                setIsError(true);
                setIsLoading(false);
                throw new Error(
                    `Errore nella richiesta: ${response.statusText}`
                );
            }
            const data = await response.json();
            setIsError(false);
            dispatch(meInfoAction(data));
            setIsLoading(false);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        getExperiences();
    }, []);

    return (
        <>
            <Container className="pageContainer px-5">
                <Row>
                    {/* COLONNA SX */}
                    <Col lg={3}>
                        <MyProfileLeftHome />
                        <RightCol2 />
                    </Col>
                    <Col xs={12} md={6} lg={6}>
                        <Row xs={1}>
                            <Col></Col>
                            <Col>
                                <UpdatePost updateCounter={updateCounter} />
                            </Col>
                            <Col>
                                <Post
                                    counter={counter}
                                    updateCounter={updateCounter}
                                />
                            </Col>
                        </Row>
                    </Col>
                    {/* FINE COLONNA SX */}

                    {/* COLONNA DX */}
                    <Col xs={12} md={6} lg={3}>
                        <Row xs={1}>
                            <Col>
                                <LinkedInNotizie />
                                <LinkedInAnnuncio />
                                <FooterHome />
                            </Col>
                        </Row>
                    </Col>
                    {/* FINE COLONNA DX */}
                </Row>
            </Container>
        </>
    );
};

export default Home;
