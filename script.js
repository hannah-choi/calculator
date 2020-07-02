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

function numberClick() {
  if (display.value.length > 13) {
    return;
  }
  if (display.value == "0" && number != dot) {
    display.value = number.innerText;
    calculation = display.value;
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
  buttonEffect(number, "number-active");
}

// function numberClick() {
//   for (let i = 0; i < numbers.length; i++) {
//     numbers[i].addEventListener("click", (e) => {
//       if (display.value.length > 13) {
//         return;
//       }
//       if (display.value == "0" && e.target != dot) {
//         display.value = e.target.innerText;
//         calculation = display.value;
//       } else {
//         if (e.target == dot && display.value.includes(".")) {
//           return;
//         } else if (e.target == dot && display.value == "") {
//           return;
//         } else {
//           display.value += e.target.innerText;
//           calculation = display.value;
//         }
//       }
//       operatorOnOff = false;
//       buttonEffect(e.target, "number-active");
//     });
//   }
// }

//------------------------------------------------

// 연산자 버튼

function operatorClick(e) {
  if (display.value.length < 13 && operatorOnOff == false) {
    if (display.value.length >= 1) {
      display.value += e.target.innerText;
    } else if ((display.value.length = 1)) {
      display.value += "";
    }
  }

  buttonEffect(e.target, "operator-active");
  operatorOnOff = true;
}

// function operatorClick() {
//   for (let i = 0; i < operators.length; i++) {
//     operators[i].addEventListener("click", (e) => {
//       if (display.value.length < 13 && operatorOnOff == false) {
//         if (display.value.length >= 1) {
//           display.value += e.target.innerText;
//         } else if ((display.value.length = 1)) {
//           display.value += "";
//         }
//       }

//       buttonEffect(e.target, "operator-active");
//       operatorOnOff = true;
//     });
//   }
// }

//------------------------------------------------

// ac 버튼

// allClear.addEventListener("click", function () {
//   display.value = "";
//   calculation = display.value;

//   buttonEffect(allClear, "number-active");
// });

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
    } else {
      display.value = eval(calculation);
    }

    buttonEffect(equal, "operator-active");
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
      numbers.forEach(numberClick);
      break;
    case "ac":
      acClick();
      break;
    case "operator":
      operatorClick();
      break;
    case "equal":
      eqClick();
      break;
  }
});
