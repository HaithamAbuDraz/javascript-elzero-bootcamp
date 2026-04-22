/*
Assignment 05
You have a variable named Elzero.
The task is to convert the String to an Array using five different methods.
See the example.
*/

let theName = "Elzero";

// Needed Output
//['E', 'l', 'z', 'e', 'r', 'o']

console.log(theName.split("")); // (6) ['E', 'l', 'z', 'e', 'r', 'o']

console.log([...theName]); // (6) ['E', 'l', 'z', 'e', 'r', 'o']

console.log(Array.from(theName)); // (6) ['E', 'l', 'z', 'e', 'r', 'o']

console.log([...new Set(theName)]); // (6) ['E', 'l', 'z', 'e', 'r', 'o']

console.log(Object.assign([], theName)); // (6) ['E', 'l', 'z', 'e', 'r', 'o']
