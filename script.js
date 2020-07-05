const numbers = document.querySelectorAll(".number");
const display = document.querySelector(".answer");
const allClear = document.querySelector(".ac");
const operators = document.querySelectorAll(".operator");
const dot = document.querySelector(".dot");
const equal = document.querySelector(".equal");
let calculation; //최종적으로 eval()로 계산할 값을 담는 변수

let operatorOnOff = false; //연산자가 한번 입력되었는지의 상태
let operatorEnd = false; //연산자로 수식이 끝나는지의 상태
let dotOnOff = false; //.이 입력되었는지의 상태
let calculationDone = false; //계산이 끝났는지의 상태

let h2 = document.querySelector("h2");

//변수나 함수명으로 짐작할 수 없는 코드는 주석을 달 것. 왜 이 코드를 넣었는지 설명. 무슨 조건인지 왜 넣었는지. 추후에 봐도 알 수 있도록

//------------------------------------------------

function buttonEffect(element, className) {
  //버튼을 눌렀을 때 실행될 함수(요소, 클래스이름)
  element.classList.add(className); //눌렀을때 추가될 클래스이름

  setTimeout(function () {
    if (element.classList.contains(className)) {
      //요소에 해당 클래스 이름이 있을 경우에는
      element.classList.remove(className); //2초 후 클래스를 제거한다
    }
  }, 200);
}

// 숫자 버튼

function numberClick(number) {
  //숫자 버튼 클릭 시 실행되는 함수
  if (display.value.length > 13) {
    //인풋 텍스트가 튀어나가지 않도록 길이를 제한한다
    return; // 즉, 텍스트가 13자 이상일 경우는 빠져나간다
  }
  if (display.value == "0" && number != dot) {
    //display에 표시된 숫자가 0이면서 누른 숫자버튼의 값이 .이 아니라면
    display.value = number.innerText; //각 버튼 안에 있는 숫자로 display를 덮어쓴다
    calculation = display.value; //calculation 변수에 표시된 숫자값을 저장한다
  } else if (calculationDone && !operatorOnOff) {
    //계산이 완료되었고, 연산자가 한번 입력되었다면
    display.value = number.innerText; //각 버튼 안에 있는 숫자로 display를 덮어쓴다
    calculation = display.value; //calculation 변수에 표시된 숫자값을 저장한다
    calculationDone = false; //계산 완료를 상태를 제거한다
  } else {
    if (numbers == dot && display.value.includes(".")) {
      //누른 숫자버튼의 값이 .인데 .을 이미 한번 포함한다면
      return; //빠져나간다
    } else if (number == dot && display.value == "") {
      //누른 숫자버튼의 값이 .인데 display에 아무 값도 없다면
      return; //빠져나간다
    } else {
      //그렇지않다면
      display.value += number.innerText; //각 버튼 안에 있는 숫자를 display에 추가시킨다
      calculation = display.value; //calculation 변수에 표시된 숫자값을 저장한다
    }
  }

  operatorOnOff = false; //연산자 입력 상태를 false로 바꾼다
  dotOnOff = false; //. 입력상태를 false로 바꾼다
  operatorEnd = false; // 연산자로 끝나는 상태를 false로 바꾼다
  buttonEffect(number, "number-active"); //buttonEffect 함수를 실행하고 active 클래스를 부여한다
}

//------------------------------------------------

// 연산자 버튼

function operatorClick(operator) {
  if (display.value.length > 13) {
    //인풋 텍스트가 튀어나가지 않도록 길이를 제한한다
    return; //// 텍스트가 13자 이상일 경우는 리턴
  }
  if (operatorOnOff) {
    //연산자 입력상태가 on이라면
    return; //리턴
  }

  if (display.value.length >= 1) {
    //디스플레이에 표시되는 값의 길이가 1보다 크거나 같다면
    display.value += operator.innerText; //연산자 버튼 내의 글자를 디스플레이값을 추가한다
  } else if (display.value.length == 0) {
    //그렇지 않고 디스플레이에 표시된 값의 길이가 0이라면
    return;
    리턴;
  }

  dotOnOff = false; // . 입력상태를 false로 변환
  calculationDone = false; // 계산 완료상태를 false로 변환
  buttonEffect(operator, "operator-active");
  operatorOnOff = true; // 연산자 입력상태를 true로 변환
  operatorEnd = true; // 연산자로 끝나는 상태를 true로 변환
}

//------------------------------------------------

function acClick() {
  display.value = ""; //버튼 클릭시 display 초기화
  calculation = display.value; //calculation에 초기화된 값 부여

  buttonEffect(allClear, "number-active");
}

function dotClick(dot) {
  if (!display.value) {
    //display에 값이 없다면 리턴
    return;
  } else if (dotOnOff || operatorEnd) {
    //.이 입력된 상태가 true이거나, 연산자로 끝나는 상태가 true라면 리턴
    return;
  } else {
    // 위의 어떤것에도 해당하지 않는다면
    display.value += dot.innerText; //display에 . 추가
    dotOnOff = true; //. 입력상태 true로 전환
    calculation = display.value; // calculation 업데이트
  }

  buttonEffect(dot, "number-active");
}

//------------------------------------------------

function eqClick() {
  if (display.value == "" || operatorEnd) {
    //display값이 없거나, 연산자로 끝나는 경우에는 리턴
    return;
  } else {
    //그렇지않으면 calculation변수에 담긴 연산을 eval()로 계산한다
    display.value = eval(calculation);
  }

  buttonEffect(equal, "operator-active");
  calculationDone = true;
}

// 연산자가 클릭되면 flag는 on,
// 숫자가 클릭되면 flag는 off

// document.querySelector(".wrapper").addEventListener("click", (e) => {
//   console.log(e.target);
// }); // wrapper 안에 있는 자식 태그들에도 모두 적용

document.querySelector(".wrapper").addEventListener("click", (e) => {
  //.wrapper 안의 모든 요소에 이벤트를 걸고,
  switch (
    e.target.dataset.key //data-key 요소로 구분해서 switch 문을 넣는다
  ) {
    case "number": //data-key가 'number'일 경우
      numberClick(e.target);
      break;
    case "ac": //data-key가 'ac'일 경우
      acClick(e.target);
      break;
    case "operator": //data-key가 'operator'일 경우
      operatorClick(e.target);
      break;
    case "equal": //data-key가 'equal'일 경우
      eqClick(e.target);
      break;
    case "dot": //data-key가 'dot'일 경우
      dotClick(e.target);
      break;
  }
});
