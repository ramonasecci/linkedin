import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Row, Col, Spinner, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { meInfoAction } from "../../redux/actions";
import { otherUserAction } from "../../redux/actions";
import ProfileBigCard from "./LeftCol/ProfileBigCard";
import MyAnalisi from "./LeftCol/MyAnalisi";
import MyRisorse from "./LeftCol/MyRisorse";
import MyAttivita from "./LeftCol/MyAttivita";
import Experience from "./LeftCol/Experience";
import MyFooter from "./LeftCol/MyFooter";
import MySettingsProfilo from "./RightCol/MySettingsProfilo";
import LinkedInAnnuncio from "../Home/LinkedInAnnuncio";
import MyPersoneChePotrestiConoscere from "./RightCol/MyPersoneChePotrestiConoscere";
import MyLearning from "./RightCol/MyLearning";
import MyPubblicita from "./RightCol/MyPubblicita";

const Profile = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const [profile, setProfile] = useState({});
    const [mioProfilo, setMioProfilo] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const myInfo = useSelector((state) => state.meInfo.result);

    const apiUrl = `https://striveschool-api.herokuapp.com/api/profile/${id}`;

    const token =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWFlM2FkOTYwMGJlMTAwMTgzYTg2OTUiLCJpYXQiOjE3MDU5MTcxNDUsImV4cCI6MTcwNzEyNjc0NX0.mVn1na9dJNZSG6UN1Yo40hQT9w8Yg0AUp8jP1aEqOkU";

    const headers = new Headers({
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
    });

    const options = {
        method: "GET",
        headers: headers,
    };

    const fetchData = async () => {
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
            setProfile(data);
            setIsError(false);
            setIsLoading(false);
            if (id === myInfo._id) {
                dispatch(meInfoAction(data));
                setMioProfilo(true);
            } else {
                dispatch(otherUserAction(data));
                setMioProfilo(false);
            }
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchData();
    }, [id]);

    return (
        <>
            {isLoading && (
                <div className="text-center mb-2">
                    <Spinner animation="border" variant="info" />
                </div>
            )}
            <Container className="pageContainer px-5">
                <Row>
                    {/* COLONNA SX */}
                    <Col xs={12} md={6} lg={9}>
                        <Row xs={1}>
                            {profile && (
                                <>
                                    <Col>
                                        <ProfileBigCard
                                            profile={profile}
                                            mioProfilo={mioProfilo}
                                        />
                                    </Col>
                                    <Col>
                                        <MyAnalisi />
                                    </Col>
                                    <Col>
                                        <MyRisorse />
                                    </Col>
                                    <Col >
                                        <MyAttivita />
                                    </Col>
                                    <Col>
                                        <Experience profile={profile} />
                                    </Col>
                                </>
                            )}
                        </Row>
                    </Col>
                    {/* FINE COLONNA SX */}

                    {/* COLONNA DX */}
                    <Col xs={12} md={6} lg={3}>
                        <Row xs={1}>
                            <Col>
                                <MySettingsProfilo />
                            </Col>
                            <Col>
                                <LinkedInAnnuncio />
                            </Col>
                            <Col>
                                <MyPersoneChePotrestiConoscere />
                            </Col>
                            <Col>
                                <MyLearning />
                            </Col>
                            <Col>
                                <MyPubblicita />
                            </Col>
                        </Row>
                    </Col>
                    {/* FINE COLONNA DX */}
                </Row>
                <MyFooter />
            </Container>
        </>
    );
};

export default Profile;
