// /about-us 주소에 사용할 페이지
// 반드시 폴더에 page 파일이 존재해야함

import Avartar from "../../components/avatar";

export const metadata = {
  title: "About Us",
};

export default function AboutUs() {
  return (
    <div>
      <h1>I'm JHIN!</h1>
      <Avartar />
    </div>
  );
}
