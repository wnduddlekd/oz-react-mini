export default function MovieCard({ movie }) {
  return (
    <div key={movie.id} className="w-64 h-100 border border-gray-300">
      <img src={movie.poster} />
      <h3 className="p-2 font-semibold">{movie.title}</h3>
      <p className=" p-1 text-sm text-gray-600">평점: {movie.score}</p>
    </div>
  );
}
