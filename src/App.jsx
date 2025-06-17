import React, { useEffect, useState } from 'react';
import './App.css';
import MovieCard from './components/MovieCard';
import MovieDetail from './components/MovieDetail';

function App() {
  const [movies, setMovies] = useState([]);
  const [movieDetails, setMovieDetails] = useState();
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

  useEffect(() => {
    fetch('../data/movieDetailData.json')
      .then((res) => res.json())
      .then((data) => {
        const movieDetailsData = {
          id: data.id,
          title: data.title,
          score: data.vote_average,
          poster: BASE_URL + data.poster_path,
          backdrop: BASE_URL + data.backdrop_path,
          genres: data.genres,
          overview: data.overview,
        };
        console.log(movieDetailsData);
        setMovieDetails(movieDetailsData);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <div className="flex flex-wrap gap-4 p-4">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
      <div>
        <MovieDetail detail={movieDetails} />
      </div>
    </>
  );
}

export default App;
