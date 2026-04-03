/*
Assignment 06
Write code that incorporates what you've learned to produce the result shown in the example.
Do not include any numbers anywhere in the solution.
*/

let arr1 = ["A", "C", "X"];

let arr2 = ["D", "E", "F", "Y"];

let allArrs = [];

// Your Code Here
allArrs = arr1.concat(arr2).sort().slice(arr2.length).join("").toLowerCase();

console.log(allArrs); // fxy