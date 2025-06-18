import React, { useEffect, useState } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import MovieDetail from './pages/MovieDetail';

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
    <div className="flex flex-col items-center">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home movies={movies} />} />
          <Route
            path="/detail"
            element={<MovieDetail detail={movieDetails} />}
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
