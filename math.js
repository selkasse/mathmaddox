const MAX_NUM = 10;
const OPERATORS = ["+", "-", "x"];

const equationForm = document.getElementById("equationForm");
const newButton = document.getElementById("newButton");
let answerButton = document.getElementById("answerButton");
let firstNumber = document.getElementById("firstNumber");
let operator = document.getElementById("operator");
let secondNumber = document.getElementById("secondNumber");
let answer = document.getElementById("answer");
let result = document.getElementById("result");

function getRandomNumber(max) {
  return Math.floor(Math.random() * max);
}

function calculateEquation() {
  if (operator.innerText === "x") {
    return firstNumber.innerText * secondNumber.innerText;
  } else if (operator.innerText === "-") {
    return firstNumber.innerText - secondNumber.innerText;
  } else {
    return parseInt(firstNumber.innerText) + parseInt(secondNumber.innerText);
  }
}

function formSetup() {
  equationForm.addEventListener("submit", (e) => {
    console.log("form submitted");
    e.preventDefault();

    // handle submit
    console.log("calculationEquation is: " + calculateEquation());
    if (answer.value) {
      result.classList.remove("hide");
      if (calculateEquation() == answer.value) {
        result.innerText = "you have destroyed me at my own game!   )=";
      } else {
        result.innerText = "I win you stupid human!";
      }

      // answerButton.classList.add("remove");
      answerButton.disabled = true;
      answerButton.classList.remove("bg-blue-500");
      answerButton.classList.remove("hover:bg-blue-700");
      answerButton.classList.add("bg-gray-500");

      newButton.disabled = false;
      newButton.classList.add("bg-blue-500");
      newButton.classList.add("hover:bg-blue-700");
      newButton.classList.remove("bg-gray-500");
      // newButton.classList.remove("hide");
    }
  });
}

function equationSetup() {
  firstNumber.innerText = getRandomNumber(MAX_NUM + 1);
  operator.innerText = OPERATORS[getRandomNumber(OPERATORS.length)];
  secondNumber.innerText = getRandomNumber(MAX_NUM + 1);
  answer.value = "";
  result.classList.add("hide");
  // answerButton.classList.remove("remove");
  answerButton.disabled = false;
  answerButton.classList.add("bg-blue-500");
  answerButton.classList.add("hover:bg-blue-700");
  answerButton.classList.remove("bg-gray-500");

  newButton.disabled = true;
  newButton.classList.remove("bg-blue-500");
  newButton.classList.remove("hover:bg-blue-700");
  newButton.classList.add("bg-gray-500");

  // newButton.classList.add("hide");
}

equationSetup();
formSetup();

newButton.addEventListener("click", equationSetup);
// newButton.classList.add("hide");
