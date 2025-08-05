import { useLocation, Link } from 'react-router-dom';

const BookingConfirmation = () => {
  const { state } = useLocation();

  return (
    <div className="container">
      <h2>Booking Confirmed!</h2>
      <p>Booking ID: <b>{state.bookingId}</b></p>
      <p>Name: {state.name}</p>
      <p>Email: {state.email}</p>
      <p>Mobile: {state.mobile}</p>
      <Link to="/" className="btn">Back to Movies</Link>
    </div>
  );
};

export default BookingConfirmation;
