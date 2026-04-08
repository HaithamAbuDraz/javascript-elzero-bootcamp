/*
Assignment 02
You have a variable named myString containing letters, some duplicates and some regular letters.
Create a new array using the Filter.
You must exclude duplicate letters from the result.
You must concatenate the letters to get the result.
*/

let myString = "EElllzzzzzzzeroo";

let result = myString
.split("")
.filter((char, index, arr) => arr.indexOf(char) === index)
.join("");

console.log(result);// Elzero