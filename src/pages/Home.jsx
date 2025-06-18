import MovieList from '@/components/MovieList';
import MovieSlide from '@/components/MovieSlide';

export default function Home({ movies }) {
  return (
    <>
      <MovieList movies={movies} />
      <MovieSlide movies={movies} />
    </>
  );
}
