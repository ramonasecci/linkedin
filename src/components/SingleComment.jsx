import { Col, Row } from "react-bootstrap";



const SingleComment = ({ comment, updateCounter }) => {


    const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWIzNmFkYjMxYTczZjAwMTlkNWM3MmYiLCJpYXQiOjE3MDYyNTcxMTUsImV4cCI6MTcwNzQ2NjcxNX0.H-NEdhP6PL8Trcw6lqHiYQdwMBxO7hByOl6rH6ZfWNM";

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
      updateCounter()
      
    } else {
      throw new Error("Non è possibile eliminare il commento");
    }
  } catch (error) {
    console.log('Errore nella cancellazione del commento', error);
  }
};




  return (
    <div className="p-3">
      <h5>{comment.author}</h5>
      <p className="border-bottom border-secondary-subtle ">{comment.comment}</p>
      <Row>
        <Col id="showMore" className="px-0 py-2 text-center postButton">
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
    </div>
  );
};

export default SingleComment;
