const socket = io();

const myFace = document.getElementById("myFace");
const micButton = document.getElementById("mute");
const cameraButton = document.getElementById("camera");

let myStream;

let micOff = false;
let cameraOff = false;

async function getMedia() {
  try {
    myStream = await navigator.mediaDevices.getUserMedia({
      audio: true,
      video: true,
    });
    myFace.srcObject = myStream;
  } catch (e) {
    console.log(e);
  }
}

getMedia();

function handlemicClick() {
  if (micOff) {
    micButton.innerText = "Mute";
  } else {
    micButton.innerText = "Unmute";
  }
  micOff = !micOff;
}
function handlecameraClick() {
  if (cameraOff) {
    cameraButton.innerText = "Turn Camera Off";
  } else {
    cameraButton.innerText = "Turn Camera On";
  }
  cameraOff = !cameraOff;
}

micButton.addEventListener("click", handlemicClick);
cameraButton.addEventListener("click", handlecameraClick);
