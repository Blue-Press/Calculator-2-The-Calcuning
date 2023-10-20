const numberButtons = document.querySelectorAll('.numberButton');
const numberDisplay = document.querySelector('.numberDisplay');
let firstNumber = "";
let secondNumber = "";

numberButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    numberDisplay.textContent = firstNumber += this.textContent;
  });
});
