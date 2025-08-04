import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Confirmation.css';

const ConfirmationPage = () => {
  const location = useLocation();
  const data = location.state || JSON.parse(localStorage.getItem('bookingData'));

  if (!data) {
    return (
      <div className="no-booking">
        <h2>No Booking Found</h2>
        <Link to="/">Go to Home</Link>
      </div>
    );
  }

  return (
    <div className="confirmation-page">
      <h2>Booking Confirmed!</h2>
      <p><strong>Movie:</strong> {data.movie?.Title}</p>
      <p><strong>Name:</strong> {data.name}</p>
      <p><strong>Email:</strong> {data.email}</p>
      <p><strong>Mobile:</strong> {data.mobile}</p>
      <p><strong>Booking ID:</strong> {data.bookingId}</p>
      <Link to="/">Go to Home</Link>
    </div>
  );
};

export default ConfirmationPage;