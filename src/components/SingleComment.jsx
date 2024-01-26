import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { Form, Button } from "react-bootstrap";

const SingleComment = ({ comment, updateCounter }) => {

    const [showForm, setShowForm] = useState(false);
    const [editedComment, setEditedComment] = useState({
        comment: comment.comment, 
        rate: 1,
        elementId: comment.postId, 
    });

    const token =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWIzNmFkYjMxYTczZjAwMTlkNWM3MmYiLCJpYXQiOjE3MDYyNTcxMTUsImV4cCI6MTcwNzQ2NjcxNX0.H-NEdhP6PL8Trcw6lqHiYQdwMBxO7hByOl6rH6ZfWNM";

    const editComment = (id) => {
        fetch('https://striveschool-api.herokuapp.com/api/comments/' + id, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({ comment: editedComment.comment }),
        })
            .then((response) => {
                if (response.ok) {
                    alert("Il tuo commento è stato MODIFICATO");
                    updateCounter();
                } else {
                    alert("Errore nella modifica del commento");
                }
            })
            .catch((error) => console.log("ERRORE", error));
    };

    const deleteComment = async (id) => {
        try {
            const shouldDelete = window.confirm("Sei sicuro di voler eliminare il commento?");
            if (!shouldDelete) {
                return;
            }

            const response = await fetch(
                'https://striveschool-api.herokuapp.com/api/comments/' + id,
                {
                    method: 'DELETE',
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            if (response.ok) {
                alert("Il commento è stato eliminato");
                updateCounter();
            } else {
                throw new Error("Non è possibile eliminare il commento");
            }
        } catch (error) {
            console.log('Errore nella cancellazione del commento', error);
        }
    };

    const handleSubmit = (e, id) =>{
        e.preventDefault()
        editComment(id)
        setShowForm(false)   
    }

    return (
        <div className="p-3">
            <h5>{comment.author}</h5>
            <p className="border-bottom border-secondary-subtle ">{comment.comment}</p>
            <Row>
                <Col id="showMore" className="px-0 py-2 text-center postButton" onClick={() => setShowForm(true)}>
                    <i className="bi bi-hand-thumbs-up me-2"></i>
                    <span className="d-none d-lg-inline">Modifica</span>
                </Col>
                <Col
                    id="showMore"
                    className="px-0 py-2 text-center postButton"
                    onClick={() => deleteComment(comment._id)}
                >
                    <i className="bi bi-hand-thumbs-up me-2"></i>
                    <span className="d-none d-lg-inline">Elimina</span>
                </Col>
            </Row>
            <Row>
                {showForm && (
                    <div className="mb-3 px-4 border-top border-dark-subtle">
                        <Form onSubmit={(e)=>handleSubmit(e, comment._id)}>
                            <Form.Group>
                                <Form.Label className="cost-comments mt-3">Modifica commento...</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Commento"
                                    value={editedComment.comment}
                                    onChange={(e) => setEditedComment({ ...editedComment, comment: e.target.value })}
                                />
                            </Form.Group>
                            <Button className="mt-3 btn btn-light" type="submit">
                                Modifica commento
                            </Button>
                        </Form>
                    </div>
                )}
            </Row>
        </div>
    );
};

export default SingleComment;
