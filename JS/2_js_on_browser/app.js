/*
document.title = "Hello! From JS!"

const title = document.getElementById("title")

title.innerText = "Got you!"
*/
/*
console.log(document.getElementsByClassName("hello"));

console.log(document.getElementsByTagName("h1"));

console.log(document.querySelector(".hello h1:first-child"));
console.log(document.querySelector("div h1"));
console.log(document.querySelectorAll(".hello h1"));
console.log(document.querySelector("#second"));

const title = document.querySelector(".hello h1");
title.innerText = "Hello";
*/
/*
const title = document.querySelector("div.hello:first-child h1");

console.log(title);
console.dir(title);

title.style.color = "blue";

function handleTitleClick() {
  title.style.color = "red";
  console.log("title was clicked");
}

function handleMouseEnter() {
  title.innerText = "Mouse is here!"
}

function handelMouseLeave() {
  title.innerText = "Mouse is gone!"
}

title.addEventListener("click", handleTitleClick);

title.addEventListener("mouseenter", handleMouseEnter);
title.addEventListener("mouseleave", handelMouseLeave);

title.onclick = handleTitleClick;
title.removeEventListener("mouseleave", handelMouseLeave);

function handleWindowResize() {
  document.body.style.backgroundColor = "tomato"
}

window.addEventListener("resize", handleWindowResize);

function handleWindowCopy() {
  alert("copier!");
}

window.addEventListener("copy", handleWindowCopy);

function handleWindowOffline() {
  alert("no WIFI");
}

function handleWindowOnline() {
  alert("ALL GOOD");
}

window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);
*/
/*
const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
  const currentColor = h1.style.color
  let newColor;
  if (currentColor === "blue") {
    newColor = "tomato"
  } else {
    newColor = "blue"
  }
  h1.style.color = newColor;
}

h1.addEventListener("click", handleTitleClick);
*/
/*
const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
  const clickedClass = "clicked";
  if (h1.className === clickedClass) {
    h1.className = "";
  } else {
    h1.className = clickedClass;
  }
}

h1.addEventListener("click", handleTitleClick);
*/
/*
const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
  const clickedClass = "clicked";
  if (h1.classList.contains(clickedClass)) {
    h1.classList.remove(clickedClass);
  } else {
    h1.classList.add(clickedClass);
  }
}

h1.addEventListener("click", handleTitleClick);
*/

const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
  h1.classList.toggle("clicked");
}

h1.addEventListener("click", handleTitleClick);