import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { getAllEventsAPI, searcEventsAPI } from '../services/allAPI';
import { Link, useNavigate } from 'react-router-dom';
import Header from './Header';

const EventList = () => {
  const [events, setEvents] = useState([]);
  const [searc, setSearch] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    handleGetAllevents();
  }, []);

  const handleGetAllevents = async () => {
    try {
      const result = await getAllEventsAPI();
      
      setEvents(result.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleSearchEvents = async (e) => {
    const keyword = e.target.value;
    setSearch(keyword);
    try {
      const result = await searcEventsAPI(keyword);
      setEvents(result.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
   <>
   {/* navbar */}
   <Header insideEvents={true}/>
      <div
        style={{
          background: '#202B5B',
          minHeight: '100vh',
          fontFamily: 'Poppins, sans-serif',
          display: 'flex',
          flexDirection: 'row',
        }}
      >
        {/* Sidebar */}
        <div
          style={{
            width: '250px',
            backgroundColor: 'Black',
            color: '#fff',
            padding: '20px',
            minHeight: '100vh',
            position: 'sticky',
            top: 0,
          }}
        >
          
          <h4 style={{ marginBottom: '30px' }}>Dashboard</h4>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li className="mb-3">
              <Button
                variant="info"
                className="w-100 text-start text-light"
                onClick={() => navigate('/profile')}
              >
                Profile
              </Button>
            </li>
            <li className="mb-3">
              <Button
                variant="info"
                className="w-100 text-start text-light"
                onClick={() => navigate('/bookedshows')}
              >
                Booked Shows
              </Button>
            </li>
            <li className="mb-3">
              <Button
                variant="info"
                className="w-100 text-start text-light"
                onClick={() => navigate('/upcoming')}
              >
                Upcoming Events
              </Button>
            </li>
            <li className="mb-3">
              {/* <Button
                variant="info"
                className="w-100 text-start text-light"
                onClick={() => navigate('/settings')}
              >
                Settings
              </Button> */}
            </li>
          </ul>
        </div>
  
        {/* Main Content */}
        <div style={{ flex: 1, padding: '30px' }}>
          <Container fluid>
            <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-3">
              <h2 className="fw-bold" style={{ color: 'white' }}>Available Events</h2>
              <input
                className="form-control"
                type="search"
                onChange={handleSearchEvents}
                placeholder="Search Events..."
                style={{
                  width: '250px',
                  borderRadius: '8px',
                  border: '1px solid #ccc',
                }}
              />
            </div>
  
            <Row className="g-4">
              {events?.length > 0 ? (
                events.map((item, index) => (
                  <Col key={index} md={4}>
                    <div
                      style={{
                        backgroundColor: '#ffffff',
                        borderLeft: '6px solid #0B5ED7',
                        padding: '20px',
                        borderRadius: '15px',
                        boxShadow: '0 8px 16px rgba(0, 0, 0, 0.08)',
                        transition: 'all 0.3s ease-in-out',
                      }}
                      className="event-box h-100"
                    >
                      <h4 style={{ fontWeight: '600', color: '#2C3E50' }}>{item.title}</h4>
                      <p style={{ fontSize: '15px', color: '#555' }}>
                        <strong>Date:</strong> {item.date} <br />
                        <strong>Location:</strong> {item.location} <br />
                        <strong>Price:</strong> ₹ {item.price}
                      </p>
                      <div className="d-flex justify-content-end">
                        <Link to={`/booking/${item._id}`}>
                          <Button
                            variant="primary"
                            style={{
                              padding: '6px 14px',
                              fontSize: '14px',
                              borderRadius: '8px',
                            }}
                          >
                            Book Now
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </Col>
                ))
              ) : (
                <Col>
                  <div className="text-center fs-5 fw-bold text-secondary">No Events Added</div>
                </Col>
              )}
            </Row>
          </Container>
        </div>
      </div>
   </>
  );
};

export default EventList;
