const numberButtons = document.querySelectorAll(".numberButton");
const operatorButtons = document.querySelectorAll(".operatorButton");
const equalsButton = document.querySelector(".equalsButton");
const decimalButton = document.querySelector(".decimalButton");
const numberDisplay = document.querySelector(".numberDisplay");

let firstNumber = "";
let secondNumber = "";
let operatorType = "";

let firstNumberEntered = false;
let decimalUsed = false;

numberDisplay.addEventListener("input", function () {
  if (!firstNumberEntered) {
  } else {
    numberDisplay.textContent = "";
    firstNumberEntered = false;
  }
});

numberButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    if (!firstNumberEntered) {
      numberDisplay.textContent += this.textContent;
    } else {
      numberDisplay.textContent = "";
      numberDisplay.textContent += this.textContent;
      firstNumberEntered = false;
    }
  });
});
operatorButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    operatorType = this.textContent;
    firstNumber = numberDisplay.textContent;
    firstNumberEntered = true;
    decimalUsed = false;
  });
});

equalsButton.addEventListener("click", function () {
  secondNumber = numberDisplay.textContent;
  console.log(firstNumber, secondNumber);
  if (operatorType === "+") {
    numberDisplay.textContent =
      parseFloat(firstNumber) + parseFloat(secondNumber);
  } else if (operatorType === "-") {
    numberDisplay.textContent =
      parseFloat(firstNumber) - parseFloat(secondNumber);
  } else if (operatorType === "x") {
    numberDisplay.textContent =
      parseFloat(firstNumber) * parseFloat(secondNumber);
  } else if (operatorType === "/") {
    if (firstNumber == 0 || secondNumber == 0) {
      numberDisplay.textContent = "Universe imploding in 3...2...";
    } else {
      numberDisplay.textContent =
        parseFloat(firstNumber) / parseFloat(secondNumber);
    }
  }
});

decimalButton.addEventListener("click", function () {
  if (!decimalUsed) {
    numberDisplay.textContent += ".";
    decimalUsed = true;
  }
});
