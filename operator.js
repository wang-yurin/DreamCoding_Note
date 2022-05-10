// 1. String concatenation
console.log("my " + "cat");
console.log("1" + 2);
console.log(`string literals: 1 + 2 = ${1 + 2}`);

// 2. Numeric operators
console.log(1 + 1); // add
console.log(1 - 1); // substract
console.log(1 / 1); // divide
console.log(2 * 3); // multiply
console.log(5 % 2); //remainder
console.log(2 ** 3); // exponentiation

// 3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter;
// counter = counter + 1;
// preIncrement = counter;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);

const postIncrement = counter++;
// postIncrement = counter;
// counter = counter + 1;
console.log(`postIncrement: ${postIncrement}, counter: ${counter}`);

const preDecrement = --counter;
console.log(`preDecrement: ${preDecrement}, counter: ${counter}`);

const postDecrement = counter--;
console.log(`postDecrement: ${postDecrement}, counter: ${counter}`);

// 4. Assignment operators
let x = 3;
let y = 6;
x += y; // x = x + y;
x -= y;
x *= y;
x /= y;
console.log((x += y));
console.log((x -= y));
console.log((x *= y));
console.log((x /= y));

// 5. Comparison operators
console.log(10 < 6); // less than
console.log(10 <= 6); // less than or equal
console.log(10 > 6); // greater than
console.log(10 >= 6); // greater than ot equal

// 6. Logical operators : ||(or), &&(and), !(not)
const value1 = false;
const value2 = 4 < 2;
const value3 = true;

// || (or)
console.log(`or: ${value1 || value2 || check()}`); // false false true
// (or) 여기에서 주의할 점
// 처음으로 true가 나오면 (value3의 값이 true이면) 연산을 멈춘다. 왜냐하면 or 중에 어떤 것이든 하나라도 true이면 true이기 때문
// console.log("😱"); 출력이 안됨
// 연산을 많이 하는 함수를 제일 앞에 호출하면 안된다. 심플한 것들을 먼저 확인하고 마지막에 마지 못해 호출하는것이 좋다. (and도 마찬가지)
console.log(`or: ${value3 || value2 || check()}`); // O
console.log(`or: ${check() || value2 || value3}`); // X

// && (and)
console.log(`and: ${value1 && value2 && check()}`);

function check() {
  for (let i = 0; i < 10; i++) {
    //wasting time
    console.log("😱");
  }
  return true;
}

// ! (not)
console.log(!value1);

// 7. Equality
const stringFive = "5";
const numberFive = 5;

// loose equality, with type conversion
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

// === strict equality, no type conversion
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

// object equality by reference
const yurin1 = { name: "yurin" };
const yurin2 = { name: "yurin" };
const yurin3 = yurin1;
console.log(yurin1 == yurin2);
console.log(yurin1 === yurin2);
console.log(yurin1 === yurin3);

// equality - puzzler
console.log(0 == false);
console.log(0 === false);
console.log("" == false);
console.log("" === false);
console.log(null == undefined);
console.log(null === undefined);

// 8. Conditional operators: if
// if, if else, else
// const name 주석 하나씩 확인 해보세요.
// const name = "yurin";
const name = "coder";
// const name = "any";
if (name === "yurin") {
  console.log("Welcome, Yurin!!");
} else if (name === "coder") {
  console.log("You are amazing coder");
} else {
  console.log("unknown");
}

// 9. Ternary operator: ?
// condition ? value1 : value2;
console.log(name === "yurin" ? "yes" : "no");

// 10. Switch statement
// use for multiple if checks
// use for enum-like value check
// use for multiple type check in TS
const browser = "Chrome";
switch (browser) {
  case "IE":
    console.log("Go Away!");
    break;
  case "Chrome":
    console.log("Love You!");
    break;
  case "Firefox":
    console.log("Love You!");
    break;
  //Chrome과 Firefox의 콘솔 값이 같으니 합칠 수 있다.
  /*
  case 'Chrome':
  case 'Firefox':
  console.log('Love You!')
  */
  default:
    console.log("Same All!");
    break;
}

// 11. Loops
// while loop, while the condition is truthy,
// body code is executed.
let i = 3;
while (i > 0) {
  console.log(`while: ${i}`);
  i--;
}

// do while loop, body code is excuted first,
// then check the condition.
// 위의 식에서 i가 이미 0임에도 불구하고 블럭을 먼저 실행하여 0이 출력 되고 while 조건 확인
do {
  console.log(`do while: ${i}`);
  i--;
} while (i > 0);

// for loop, for(begin; condition; step)
for (i = 3; i > 0; i--) {
  console.log(`for: ${i}`);
}

for (let i = 3; i > 0; i = i - 2) {
  // inline variable declaration
  console.log(`inline variable for: ${i}`);
}

// nasted loops
/*
i가 0일 때 j 0~9까지 확인
i가 1일 때 j 0~9까지 확인
...
i가 9일 때 j 0~9까지 확인
*/
for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    console.log(`i: ${i}, j: ${j}`);
  }
}

// break, continue
//Q1. 0 부터 10 까지 짝수인 숫자만 프린트
for (let i = 0; i < 11; i++) {
  if (i % 2 !== 0) {
    continue;
  }
  console.log(`Q1. ${i}`);
}
// 또는
for (let i = 0; i < 11; i++) {
  if (i % 2 === 0) {
    console.log(`Q1. ${i}`);
  }
}

// Q2. 0 부터 10 까지 반복하되 숫자 8을 만나면 멈추게
for (let i = 0; i < 11; i++) {
  if (i > 8) {
    break;
  }
  console.log(`Q2. ${i}`);
}
