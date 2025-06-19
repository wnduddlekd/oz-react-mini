import { TMDB_BASE_URL } from './constants';

const token = import.meta.env.VITE_TMDB_TOKEN;

export async function fetchMovieDetail(id) {
  const res = await fetch(
    `${TMDB_BASE_URL}/${id}?api_key=${token}&language=ko-KR`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    }
  );

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.status_message || 'API 요청 실패');
  }

  return data;
}
