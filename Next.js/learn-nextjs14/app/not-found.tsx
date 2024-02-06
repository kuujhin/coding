// 잘못된 주소로 갔을 시 보여주는 리액트 컴포넌트
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Not found",
};

export default function NotFound() {
  return (
    <div>
      <h1>Not Found!</h1>
    </div>
  );
}
