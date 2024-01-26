import "../../style/UpdatePost.css"
import { useState } from "react";
import {Col} from "react-bootstrap"
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useSelector} from "react-redux";
import { Link } from "react-router-dom";

const UpdatePost = ({updateCounter}) =>{
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    const [comment, setComment] = useState(null);
    

    const myInfo = useSelector((state) => state.meInfo.result)

    const token = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWFlM2FkOTYwMGJlMTAwMTgzYTg2OTUiLCJpYXQiOjE3MDU5MTcxNDUsImV4cCI6MTcwNzEyNjc0NX0.mVn1na9dJNZSG6UN1Yo40hQT9w8Yg0AUp8jP1aEqOkU';


    const sendComment = () => {
          return fetch("https://striveschool-api.herokuapp.com/api/posts", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: token,
            },
            body: JSON.stringify({ text: comment }),
          })
            .then((response) => {
              if (response.ok) {
                updateCounter()
                return response.json(), alert("Your comment has been posted!")
              } else {
                alert("ERROR your comment hasn't been posted!");
              }
            })
            .catch((error) => console.log("ERROR", error));
        };

    return (
        <>
            <div className="card mb-3">
                <div className="d-flex flex-column ">
                    <div className="d-flex ms-3 me-3 mt-1">
                        <div className="imgPostContainer me-3">
                            <Link to={"/profile/me"}>
                                <img alt="profilePicture" src={myInfo.image} />
                            </Link>
                        </div>
                        <div className="buttonContainer">
                            <button
                                id="showMore"
                                className="buttonCreationPost"
                                onClick={handleShow}
                            >
                                <span style={{ color: "#808080" }}>
                                    Avvia un post
                                </span>
                            </button>
                        </div>
                    </div>

                    <Modal
                        show={show}
                        onHide={handleClose}
                        size="xl"
                        className="modalepost"
                    >
                        <Modal.Header closeButton className="mx-4">
                            <Button className="d-flex buttonmodale">
                                <Col lg={2}>
                                    <div className="imgPostContainer2 me-4">
                                        <img
                                            alt="profilePicture"
                                            src={myInfo.image}
                                        />
                                    </div>
                                </Col>
                                <Col lg={10}>
                                    <div>
                                        <h5 className="m-0">
                                            {myInfo.name}&nbsp;
                                            {myInfo.surname}
                                        </h5>
                                    </div>
                                    <div className="sizepubblica">
                                        <span className="me-3">Pubblica: Chiunque</span>
                                    </div>
                                </Col>
                            </Button>
                        </Modal.Header>
                        <Modal.Body>
                            <Form>
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
                                        disabled={comment ? false : true}
                                        onClick={() => {
                                            handleClose();
                                            setComment(null);
                                            sendComment();
                                        }}
                                    >
                                        Pubblica
                                    </button>
                                </div>
                            </div>
                        </Modal.Body>
                    </Modal>

                    <div className="my-1 d-flex justify-content-evenly align-items-center">
                        <button
                            id="showMore"
                            className="postButtonContainer py-2"
                        >
                            <li-icon
                                aria-hidden="true"
                                type="image"
                                className="artdeco-button__icon"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    data-supported-dps="24x24"
                                    fill="#378FE9"
                                    className="mercado-match"
                                    width="24"
                                    height="24"
                                    focusable="false"
                                    id="iconaFoto"
                                >
                                    <path d="M19 4H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3zm1 13a1 1 0 01-.29.71L16 14l-2 2-6-6-4 4V7a1 1 0 011-1h14a1 1 0 011 1zm-2-7a2 2 0 11-2-2 2 2 0 012 2z"></path>
                                </svg>
                            </li-icon>
                            <span className="artdeco-button__text d-none d-lg-inline text-secondary ">
                                Contenuti multimediali
                            </span>
                        </button>
                        <button
                            id="showMore"
                            className="postButtonContainer py-2"
                        >
                            <li-icon
                                aria-hidden="true"
                                type="calendar"
                                size="medium"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    data-supported-dps="24x24"
                                    fill="currentColor"
                                    className="mercado-match eventIcon"
                                    width="24"
                                    height="24"
                                    focusable="false"
                                >
                                    <path d="M3 3v15a3 3 0 003 3h12a3 3 0 003-3V3zm13 1.75A1.25 1.25 0 1114.75 6 1.25 1.25 0 0116 4.75zm-8 0A1.25 1.25 0 116.75 6 1.25 1.25 0 018 4.75zM19 18a1 1 0 01-1 1H6a1 1 0 01-1-1V9h14zm-5.9-3a1 1 0 00-1-1H12a3.12 3.12 0 00-1 .2l-1-.2v-3h3.9v1H11v1.15a3.7 3.7 0 011.05-.15 1.89 1.89 0 012 1.78V15a1.92 1.92 0 01-1.84 2H12a1.88 1.88 0 01-2-1.75 1 1 0 010-.25h1a.89.89 0 001 1h.1a.94.94 0 001-.88z"></path>
                                </svg>
                            </li-icon>
                            <span className="artdeco-button__text d-none d-lg-inline text-secondary">
                                Evento
                            </span>
                        </button>

                        <button
                            id="showMore"
                            className="postButtonContainer py-2"
                        >
                            <li-icon
                                aria-hidden="true"
                                type="content-align-left"
                                size="medium"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    data-supported-dps="24x24"
                                    fill="currentColor"
                                    className="mercado-match articleIcon"
                                    width="24"
                                    height="24"
                                    focusable="false"
                                >
                                    <path d="M21 3v2H3V3zm-6 6h6V7h-6zm0 4h6v-2h-6zm0 4h6v-2h-6zM3 21h18v-2H3zM13 7H3v10h10z"></path>
                                </svg>
                            </li-icon>
                            <span className="artdeco-button__text d-none d-lg-inline text-secondary">
                                Scrivi un articolo
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default UpdatePost