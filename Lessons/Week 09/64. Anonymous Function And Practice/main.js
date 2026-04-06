/*
  Function
  - Anonymous Function
  - Calling Named Function vs Anonymous Function
  - Argument To Other Function
  - Task Without Name
  - SetTimeout
*/

// console.log(calc(10, 20)); // 30

// function calc(num1, num2) {
//   return num1 + num2;
// };

// console.log(calculator(10, 20)); // Uncaught ReferenceError: Cannot access 'calculator' before initialization

// let calculator = function (num1, num2) {
//   return num1 + num2;
// };
// console.log(calculator(10, 20)); // 30

// let calculator = function haitham(num1, num2) {
//   return num1 + num2;
// };
// console.log(haitham(10, 20)); // Uncaught ReferenceError: haitham is not defined

function sayHello() {
  console.log("Hello Haitham"); // Hello Haitham
};
document.getElementById("say-hallo").onclick = sayHello;

document.getElementById("show").onclick = function () {
  console.log("Show"); // Show After on Click of Show Button
};

setTimeout(function () {
  console.log("Good"); // Good After 2 seconde
}, 2000);
