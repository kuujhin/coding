// Server Component Page

import Link from "next/link";

export const metadata = {
  title: "Home",
};

export const API_URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

async function getMovies() {
  //로딩 상태를 확인하기 위해 기다리는 코드
  await new Promise((resolve) => setTimeout(resolve, 1000));
  // fetch(URL).then((response) => response.json());
  const response = await fetch(API_URL);
  const json = await response.json();
  return json;
}

export default async function HomePage() {
  const movies = await getMovies();
  return (
    <div>
      {movies.map((movie) => (
        <li key={movie.id}>
          <Link href={`/movies/${movie.id}`}>{movie.title}</Link>
        </li>
      ))}
    </div>
  );
}

// Network에 movie 가져오는 API를 볼 수 없다.
// 데이터가 도착할 때 까지 다른 요소도 볼 수 없다.
// UI가 이예 없다.랜더링이 안일어나기 때문
