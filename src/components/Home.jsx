import { useNavigate } from "react-router-dom"
import { Button, Row, Col, Container } from "react-bootstrap"
import { meInfoAction } from "../redux/actions";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { FooterHome } from "./FooterHome";
import Post from "./Post";
import UpdatePost from "./UpdatePost";


const Home = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const [counter, setCounter] = useState(0)

    
    const updateCounter = ()=>{
        setCounter(counter+1)
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
                    <Col xs={12} md={6} lg={8}>
                        <Row xs={1}>
                            <Col><UpdatePost updateCounter={updateCounter} /></Col>
                            <Col><Post counter={counter} updateCounter={updateCounter} /></Col>
                            
                        </Row>
                    </Col>
                    {/* FINE COLONNA SX */}

                    {/* COLONNA DX */}
                    <Col xs={12} md={6} lg={4}>
                        <Row xs={1}>
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
