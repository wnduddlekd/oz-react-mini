import MovieCard from './MovieCard';

export default function MovieList({ movies }) {
  return (
    <div className="flex flex-wrap gap-4 p-4">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}
