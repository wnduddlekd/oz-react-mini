import { useEffect, useState } from 'react';

export default function MovieDetail() {
  const [detail, setDetail] = useState();
  const BASE_URL = 'https://image.tmdb.org/t/p/w500';

  useEffect(() => {
    fetch('../data/movieDetailData.json')
      .then((res) => res.json())
      .then((data) => {
        const movieDetailsData = {
          id: data.id,
          title: data.title,
          score: data.vote_average,
          poster: BASE_URL + data.poster_path,
          backdrop: BASE_URL + data.backdrop_path,
          genres: data.genres,
          overview: data.overview,
        };
        setDetail(movieDetailsData);
      })
      .catch((err) => console.error(err));
  }, []);

  if (!detail || !detail.poster) return null;
  return (
    <div
      key={detail.id}
      className="flex mt-16 p-4 border border-gray-300 w-[800px]"
    >
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
