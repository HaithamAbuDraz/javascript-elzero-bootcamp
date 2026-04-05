/*
  Number Methods
  - Two Dots To Call A Method
  - toString()
  - toFixed()
  - parseInt()
  - parseFloat()
  - isInteger() [ES6]
  - isNaN() [ES6]
*/

console.log((100).toString()); // "100"
console.log(100.1.toString()); // "100.1"

console.log(100.555555.toFixed(2)); // "100.56"

console.log(Number("100 Haitham")); // NaN
console.log(+"100 Haitham"); // NaN
console.log(parseInt("100 Haitham")); // 100
console.log(parseInt("Haitham 100 Haitham")); // NaN
console.log(parseInt("100.500 Haitham")); // 100
console.log(parseFloat("100.500 Haitham")); // 100.5

console.log(Number.isInteger("100")); // false
console.log(Number.isInteger(100)); // true
console.log(Number.isInteger(100.5)); // false

console.log(Number.isNaN("Haitham")); // false
console.log(Number.isNaN("Haitham" / 100)); // true