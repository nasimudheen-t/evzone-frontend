import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import AddEvents from '../components/AddEvents';
import EditEvents from '../components/EditEvents';
import ListEvents from '../components/ListEvents';

const Admin = () => {
  const [activeSection, setActiveSection] = useState('add');

  const renderSection = () => {
    switch (activeSection) {
      case 'add':
        return <AddEvents />;
      case 'edit':
        return <EditEvents />;
      case 'list':
        return <ListEvents />;
      default:
        return null;
    }
  };

  return (
    <div style={{
      backgroundColor: '#202216',
      minHeight: '100vh',
      paddingTop: '50px',
      paddingBottom: '50px',
      fontFamily: "'Segoe UI', 'Roboto', sans-serif"
    }}>
      <Container>
        <h2 className="text-center mb-5" style={{
          fontWeight: '700',
          color: 'white',
          letterSpacing: '0.5px'
        }}>
          Admin Dashboard
        </h2>

        <Row className="justify-content-center mb-4">
          <Col xs={12} md={4} className="d-grid mb-2">
            <Button 
              variant={activeSection === 'add' ? 'success' : 'success'} 
              onClick={() => setActiveSection('add')}
            >
               Add Event
            </Button>
          </Col>
          <Col xs={12} md={4} className="d-grid mb-2">
            <Button 
              variant={activeSection === 'edit' ? 'warning' : 'warning'} 
              onClick={() => setActiveSection('edit')}
            >
               Edit Event
            </Button>
          </Col>
          <Col xs={12} md={4} className="d-grid mb-2">
            <Button 
              variant={activeSection === 'list' ? 'info' : 'info'} 
              onClick={() => setActiveSection('list')}
            >
               List Events
            </Button>
          </Col>
        </Row>

        <section style={{ marginTop: '40px' }}>
          {renderSection()}
        </section>
      </Container>
    </div>
  );
};

export default Admin;
