/*
Assignment 1
Print the number 100,000 in 13 different ways.
Each method must be different from the others.
Use the operators for the calculations only once.
There are 3 examples of printing the number to further illustrate the concept.
*/
// Examples
console.log(100_000); // 100000
console.log(100000); // 100000
console.log(5e4 + 5e4); // 100000

// My Solutions
console.log(1e5); // 100000
console.log(Math.round(99_999.5)); // 100000
console.log(Math.ceil(99999.1)); // 100000
console.log(Math.floor(100_000.8)); // 100000
console.log(Math.pow(10, 5)); // 100000
console.log(Math.trunc(100000.9)); // 100000
console.log(Math.max(5000, 100000)); // 100000
console.log(Math.min(100000, 1000000)); // 100000
console.log(Math.sqrt(10000000000)); // 100000
console.log(parseInt("100000 done")); // 100000