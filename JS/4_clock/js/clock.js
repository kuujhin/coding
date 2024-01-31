// // 특정 시간마다 함수 실행
// setInterval(sayHello, 5000)
// 5000ms = 5s

// // 특정 시간 이후 함수 실행
// setTimeout(sayHello, 5000);

// // Date Object
// const date = new Date()
// date.getDate()
// date.getDay()
// date.getFullYear()
// date.getHours()
// date.getMinutes()
// date.getSeconds()

// // padStart(a, b)
// // 길이 a인 string이 되도록 앞쪽에 b로 채움
// console.log("1".padStart(2, "0"))
// console.log("12".padStart(2, "0"))
// console.log("hello".padStart(20,"x"))

// // numberToString
// console.log(1);
// console.log(String(1));

const clock = document.querySelector("h2#clock");

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;
  // clock.innerText = date.toLocaleTimeString("en-US", { hour12: false });
}

getClock();
setInterval(getClock, 1000);