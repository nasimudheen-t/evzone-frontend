import React, { useState } from 'react';
import { Card, Form, Button } from 'react-bootstrap';
import { AddEventsbyAdmin } from '../services/allAPI';

const AddEvents = () => {
  const [addEvent, setAddEvent] = useState({
    title: '', description: '', date: '', location: '', price: '', category: ''
  });

  const handleAddEvents = async () => {
    const { title, description, date, location, price, category } = addEvent;
    try {
      if (title && description && date && location && price && category) {
        const result = await AddEventsbyAdmin(addEvent);
        alert("✅ Event Added Successfully!");
        window.location.reload();
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Card
      className="shadow-sm border-0"
      style={{
        borderRadius: '16px',
        padding: '30px',
        fontFamily: "'Segoe UI', 'Roboto', sans-serif",
        backgroundColor: '#ffffff',
        boxShadow: '0 4px 16px rgba(0,0,0,0.1)'
      }}
    >
      <Card.Body>
        <h4 className="mb-4" style={{ fontWeight: '600', color: '#1F2937' }}>
          ➕ Add New Event
        </h4>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label style={{ fontWeight: '500', color: '#374151' }}>Event Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter event name"
              onChange={e => setAddEvent({ ...addEvent, title: e.target.value })}
              style={{ fontSize: '15px' }}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label style={{ fontWeight: '500', color: '#374151' }}>Date</Form.Label>
            <Form.Control
              type="date"
              onChange={e => setAddEvent({ ...addEvent, date: e.target.value })}
              style={{ fontSize: '15px' }}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label style={{ fontWeight: '500', color: '#374151' }}>Location</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter location"
              onChange={e => setAddEvent({ ...addEvent, location: e.target.value })}
              style={{ fontSize: '15px' }}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label style={{ fontWeight: '500', color: '#374151' }}>Price</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter price"
              onChange={e => setAddEvent({ ...addEvent, price: e.target.value })}
              style={{ fontSize: '15px' }}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label style={{ fontWeight: '500', color: '#374151' }}>Category</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter category"
              onChange={e => setAddEvent({ ...addEvent, category: e.target.value })}
              style={{ fontSize: '15px' }}
            />
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Label style={{ fontWeight: '500', color: '#374151' }}>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Enter event description"
              onChange={e => setAddEvent({ ...addEvent, description: e.target.value })}
              style={{ fontSize: '15px' }}
            />
          </Form.Group>

          <Button
            variant="success"
            className="w-100"
            style={{
              fontWeight: '600',
              fontSize: '16px',
              padding: '10px',
              borderRadius: '10px'
            }}
            onClick={handleAddEvents}
          >
            ✅ Add Event
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default AddEvents;
