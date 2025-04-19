import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Header from '../components/Header';

const events = [
  {
    id: 1,
    title: "Neon Music Night",
    location: "Kochi, Kerala",
    image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bXVzaWMlMjBuaWdodHxlbnwwfHwwfHx8MA%3D%3D",
    category: "Music",
    description: "Join us for an electrifying night filled with neon lights, amazing live music, and unforgettable energy in the heart of Kochi!"
  },
  {
    id: 2,
    title: "Tech Innovators Summit",
    location: "Bangalore, India",
    image: "https://plus.unsplash.com/premium_photo-1711664260540-d93ec778f1b2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8VGVjaCUyMElubm92YXRvcnMlMjBTdW1taXR8ZW58MHx8MHx8fDA%3D",
    category: "Technology",
    description: "A gathering of brilliant minds to explore the future of technology, innovation, and startups. Network, learn, and grow!"
  },
  {
    id: 3,
    title: "Comedy Carnival",
    location: "Chennai, India",
    image: "https://images.unsplash.com/photo-1635338345994-30fd5c1cee74?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fENvbWVkeSUyMENhcm5pdmFsfGVufDB8fDB8fHww",
    category: "Stand-Up Comedy",
    description: "Laugh your heart out with the funniest stand-up comedians in the country. A night packed with jokes, fun, and giggles!"
  },
  {
    id: 4,
    title: "Art & Culture Expo",
    location: "Mumbai, India",
    image: "https://plus.unsplash.com/premium_photo-1706430433607-48f37bdd71b8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8QXJ0JTIwJTI2JTIwQ3VsdHVyZSUyMEV4cG98ZW58MHx8MHx8fDA%3D",
    category: "Art & Culture",
    description: "Celebrate creativity, tradition, and vibrant art from across the country at Mumbai's largest cultural showcase!"
  },
];

const UpcomingEvents = () => {
  return (
    <>
      <Header />
      <div style={{ backgroundColor: '#30F0F0', paddingTop: '40px', paddingBottom: '40px' }}>
        <Container className='border shadow bg-light rounded'>
          <h2 className="text-center mb-4"> Upcoming Events</h2>
          <p className="text-center text-muted mb-5 fs-5">
            We are preparing something amazing for you. Stay tuned and get ready to experience unforgettable moments!
          </p>

          {events.map(event => (
            <Row className="align-items-center mb-5" key={event.id}>
              <Col md={6} className="mb-3 mb-md-0">
                <h3>{event.title}</h3>
                <p className="text-muted">{event.location} | {event.category}</p>
                <p>{event.description}</p>
              </Col>
              <Col md={6}>
                <img
                  src={event.image}
                  alt={event.title}
                  className="img-fluid rounded shadow"
                  style={{ maxHeight: "300px", objectFit: "cover", width: "100%" }}
                />
              </Col>
            </Row>
          ))}
        </Container>
      </div>
    </>
  );
};

export default UpcomingEvents;
