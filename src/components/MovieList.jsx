import MovieCard from './MovieCard';

export default function MovieList({ movies }) {
  return (
    <div className="flex flex-wrap justify-center gap-6 py-12 ">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}
