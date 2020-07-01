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

function operatorClick() {
  for (let i = 0; i < operators.length; i++) {
    operators[i].addEventListener("click", function () {
      if (display.value.length < 13 && operatorOnOff == false) {
        if (display.value.length >= 1) {
          display.value += operators[i].innerText;
        } else if ((display.value.length = 1)) {
          display.value += "";
        }
      }
    });
  }

  buttonEffect(operators[i], "operator-active");
  operatorOnOff = true;
}

/*operators[i].classList.add("operator-active");
    setTimeout(function () {
      if (operators[i].classList.contains("operator-active")) {
        operators[i].classList.remove("operator-active");
      }
    }, 200);*/

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

equal.addEventListener("click", function () {
  if (display.value == "") {
    return;
  } else {
    display.value = eval(calculation);
  }

  buttonEffect(equal, "operator-active");
});

// 연산자가 클릭되면 flag는 on,
// 숫자가 클릭되면 flag는 off

document.querySelector(".wrapper").addEventListener("click", (e) => {
  console.log(e.target);
}); // wrapper 안에 있는 자식 태그들에도 모두 적용

document.querySelector(".wrapper").addEventListener("click", (e) => {
  switch (e.target.dataset.key) {
    case "number":
      alert("number");
      break;
    case "ac":
      acClick();
      break;
    case "operator":
      operatorClick();
      break;
  }
});

/// 함수로 모두 만들고 switch 구문안에 넣을것

// 연산자의 경우 배열이라 [i]가 들어가는데, 이 경우 (e.target)을 써서 호출하고
//함수를 쓸 때는 (target)으로 바꾼다

//주석이나 구분선은 최대한 자제한다
