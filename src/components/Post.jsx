import { useEffect, useState } from "react";
import { Row, Col, Dropdown } from "react-bootstrap"
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Post = ({counter, updateCounter}) => {
    const [posts, setPosts] = useState([])
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const [like, setLike] = useState(false);
    const [show, setShow] = useState(false);
    const [postId, setPostId] = useState(null)
  
    const [comment, setComment] = useState('');

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const myInfo = useSelector((state) => state.meInfo.result)


    const setDataPost = (data) => {
        let date = new Date(data)
        let year = date.getFullYear();
        let month = date.getMonth() + 1;
        let day = date.getDate();
        let hours = date.getHours();
        let minutes = date.getMinutes();
        return `${day}/${month}/${year} ${hours}:${minutes}`
    }



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


    const deletePost = (id) => {
        fetch(`https://striveschool-api.herokuapp.com/api/posts/${id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        })
          .then((response) => {
            if (response.ok) {
              // eslint-disable-next-line no-sequences
              return (
                alert("Il tuo post è stato correttamente eliminato"),
                updateCounter()
              );
            } else {
              alert("Errore nell'eliminazione del post");
            }
          })
          .catch((error) => console.log("ERROR", error));
      };


      const modifyComment = () => {
        fetch(`https://striveschool-api.herokuapp.com/api/posts/${postId}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ text: comment }),
        })
          .then((response) => {
            if (response.ok) {
              // eslint-disable-next-line no-sequences
              return (
                alert("Il tuo post è stato MODIFICATO"),
                console.log(postId),
                updateCounter()
              );
            } else {
              alert("Errore nella modifica del post");
            }
          })
          .catch((error) => console.log("ERROR", error));
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
            {posts && (
                posts
                    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
                    .map((post, i) => (
                        <Card className="mb-3" key={i}>
                            <Card.Body className="position-relative">
                                <Card className="border border-0 mb-3">
                                    <Row>
                                        <Col xs={3} md={2} lg={1}>
                                            <Link to={`/profile/${post.user._id}`}>
                                                <Card.Img
                                                    variant="top"
                                                    src={post.user.image}
                                                    onError={(e) => {
                                                        e.currentTarget.src =
                                                            "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png";
                                                    }}
                                                    className="rounded rounded-circle"
                                                    style={{ aspectRatio: 1, width: "40px" }}
                                                    alt={`Immagine di ${post.user.name} ${post.user.surname}`}
                                                />
                                            </Link>
                                        </Col>
                                        <Col xs={9} md={10} lg={11}>

                                            <p className="m-0 fw-bold postUserName">
                                                <Link to={`/profile/${post.user._id}`} className="postUserName">
                                                    {post.user.name} {post.user.surname}
                                                </Link>
                                            </p>

                                            <small className="text-muted">{post.user.title}</small>
                                            <br></br>
                                            <small className="text-muted">{setDataPost(post.createdAt)}</small>
                                        </Col>
                                    </Row>
                                </Card>
                                <Card.Text>{post.text}</Card.Text>
                                {post.image ? <img className="img-fluid" src={post.image} alt="img" /> : null}
                            </Card.Body>
                            <Card.Footer>
                                <Row xs={4}>
                                    <Col id="showMore" className="px-0 py-2 text-center postButton" >
                                        <i className="bi bi-hand-thumbs-up me-2"></i>
                                        <span className="d-none d-lg-inline">Consiglia</span>
                                    </Col>
                                    <Col id="showMore" className="px-0 py-2 text-center postButton">
                                        <i className="bi bi-chat-text me-2"></i>
                                        <span className="d-none d-lg-inline">Commenta</span>
                                    </Col>
                                    <Col id="showMore" className="px-0 py-2 text-center postButton">
                                        <i className="bi bi-share me-2"></i>
                                        <span className="d-none d-lg-inline">Diffondi il post</span>
                                    </Col>
                                    <Col id="showMore" className="px-0 py-2 text-center postButton">
                                        <i className="bi bi-send-fill me-2"></i>
                                        <span className="d-none d-lg-inline">Invia</span>
                                    </Col>
                                    {myInfo._id === post.user._id && (
                                        <>
                                            <Col className="px-0 text-center">
                                                <Dropdown className="dropdownEdit">
                                                    <Dropdown.Toggle id="dropdown-basic" className="drop d-flex align-items-center">
                                                        <i className="bi bi-three-dots me-2 fs-5 text-dark">...</i>
                                                    </Dropdown.Toggle>

                                                    <Dropdown.Menu>
                                                        <span
                                                            className="dropdown-item"
                                                            role="button"
                                                            onClick={() => {
                                                                handleShow();
                                                                // setComment(post.text);
                                                                setPostId(post._id);
                                                                // //console.log(post._id)
                                                            }}
                                                        >
                                                            <span>Modifica</span>
                                                        </span>

                                                        <span
                                                            className="dropdown-item"
                                                            role="button"
                                                            onClick={() => {
                                                                if (
                                                                    window.confirm(
                                                                        "Sicuro di voler eliminare questo post?"
                                                                    )
                                                                ) {
                                                                    // setPostId(post._id);
                                                                    // //console.log(postId)
                                                                    deletePost(post._id);
                                                                }
                                                            }}
                                                        >
                                                            <span>Elimina post</span>
                                                        </span>
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                            </Col>
                                            <Modal show={show} onHide={handleClose}>
                                                <Modal.Header closeButton>
                                                    <Modal.Title className="h5">Modifica un post</Modal.Title>
                                                </Modal.Header>
                                                <Modal.Body>
                                                    <Form>
                                                        <Form.Group
                                                            className="mb-3"
                                                            controlId="exampleForm.ControlInput1"
                                                        >
                                                            <div className="d-flex align-items-center">
                                                                <div className="imgPostContainer me-3">
                                                                    <img alt="profilePicture" src={myInfo.image} />
                                                                </div>
                                                                <div className="d-flex flex-column">
                                                                    <div>
                                                                        <strong>
                                                                            {" "}
                                                                            {myInfo.name}&nbsp;{myInfo.surname}{" "}
                                                                        </strong>
                                                                    </div>
                                                                    <div>
                                                                        <button
                                                                            type="button"
                                                                            className="rounded-pill py-1 btn btn-outline-secondary d-flex align-items-center justify-content-between"
                                                                        >
                                                                            <li-icon
                                                                                aria-hidden="true"
                                                                                type="globe-americas"
                                                                                className="share-state-change-button__icon d-flex"
                                                                                size="small"
                                                                            >
                                                                                <svg
                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                    viewBox="0 0 16 16"
                                                                                    data-supported-dps="16x16"
                                                                                    fill="currentColor"
                                                                                    className="mercado-match"
                                                                                    width="16"
                                                                                    height="16"
                                                                                    focusable="false"
                                                                                >
                                                                                    <path d="M8 1a7 7 0 107 7 7 7 0 00-7-7zM3 8a5 5 0 011-3l.55.55A1.5 1.5 0 015 6.62v1.07a.75.75 0 00.22.53l.56.56a.75.75 0 00.53.22H7v.69a.75.75 0 00.22.53l.56.56a.75.75 0 01.22.53V13a5 5 0 01-5-5zm6.24 4.83l2-2.46a.75.75 0 00.09-.8l-.58-1.16A.76.76 0 0010 8H7v-.19a.51.51 0 01.28-.45l.38-.19a.74.74 0 01.68 0L9 7.5l.38-.7a1 1 0 00.12-.48v-.85a.78.78 0 01.21-.53l1.07-1.09a5 5 0 01-1.54 9z"></path>
                                                                                </svg>
                                                                            </li-icon>
                                                                            <span className="mx-1">Chiunque </span>
                                                                            <li-icon
                                                                                aria-hidden="true"
                                                                                type="caret"
                                                                                className="share-state-change-button__icon d-flex"
                                                                                size="small"
                                                                            >
                                                                                <svg
                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                    viewBox="0 0 16 16"
                                                                                    data-supported-dps="16x16"
                                                                                    fill="currentColor"
                                                                                    className="mercado-match"
                                                                                    width="16"
                                                                                    height="16"
                                                                                    focusable="false"
                                                                                >
                                                                                    <path
                                                                                        d="M8 11L3 6h10z"
                                                                                        fill-rule="evenodd"
                                                                                    ></path>
                                                                                </svg>
                                                                            </li-icon>
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </Form.Group>
                                                        <Form.Group
                                                            className="mb-3"
                                                            controlId="exampleForm.ControlTextarea1"
                                                        >
                                                            <Form.Control
                                                                as="textarea"
                                                                rows={3}
                                                                placeholder="Di cosa vorresti parlare?"
                                                                className="textPostArea"
                                                                value={comment}
                                                                onChange={(e) => {
                                                                    setComment(e.target.value);
                                                                    //console.log(comment)
                                                                }}
                                                            />
                                                        </Form.Group>
                                                        <Form.Group>
                                                            <button
                                                                className="buttonPost"
                                                                onClick={(e) => e.preventDefault()}
                                                            >
                                                                <li-icon
                                                                    aria-hidden="true"
                                                                    type="emoji-face-icon"
                                                                    className="artdeco-button__icon"
                                                                >
                                                                    <svg
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        viewBox="0 0 24 24"
                                                                        data-supported-dps="24x24"
                                                                        fill="currentColor"
                                                                        className="mercado-match gray"
                                                                        width="24"
                                                                        height="24"
                                                                        focusable="false"
                                                                    >
                                                                        <path d="M8 10.5A1.5 1.5 0 119.5 12 1.5 1.5 0 018 10.5zm6.5 1.5a1.5 1.5 0 10-1.5-1.5 1.5 1.5 0 001.5 1.5zm7.5 0A10 10 0 1112 2a10 10 0 0110 10zm-2 0a8 8 0 10-8 8 8 8 0 008-8zm-8 4a6 6 0 01-4.24-1.76l-.71.76a7 7 0 009.89 0l-.71-.71A6 6 0 0112 16z"></path>
                                                                    </svg>
                                                                </li-icon>
                                                            </button>
                                                        </Form.Group>
                                                    </Form>

                                                    <div className="mt-4 d-flex justify-content-between align-items-center">
                                                        <div className="firstContainerPostIcons">
                                                            <button className="buttonPost">
                                                                <li-icon
                                                                    aria-hidden="true"
                                                                    type="image"
                                                                    className="artdeco-button__icon"
                                                                >
                                                                    <svg
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        viewBox="0 0 24 24"
                                                                        data-supported-dps="24x24"
                                                                        fill="currentColor"
                                                                        className="mercado-match gray"
                                                                        width="24"
                                                                        height="24"
                                                                        focusable="false"
                                                                    >
                                                                        <path d="M19 4H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3zm1 13a1 1 0 01-.29.71L16 14l-2 2-6-6-4 4V7a1 1 0 011-1h14a1 1 0 011 1zm-2-7a2 2 0 11-2-2 2 2 0 012 2z"></path>
                                                                    </svg>
                                                                </li-icon>
                                                            </button>

                                                            <button className="buttonPost">
                                                                <li-icon
                                                                    aria-hidden="true"
                                                                    type="video"
                                                                    className="artdeco-button__icon"
                                                                >
                                                                    <svg
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        viewBox="0 0 24 24"
                                                                        data-supported-dps="24x24"
                                                                        fill="currentColor"
                                                                        className="mercado-match gray"
                                                                        width="24"
                                                                        height="24"
                                                                        focusable="false"
                                                                    >
                                                                        <path d="M19 4H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3zm-9 12V8l6 4z"></path>
                                                                    </svg>
                                                                </li-icon>
                                                            </button>

                                                            <button className="buttonPost">
                                                                <li-icon
                                                                    aria-hidden="true"
                                                                    type="sticky-note"
                                                                    className="artdeco-button__icon"
                                                                >
                                                                    <svg
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        viewBox="0 0 24 24"
                                                                        data-supported-dps="24x24"
                                                                        fill="currentColor"
                                                                        className="mercado-match gray"
                                                                        width="24"
                                                                        height="24"
                                                                        focusable="false"
                                                                    >
                                                                        <path d="M3 3v15a3 3 0 003 3h9v-6h6V3zm9 8H6v-1h6zm6-3H6V7h12zm-2 8h5l-5 5z"></path>
                                                                    </svg>
                                                                </li-icon>
                                                            </button>

                                                            <button className="buttonPost d-flex align-items-center">
                                                                <li-icon
                                                                    aria-hidden="true"
                                                                    type="overflow-web-ios"
                                                                    className="artdeco-button__icon "
                                                                >
                                                                    <svg
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        viewBox="0 0 24 24"
                                                                        data-supported-dps="24x24"
                                                                        fill="currentColor"
                                                                        className="mercado-match gray"
                                                                        width="24"
                                                                        height="24"
                                                                        focusable="false"
                                                                    >
                                                                        <path d="M14 12a2 2 0 11-2-2 2 2 0 012 2zM4 10a2 2 0 102 2 2 2 0 00-2-2zm16 0a2 2 0 102 2 2 2 0 00-2-2z"></path>
                                                                    </svg>
                                                                </li-icon>
                                                            </button>
                                                        </div>
                                                        <div className="secondContainerPostIcons">
                                                            <button className="buttonPost">
                                                                <li-icon
                                                                    aria-hidden="true"
                                                                    type="comment"
                                                                    className="share-state-change-button__icon"
                                                                    size="small"
                                                                >
                                                                    <svg
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        viewBox="0 0 16 16"
                                                                        data-supported-dps="16x16"
                                                                        fill="currentColor"
                                                                        className="mercado-match gray"
                                                                        width="16"
                                                                        height="16"
                                                                        focusable="false"
                                                                    >
                                                                        <path d="M5 8h5v1H5zm11-.5v.08a6 6 0 01-2.75 5L8 16v-3H5.5A5.51 5.51 0 010 7.5 5.62 5.62 0 015.74 2h4.76A5.5 5.5 0 0116 7.5zm-2 0A3.5 3.5 0 0010.5 4H5.74A3.62 3.62 0 002 7.5 3.53 3.53 0 005.5 11H10v1.33l2.17-1.39A4 4 0 0014 7.58zM5 7h6V6H5z"></path>
                                                                    </svg>
                                                                </li-icon>
                                                                <span className="ms-2 gray">Tutti</span>
                                                            </button>
                                                        </div>
                                                        <div>
                                                            <button className="buttonPost me-1">
                                                                <li-icon
                                                                    aria-hidden="true"
                                                                    type="clock"
                                                                    className="artdeco-button__icon"
                                                                >
                                                                    <svg
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        viewBox="0 0 24 24"
                                                                        data-supported-dps="24x24"
                                                                        fill="currentColor"
                                                                        className="mercado-match gray"
                                                                        width="24"
                                                                        height="24"
                                                                        focusable="false"
                                                                    >
                                                                        <g>
                                                                            <path d="M2 12A10 10 0 1012 2 10 10 0 002 12zm2 0a8 8 0 118 8 8 8 0 01-8-8z"></path>
                                                                            <path d="M15.1 12.63L13 11.42V7a1 1 0 00-2 0v5a1 1 0 00.51.85l2.59 1.52a1 1 0 101-1.74z"></path>
                                                                        </g>
                                                                    </svg>
                                                                </li-icon>
                                                            </button>
                                                        </div>
                                                        <div>
                                                            <button
                                                                type="button"
                                                                className="rounded-pill px-3 py-1 btn btn-primary me-2"
                                                                // disabled={comment ? false : true}
                                                                onClick={() => {
                                                                    //console.log(comment)
                                                                    console.log(post._id)
                                                                   
                                                                    modifyComment();
                                                                    handleClose();
                                                                    setComment(null);
                                                                    //sendComment();
                                                                }}
                                                            >
                                                                Modifica post
                                                            </button>
                                                        </div>
                                                    </div>
                                                </Modal.Body>
                                            </Modal>
                                        </>
                                    )}
                                </Row>
                            </Card.Footer>
                        </Card>

                    ))


            )}



        </>)
}
export default Post