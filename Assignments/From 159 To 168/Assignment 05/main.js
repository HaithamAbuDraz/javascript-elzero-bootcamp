/*
Assignment 05
Calculate the time required to print a number from 1 to 99999 in the Console.
Use `Performance.now()`.
See the message to be printed below.
Remove fractions from the number and do not round them.
*/

let startTime = performance.now();

for (let i = 0; i < 100000; i++) {
  console.log(i);
}

let endTime = performance.now();

let timeTaken = Math.floor(endTime - startTime);

console.log(`Loop Took ${timeTaken} Milliseconds.`); // "Loop Took 502 Milliseconds."
