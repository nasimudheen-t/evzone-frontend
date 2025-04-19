import React, { useEffect, useState } from 'react';
import { Table, Container } from 'react-bootstrap';
import { getAllBookedUserDAtaAPI } from '../services/allAPI';

const ListEvents = () => {
  const [user, setUser] = useState();

  useEffect(() => {
    getAllbokkedUser();
  }, []);

  const getAllbokkedUser = async () => {
    try {
      const result = await getAllBookedUserDAtaAPI();
      console.log(result.data.user);
      
      setUser(result.data);
      console.log(result.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div style={{ backgroundColor: '#121212', minHeight: '100vh', paddingTop: '50px', paddingBottom: '50px' }}>
      <Container>
        <div
          style={{
            backgroundColor: '#ffffff',
            borderRadius: '15px',
            padding: '30px',
            boxShadow: '0px 10px 25px rgba(0, 0, 0, 0.3)',
          }}
        >
          <h2 className="mb-4 text-center" style={{ color: '#1F2937', fontWeight: 'bold' }}>
            📋 Booked Events
          </h2>
          <Table striped bordered hover responsive
            style={{
              borderRadius: '10px',
              overflow: 'hidden',
              borderCollapse: 'separate',
              borderSpacing: '0',
            }}
          >
            <thead style={{ backgroundColor: '#1F2937', color: '#ffffff' }}>
              <tr>
                <th>#</th>
                <th>User Name</th>
                <th>Event Name</th>
                <th>Booking Date</th>
                <th>Event Date</th>
                <th>Booking ID</th>
              </tr>
            </thead>
            <tbody>
              {user?.length > 0 ? (
                user.map((item, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.user}</td>
                    <td>{item.eventTitle}</td>
                    <td>{new Date(item.bookedDay).toLocaleDateString()}</td>
                    <td>{new Date(item.date).toLocaleDateString()}</td>
                    <td>{item._id}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="text-center text-muted">
                    No Bookings Yet
                  </td>
                </tr>
              )}
            </tbody>
          </Table>
        </div>
      </Container>
    </div>
  );
};

export default ListEvents;
