const socket = io();

const myFace = document.getElementById("myFace");
const micButton = document.getElementById("mic");
const cameraButton = document.getElementById("camera");
const camerasSelect = document.getElementById("cameras");

let myStream;

let micOff = false;
let cameraOff = false;

async function getCameras() {
  try {
    const devices = await navigator.mediaDevices.enumerateDevices();
    const cameras = devices.filter((device) => device.kind === "videoinput");
    cameras.forEach((camera) => {
      const option = document.createElement("option");
      option.value = camera.deviceId;
      option.innerText = camera.label;
      camerasSelect.appendChild(option);
    });
  } catch (error) {
    console.log(error);
  }
}

async function getMedia() {
  try {
    myStream = await navigator.mediaDevices.getUserMedia({
      audio: true,
      video: true,
    });
    myFace.srcObject = myStream;
    await getCameras();
  } catch (error) {
    console.log(error);
  }
}

getMedia();

function handleMicClick() {
  myStream.getAudioTracks().forEach((track) => {
    track.enabled = !track.enabled;
  });
  if (micOff) {
    micButton.innerText = "Mute";
  } else {
    micButton.innerText = "Unmute";
  }
  micOff = !micOff;
}

function handleCameraClick() {
  myStream.getVideoTracks().forEach((track) => {
    track.enabled = !track.enabled;
  });
  if (cameraOff) {
    cameraButton.innerText = "Turn Camera Off";
  } else {
    cameraButton.innerText = "Turn Camera On";
  }
  cameraOff = !cameraOff;
}

cameraButton.addEventListener("click", handleCameraClick);
micButton.addEventListener("click", handleMicClick);
