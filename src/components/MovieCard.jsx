import { useNavigate } from 'react-router-dom';

export default function MovieCard({ movie }) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/detail/${movie.id}`);
  };

  return (
    <div
      onClick={handleClick}
      key={movie.id}
      className="w-64 overflow-hidden rounded bg-slate-950/20 shadow-xl shadow-gray-700/40 transition-transform duration-300 ease-in-out hover:-translate-y-2 mb-2 p-2"
    >
      <img
        src={movie.poster}
        className="w-full h-[370px] object-cover rounded"
      />
      <div className="p-1">
        <h3 className="m-2">{movie.title}</h3>
        <p className=" m-2 text-sm text-gray-500">
          평점: {movie.score?.toFixed(2) ?? '정보 없음'}
        </p>
      </div>
    </div>
  );
}
