import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/evlogo.png'


const Header = ({insideEvents,insideProfile}) => {
  const navigate = useNavigate();

  const handleLogout = () => {
   sessionStorage.removeItem('role')
   sessionStorage.removeItem('token')
   sessionStorage.removeItem('user')
   sessionStorage.removeItem('userdata')
   
   alert("succesfully logout......")
   
    navigate('/'); 
  };

  return (
    <Navbar bg="light" expand="lg" className="shadow-sm">
      <Container>
        <Navbar.Brand className="fw-bold fs-4 text-primary"><img width={'70px'} src={logo} alt="" /> EvZone</Navbar.Brand>
        <Navbar.Toggle aria-controls="main-navbar" />
        <Navbar.Collapse id="main-navbar">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" className="fw-semibold">Home</Nav.Link>
           {
            !insideEvents &&  <Nav.Link as={Link} to="/events" className="fw-semibold">Events</Nav.Link>
           }
           {
            !insideProfile  && <Nav.Link as={Link} to="/profile" className="fw-semibold">Profile</Nav.Link>
           }
          </Nav>
          <Button variant="outline-danger" onClick={handleLogout}>Logout</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
