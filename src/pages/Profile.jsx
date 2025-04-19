import React, { useContext, useEffect, useState } from 'react';
import { Container, Row, Col, Card, Button, ListGroup } from 'react-bootstrap';
import Header from '../components/Header';
import { myContextApi } from '../ContextApi/ContextAPI';
// import BookedShows from './BookedShows';
import ComponentBokkedShow from '../components/ComponentBokkedShow';

const Profile = () => {
  const [activeSection, setActiveSection] = useState('profile'); // Default view is profile
  const {userData} = useContext(myContextApi)

  console.log(userData);
  useEffect(() => {
    if (userData) {
      console.log("User Data from Context:", userData);
    } else {
      console.log("Waiting for user data...");
    }
  }, [userData]);
  return (
    <>
    <Header insideProfile={true}/>
      <Container fluid className="p-0" style={{ fontFamily: 'Poppins, sans-serif' ,background:''}}>
        <Row className="g-0">
  
          {/* Sidebar */}
          <Col md={3} className="bg-dark text-white vh-200 d-flex flex-column p-4">
            <h4 className="mb-4">Dashboard</h4>
  
            {/* Logout Button on top-right */}
            <Button variant="outline-danger" className="ms-auto mb-3" style={{ width: '100%' }}>
              🚪 Logout
            </Button>
  
            {/* Dashboard Menu with Buttons */}
            <ListGroup variant="flush">
              <ListGroup.Item
                className="bg-dark text-white border-0"
                style={{ cursor: 'pointer' }}
                onClick={() => setActiveSection('profile')}
              >
                 My Profile
              </ListGroup.Item>
              <ListGroup.Item
                className="bg-dark text-white border-0"
                style={{ cursor: 'pointer' }}
                onClick={() => setActiveSection('bookedShows')}
              >
                 Booked Shows
              </ListGroup.Item>
            </ListGroup>
          </Col>
  
          {/* Main Content */}
          <Col md={9} className="p-5" style={{ backgroundColor: '#C8D1D0' }}>
            <h3 className="fw-bold text-dark mb-4">My Profile</h3>
  
            {/* Profile Section */}
            { userData? (
 
    <Col  md={6}>
      <Card className="shadow border-0">
        <Card.Body>
          <h5 className="fw-bold mb-5"> Personal Info</h5>
          <p><strong>Full Name:</strong> {userData.username}</p>
          <p><strong>Email:</strong> {userData.email}</p>
          <p><strong>Phone:</strong> {userData.mobile}</p>
          <p><strong>Joined:</strong> Jan 2024</p>
          {/* <Button variant="outline-primary" size="sm">Edit</Button> */}
        </Card.Body>
      </Card>
    </Col>
  )
: (
  <div className="text-center text-muted mt-3">No user data available.</div>
)}



  
            {/* Booked Shows Section */}
            {activeSection === 'bookedShows' && (
             <ComponentBokkedShow />
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Profile;
