// Server Component Page

import Link from "next/link";
import Movie from "../../components/movie";
import styles from "../../styles/home.module.css";
import { API_URL } from "../constants";

export const metadata = {
  title: "Home",
};

async function getMovies() {
  //로딩 상태를 확인하기 위해 기다리는 코드
  // await new Promise((resolve) => setTimeout(resolve, 1000));
  // fetch(URL).then((response) => response.json());
  const response = await fetch(API_URL);
  const json = await response.json();
  return json;
}

export default async function HomePage() {
  const movies = await getMovies();
  return (
    <div className={styles.container}>
      {movies.map((movie) => (
        <Movie
          key={movie.id}
          id={movie.id}
          poster_path={movie.poster_path}
          title={movie.title}
        />
      ))}
    </div>
  );
}

// Network에 movie 가져오는 API를 볼 수 없다.
// 데이터가 도착할 때 까지 다른 요소도 볼 수 없다.
// UI가 이예 없다.랜더링이 안일어나기 때문
