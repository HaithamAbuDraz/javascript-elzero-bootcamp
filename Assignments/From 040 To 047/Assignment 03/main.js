/*
Assignment 03
Numbers are strictly prohibited.
Only one line of code must be written to output the required value.
*/

let arrOne = ["C", "D", "X"];

let arrTwo = ["A", "B", "Z"];

let finalArr = [];

// Write One Single Line Of Code

finalArr = arrTwo.concat(arrOne).sort().reverse();

console.log(finalArr); // ["Z", "X", "D", "C", "B", "A"]