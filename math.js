const MAX_NUM = 10;
const OPERATORS = ["+", "-", "x"];
const ENABLED_BUTTON_COLOR = "bg-blue-500";
const ENABLED_BUTTON_HOVER_COLOR = "hover:bg-blue-700";
const DISABLED_BUTTON_COLOR = "bg-gray-500";

const equationForm = document.getElementById("equationForm");
const newButton = document.getElementById("newButton");
const answerButton = document.getElementById("answerButton");
const firstNumber = document.getElementById("firstNumber");
const operator = document.getElementById("operator");
const secondNumber = document.getElementById("secondNumber");
const answer = document.getElementById("answer");
const result = document.getElementById("result");

function getRandomNumber(max) {
  return Math.floor(Math.random() * max);
}

function enable(button) {
  button.disabled = false;
  button.classList.add(ENABLED_BUTTON_COLOR);
  button.classList.add(ENABLED_BUTTON_HOVER_COLOR);
  button.classList.remove(DISABLED_BUTTON_COLOR);
}

function disable(button) {
  button.disabled = true;
  button.classList.remove(ENABLED_BUTTON_COLOR);
  button.classList.remove(ENABLED_BUTTON_HOVER_COLOR);
  button.classList.add(DISABLED_BUTTON_COLOR);
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
    e.preventDefault();

    //* handle submit
    if (answer.value) {
      result.classList.remove("hide");
      if (calculateEquation() == answer.value) {
        result.innerText = "you have destroyed me at my own game!   )=";
      } else {
        result.innerText = "I win you stupid human!";
      }

      disable(answerButton);
      enable(newButton);
    }
  });
}

function checkForNegatives() {
  if (
    operator.innerText == "-" &&
    parseInt(firstNumber.innerText) < parseInt(secondNumber.innerText)
  ) {
    //* swap numbers to disallow negative answers
    const placeholder = firstNumber.innerText;
    firstNumber.innerText = secondNumber.innerText;
    secondNumber.innerText = placeholder;
  }
}

function equationSetup() {
  firstNumber.innerText = getRandomNumber(MAX_NUM + 1);
  operator.innerText = OPERATORS[getRandomNumber(OPERATORS.length)];
  secondNumber.innerText = getRandomNumber(MAX_NUM + 1);
  checkForNegatives();

  answer.value = "";

  result.classList.add("hide");

  enable(answerButton);
  disable(newButton);
}

equationSetup();
formSetup();

newButton.addEventListener("click", equationSetup);
