const playForm = document.querySelector("form");

const selectInput = document.querySelector(".js-title input");
const guessInput = document.querySelector("#guess input");
const resultMessage = document.querySelector("#js-result span:first-child");
const score = document.querySelector("#js-result span:last-child");

function handlePlay(event) {
  event.preventDefault();

  const select = selectInput.value;
  const guess = guessInput.value;
  if (select === "" || guess === "") {
    resultMessage.innerText = "";
    score.style.color = "red";
    score.innerHTML = "<strong>Please select Number!</strong>";
    return;
  }

  const selectNumber = parseInt(select, 10);
  const guessNumber = parseInt(guess, 10);
  const machineChose = Math.ceil(Math.random() * selectNumber);

  resultMessage.innerText = `You chose: ${guessNumber}, the machine chose: ${machineChose}.`;
  score.style.color = "black";
  guessNumber === machineChose
    ? (score.innerHTML = "<strong>You won!</strong>")
    : (score.innerHTML = "<strong>You lost!</strong>");
}

playForm.addEventListener("submit", handlePlay);
