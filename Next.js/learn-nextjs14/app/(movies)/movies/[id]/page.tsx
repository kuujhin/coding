// /movie/:id 로 이동시 보여주는 컴포넌트

export default function MovieDetail({
  params: { id },
}: {
  params: { id: string };
}) {
  // export default function MovieDetail(props) {
  // console.log(props);
  // http://localhost:3000/movies/12                  ---> { params: { id: '12' }, searchParams: {} }
  // http://localhost:3000/movies/12?region=kr        ---> { params: { id: '12' }, searchParams: { region: 'kr' } }
  // http://localhost:3000/movies/12?region=kr&page=2 ---> { params: { id: '12' }, searchParams: { region: 'kr', page: '2' } }
  return (
    <div>
      <h1>Movie {id}</h1>
    </div>
  );
}
