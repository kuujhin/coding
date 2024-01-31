const playForm = document.querySelector("#play-form");
const maxNumberForm = document.querySelector("#max-number");
const playerNumberForm = document.querySelector("#guess-number");
const chosenNumber = document.querySelector("#chosen-number");
const result = document.querySelector("#result");

function handlePlay(event) {
  event.preventDefault();

  const maxValue = parseInt(maxNumberForm.value);
  const playerNumber = parseInt(playerNumberForm.value);

  const machineNumber = Math.ceil(Math.random() * (maxValue + 1)) - 1;

  chosenNumber.innerText = `You chose: ${playerNumber}, the machine chose: ${machineNumber}`;
  if (playerNumber === machineNumber) {
    result.innerText = `You won!`;
  } else {
    result.innerText = `You lost!`;
  }
}

playForm.addEventListener("submit", handlePlay);
