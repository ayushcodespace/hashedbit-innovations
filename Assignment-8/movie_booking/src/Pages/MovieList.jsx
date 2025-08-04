import React, { useEffect, useState } from 'react';
import './MovieList.css';
import MovieCard from '../Components/movieCard';

const MovieListPage = () => {
  const [movies, setMovies] = useState([]);

  // Sample IMDb IDs
  const movieIDs = [
    "tt3896198", "tt0110413", "tt0848228", "tt1375666",
    "tt4154796", "tt0120737", "tt0816692", "tt0133093",
    "tt1877830", "tt0499549", "tt0167261", "tt4154756",
    "tt7286456", "tt3606756", "tt0110357", "tt1345836"
  ];
  const movieAPIKey=import.meta.env.VITE_MOVIE_API_KEY;
  useEffect(() => {
    const fetchMovies = async () => {
      const fetched = await Promise.all(
        movieIDs.map(id =>
          fetch(`https://www.omdbapi.com/?i=${id}&apikey=${movieAPIKey}`)
            .then(res => res.json())
        )
      );
      setMovies(fetched);
    };

    fetchMovies();
  }, []);

  return (
    <div className="movie-list-page">
      <h1>Popular Movies</h1>

      <div className="movie-grid">
        {movies.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieListPage;