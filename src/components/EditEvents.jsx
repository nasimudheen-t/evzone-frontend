import React, { useEffect, useState } from 'react';
import { Card, Button, Modal, Form, Row, Col } from 'react-bootstrap';
import { deleteEventsAPI, editEventsAPI, getAllEventsAPI } from '../services/allAPI';

const EditEvents = () => {
  const [show, setShow] = useState(false);
  const [events, setEvents] = useState([]);
  const [edit, setEdit] = useState({});

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  useEffect(() => {
    handleGetAllEvents();
  }, []);

  // Get all events
  const handleGetAllEvents = async () => {
    try {
      const result = await getAllEventsAPI();
      setEvents(result.data);
      console.log(result.data);
    } catch (err) {
      console.log(err);
    }
  };

  // Edit Event - called when "Save Changes" is clicked
  const handleEditEvents = async (id, updatedData) => {
    try {
      const result = await editEventsAPI(id, updatedData);
      if (result.status === 200) {
        console.log("Event updated:", result);
        handleGetAllEvents(); // refresh event list
        handleClose(); // close modal
      }
    } catch (err) {
      console.log("Error updating event:", err);
    }
  };

  // delete event
  const handleDeleteEvent = async (id) => {
    try {
      const result = await deleteEventsAPI(id);
      if (result.status === 200) {
        alert("Event deleted successfully!");
        handleGetAllEvents(); // refresh event list
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      {/* Event Cards */}
      <Row>
        {
          events.length > 0 ? events.map((item, index) => (
            <Col key={index} md={6} lg={4}>
              <Card
                style={{
                  borderRadius: '16px',
                  border: '1px solid #e2e8f0',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.15)',
                  padding: '20px',
                  backgroundColor: index % 2 === 0 ? '#A8DADC' : '#F1FAEE',
                  color: '#1D3557',
                  transition: 'transform 0.3s ease-in-out',
                }}
                className="mb-4"
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
              >
                <Card.Body>
                  <Card.Title style={{ fontWeight: '700', color: '#457B9D' }}>
                    {item.title}
                  </Card.Title>
                  <Card.Text style={{ fontSize: '1rem', color: '#333' }}>
                    <strong>Date:</strong> {new Date(item.date).toLocaleDateString()}<br />
                    <strong>Location:</strong> {item.location}<br />
                    <strong>Category:</strong> {item.category}<br />
                    <strong>Price:</strong> ₹{item.price}
                  </Card.Text>
                  <div className="d-flex justify-content-between mt-4">
                    <Button
                      variant="outline-warning"
                      onClick={() => {
                        setEdit(item);
                        handleShow();
                      }}
                      style={{
                        fontWeight: '600',
                        width: '48%',
                        backgroundColor: '#FFBF69',
                        borderColor: '#FFBF69',
                      }}
                    >
                      ✏️ Edit
                    </Button>
                    <Button
                      variant="outline-danger"
                      onClick={() => handleDeleteEvent(item._id)}
                      style={{
                        fontWeight: '600',
                        width: '48%',
                        backgroundColor: '#E63946',
                        borderColor: '#E63946',
                      }}
                    >
                      🗑️ Delete
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))
            :
            <div className="text-center text-muted mt-4">No Events added</div>
        }
      </Row>

      {/* Modal for Editing */}
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Edit Event</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form onSubmit={(e) => {
            e.preventDefault();
            const updatedData = {
              ...edit
            };
            handleEditEvents(edit._id, updatedData);
          }}>
            <Form.Group className="mb-3">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                defaultValue={edit.title}
                onChange={(e) => setEdit({ ...edit, title: e.target.value })}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Date</Form.Label>
              <Form.Control
                type="date"
                defaultValue={edit.date}
                onChange={(e) => setEdit({ ...edit, date: e.target.value })}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Location</Form.Label>
              <Form.Control
                type="text"
                defaultValue={edit.location}
                onChange={(e) => setEdit({ ...edit, location: e.target.value })}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="text"
                defaultValue={edit.price}
                onChange={(e) => setEdit({ ...edit, price: e.target.value })}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Category</Form.Label>
              <Form.Control
                type="text"
                defaultValue={edit.category}
                onChange={(e) => setEdit({ ...edit, category: e.target.value })}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                defaultValue={edit.description}
                onChange={(e) => setEdit({ ...edit, description: e.target.value })}
              />
            </Form.Group>

            <Button variant="success" className="w-100" type="submit">
              Save Changes
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default EditEvents;
