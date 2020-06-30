const numbers = document.querySelectorAll(".number");
const display = document.querySelector(".answer");
const allClear = document.querySelector(".ac");
const operators = document.querySelectorAll(".operator");
const dot = document.querySelector(".dot");
const equal = document.querySelector(".equal");
let calculation;

let operatorOnOff = false;

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
    if (display.value.length > 13) {
      return;
    }
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
    operatorOnOff = false;
    buttonEffect(numbers[i], "number-active");
  });
}

//------------------------------------------------

// 연산자 버튼

for (let i = 0; i < operators.length; i++) {
  operators[i].addEventListener("click", function () {
    if (display.value.length < 13 && operatorOnOff == false) {
      if (display.value.length >= 1) {
        display.value += operators[i].innerText;
      } else if ((display.value.length = 1)) {
        display.value += "";
      }
    }

    buttonEffect(operators[i], "operator-active");
    operatorOnOff = true;

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

// 연산자가 클릭되면 flag는 on,
// 숫자가 클릭되면 flag는 off
