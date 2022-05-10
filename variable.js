// 1. Use strict
// added in ES5
// user this for Vanilla JavaScript
"user strict";

// 2. Valiable
// 변수란 변경 될 수 있는 값
// let (added in ES6)
/*
let name = "yurin";
console.log(name);
name = "hello";
console.log(name);
*/

// Block Scope
// 중괄호(블럭)을 이용해서 코드를 블럭 안에 작성하게 되면 블럭 밖에서는 더이상 블럭 안에 있는 내용들을 볼 수 없다.
//반대로 블럭을 쓰지 않고 파일 안에 바로 정의해서 쓰는 변수들을 Global Scope(전역 스코프)이라 부르는데 글로벌한 것들은 어느 곳에서나 접근이 가능하다. 그래서 블럭 안이나 밖에서도 출력이 가능하다.
// 글로벌한 변수들은 어플리케이션이 실행되는 순간부터 끝날 때 까지 메모리에 탑재되어 있기 때문에 최소한으로 쓰는 것이 좋다. 가능하면 클래스나 함수(if , for 등) 필요한 부분에서만 정의해서 쓰는 것이 좋다.
/*
let globalName = "global name";
{
  let name = "yurin";
  console.log(name);
  name = "hello";
  console.log(name);
  console.log(globalName);
}
console.log(name);
console.log(globalName);
*/

// var (don't ever this!)
// var hoisting(move declaration from bottom to top)
// 호이스팅은 어디에 선언했냐에 상관 없이 항상 제일 위로 선언을 끌어 올리는 것
// has no block scope
//var는 블럭을 무시해서 블럭 밖에서도 출력한다.
/*
{
  age = 4;
  var age;
}
console.log(age);
*/

/*
// let은 블럭 밖에서 출력하면 출력이 안됨
{
  let age2;
  age2 = 5;
}
console.log(age2);
*/

// 3. Constant
// use conts whenever possible.
// only use let if variable needs to change.

const dayInWeek = 7;
const maxNumber = 5;
console.log(dayInWeek);
console.log(maxNumber);

// Note!!
// Immutable data types : primitive types, frozen objects (i.e. object.freeze())
// Mutable data types : all objects by default are mutable in JS
// faver immitable data type always for a few reason:
// - security
// - thread safety
// - reduce human mistakes

// 4. Variable Types
// primitive, single item: number, string, boolean, null, undefined, symbol
// object, box container
// function, first-class function

//number
const count = 17; //integer
const size = 17.1; //decimal number
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

// number - special numeric values : infinity, -infinity, NaN
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = "not a number" / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// binInt (fairly new, don't use it yet)
// 숫자 맨 끝에 n을 붙이면 bigInt로 간주되어진다.
// n 안붙이면 type:number, n 붙이면 type:bigint
const bigInt = 1234567890123456789012345678901234567890n; //over ((-2**53) ~ 2**53)
console.log(`value: ${bigInt}, type: ${typeof bigInt}`);

// string
const char = "c";
const brendan = "brendan";
const greeting = "hello " + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);

const helloBob = `Hi ${brendan}!!`;
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);

// boolean
// false : 0, null, undefined, NaN, ''
// true : any other value
const canRead = true;
const test = 3 < 1; // false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

// null
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

// undefined
let x;
console.log(`value: ${x}, type: ${x}`);

//symbol
const symbol1 = Symbol("id");
const symbol2 = Symbol("id");
console.log(symbol1 === symbol2); //false

const gSymbol1 = Symbol.for("id");
const gSymbol2 = Symbol.for("id");
console.log(gSymbol1 === gSymbol2); //true

console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);

// object, real-life object, data language
const yurin = { name: "yurin", age: 29 };
console.log(yurin);
yurin.name = "wang";
console.log(yurin);

// 5. Dynamic typing : dynamically typed language
let text = "hello";
console.log(text.charAt(0)); //h
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = "7" + 5;
console.log(`value: ${text}, type: ${typeof text}`);
text = "7" * 5;
console.log(`value: ${text}, type: ${typeof text}`);
console.log(text.charAt(0)); //error
