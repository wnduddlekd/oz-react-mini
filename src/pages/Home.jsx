import MovieList from '@/components/MovieList';
import MovieSlide from '@/components/MovieSlide';
import { useEffect, useState } from 'react';
import { fetchMovie } from '../api/tmdbApi';

export default function Home() {
  const [movies, setMovies] = useState([]);
  const BASE_URL = 'https://image.tmdb.org/t/p/w500';

  useEffect(() => {
    fetchMovie()
      .then((data) => {
        const moviesData = data.results
          .filter((movie) => movie.adult === false)
          .map((movie) => ({
            id: movie.id,
            title: movie.title,
            score: movie.vote_average,
            poster: BASE_URL + movie.poster_path,
          }));
        setMovies(moviesData);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <MovieList movies={movies} />
      <MovieSlide movies={movies} />
    </>
  );
}
