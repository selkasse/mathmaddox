const MAX_NUM = 10;
const OPERATORS = ["+", "-", "x"];

const equationForm = document.getElementById("equationForm");
const newButton = document.getElementById("newButton");
const answerButton = document.getElementById("answerButton");
let firstNumber = document.getElementById("firstNumber");
let operator = document.getElementById("operator");
let secondNumber = document.getElementById("secondNumber");

function getRandomNumber(max) {
  return Math.floor(Math.random() * max);
}

function calculateEquation() {
  if (operator.innerHTML === "x") {
    return firstNumber.innerHTML * secondNumber.innerHTML;
  } else if (operator.innerHTML === "-") {
    return firstNumber.innerHTML - secondNumber.innerHTML;
  } else {
    return parseInt(firstNumber.innerHTML) + parseInt(secondNumber.innerHTML);
  }
}

function formSetup() {
  equationForm.addEventListener("submit", (e) => {
    console.log("form submitted");
    e.preventDefault();

    // handle submit
    let result = document.getElementById("result");

    let answer = document.getElementById("answer");
    console.log("calculationEquation is: " + calculateEquation());
    if (answer.value) {
      if (calculateEquation() == answer.value) {
        result.innerHTML = "you have destroyed me at my own game!   )=";
      } else {
        result.innerHTML = "I win you stupid human!";
      }

      answerButton.classList.add("hidden");
      newButton.classList.remove("hidden");
    }
  });
}

function equationSetup() {
  firstNumber.innerHTML = getRandomNumber(MAX_NUM + 1);
  operator.innerHTML = OPERATORS[getRandomNumber(OPERATORS.length)];
  secondNumber.innerHTML = getRandomNumber(MAX_NUM + 1);
  answer.value = "";
  result.innerHTML = "";
  answerButton.classList.remove("hidden");
  newButton.classList.add("hidden");
}

equationSetup();
formSetup();

newButton.addEventListener("click", equationSetup);
newButton.classList.add("hidden");
