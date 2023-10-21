const backspaceButton = document.querySelector(".backspaceButton");
const clearButton = document.querySelector(".clearButton");
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

document.addEventListener("keydown", function (event) {
  if (event.key >= "0" && event.key <= "9") {
    if (!firstNumberEntered) {
      numberDisplay.textContent += event.key;
    } else {
      numberDisplay.textContent = "";
      numberDisplay.textContent += event.key;
      firstNumberEntered = false;
    }
  }
});

document.addEventListener("keydown", function (event) {
  if (
    event.key === "+" ||
    event.key === "-" ||
    event.key === "/" ||
    event.key === "*"
  ) {
    operatorType = event.key;
    firstNumber = numberDisplay.textContent;
    firstNumberEntered = true;
    decimalUsed = false;
  }
});

document.addEventListener("keydown", function (event) {
  if (event.key === "=" || event.key === "Enter") {
    secondNumber = numberDisplay.textContent;
    console.log(firstNumber, secondNumber);
    if (operatorType === "+") {
      numberDisplay.textContent =
        parseFloat(firstNumber) + parseFloat(secondNumber);
    } else if (operatorType === "-") {
      numberDisplay.textContent =
        parseFloat(firstNumber) - parseFloat(secondNumber);
    } else if (operatorType === "*") {
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
  }
});

document.addEventListener("keydown", function (event) {
  if(event.key === "Backspace") {
    let splitDisplay = numberDisplay.textContent.split("");
    splitDisplay.pop()
    console.log(splitDisplay);
    numberDisplay.textContent = splitDisplay.join("");
  }
})

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
  } else if (operatorType === "*") {
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

backspaceButton.addEventListener("click", function () {
  let splitDisplay = numberDisplay.textContent.split("");
  splitDisplay.pop()
  console.log(splitDisplay);
  numberDisplay.textContent = splitDisplay.join("");
})

clearButton.addEventListener("click", function () {
firstNumber = "";
secondNumber = "";
operatorType = "";
firstNumberEntered = false;
decimalUsed = false;
numberDisplay.textContent = "";
})