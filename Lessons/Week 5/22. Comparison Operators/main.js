/*
  Comparison Operators
  - == Equal
  - != Not Equal

  - === Identical
  - !== Not Identical

  - > Larger Than
  - >= Larger Than Or Equal

  - < Smaller Than
  - <= Smaller Than Or Equal
*/

console.log(10 == "10"); // true Compare Value Only
console.log(-100 == "-100"); // true Compare Value Only
console.log(10 != "10"); // false Compare Value Only

console.log(10 === "10"); // false Compare Value + Type
console.log(10 !== "10"); // true Compare Value + Type
console.log(10 === 10); // true Compare Value + Type
console.log(10 !== 10); // false Compare Value + Type

console.log(10 > 20); // false
console.log(10 > 10); // false
console.log(10 >= 20); // false

console.log(10 < 20); // true
console.log(10 < 10); // false
console.log(10 <= 20); // true

console.log("Haitham" === "haitham"); // false
console.log(typeof "Haitham" === typeof "haitham"); // true
