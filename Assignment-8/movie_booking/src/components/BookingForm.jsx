import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const BookingForm = () => {
//   const { id } = useParams();
  const [formData, setFormData] = useState({ name: '', email: '', mobile: '' });
  const navigate = useNavigate();

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const bookingId = Math.floor(Math.random() * 1000000);
    navigate('/confirmation', { state: { ...formData, bookingId } });
  };

  return (
    <div className="container">
      <h2>Book Seat</h2>
      <form onSubmit={handleSubmit} className="form">
        <input type="text" name="name" placeholder="Name" required onChange={handleChange} />
        <input type="email" name="email" placeholder="Email" required onChange={handleChange} />
        <input type="tel" name="mobile" placeholder="Mobile" required onChange={handleChange} />
        <button type="submit" className="btn">Submit</button>
      </form>
    </div>
  );
};

export default BookingForm;
