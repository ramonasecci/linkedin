import { useState } from "react";
import { Form, Button } from "react-bootstrap";

const AddComment = ({ postId,updateCounter }) => {

  const [comment, setComment] = useState({
    comment: "",
    rate: 1,
    elementId: postId,
  });

  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWIzNmFkYjMxYTczZjAwMTlkNWM3MmYiLCJpYXQiOjE3MDYyNTcxMTUsImV4cCI6MTcwNzQ2NjcxNX0.H-NEdhP6PL8Trcw6lqHiYQdwMBxO7hByOl6rH6ZfWNM";

  const sendComment = async (e) => {
    e.preventDefault();
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments",
        {
          method: "POST",
          body: JSON.stringify(comment),
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      if (response.ok) {
        setComment({
          comment: "",
          rate: 1,
          elementId: postId,
        });
        updateCounter()
      } else {
        alert("Qualcosa è andato storto");
      }
    } catch (err) {
      console.log("Errore:", err);
      alert("Errore");
    }
  };

  return (
    <div className="mb-3 px-4 border-top border-dark-subtle">
      <Form onSubmit={sendComment}>
        <Form.Group>
          <Form.Label className="cost-comments mt-3">Scrivi un commento...</Form.Label>
          <Form.Control
            type="text"
            placeholder="Commento"
            value={comment.comment}
            onChange={(e) => setComment({ ...comment, comment: e.target.value })}
          />
        </Form.Group>
        <Button className="mt-3 btn btn-light" type="submit">
          Aggiungi commento
        </Button>
      </Form>
    </div>
  );
};

export default AddComment;
