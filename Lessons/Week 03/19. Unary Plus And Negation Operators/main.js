/*
  - + Unary Plus [Return Number If Its Not Number]
  - - Unary Negation [Return Number If Its Not Number + Negates It]
  Tests
  - Normal Number
  - String Number
  - String Negative Number
  - String Text
  - Float
  - Hexadecimal Numeral System => 0xFF
  - null
  - false
  - true
*/

console.log(+100); // 100
console.log(+"100"); // 100
console.log(+"-100"); // -100
console.log(+"Haitham"); // NaN
console.log(+"15.5"); // 15.5
console.log(+"0xFF"); // 255
console.log(+null); // 0
console.log(+false); // 0
console.log(+true); // 1

console.log(-100); // -100
console.log(-"100"); // -100
console.log(-"-100"); // 100
console.log(-"Haitham"); // NaN
console.log(-"15.5"); // -15.5
console.log(-"0xFF"); // -255
console.log(-null); // -0
console.log(-false); // -0
console.log(-true); // -1

console.log(Number("100")); // 100