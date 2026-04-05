/*
  Logical Operators
  - ! Not
  - $$ And
  - || Or
*/

console.log(true); // true
console.log(!true); // false

console.log(!(10 == "10")); // false

console.log(10 == "10" && 10 > 8 && 10 >= 10); // true
console.log(10 == "10" && 10 > 8 && 10 >= 50); // false

console.log(10 == "10" || 10 > 8 || 10 > 50); // true
