const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
//const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";
let toDos = [];

// // JS Object(array,...)를 String으로 바꾸는 기능
// JSON.stringify({ name: "jhin" }); // >>> "{\"name\":\"nico\"}"

// // String을 다시 JS Object로 바꾸는 기능
// JSON.parse("[1,2,3,4]"); // >>> [1,2,3,4]

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
  const li = event.target.parentElement;
  console.log(li.id);
  li.remove();
}

function paintToDo(newToDoObj) {
  const li = document.createElement("li");
  li.id = newToDoObj.id;

  const span = document.createElement("span");
  span.innerText = newToDoObj.text;

  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteToDo);

  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newToDo = toDoInput.value;
  toDoInput.value = "";
  const newToDoObj = {
    text: newToDo,
    id: Date.now(),
  };
  toDos.push(newToDoObj);
  paintToDo(newToDoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

// function sayHello(item) {
//   console.log("hello", item);
// }

if (savedToDos) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  // parsedToDos.forEach(sayHello);
  // parsedToDos.forEach((item) => console.log("hello", item));
  parsedToDos.forEach(paintToDo);
}
