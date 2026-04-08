/*
Assignment 03
Challenge
You have a variable named myArray containing an array, and inside that, another array.
Create a new array using the Reduce function.
You must flatten the array to return a single array.
You must concatenate the letters to get the result.
Using
Array.flat() is strictly prohibited.
*/

let myArray = ["E", "l", "z", ["e", "r"], "o"];

let result = myArray
  .reduce((acc, curr) => acc.concat(curr), [])
  .join("");

console.log(result); // Elzero