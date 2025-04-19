import React from "react";
import { Navbar, Nav, Container, Button, Card, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import HoverCard from "../components/HoverCard";
import { FaFacebookF, FaTwitter, FaInstagram, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import logo from '../assets/evlogo.png'
import { Link as ScrollLink } from "react-scroll"; 


const Home = () => {
  const isLoggedIn = sessionStorage.getItem("token");

  return (
    <div style={{ fontFamily: "'Segoe UI', sans-serif" }}>

      {/* Navbar */}
      <Navbar expand="lg" className="shadow-sm bg-transparent" style={{ position: "absolute", top: 0, width: "100%", zIndex: 10 }}>
  <Container>
    <Navbar.Brand
      href="#"
      style={{ color: "white", fontSize: "28px", fontWeight: "bold", letterSpacing: "1px" }}
    >
      <img width={'80px'} src={logo} alt="" />
      EvZone
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ms-auto fw-bold fs-4" style={{ alignItems: "center" }}>
        {["Home", "About", "Contact"].map((item, idx) => (
          <ScrollLink
          key={idx}
          to={item} // matches the section's id
          smooth={true}
          duration={500}
          offset={-70} // adjust offset for sticky navbar
          style={{ color: "white", margin: "0 12px", fontSize: "16px", cursor: "pointer" }}
          className="nav-link"
        >
          {item}
        </ScrollLink>
        ))}
        {!sessionStorage.getItem("token") && (
          <Link to="/register">
            <Button variant="warning" className="ms-3 fw-bold">
              Register
            </Button>
          </Link>
        )}
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>


      {/* Hero Section */}
      <div
  style={{
    backgroundImage: "url('https://wallpapercave.com/wp/wp2746667.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "100vh",
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
    textAlign: "center",
  }}
>
  {/* Overlay for dark tint effect */}
  <div
    style={{
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "",
      zIndex: 1,
    }}
  ></div>

  {/* Content Section */}
  <Container style={{ zIndex: 2 }}>
    <h1 style={{ fontSize: "3.5rem", fontWeight: "bold", marginBottom: "20px" }}>
      Discover Amazing Events Near You
    </h1>
    <p style={{ fontSize: "20px", maxWidth: "700px", margin: "0 auto 30px" }}>
      Book tickets, explore upcoming shows, and enjoy unforgettable moments with EventZone.
    </p>
    <Link to={isLoggedIn ? "/events" : "/register"}>
      <Button
        variant="light"
        size="lg"
        className="shadow-sm px-5 py-3 fw-bold"
        style={{ fontSize: "18px" }}
      >
        {isLoggedIn ? "Explore Events" : "Get Started"}
      </Button>
    </Link>
  </Container>
</div>




      {/* About Section */}
    
      <div id="About" style={{
      backgroundColor: "#E9E9EA",
      minHeight: "60vh",
      display: "flex",
      alignItems: "center",
      padding: "60px 20px",
      height:'100vh'
    }}>
        
      <Container className="p-5 teaxt-dark" style={{background:'#D6CFE1', borderRadius: "12px",
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)"}}>
        <Row className="align-items-center">
          {/* Text Section */}
          <Col md={6} style={{ textAlign: "left" }} >
            <h2 style={{ fontWeight: "700", color: "black", fontSize: "2.5rem" }} className="text-center">About Us</h2>
            <p style={{ fontSize: "18px", color: "black", marginTop: "20px" }} className="text-center">
            From cultural festivals and concerts to adventure experiences and workshops — we bring them all to one place. Browse a wide variety of events curated for different interests, age groups, and locations. Each event page provides detailed descriptions, ticket pricing, venue information, and schedules. Our easy-to-use booking system ensures that your spot is secured in just a few clicks. Whether you're planning ahead or looking for something last minute, we've got options to suit every need. We aim to make your event experience smooth, exciting, and completely hassle-free. Join us to explore events like never before — book, attend, and enjoy every moment.


            </p>
          </Col>

          {/* Image Section */}
          <Col md={6} style={{ textAlign: "center" }}>
            <img 
              src="https://img.freepik.com/free-photo/black-silhouettes-music-concert-poster-concept_1194-617147.jpg?semt=ais_hybrid&w=740" 
              alt="About Us" 
              style={{
                width: "100%",
                maxWidth: "800px",
                border: "5px solid #D1D5DB",
                borderRadius: "10px"
              }} 
            />
          </Col>
        </Row>
      </Container>
    </div>

      {/* Trending Events Section */}
     <HoverCard/>

      {/* Footer */}
      <footer id="Contact" style={{ backgroundColor: "#1E293B", color: "#fff", padding: "50px 0", fontSize: "14px" }}>
  <Container>
    <Row className="mb-4">
      <Col md={4} className="mb-4 mb-md-0">
        <h5 style={{ color: "#fff", marginBottom: "15px" }}>EventHub</h5>
        <p style={{ color: "#CBD5E1" }}>
          EventHub is your one-stop solution for seamless event booking and management.
          Create, manage, and enjoy events with ease using our powerful platform.
        </p>
      </Col>

      <Col md={4} className="mb-4 mb-md-0">
        <h5 style={{ color: "#fff", marginBottom: "15px" }}>Quick Links</h5>
        <ul style={{ listStyle: "none", padding: 0, color: "#CBD5E1" }}>
          <li><a href="/about" style={{ color: "#CBD5E1", textDecoration: "none" }}>About Us</a></li>
          <li><a href="/services" style={{ color: "#CBD5E1", textDecoration: "none" }}>Services</a></li>
          <li><a href="/contact" style={{ color: "#CBD5E1", textDecoration: "none" }}>Contact</a></li>
          <li><a href="/privacy" style={{ color: "#CBD5E1", textDecoration: "none" }}>Privacy Policy</a></li>
        </ul>
      </Col>

      <Col md={4}>
        <h5 style={{ color: "#fff", marginBottom: "15px" }}>Contact Us</h5>
        <p style={{ color: "#CBD5E1", marginBottom: "8px" }}><FaEnvelope style={{ marginRight: "8px" }} /> support@eventhub.com</p>
        <p style={{ color: "#CBD5E1", marginBottom: "15px" }}><FaPhoneAlt style={{ marginRight: "8px" }} /> +91 98765 43210</p>
        <div style={{ display: "flex", gap: "12px" }}>
          <a href="#" style={{ color: "#CBD5E1" }}><FaFacebookF /></a>
          <a href="#" style={{ color: "#CBD5E1" }}><FaTwitter /></a>
          <a href="#" style={{ color: "#CBD5E1" }}><FaInstagram /></a>
        </div>
      </Col>
    </Row>

    <hr style={{ borderTop: "1px solid #334155" }} />

    <Row>
      <Col className="text-center">
        <p style={{ color: "#94A3B8", marginBottom: "0" }}>© {new Date().getFullYear()} EventHub. All Rights Reserved.</p>
      </Col>
    </Row>
  </Container>
</footer>

    </div>
  );
};

export default Home;
