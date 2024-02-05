import { useState, useEffect } from "react";

function Hello() {
  // useEffect(() => {
  //   // component가 처음 생성될 때만 실행
  //   // showing이 true 될따마다 다시 생성하므로 매번 실행됨
  //   console.log("created :)");
  //   // cleanup function
  //   // component가 destroy될 때 실행
  //   return () => console.log("destroyed :(");
  // });

  // function byeFn() {
  //   console.log("bye :(");
  // }
  // function hiFn() {
  //   console.log("created :)");
  //   return byeFn;
  // }
  // useEffect(hiFn, []);

  //간단하게 자주 사용하는 방식
  useEffect(() => {
    console.log("hi :)");
    return () => console.log("bye :(");
  }, []);

  return <h1>Hello</h1>;
}
function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);

  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;
