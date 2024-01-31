const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
//const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";
const toDos = [];

// // JS Object(array,...)를 String으로 바꾸는 기능
// JSON.stringify({ name: "jhin" }); // >>> "{\"name\":\"nico\"}"

// // String을 다시 JS Object로 바꾸는 기능
// JSON.parse("[1,2,3,4]"); // >>> [1,2,3,4]

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
}

function paintToDo(newToDo) {
  const li = document.createElement("li");

  const span = document.createElement("span");
  span.innerText = newToDo;

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
  toDos.push(newToDo);
  paintToDo(newToDo);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

// function sayHello(item) {
//   console.log("hello", item);
// }

if (savedToDos) {
  const parsedToDos = JSON.parse(savedToDos);
  // parsedToDos.forEach(sayHello);
  parsedToDos.forEach((item) => console.log("hello", item));
}
