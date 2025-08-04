import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/MovieList';
import MovieDetailsPage from './Pages/MovieDetails';
import BookingFormPage from './Pages/BookingForm';
import ConfirmationPage from './Pages/Confirmation';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movie/:id" element={<MovieDetailsPage />} />
        <Route path="/book/:id" element={<BookingFormPage />} />
        <Route path="/confirmation" element={<ConfirmationPage />} />
      </Routes>
    </Router>
  );
}

export default App;