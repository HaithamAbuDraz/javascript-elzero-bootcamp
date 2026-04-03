/*
Assignment 05
All you need to do is ensure that the value of the `needle` variable exists within the array named `haystack`.
The solution must be implemented in three different ways:

Print the word `Found` in the console if the word exists.
*/

let needle = "JS";

let haystack = ["PHP", "JS", "Python"];

// Write 3 Solutions

// Solution 1
console.log(haystack.includes(needle) ? "Found" : "Not Found");


// Solution 2
console.log(haystack.indexOf(needle) === -1 ? "Not Found" : "Found");


// Solution 3
console.log(haystack.some(item => item === needle) ? "Found" : "Not Found");