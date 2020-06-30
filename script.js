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

function buttonEffect(element, className) {
  element.classList.add(className);

  setTimeout(function () {
    if (element.classList.contains(className)) {
      element.classList.remove(className);
    }
  }, 200);
}

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

      buttonEffect(numbers[i], "number-active");
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

    buttonEffect(operators[i], "operator-active");

    /*operators[i].classList.add("operator-active");
    setTimeout(function () {
      if (operators[i].classList.contains("operator-active")) {
        operators[i].classList.remove("operator-active");
      }
    }, 200);*/
  });
}

//------------------------------------------------

// ac 버튼

allClear.addEventListener("click", function () {
  display.value = "";
  calculation = display.value;

  buttonEffect(allClear, "number-active");
});

//------------------------------------------------

equal.addEventListener("click", function () {
  if (display.value == "") {
    return;
  } else {
    display.value = eval(calculation);
  }

  buttonEffect(equal, "operator-active");
});

//-----------------------------
