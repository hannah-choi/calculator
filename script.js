const numbers = document.querySelectorAll(".number");
const display = document.querySelector(".answer");
const allClear = document.querySelector(".ac");
const operators = document.querySelectorAll(".operator");
const dot = document.querySelector(".dot");
const equal = document.querySelector(".equal");
let calculation;

let operatorOnOff = false;
let operatorEnd = false;
let dotOnOff = false;
let calculationDone = false;

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

function numberClick(number) {
  if (display.value.length > 13) {
    return;
  }
  if (display.value == "0" && number != dot) {
    display.value = number.innerText;
    calculation = display.value;
  } else if (calculationDone == true) {
    display.value = number.innerText;
    calculation = display.value;
    calculationDone = false;
  } else {
    if (numbers == dot && display.value.includes(".")) {
      return;
    } else if (number == dot && display.value == "") {
      return;
    } else {
      display.value += number.innerText;
      calculation = display.value;
    }
  }
  operatorOnOff = false;
  dotOnOff = false;
  operatorEnd = false;
  buttonEffect(number, "number-active");
}

//------------------------------------------------

// 연산자 버튼

function operatorClick(operator) {
  if (display.value.length > 13) {
    return;
  }
  if (operatorOnOff == true) {
    return;
  }

  if (display.value.length >= 1) {
    display.value += operator.innerText;
  } else if ((display.value.length = 1)) {
    return;
  }

  buttonEffect(operator, "operator-active");
  operatorOnOff = true;
  operatorEnd = true;
}

//------------------------------------------------

function acClick() {
  display.value = "";
  calculation = display.value;

  buttonEffect(allClear, "number-active");
}

//------------------------------------------------

function eqClick() {
  equal.addEventListener("click", function () {
    if (display.value == "") {
      return;
    } else if (operatorEnd == true) {
      return;
    } else {
      display.value = eval(calculation);
    }

    buttonEffect(equal, "operator-active");
    calculationDone = true;
  });
}

// 연산자가 클릭되면 flag는 on,
// 숫자가 클릭되면 flag는 off

// document.querySelector(".wrapper").addEventListener("click", (e) => {
//   console.log(e.target);
// }); // wrapper 안에 있는 자식 태그들에도 모두 적용

document.querySelector(".wrapper").addEventListener("click", (e) => {
  switch (e.target.dataset.key) {
    case "number":
      numberClick(e.target);
      break;
    case "ac":
      acClick(e.target);
      break;
    case "operator":
      operatorClick(e.target);
      break;
    case "equal":
      eqClick(e.target);
      break;
    case "dot":
      dotClick(e.target);
      break;
  }
});
