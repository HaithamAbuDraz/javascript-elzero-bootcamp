/*
Assignment 08
Challenge
You have 2 arrays containing numbers.
The goal is to retrieve the number 210.
Do not use numbers, True, or False.
Do not use Array Indexes to retrieve any number from the arrays.
Do not use any type of loop or Higher Order Function.
The solution must be on a single line.
If you use Length, use it only once.
If you use a calculation, you are only allowed to use the multiplication sign (*).
*/

let n1 = [10, 30, 10, 20];
let n2 = [30, 20, 10];

// Solution 1
console.log((Math.max(...n1)) * ([...n1, ...n2]).length); // 30 * 7 = 210

// Solution 2
console.log([...n1, ...n2].length * new Set(n2).size * Math.min(...n1)); // 7 * 3 * 10 = 210
