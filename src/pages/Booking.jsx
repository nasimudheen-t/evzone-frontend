import React, { useContext, useEffect, useState } from 'react';
import { Container, Row, Col, Button, Nav } from 'react-bootstrap';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { bookedUserDAtaAPI, getEventByIdAPI, orderPaymentAPI } from '../services/allAPI';
import SERVER_URL from '../services/serverURL';
import { myContextApi } from '../ContextApi/ContextAPI';

const Booking = () => {
  const { id } = useParams();
  const [event, setEvent] = useState({});
  const [sdkReady, setSdkReady] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate('')
  const {setBookedUser, bookedUser} = useContext(myContextApi)
  
  useEffect(()=>{
    console.log("booked user",bookedUser);
    
  },[bookedUser])



  // Load Razorpay SDK
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    script.onload = () => setSdkReady(true);
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  // Fetch event details
  useEffect(() => {
    handleTicketBooking();
  }, [id]);

  const handleTicketBooking = async () => {
    const token = sessionStorage.getItem("token");

    if (token) {
      const reqHeaders = {
        "Authorization": `Bearer ${token}`,
      };

      try {
        const result = await getEventByIdAPI(id, reqHeaders);
        setEvent(result.data);
      } catch (err) {
        console.log(err);
      }
    }
  };

  // Razorpay Payment Handler
  const payNow = async () => {
    if (loading) return;
    setLoading(true);

    const token = sessionStorage.getItem("token");
    const userDetails = JSON.parse(sessionStorage.getItem('user'))
    const mobile = JSON.parse(sessionStorage.getItem('mobile'))
    console.log(mobile,userDetails);
    
   
    
    if (!sdkReady) {
      alert("Razorpay SDK is still loading. Please wait.");
      setLoading(false);
      return;
    }

    if (token) {
      const reqHeaders = {
        "Authorization": `Bearer ${token}`,
      };

      try {
        const response = await orderPaymentAPI(
          {
            amount: event.price,
            currency: 'INR',
            receipt: `receipt#${id}`,
            notes: {
              customer: 'Test User',
              event: event.title,
            },
          },
          reqHeaders
        );

        const order = response.data;

        if (order.status === 'created') {
          const options = {
            key: 'rzp_test_AhZ7MRXT3tmJCJ',
            amount: order.amount,
            currency: order.currency,
            name: 'Your Company Name',
            description: 'Event Ticket Purchase',
            order_id: order.id,
            // callback_url: `${SERVER_URL}/verify-payment`, // optional, handled below
            prefill: {
              name: 'Your Name',
              email: 'your.email@example.com',
              contact: '9999999999',
            },
            theme: {
              color: '#F37254',
            },
            handler: async function (response) {
              try {
                const verifyResponse = await fetch(`${SERVER_URL}/verify-payment`, {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({
                    razorpay_order_id: response.razorpay_order_id,
                    razorpay_payment_id: response.razorpay_payment_id,
                    razorpay_signature: response.razorpay_signature,
                  }),
                });
            
                const data = await verifyResponse.json();
                console.log("Payment verification response:", data);
            
                if (data.status === 'ok') {
                  const bookedUserData = {
                    user:userDetails.username,
                    eventTitle: event.title,
                    date: event.date,
                    bookingStatus: true 
                  };
            try{
              const bookedData = await bookedUserDAtaAPI(bookedUserData, reqHeaders);
              console.log("Booking success:", bookedData.data);
            }catch(err){
              console.log("Axios Error:", err);
              console.log("Error Response:", err.response?.data);
            }
            
                  alert('Payment Successful!');
                } else {
                  alert('Payment verification failed');
                }
              } catch (error) {
                console.error('Error verifying or booking:', error);
                alert('Something went wrong during verification or booking');
              }
            }
            
          };

          const rzp = new window.Razorpay(options);
          rzp.open();
        }
      } catch (err) {
        console.error('Error creating order:', err);
        alert('Error initiating payment');
      }
    } else {
      alert('No token found, please log in');
    }

    setLoading(false);
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#F8F9FA', fontFamily: 'Poppins, sans-serif' }}>
      <Container fluid>
        <Row>
          {/* Sidebar */}
          
          <Col md={3} className="bg-dark text-white p-4" style={{ minHeight: '100vh' }}>
          <Button  style={{ marginBottom: '30px' }}><Link style={{textDecoration:'none',color:'white'}} to={'/events'}>Back</Link></Button>
            <h3 className="mb-4 text-center">Dashboard</h3>
            <Nav className="flex-column">
              <Nav.Link className="text-white mb-2" style={{ backgroundColor: '#1f1f1f', borderRadius: '8px' }} href="#">Profile</Nav.Link>
              <Nav.Link className="text-white mb-2" style={{ backgroundColor: '#1f1f1f', borderRadius: '8px' }} href="#" onClick={() => navigate('/bookedshows')}>Booked Shows</Nav.Link>
            </Nav>
          </Col>

          {/* Main Content */}
          <Col md={9} className="p-4">
            <div
              className="p-4"
              style={{
                backgroundColor: '#fff',
                borderRadius: '15px',
                boxShadow: '0 6px 20px rgba(0,0,0,0.1)',
              }}
            >
              <Row>
                {/* Event Image */}
                <Col md={6}>
                  <img
                    src="https://static.vecteezy.com/system/resources/thumbnails/027/104/127/small_2x/cheering-crowd-illuminated-by-vibrant-stage-lights-at-concert-photo.jpg"
                    alt="Event"
                    style={{
                      width: '100%',
                      borderRadius: '15px',
                      objectFit: 'cover',
                    }}
                  />
                </Col>

                {/* Event Details */}
                <Col md={6} className="d-flex flex-column justify-content-center px-4">
                  <h2 className="fw-bold">{event.title}</h2>
                  <ul style={{ listStyle: 'none', padding: 0, lineHeight: '2', color: '#333' }}>
                    <li><strong>Date:</strong> {event.date}</li>
                    <li><strong>Location:</strong> {event.location}</li>
                    <li><strong>Category:</strong> {event.category}</li>
                    <li><strong>Price:</strong> ₹ {event.price}</li>
                  </ul>
                  <p style={{ textAlign: 'justify', fontSize: '14px' }}>
                    {event.description}
                  </p>
                  <Button
                    variant="primary"
                    className="mt-3"
                    style={{
                      borderRadius: '8px',
                      padding: '10px 20px',
                      backgroundColor: '#0B5ED7',
                      border: 'none',
                      fontSize: '15px',
                    }}
                    onClick={payNow}
                    disabled={loading}
                  >
                    {loading ? 'Processing...' : 'Book Your Ticket'}
                  </Button>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};



export default Booking;
