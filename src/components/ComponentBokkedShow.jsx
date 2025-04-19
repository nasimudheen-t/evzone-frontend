import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { getAllBookedUserDAtaAPI } from '../services/allAPI';
import Header from '../components/Header';

const ComponentBokkedShow = () => {
  const [userShows,setUserShows] = useState()
 
  useEffect(()=>{
    handleBookedShows()
  },[])

  const handleBookedShows = async () => {
    const storedUser = JSON.parse(sessionStorage.getItem('userdata'));
  
    try {
      const result = await getAllBookedUserDAtaAPI();
      const allBookings = result.data;
  
     
      const userBookings = allBookings.filter(
        booking => booking.user === storedUser.username
      );
  
      setUserShows(userBookings);
      console.log("User-specific bookings:", userBookings);
  
    } catch (err) {
      console.log(err);
    }
  };
  return (

   <>
      <Container fluid className="p-5 mt-5" style={{ backgroundColor: '#202B5B' }}>
        <h3 className="fw-bold text-white mb-4">My Booked Events</h3>
  
        {/* Event 1 */}
        <Row className="mb-4">
         {
          userShows?.length>0?
          userShows.map((item,index)=>(
            <Col key={index} md={6} className='mt-4'>
            <Card className="shadow-sm border-0 h-100 " style={{boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)' }}>
              <Card.Body>
                <h5 className="fw-bold text-primary">{item.eventTitle}</h5>
                <p><strong>Date:</strong> 2025-05-20</p>
                <p><strong>Location:</strong> Kochi</p>
                <p><strong>Status:</strong> <span className="text-success fw-semibold">Confirmed</span></p>
                
                {/* <Button variant="outline-dark" size="sm">View Ticket</Button> */}
              </Card.Body>
            </Card>
          </Col>
          ))
          :
          <div>No shows booked yet</div>
         }
  
          
        </Row>
  
        {/* Event 3 */}
      
      </Container>
   </>
  
  );
};

export default ComponentBokkedShow;
