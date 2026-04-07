/*
  Filter
  - Filter Longest Word By Number
*/

// Filter Words More Than 4 Characters
let sentence = "I love Foood Code Too Playing Much";

let smallWords = sentence
  .split(" ")
  .filter(function (ele) {
    return ele.length <= 4;
  })
  .join(" ");

console.log(smallWords); // I love Code Too Much

// Ignore Numbers
let ingnoreNumbers = "Elz123er4o";

let ign = ingnoreNumbers
  .split("")
  .filter(function (ele) {
    return isNaN(parseInt(ele));
  })
  .join("");
console.log(ign); // Elzero

// Filter Strings + Multiply
let mix = "A13BS2ZX";

let mixedContent = mix
  .split("")
  .filter(function (ele) {
    return !isNaN(parseInt(ele)); // Filters to keep only numbers: ["1", "3", "2"]
  })
  .map(function (ele) {
    return ele * ele; // 1 9 4
  })
  .join("");

console.log(mixedContent); // 194
