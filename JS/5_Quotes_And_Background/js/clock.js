const clock = document.querySelector("h2#clock");

function getClock() {
  const date = new Date();
  clock.innerText = date.toLocaleTimeString("en-US", { hour12: false });
}

getClock();
// setInterval(getClock, 1000);