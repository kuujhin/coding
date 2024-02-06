// 잘못된 주소로 갔을 시 보여주는 리액트 컴포넌트

import Navigation from "../components/navigation";

export default function NotFound() {
  return (
    <div>
      <Navigation />
      <h1>Not Found!</h1>
    </div>
  );
}
