import { getRegExp } from 'korean-regexp';
import MovieCard from './MovieCard';
import { useSearch } from './SearchContext';

export default function MovieList({ movies }) {
  const { searchTerm } = useSearch();

  const filterMovie = searchTerm
    ? movies.filter((movie) => {
        const regex = getRegExp(searchTerm);
        return regex.test(movie.title);
      })
    : movies;

  return (
    <div>
      {filterMovie.length === 0 ? (
        <p className="my-64">검색 결과가 없습니다</p>
      ) : (
        <div className="flex flex-wrap justify-center gap-6 py-12 ">
          {filterMovie.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
}
