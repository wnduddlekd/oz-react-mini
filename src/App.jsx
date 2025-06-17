import React, { useEffect, useState } from 'react';
import './App.css';
import MovieDetail from './components/MovieDetail';
import { Route, Routes } from 'react-router-dom';
import MovieList from './components/MovieList';

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
        setMovieDetails(movieDetailsData);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <Routes>
      <Route path="/" element={<MovieList movies={movies} />} />
      <Route path="/detail" element={<MovieDetail detail={movieDetails} />} />
    </Routes>
  );
}

export default App;
