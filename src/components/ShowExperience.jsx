import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';
import { Card, Row, Col, Dropdown, Form, Button, Modal } from 'react-bootstrap';

const ShowExperience = ({ profile, counter, updateCounter }) => {
  const [experiences, setExperiences] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editingExperience, setEditingExperience] = useState(null);

  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWFlM2FkOTYwMGJlMTAwMTgzYTg2OTUiLCJpYXQiOjE3MDU5MTcxNDUsImV4cCI6MTcwNzEyNjc0NX0.mVn1na9dJNZSG6UN1Yo40hQT9w8Yg0AUp8jP1aEqOkU';

  const apiUrl = `https://striveschool-api.herokuapp.com/api/profile/${profile._id}/experiences/`;
  const headers = new Headers({
    'Authorization': `Bearer ${token}`,
    'Content-Type': 'application/json',
  });

  const options = {
    method: 'GET',
    headers: headers,
  };

  const getExperiences = async () => {
    try {
      const response = await fetch(apiUrl, options);
      if (!response.ok) {
        setIsError(true);
        setIsLoading(false);
        throw new Error(`Errore nella richiesta: ${response.statusText}`);
      }
      const data = await response.json();
      setIsError(false);
      setExperiences(data);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  const deleteExperience = async (experienceId) => {
    const deleteUrl = `https://striveschool-api.herokuapp.com/api/profile/${profile._id}/experiences/${experienceId}`;
    const deleteOptions = {
      method: 'DELETE',
      headers: headers,
    };

    try {
      const response = await fetch(deleteUrl, deleteOptions);
      if (!response.ok) {
        throw new Error(`Errore nella cancellazione: ${response.statusText}`);
      }

      // Aggiorna la lista delle esperienze dopo la cancellazione
      updateCounter()
    } catch (error) {
      console.error(error);
    }
  };

  const editExperience = (experience) => {
    setEditingExperience({ ...experience });
    setShowEditModal(true);
  };

  const handleCloseEditModal = () => {
    setShowEditModal(false);
    setEditingExperience(null);
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditingExperience((prevExperience) => ({
      ...prevExperience,
      [name]: value,
    }));
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();

    const editUrl = `https://striveschool-api.herokuapp.com/api/profile/${profile._id}/experiences/${editingExperience._id}`;
    const editOptions = {
      method: 'PUT',
      headers: headers,
      body: JSON.stringify(editingExperience),
    };

    try {
      const response = await fetch(editUrl, editOptions);
      if (!response.ok) {
        throw new Error(`Errore nella modifica: ${response.statusText}`);
      }

      // Aggiorna la lista delle esperienze dopo la modifica
      updateCounter()
      setShowEditModal(false);
      setEditingExperience(null);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getExperiences();
  }, [profile._id, counter]);

  return (
    <>
      {experiences && (
        experiences.map((expe, i) => (
          <div key={i}>
            <Card className="my-3 insideCards position-relative">
              <Row>
                <Col>
                  <Card.Body className="p-0">
                    <p className="fw-bold m-0">{expe.role}</p>
                    <p className="m-0">{expe.company}</p>
                    <small className="text-muted">
                      {format(new Date(expe.startDate), 'dd-MM-yyyy')} - {expe.endDate ? format(new Date(expe.endDate), 'dd-MM-yyyy') : "In corso"}
                    </small>
                    <p>{expe.description}</p>
                  </Card.Body>

                  <div className="dotsDivAbsolute">
                    <Dropdown>
                      <Dropdown.Toggle id="dropdown-basic" className="drop dropdown-basic">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-three-dots" viewBox="0 0 16 16">
                          <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3" />
                        </svg>
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item
                          className="mb-2 cursor"
                          onClick={() => {
                            if (window.confirm("Vuoi davvero rimuovere questa esperienza?")) {
                              deleteExperience(expe._id);
                            }
                          }}
                        >
                          Elimina
                        </Dropdown.Item>
                        <Dropdown.Item
                          className="cursor"
                          onClick={() => editExperience(expe)}>
                          Modifica
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                </Col>
              </Row>
            </Card>
            {i !== experiences.length - 1 ? <hr className="my-4" /> : null}
          </div>
        ))
      )}

      {/* Modulo di modifica */}

      <Modal show={showEditModal} onHide={handleCloseEditModal}>
        <Modal.Header closeButton>
          <Modal.Title>Modifica Esperienza</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {editingExperience && (
            <Form onSubmit={handleEditSubmit}>
              <Form.Group controlId="formRole">
                <Form.Label>Ruolo</Form.Label>
                <Form.Control
                  type="text"
                  name="role"
                  placeholder="Inserisci il ruolo"
                  value={editingExperience.role}
                  onChange={handleEditChange}
                />
              </Form.Group>
              <Form.Group controlId="formCompany">
                <Form.Label>Azienda</Form.Label>
                <Form.Control
                  type="text"
                  name="company"
                  placeholder="Inserisci l'azienda"
                  value={editingExperience.company}
                  onChange={handleEditChange}
                />
              </Form.Group>
              <Form.Group controlId="formStartDate">
                <Form.Label>Data di inizio</Form.Label>
                <Form.Control
                  type="text"
                  name="startDate"
                  placeholder="Inserisci la data di inizio"
                  value={editingExperience.startDate}
                  onChange={handleEditChange}
                />
              </Form.Group>
              <Form.Group controlId="formEndDate">
                <Form.Label>Data di fine</Form.Label>
                <Form.Control
                  type="text"
                  name="endDate"
                  placeholder="Inserisci la data di fine"
                  value={editingExperience.endDate}
                  onChange={handleEditChange}
                />
              </Form.Group>
              <Form.Group controlId="formDescription">
                <Form.Label>Descrizione</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  name="description"
                  placeholder="Inserisci la descrizione"
                  value={editingExperience.description}
                  onChange={handleEditChange}
                />
              </Form.Group>

              <Button variant="primary" type="submit">
                Salva Modifiche
              </Button>
            </Form>
          )}
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ShowExperience;