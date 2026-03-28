// Assignment 4
// Challenge
// Use variables to get the result shown in the code.
// A variable cannot be repeated more than once.
// You cannot write any numbers by hand; use only the values ​​of the variables.
// Output: _21_2021_2021_2021_20

let a = 21;

let b = 20;

console.log("_" + a + "_" + (b + "" + a) + "_" + (b + "" + a) + "_" + (b + "" + a) + "_" + b + "_"); // _21_2021_2021_2021_20


// Using template literals
console.log(`_${a}_${b}${a}_${b}${a}_${b}${a}_${b}_`); // _21_2021_2021_2021_20