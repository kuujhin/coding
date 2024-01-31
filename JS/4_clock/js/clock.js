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

const clock = document.querySelector("h2#clock");

function getClock() {
  const date = new Date()
  clock.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
}

getClock()
setInterval(getClock, 1000);