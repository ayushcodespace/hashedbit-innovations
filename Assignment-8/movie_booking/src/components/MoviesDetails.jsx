import { useParams, Link } from 'react-router-dom';
import { movies } from '../MoviesData';

const MovieDetails = () => {
  const { id } = useParams();
  const movie = movies.find(m => m.id === parseInt(id));

  return (
    <div className="container">
      <h2>{movie.title}</h2>
      <img src={movie.image} alt={movie.title} />
      <p>Some details about {movie.title}...</p>
      <Link to={`/book/${movie.id}`} className="btn">Book Seat</Link>
    </div>
  );
};

export default MovieDetails;
