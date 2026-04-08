/*
Assignment 05
Challenge
You have a variable named nums containing a set of even and odd numbers.
Find the required final result using only the Reduce function.
You must set the Initial Value of Reduce to 1.
If the Current Element value in Reduce is an odd number, add the Accumulator to the Current Element.
If the Current Element value in Reduce is an even number, multiply the Accumulator by the Current Element.
*/

let nums = [2, 12, 11, 5, 10, 1, 99];

let result = nums.reduce((acc, curr) =>
  curr % 2 !== 0 ? acc + curr : acc * curr
  , 1);

console.log(result);// 500