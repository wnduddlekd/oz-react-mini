import { useNavigate } from 'react-router-dom';

export default function MovieCard({ movie }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/detail');
  };
  return (
    <div
      onClick={handleClick}
      key={movie.id}
      className="w-64 border border-gray-300 overflow-hidden"
    >
      <img src={movie.poster} className="w-full h-[370px] object-cover" />
      <div className="p-1">
        <h3 className="m-2 font-semibold">{movie.title}</h3>
        <p className=" m-2 text-sm text-gray-600">평점: {movie.score}</p>
      </div>
    </div>
  );
}
