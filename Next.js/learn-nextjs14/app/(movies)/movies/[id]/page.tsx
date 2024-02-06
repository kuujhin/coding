// /movie/:id 로 이동시 보여주는 컴포넌트

import { API_URL } from "../../../(home)/page";

async function getMovie(id: string) {
  // console.log(`Fetching movies: ${Date.now()}`);

  await new Promise((resolve) => setTimeout(resolve, 1000));

  const response = await fetch(`${API_URL}/${id}`);
  return response.json();
}

async function getVideos(id: string) {
  // console.log(`Fetching videos: ${Date.now()}`);

  await new Promise((resolve) => setTimeout(resolve, 1000));

  const response = await fetch(`${API_URL}/${id}/videos`);
  return response.json();
}

export default async function MovieDetail({
  params: { id },
}: {
  params: { id: string };
}) {
  // export default function MovieDetail(props) {
  // console.log(props);
  // http://localhost:3000/movies/12                  ---> { params: { id: '12' }, searchParams: {} }
  // http://localhost:3000/movies/12?region=kr        ---> { params: { id: '12' }, searchParams: { region: 'kr' } }
  // http://localhost:3000/movies/12?region=kr&page=2 ---> { params: { id: '12' }, searchParams: { region: 'kr', page: '2' } }
  // console.log("start fetching");
  // const movie = await getMovie(id);
  // const videos = await getVideos(id);
  const [movie, videos] = await Promise.all([getMovie(id), getVideos(id)]);

  // console.log("end fetching");

  return (
    <div>
      <h1>{movie.title}</h1>
    </div>
  );
}
