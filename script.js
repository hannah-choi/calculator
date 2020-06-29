let numbers = document.querySelectorAll(".number");
let display = document.querySelector(".answer");
let allClear = document.querySelector(".ac");
let currentDisplay = display.innerHTML;
display.innerText = "";

numbers.forEach(function (number) {
  number.addEventListener("click", function () {
    if (display.innerText == "0") {
      display.innerText = number.innerText;
    } else {
      display.innerText += number.innerText;
    }
  });
});

allClear.addEventListener("click", function () {
  display.innerText = 0;
});
