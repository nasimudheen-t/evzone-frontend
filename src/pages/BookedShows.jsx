import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { getAllBookedUserDAtaAPI } from '../services/allAPI';
import Header from '../components/Header';

const BookedShows = () => {
  const [userShows, setUserShows] = useState();

  useEffect(() => {
    handleBookedShows();
  }, []);

  const handleBookedShows = async () => {
    const storedUser = JSON.parse(sessionStorage.getItem('userdata'));
  
    try {
      const result = await getAllBookedUserDAtaAPI();
      const allBookings = result.data;
  
      const userBookings = allBookings.filter(
        (booking) => booking.user === storedUser.username
      );
  
      setUserShows(userBookings);
      console.log("User-specific bookings:", userBookings);
  
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Header />
      <Container fluid className="p-5" style={{ backgroundColor: '#202B5B' , height:'100vh'}}>
        <h3 className="fw-bold text-white mb-4">My Booked Events</h3>

        {/* Event 1 */}
        <Row className="mb-4">
          {
            userShows?.length > 0 ?
              userShows.map((item, index) => (
                <Col key={index} md={6} className='mt-4'>
                  <Card className=" border-0 h-100" style={{background: '#CCF5FE', color: 'black', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)' }}>
                    <Card.Body>
                      <h5 className="fw-bold text-dark">{item.eventTitle}</h5>
                      <p><strong>Date:</strong> 2025-05-20</p>
                      <p><strong>Location:</strong> Kochi</p>
                      <p><strong>Status:</strong> <span className="text-success fw-semibold">Confirmed</span></p>
                    </Card.Body>
                  </Card>
                </Col>
              )) :
              <div className="text-white">No shows booked yet</div>
          }
        </Row>

      </Container>
    </>
  );
};

export default BookedShows;
