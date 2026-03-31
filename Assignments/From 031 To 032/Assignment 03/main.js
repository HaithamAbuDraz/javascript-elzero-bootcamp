/*
Assignment 3
You have three variables containing different numbers.
You need to use the operators you've learned instead of the question mark to get the result True.
Using any numbers is strictly prohibited.
*/

let a = 20;

let b = 30;

let c = 10;

console.log(a < b && a > c || a < b); // true
console.log(a < b && a > c); // true
console.log(!(a > b) && !(a > b) && !(a < c) && !(a < c)); // true
