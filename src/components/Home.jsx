import MovieList from './MovieList';
import MovieSlide from './MovieSlide';

export default function Home({ movies }) {
  return (
    <>
      <MovieList movies={movies} />
      <MovieSlide movies={movies} />
    </>
  );
}
