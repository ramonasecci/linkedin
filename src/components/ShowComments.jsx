import { useEffect, useState } from "react"
import { Row, Col, Dropdown } from "react-bootstrap"
import { ListGroupItem } from "react-bootstrap"
import { ThreeDots } from "react-bootstrap-icons"
import SingleComment from "./SingleComment";
import AddComment from "./AddComment";


const ShowComments = ({ postId }) => {

    const [commentsPost, setCommentsPost] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const [counter, setCounter] = useState(0)

    const updateCounter = () => {
        setCounter(counter+1)
    }

    const token ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWIzNmFkYjMxYTczZjAwMTlkNWM3MmYiLCJpYXQiOjE3MDYyNTcxMTUsImV4cCI6MTcwNzQ2NjcxNX0.H-NEdhP6PL8Trcw6lqHiYQdwMBxO7hByOl6rH6ZfWNM";

    const getComments = async () => {
        try {
            const response = await fetch(
                `https://striveschool-api.herokuapp.com/api/comments/`,
                {
                    method: "GET",
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            if (!response.ok) {
                setIsError(true);
                setIsLoading(false);
                throw new Error(`Errore nella richiesta: ${response.statusText}`);
            }
            const data = await response.json();
            const commentFiltered = data.filter((comment) => comment.elementId === postId)
            setCommentsPost(commentFiltered.slice(0, 3))

            setIsError(false);
            setIsLoading(false);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        getComments()
        console.log(commentsPost)
    }, [counter])

    return (
        <div>
            <AddComment postId={postId} updateCounter={updateCounter}/>
            {commentsPost && (
                commentsPost.map((comment,i) => (
                    <SingleComment comment={comment} key={i} updateCounter={updateCounter}/>
                )
                )
            )}

        </div>)
};

export default ShowComments;