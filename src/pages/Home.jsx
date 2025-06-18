import MovieList from '@/components/MovieList';
import MovieSlide from '@/components/MovieSlide';
import { useEffect, useState } from 'react';

export default function Home() {
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
        setMovies(moviesData);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <MovieList movies={movies} />
      <MovieSlide movies={movies} />
    </>
  );
}
