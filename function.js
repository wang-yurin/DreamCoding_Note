// Function
// - fundamental building block in the program
//프로그램을 구성하는 가장 기본적인 빌딩 블럭
// - subprogram can be used multiple times
//서브프로그램이라고도 불리며 여러번 재사용이 가능하다.
// - performs a task or calulates a value
//한가지의 타스크나 어떠한 값을 계산하기 위해 사용

// 1. Function declaration
// function name(param1, param2) { body... return; }
// one function === one thing
// 하나의 함수는 한가지의 일만 하도록 만들어야 한다.
// naming: doSomething, command, verb
// e.g. createCardAndPoint -> createCard, createPoint
// function is object in JS
// 자바스크립트에서 function은 object로 간주되어지기 때문에 변수에 할당 할 수도 있고 파라미터로 전달이 되고 함수를 리턴할 수 있다.

function printHello() {
  console.log("Hello");
}
printHello();

function log(message) {
  console.log(message);
}
log("Hello~!");
log(1234);

// 2. Parameters
// premitive parameters: passed by value
// 값에 의한 전달(이러한 데이터 타입을 원시타입)
// 메모리에 value가 그대로 저장되어 있기 때문에 value가 전달이 되고
// object parameters: passed by reference
// 참조에 의한 전달
// 메모리에 reference가 저장되어지기 떄문에 reference가 전달이 된다.

//오브젝트는 레퍼런스로 전달 되기 때문에 함수 안에서 오브젝트의 값을 변경하게 되면 그 변경된 사항이 그대로 메모리에 적용이 되어 추후에 변경 된 사항을 확인 할 수 있다.
function changeName(obj) {
  //chanheName이라는 fuction은 전달된 obj에
  obj.name = "coder"; // 이름을 coder로 무조건 변경하는 함수
}
const yurin = { name: "yurin" }; //yurin이라는 const를 정의한 다음에 yurin이라는 오브젝트(객체)를 만들어서 할당해주면 메모리는 이 오브젝트에서 만들어진 레퍼런스가 메모리에 들어가게 되고, 이 레퍼런스는 이 오브젝트를 메모리 어딘가에 가리키고 있다.
changeName(yurin); // changeName yurin을 전달하게 되면 전달된 yurin.name='coder'; yurin이 가리키고 있는 곳의 name을 coder로 변경
console.log(yurin);

// 3. Default parameters (added in ES6)
function showMessage(message, from = "unknown") {
  console.log(`${message} by ${from}`);
}
showMessage("Hi!");
// from에 기본 값 설정 안해준 경우 : from에 기본값이 없기 때문에 Hi! by undefined 출력
// from = 'unknown'으로 기본 값을 설정 해주면 Hi! by unknown 출력

// 4. Rest parameters (added in ES6)
function printAll(...args) {
  for (let i = 0; i < args.length; i++) {
    console.log(args[i]);
  }

  //또는
  for (const arg of args) {
    //args애 있는 모든 값들이 차례대로 하나씩 arg에 지정
    console.log(arg);
  }

  //또는
  args.forEach((arg) => console.log(arg));
}
printAll("Dream", "Coding", "Yurin");

// 5. Lacal scope
// 밖에서는 안이 보이지 않고 안에서만 밖을 볼 수있다.
// 창문에 틴트를 한 것처럼 밖에서는 안을 볼 수 없지만 안에서 밖을 볼 수 있는 것을 연상
let globalMessage = "global"; //global variable
function printMessage() {
  let message = "hello";
  console.log(message); // local varialble
  console.log(globalMessage); // 안에서는 밖에 있는 것을 출력 가능
  function printAnother() {
    console.log(message);
    let childMessage = "hi";
  }
  // console.log(childMessage); //Error
}
printMessage();
// console.log(message); //Error // 밖에서는 안에 있는 것을 출력 못함

