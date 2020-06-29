let numbers = document.querySelectorAll(".number");
let display = document.querySelector(".answer");
let currentDisplay = display.innerHTML;

numbers.forEach(function (number) {
  number.addEventListener("click", function () {
    if (display.innerHTML.length == 1) {
      display.innerHTML = number.innerText;
    } else if (display.innerHTML.length < 1) {
      display.innerHTML += number.innerText;
    }
  });
});
