import { useEffect, useState } from "react";
import { Row, Col, Dropdown } from "react-bootstrap"
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import SinglePost from "./SinglePost";
import { Spinner, Alert} from "react-bootstrap"

const Post = ({counter, updateCounter}) => {
    const [posts, setPosts] = useState([])
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
   
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWFlM2FkOTYwMGJlMTAwMTgzYTg2OTUiLCJpYXQiOjE3MDU5MTcxNDUsImV4cCI6MTcwNzEyNjc0NX0.mVn1na9dJNZSG6UN1Yo40hQT9w8Yg0AUp8jP1aEqOkU';

    const apiUrl = 'https://striveschool-api.herokuapp.com/api/posts/';
    const headers = new Headers({
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
    });

    const options = {
        method: 'GET',
        headers: headers,
    };


        const getPosts = async () => {
        try {
            const response = await fetch(apiUrl, options);
            if (!response.ok) {
                setIsError(true);
                setIsLoading(false);
                throw new Error(`Errore nella richiesta: ${response.statusText}`);
            }
            const data = await response.json();
            setIsError(false);
            setPosts(data);
            setIsLoading(false);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        getPosts()
    }, [counter])

    return (
        <>
        {isLoading && (
                <div className="text-center mb-2">
                    <Spinner animation="border" variant="info" />
                </div>
            )}
            {isError && (
                <Alert variant="danger" className="text-center">
                    Errore nel recupero delle informazioni
                </Alert>
            )}
        
            {posts && (
                posts
                    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
                    .slice(0, 10)
                    .map((post, i) => (
                        <SinglePost post={post} key={i} updateCounter={updateCounter}/>
                    ))
            )}
        </>)
}
export default Post