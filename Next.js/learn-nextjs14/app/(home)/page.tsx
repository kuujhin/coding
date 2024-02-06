// Server Component Page

export const metadata = {
  title: "Home",
};

const URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

async function getMovies() {
  //로딩 상태를 확인하기 위해 5초 기다리는 코드
  await new Promise((resolve) => setTimeout(resolve, 5000));
  // fetch(URL).then((response) => response.json());
  const response = await fetch(URL);
  const json = await response.json();
  return json;
}

export default async function HomePage() {
  const movies = await getMovies();
  return <div>{JSON.stringify(movies)}</div>;
}

// Network에 movie 가져오는 API를 볼 수 없다.
// 데이터가 도착할 때 까지 다른 요소도 볼 수 없다.
