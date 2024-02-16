const socket = io();

const myFace = document.getElementById("myFace");
const micButton = document.getElementById("mic");
const cameraButton = document.getElementById("camera");
const camerasSelect = document.getElementById("cameras");

const call = document.getElementById("call");

call.hidden = true;

let myStream;

let micOff = false;
let cameraOff = false;

let roomName;

/** @type {RTCPeerConnection} */
let myPeerConnection;

async function getCameras() {
  try {
    const devices = await navigator.mediaDevices.enumerateDevices();
    const cameras = devices.filter((device) => device.kind === "videoinput");
    const currentCamera = myStream.getVideoTracks()[0];
    cameras.forEach((camera) => {
      const option = document.createElement("option");
      option.value = camera.deviceId;
      option.innerText = camera.label;
      if (currentCamera.label == camera.label) {
        option.selected = true;
      }
      camerasSelect.appendChild(option);
    });
  } catch (error) {
    console.log(error);
  }
}

async function getMedia(deviceId) {
  const initialConstrains = {
    audio: true,
    video: { facingMode: "user" },
  };
  const cameraConstrains = {
    audio: true,
    video: { deviceId: deviceId },
  };
  try {
    myStream = await navigator.mediaDevices.getUserMedia(
      deviceId ? cameraConstrains : initialConstrains
    );
    myFace.srcObject = myStream;
    if (!deviceId) await getCameras();
  } catch (error) {
    console.log(error);
  }
}

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

async function handelCameraChange() {
  await getMedia(camerasSelect.value);
  if (micOff) {
    myStream.getAudioTracks().forEach((track) => (track.enabled = false));
  } else {
    myStream.getAudioTracks().forEach((track) => (track.enabled = true));
  }
}

cameraButton.addEventListener("click", handleCameraClick);
micButton.addEventListener("click", handleMicClick);
camerasSelect.addEventListener("input", handelCameraChange);

//Welcome Form (join a room)

const welcome = document.getElementById("welcome");
const welcomeForm = welcome.querySelector("form");

async function initCall() {
  welcome.hidden = true;
  call.hidden = false;
  await getMedia();
  makeConnection();
}

async function handleWelcomeSubmit(event) {
  event.preventDefault();
  const input = welcomeForm.querySelector("input");
  await initCall();
  socket.emit("join_room", input.value);
  roomName = input.value;
  input.value = "";
}

welcomeForm.addEventListener("submit", handleWelcomeSubmit);

// Socket Code

socket.on("welcome", async () => {
  const offer = await myPeerConnection.createOffer();
  myPeerConnection.setLocalDescription(offer);
  console.log("sent the offer");
  socket.emit("offer", offer, roomName);
});

socket.on("offer", async (offer) => {
  console.log("receive the offer");
  myPeerConnection.setRemoteDescription(offer);
  const answer = await myPeerConnection.createAnswer();
  myPeerConnection.setLocalDescription(answer);
  socket.emit("answer", answer, roomName);
  console.log("sent the answer");
});

socket.on("answer", (answer) => {
  console.log("receive the answer");
  myPeerConnection.setRemoteDescription(answer);
});

socket.on("ice", (ice) => {
  console.log("received candidate");
  myPeerConnection.addIceCandidate(ice);
});

// RTC Code

function makeConnection() {
  myPeerConnection = new RTCPeerConnection();
  myPeerConnection.addEventListener("icecandidate", handleIce);
  myPeerConnection.addEventListener("addstream", handleAddStream);
  myStream
    .getTracks()
    .forEach((track) => myPeerConnection.addTrack(track, myStream));
}

function handleIce(data) {
  // console.log("got ice candidate");
  // console.log(data);
  console.log("sent candidate");
  socket.emit("ice", data.candidate, roomName);
}

function handleAddStream(data) {
  // console.log("got a stream from my peer");
  // console.log("Peer's Stream", data.stream);
  // console.log("My Stream", myStream);
  const peerFace = document.getElementById("peerFace");
  peerFace.srcObject = data.stream;
}
