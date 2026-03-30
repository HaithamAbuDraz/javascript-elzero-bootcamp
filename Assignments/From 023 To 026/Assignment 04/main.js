/*
Assignment 4
You have the following variable with the value 100.56789 Views.
In the first line, we want to print only the number 100 from the variable and ensure its type is Number.
In the second line, we want to print only the number 100.57 from the variable and ensure its type is Number.
*/

let myVar = "100.56789 Views";

console.log(parseInt(myVar)); // 100
console.log(typeof (parseInt(myVar))); // Number

console.log(Number(parseFloat(myVar).toFixed(2))); // 100.57
console.log(typeof (Number(parseFloat(myVar).toFixed(2)))); // Number
