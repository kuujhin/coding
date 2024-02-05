import { useState, useEffect } from "react";
import Button from "./0_button";
import styles from "./1.module.css";

function App() {
  const [counter, setCounter] = useState(0);
  const [keyword, setKeyword] = useState("");

  const onClick = () => setCounter((prev) => prev + 1);
  console.log("I run all the time");

  const onChange = (event) => setKeyword(event.target.value);

  // 처음 시작 시 한번만 실행
  useEffect(() => {
    console.log("I run only once.");
  }, []);

  // 처음 시작 시 실행 후 keyword가 바뀔때 마다 실행
  useEffect(() => {
    // if (keyword !== "" && keyword.length > 5) {
    //   console.log("Search For", keyword);
    // }
    console.log("I run when 'keyword' changes.");
  }, [keyword]);

  useEffect(() => {
    console.log("I run when 'counter' changes.");
  }, [counter]);

  useEffect(() => {
    console.log("I run when 'keyword' and 'counter' changes.");
  }, [keyword, counter]);

  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search here..."
      />
      <h1 className={styles.title}>{counter}</h1>
      <button onClick={onClick}>click me</button>
      <br />
      <Button text={"from Button.js"} />
    </div>
  );
}

export default App;
