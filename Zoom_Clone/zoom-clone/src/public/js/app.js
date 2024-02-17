const socket = io();

let myStream;

/** @type {RTCPeerConnection} */
let myPeerConnection;

const chatRoom = document.getElementById("chatRoom");

///////////////////////////////////////////////////////////////////////////
//////////////////// 연결된 카메라 선택 기능
///////////////////////////////////////////////////////////////////////////
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

///////////////////////////////////////////////////////////////////////////
//////////////////// 선택된 카메라 화면 보여줌
///////////////////////////////////////////////////////////////////////////
const myFace = document.getElementById("myFace");

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

///////////////////////////////////////////////////////////////////////////
//////////////////// 마이크 On/Off 기능
///////////////////////////////////////////////////////////////////////////
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

let micOff = false;
const micButton = document.getElementById("mic");
micButton.addEventListener("click", handleMicClick);

///////////////////////////////////////////////////////////////////////////
//////////////////// 카메라 On/Off 기능
///////////////////////////////////////////////////////////////////////////
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

let cameraOff = false;
const cameraButton = document.getElementById("camera");
cameraButton.addEventListener("click", handleCameraClick);

///////////////////////////////////////////////////////////////////////////
//////////////////// 카메라 선택
///////////////////////////////////////////////////////////////////////////
async function handleCameraChange() {
  await getMedia(camerasSelect.value);
  if (micOff) {
    myStream.getAudioTracks().forEach((track) => (track.enabled = false));
  } else {
    myStream.getAudioTracks().forEach((track) => (track.enabled = true));
  }

  if (myPeerConnection) {
    const videoTrack = myStream.getVideoTracks()[0];
    const videoSender = myPeerConnection
      .getSenders()
      .find((sender) => sender.track.kind === "video");
    videoSender.replaceTrack(videoTrack);
  }
}

const camerasSelect = document.getElementById("cameras");
camerasSelect.addEventListener("input", handleCameraChange);

///////////////////////////////////////////////////////////////////////////
//////////////////// room 입장
///////////////////////////////////////////////////////////////////////////
//Welcome Form (join a room)
const call = document.getElementById("call");
// call.hidden = true;
let roomName;
let nickName = "Anon";

const welcome = document.getElementById("welcome");
const welcomeForm = welcome.querySelector("form");

async function initCall() {
  welcome.hidden = true;
  call.hidden = false;
  await getMedia();
  makeConnection();
}

function showRoomName(count) {
  const h3 = chatRoom.querySelector("h3");
  h3.innerText = `Room ${roomName} (${count})`;
  console.log(roomName, count);
}

async function handleWelcomeSubmit(event) {
  event.preventDefault();
  const roomInput = welcomeForm.querySelector("#roomName");
  const nickInput = welcomeForm.querySelector("#nickName");

  await initCall();
  roomName = roomInput.value;
  nickName = nickInput.value ? nickInput.value : "Anon";
  socket.emit("join_room", roomName, nickName, showRoomName);
  // socket.emit("join_room", roomName, nickName, showRoom);

  // console.log(nickName);
  roomInput.value = "";
  nickInput.value = "";
}

welcomeForm.addEventListener("submit", handleWelcomeSubmit);

///////////////////////////////////////////////////////////////////////////
//////////////////// room 퇴장
///////////////////////////////////////////////////////////////////////////
const leftButton = chatRoom.querySelector("#left button");

function deleteRoom() {
  const ul = chatRoom.querySelector("ul");
  ul.innerHTML = "";
}

function handleRoomLeft() {
  welcome.hidden = false;
  call.hidden = true;
  socket.emit("left_room", roomName, deleteRoom);
}

leftButton.addEventListener("click", handleRoomLeft);
///////////////////////////////////////////////////////////////////////////
//////////////////// 메세지 생성
///////////////////////////////////////////////////////////////////////////
function createMessage(text) {
  const ul = chatRoom.querySelector("ul");
  const li = document.createElement("li");
  li.innerText = text;
  ul.appendChild(li);
}

///////////////////////////////////////////////////////////////////////////
//////////////////// 메세지 발신
///////////////////////////////////////////////////////////////////////////
function sendMessage(event) {
  event.preventDefault();
  const input = chatRoom.querySelector("#msg input");
  const value = input.value;

  myDataChannel.send(value);

  createMessage(`You(${nickName}): ${value}`);

  input.value = "";
}

const msgForm = chatRoom.querySelector("form");
msgForm.addEventListener("submit", sendMessage);

///////////////////////////////////////////////////////////////////////////
//////////////////// 메세지 수신
///////////////////////////////////////////////////////////////////////////

/////////////////////////////////////// 닉네임 보이게
function getMessage(event) {
  createMessage(`nickName: ${event.data}`);
}

///////////////////////////////////////////////////////////////////////////
//////////////////// Socket Code
///////////////////////////////////////////////////////////////////////////
let myDataChannel;

socket.on("welcome", async (user, newCount) => {
  const h3 = chatRoom.querySelector("h3");
  h3.innerText = `Room ${roomName} (${newCount})`;
  createMessage(`${user} Joined!`);

  myDataChannel = myPeerConnection.createDataChannel("chat");
  myDataChannel.addEventListener("message", getMessage);

  console.log("made data channel");
  const offer = await myPeerConnection.createOffer();
  myPeerConnection.setLocalDescription(offer);
  console.log("sent the offer");
  socket.emit("offer", offer, roomName);
});

socket.on("offer", async (offer) => {
  myPeerConnection.addEventListener("datachannel", (event) => {
    myDataChannel = event.channel;
    myDataChannel.addEventListener("message", getMessage);
  });
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

socket.on("room_change", ([rooms, size]) => {
  const roomList = welcome.querySelector("ul");
  roomList.innerHTML = "";

  if (rooms.length === 0) {
    return;
  }
  for (i = 0; i < rooms.length; i++) {
    const li = document.createElement("li");
    li.innerText = `${rooms[i]} (${size[i]})`;
    roomList.append(li);
  }
});

socket.on("bye", (user, newCount) => {
  const h3 = chatRoom.querySelector("h3");
  h3.innerText = `Room ${roomName} (${newCount})`;
  createMessage(`${user} Left!`);
});

///////////////////////////////////////////////////////////////////////////
//////////////////// RTC Code
///////////////////////////////////////////////////////////////////////////
function makeConnection() {
  myPeerConnection = new RTCPeerConnection({
    iceServers: [
      {
        urls: [
          "stun:stun.l.google.com:19302",
          "stun:stun1.l.google.com:19302",
          "stun:stun2.l.google.com:19302",
          "stun:stun3.l.google.com:19302",
          "stun:stun4.l.google.com:19302",
        ],
      },
    ],
  });
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
  console.log("got a stream from my peer");
  console.log("Peer's Stream", data);
  // console.log("My Stream", myStream);
  const peerFace = document.getElementById("peerFace");
  peerFace.srcObject = data.stream;
}
