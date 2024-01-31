const h1 = document.querySelector("h1");
h1.style.color = "white";
function handleWindowResize() {
  const windowSize = window.innerWidth;
  if (windowSize > 1200) {
    document.body.style.backgroundColor = "orange";
  } else if (windowSize <= 1200 && windowSize >= 800) {
    document.body.style.backgroundColor = "purple";
  } else {
    document.body.style.backgroundColor = "blue";
  }
}

window.addEventListener("resize", handleWindowResize);
