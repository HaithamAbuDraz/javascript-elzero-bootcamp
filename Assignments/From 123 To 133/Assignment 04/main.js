/*
Assignment 04
You have the number 100020003000
Your task is to use the Spread Operator + Set function, along with what you have learned, to arrive at the number 123.
The solution must be on a single line only.
Using any numbers is strictly prohibited.
The final result, 123, must be a number, not a string.
*/

let theNumber = 100020003000;

console.log(Number([...new Set(String(theNumber))].sort().join(""))); // 123
