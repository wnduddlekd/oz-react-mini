import React, { useEffect, useState } from 'react';
import './App.css';
import MovieCard from './components/MovieCard';

function App() {
  const [movies, setMovies] = useState([]);
  const BASE_URL = 'https://image.tmdb.org/t/p/w500';

  useEffect(() => {
    fetch('../data/movieListData.json')
      .then((res) => res.json())
      .then((data) => {
        const moviesData = data.results.map((movie) => ({
          id: movie.id,
          title: movie.title,
          score: movie.vote_average,
          poster: BASE_URL + movie.poster_path,
        }));
        console.log(moviesData);
        setMovies(moviesData);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="flex flex-wrap gap-4 p-4">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

export default App;
