import MovieCard from './MovieCard';

export default function MovieList({ movies }) {
  return (
    <div className="flex flex-wrap justify-center gap-4 p-4 min-w-[800px] max-w-[1380px]">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}
