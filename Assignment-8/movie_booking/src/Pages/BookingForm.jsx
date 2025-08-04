import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './BookingForm.css';

const BookingFormPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { movie } = location.state || {};

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: ''
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Generate random booking ID
    const bookingId = Math.random().toString(36).substring(2, 10).toUpperCase();

    const bookingData = { ...formData, movie, bookingId };

    // Save to localStorage
    localStorage.setItem('bookingData', JSON.stringify(bookingData));

    // Navigate to confirmation page
    navigate('/confirmation', {
      state: bookingData
    });
  };

  return (
    <div className="booking-form-page">
      <h2>Book Your Seat for {movie?.Title || 'Selected Movie'}</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input name="name" required onChange={handleChange} />
        </label>
        <label>
          Email:
          <input name="email" type="email" required onChange={handleChange} />
        </label>
        <label>
          Mobile:
          <input name="mobile" type="tel" required onChange={handleChange} />
        </label>
        <button type="submit">Submit Booking</button>
      </form>
    </div>
  );
};

export default BookingFormPage;