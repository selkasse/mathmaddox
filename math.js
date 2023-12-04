const MAX_NUM = 10;
const OPERATORS = ["+", "-", "x"];

let equationForm = document.getElementById("equationForm");
let firstNumber = document.getElementById("firstNumber");
let operator = document.getElementById("operator");
let secondNumber = document.getElementById("secondNumber");

function getRandomNumber(max) {
  return Math.floor(Math.random() * max);
}

// function calculateEquation(){
//  if operator.innerHTML ===
// }

function formSetup() {
  equationForm.addEventListener("submit", (e) => {
    e.preventDefault();

    // handle submit
    let result = document.getElementById("result");

    let answer = document.getElementById("answer");
    if (answer.value) {
      if (firstNumber.value * secondNumber.value == answer.value) {
        result.innerHTML = "you have distroyed me at my own game!   )=";
      } else {
        result.innerHTML = "I win you stupid human!";
      }
    }
  });
}

function equationSetup() {
  firstNumber.value = getRandomNumber(MAX_NUM + 1);
  operator.innerHTML = OPERATORS[getRandomNumber(OPERATORS.length)];
  secondNumber.value = getRandomNumber(MAX_NUM + 1);
  answer.value = undefined;
  result.innerHTML = "";

  formSetup();
}

equationSetup();

const newButton = document.getElementById("newButton");
newButton.addEventListener("click", equationSetup);
