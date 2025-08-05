import { movies } from '../MoviesData';
import { Link } from 'react-router-dom';
import "./MoviesList.css";

const MoviesList = () => {
  return (
    <div className="container">
      <h2>Movies</h2>
      <div className="grid">
        {movies.map(movie => (
          <Link key={movie.id} to={`/movie/${movie.id}`} className="card">
            <img src={movie.image} alt={movie.title} />
            <h4>{movie.title}</h4>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MoviesList;


