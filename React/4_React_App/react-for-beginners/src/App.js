import { useState, useEffect } from "react";
import Button from "./Button";
import styles from "./App.module.css";

function App() {
  const [counter, setCounter] = useState(0);
  const onClick = () => setCounter((prev) => prev + 1);
  console.log("I run all the time");
  useEffect(() => {
    console.log("call API");
  }, []);
  return (
    <div>
      <h1 className={styles.title}>{counter}</h1>
      <button onClick={onClick}>click me</button>
      <br />
      <Button text={"from Button.js"} />
    </div>
  );
}

export default App;
