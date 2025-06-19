const token = import.meta.env.VITE_TMDB_TOKEN;

export async function fetchMovie() {
  const res = await fetch('https://api.themoviedb.org/3/movie/popular', {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.status_message || 'API 요청 실패');
  }

  return data;
}
