/*
  Type Coercion (Type Casting)
  - +
  - -
  - "" - 2
  - false - true
*/

let a = "10";
let b = 20;
let c = true;

console.log(a + b); // 1020
console.log(+a + b); // 30
console.log(Number(a) + b); // 30

console.log(a - b); // -10
console.log(c - b); // -19

console.log("" - 2); // -2

console.log(false - true); // -1
console.log(b + c); // 21
console.log(a + b + c); // 1020true
console.log(+a + b + c); // 31
