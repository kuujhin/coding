// /about-us 주소에 사용할 페이지
// 반드시 폴더에 page 파일이 존재해야함

import Navigation from "../../components/navigation";
import Avartar from "../../components/avatar";

export default function AboutUs() {
  return (
    <div>
      <Navigation />
      <h1>
        I'm JHIN! <Avartar />
      </h1>
    </div>
  );
}
