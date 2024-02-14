const socket = io();

const welcome = document.getElementById("welcome");
const form = welcome.querySelector("form");
const room = document.getElementById("room");
const left = document.querySelector("#left button");

room.hidden = true;

let roomName;

function addMessage(msg) {
  const ul = room.querySelector("ul");
  const li = document.createElement("li");
  li.innerText = msg;
  ul.appendChild(li);
}

function deleteMessage() {
  const ul = room.querySelector("ul");
  while (ul.hasChildNodes()) ul.removeChild(ul.firstChild);
}

function handleMessageSubmit(event) {
  event.preventDefault();
  const input = room.querySelector("#msg input");
  const value = input.value;
  socket.emit("new_message", value, roomName, () => {
    addMessage(`You: ${value}`);
  });
  input.value = "";
}

// function handleNicknameSubmit(event) {
//   event.preventDefault();
//   const input = room.querySelector("#name input");
//   const value = input.value;
//   socket.emit("nickname", value);
//   input.value = "";
// }

function showRoom() {
  welcome.hidden = true;
  room.hidden = false;
  const h3 = room.querySelector("h3");
  h3.innerText = `Room ${roomName}`;
  const msgForm = room.querySelector("#msg");
  msgForm.addEventListener("submit", handleMessageSubmit);
}

function handleRoomSubmit(event) {
  event.preventDefault();
  const roominput = form.querySelector("#roomname");
  const nameinput = form.querySelector("#nickname");
  roomName = roominput.value;
  const nickName = nameinput.value;
  socket.emit("enter_room", roomName, nickName, showRoom);
  roominput.value = "";
  nameinput.value = "";
}

function handleRoomLeft() {
  welcome.hidden = false;
  room.hidden = true;
  socket.emit("left_room", roomName, deleteMessage);
}

form.addEventListener("submit", handleRoomSubmit);

left.addEventListener("click", handleRoomLeft);

socket.on("welcome", (user) => addMessage(`${user} Joined!`));

socket.on("new_message", addMessage);

socket.on("bye", (user) => addMessage(`${user} Left!`));
