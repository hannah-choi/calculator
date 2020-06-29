let numbers = document.querySelectorAll(".number");
let display = document.querySelector(".answer");
let allClear = document.querySelector(".ac");
let operators = document.querySelectorAll(".operator");

/*
numbers.forEach(function (number) {
  number.addEventListener("click", function () {
    if (display.innerText == "0") {
      display.innerText = number.innerText;
    } else {
      display.innerText += number.innerText;
    }

    number.classList.toggle("number-active");
  });
});
*/

for (let i = 0; i < numbers.length; i++) {
  numbers[i].addEventListener("click", function () {
    if (display.innerText == "0") {
      display.innerText = numbers[i].innerText;
    } else {
      display.innerText += numbers[i].innerText;
    }

    numbers[i].classList.add("number-active");

    setTimeout(function () {
      if (numbers[i].classList.contains("number-active")) {
        numbers[i].classList.remove("number-active");
      }
    }, 200);
  });
}

for (let i = 0; i < operators.length; i++) {
  operators[i].addEventListener("click", function () {
    operators[i].classList.add("operator-active");
    setTimeout(function () {
      if (operators[i].classList.contains("operator-active")) {
        operators[i].classList.remove("operator-active");
      }
    }, 200);
  });
}

allClear.addEventListener("click", function () {
  display.innerText = "";

  allClear.classList.add("number-active");

  setTimeout(function () {
    if (allClear.classList.contains("number-active")) {
      allClear.classList.remove("number-active");
    }
  }, 200);
});
