/*
Assignment 07
You have arrays that need to be merged.
The task is to merge the arrays in three different ways.
*/

let numsOne = [1, 2, 3];
let numsTwo = [4, 5, 6];

console.log(numsOne.concat(numsTwo)); // [1, 2, 3, 4, 5, 6]

console.log([...numsOne, ...numsTwo]); // [1, 2, 3, 4, 5, 6]

console.log(Array.from([...numsOne, ...numsTwo])); // [1, 2, 3, 4, 5, 6]

