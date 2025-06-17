export default function MovieDetail({ detail }) {
  if (!detail || !detail.poster) return null;
  return (
    <div key={detail.id} className="flex ">
      <img src={detail.poster} className="w-96" />
      <div className="flex flex-col gap-4 p-8 w-96">
        <div className="flex justify-between">
          <h2 className="text-xl font-semibold">{detail.title}</h2>
          <p className=" p-1 text-sm text-gray-600">평점: {detail.score}</p>
        </div>
        <h3>{detail.genres.map((genre) => genre.name).join(', ')}</h3>
        <p className="leading-relaxed">{detail.overview}</p>
      </div>
    </div>
  );
}
