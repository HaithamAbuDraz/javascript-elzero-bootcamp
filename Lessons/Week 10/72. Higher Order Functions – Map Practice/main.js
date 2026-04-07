/*
  Map
  - Swap Cases
  - Inverted Numbers
  - Ignore Boolean Value
*/

let swappingCases = "elZERo";
let invertedNumbers = [1, -10, -20, 15, 100, -30];
let ingnoreNumbers = "Elz123er4o";

// let sw = swappingCases
//   .split("")
//   .map(function (ele) {
//     // Condition ? True : False
//     return ele === ele.toUpperCase() ? ele.toLowerCase() : ele.toUpperCase();
//   }).join("");

// console.log(sw); // ELzerO

// Arrow Function Version
let sw = swappingCases
  .split("")
  .map((a) => (a === a.toUpperCase() ? a.toLowerCase() : a.toUpperCase()))
  .join("");

console.log(sw); // ELzerO

let inv = invertedNumbers.map(function (ele) {
  return -ele;
});

console.log(inv); // [-1, 10, 20, -15, -100, 30]

let ign = ingnoreNumbers.split("").map(function (ele) {
  return isNaN(parseInt(ele)) ? ele : "";
}).join("");

console.log(ign); // Elzero
