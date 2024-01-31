const images = [
  "0.jpg",
  "1.jpg",
  "2.jpg",
  "3.jpg",
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

// 배경에 사진넣기1
// document.body.style.backgroundImage = `url(img/${chosenImage})`;
// document.body.style.backgroundPosition = "top";
// document.body.style.backgroundRepeat = "no-repeat";
// document.body.style.backgroundSize = "cover";
// document.body.style.backgroundAttachment = "fixed";

// // 배경에 사진넣기2
// // style.css에 bgimg 설정
// bgImage.id = "bgimg";

document.body.appendChild(bgImage);

// // body 앞에 추가
//document.body.prepend(bgImage);