// 중첩된 함수에서 자식의 함수가 부모 함수에 정의된 변수들에 접근이 가능하게 하려면 클로저
// 위처럼 리턴 타입이 없는 함수들은 return undefined가 들어가 있는 것과 같음(생략 가능)
// 모든 함수에는 return undefined거나 값을 리턴할 수 있다.

// 6. Return a value
function sum(a, b) {
  return a + b;
}
const result = sum(1, 2);
console.log(`sum: ${result}`);
console.log(`sum: ${sum(10, 20)}`);

// 7. Early return, early exit
// bad
function upgradeUser(user) {
  if (user.point > 10) {
    // long upgrade logic...
    // user.point가 10 이상이어야지 무언가 업그레이드가 되는 로직이 있을때 이렇게 if 블럭 안에 로직을 많이 작성하게 되면 가독성이 떨어져서 if와 else를 번갈아 가면서 사용하는 것 보다는
  }
}

// good
function upgradeUser(user) {
  if (user.point <= 10) {
    return;
    //조건이 맞지 않을 때는 빨리 리턴을 해서 함수를 종료하고
  }
  // long upgrade logic
  //조건이 맞을 때만 필요한 로직들을 쭉 실행하는 것이 효율적이다.
}

// 조건이 맞지 않는 경우, 값이 undefined인 경우, 값이 -1인경우 빨리 리턴을 하고 필요한 로직들은 그 뒤에 작성하는 것이 좋다.
//
//

// Frist-class function
// funtion are treated like any other variable // 함수는 다른 변수와 마찬가지로
// can be assigned as a value to variable // 변수에 할당이 되고
// can be passed as an argument to other functions. // 함수에 매개변수로 전달이 되며
// can be returned by another function // 결괏값으로 리턴이 된다.

// 1. Function expression
// a function declaration can be called earlier than it is definend. (hoisted)
// 함수 선언식 : 함수를 선언하기 전에 호출이 가능, 자바스크립트 엔진이 선언된 것을 제일 위로 올려주기 때문
// a function expression is created when the execution reaches it.
// 함수 표현식 : 변수에 할당된 다음부터 호출이 가능하다
const print = function () {
  // 함수를 선언함과 동시에 print라는 변수에 할당
  // 함수 이름이 없는 경우(익명함수) anonymous function
  // 함수 이름이 있는 경우(기명함수) named function
  console.log("프린트입니다.");
};
print(); // print라는 변수에 함수를 할당 하듯이 호출하면 출력
const printAgain = print;
printAgain();
const sumAgain = sum; // 위에 6.에서 sum 함수 선언 했었음
console.log(sumAgain(2, 5));

// 2. Callback function using function expression
function randomQuiz(answer, printYes, printNo) {
  if (answer === "love you") {
    printYes();
  } else {
    printNo();
  }
}
// anonymous function
const printYes = function () {
  console.log("Yes!");
};

// named function
// better debugging in debugger's stack traces
// recursions // 재귀, 함수 안에서 함수 자신 스스로를 부르는 것, 피보나치수를 계산,반복되는 평균값을 계산 등 쓰임새가 다름
const printNo = function print() {
  console.log("No!!");
};
randomQuiz("love you", printYes, printNo);
randomQuiz("wrong", printYes, printNo);

// Arrow finction
// always anonymous
// 이것을
// const simplePrint = function () {
// console.log("심플 프린트 입니다.");
// };

// 이렇게 바꿀 수 있다.
const simplePrint = () => console.log("심플 프린트 입니다.");

// 이것을
// const add = function(a, b) {
//   return a + b;
// }

// 이렇게 바꿀 수 있다.
const add = (a, b) => a + b;
//
//
// IIFE: Immediately Invoked Function Expression
// 원래 함수 선언을 하고 호출을 했는데 IIFE는 함수를 선언함과 동시에 호출을 할 수 있다.
// 함수의 선언 부분을 괄호로 묶고 함수를 호출하듯이 써주면 된다.
// 요즘 잘 안쓰이지만 함수를 바로 확인하고 싶을 때 사용
(function hello() {
  console.log("IIFE");
})();
