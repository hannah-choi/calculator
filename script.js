const numbers = document.querySelectorAll(".number");
const display = document.querySelector(".answer");
const allClear = document.querySelector(".ac");
const operators = document.querySelectorAll(".operator");
const dot = document.querySelector(".dot");
const equal = document.querySelector(".equal");
let calculation;

let h2 = document.querySelector("h2");

h2.innerText = calculation;
//------------------------------------------------

// 숫자 버튼

for (let i = 0; i < numbers.length; i++) {
  numbers[i].addEventListener("click", function () {
    if (display.value.length < 13) {
      if (display.value == "0" && numbers[i] != dot) {
        display.value = numbers[i].innerText;
        calculation = display.value;
      } else {
        if (numbers[i] == dot && display.value.includes(".")) {
          return;
        } else if (numbers[i] == dot && display.value == "") {
          return;
        } else {
          display.value += numbers[i].innerText;
          calculation = display.value;
        }
      }
      numbers[i].classList.add("number-active");

      setTimeout(function () {
        if (numbers[i].classList.contains("number-active")) {
          numbers[i].classList.remove("number-active");
        }
      }, 200);
    } else {
      display.value += "";
    }
  });
}

//------------------------------------------------

// 연산자 버튼

for (let i = 0; i < operators.length; i++) {
  operators[i].addEventListener("click", function () {
    if (display.value.length < 13) {
      if (display.value.length >= 1) {
        display.value += operators[i].innerText;
        if (operators[i].innerText == "×") {
          calculation += "*";
        } else if (operators[i].innerText == "÷") {
          calculation += "/";
        } else {
          calculation += operators[i];
        }
      } else if ((display.value.length = 1)) {
        display.value += "";
      }
    }

    operators[i].classList.add("operator-active");
    setTimeout(function () {
      if (operators[i].classList.contains("operator-active")) {
        operators[i].classList.remove("operator-active");
      }
    }, 200);
  });
}

//------------------------------------------------

// ac 버튼

allClear.addEventListener("click", function () {
  display.value = "";
  calculation = display.value;

  allClear.classList.add("number-active");

  setTimeout(function () {
    if (allClear.classList.contains("number-active")) {
      allClear.classList.remove("number-active");
    }
  }, 200);
});

//------------------------------------------------

equal.addEventListener("click", function () {
  if (display.value == "") {
    return;
  } else {
    display.value = eval(calculation);
  }

  equal.classList.add("operator-active");
  setTimeout(function () {
    if (equal.classList.contains("operator-active")) {
      equal.classList.remove("operator-active");
    }
  }, 200);
});
