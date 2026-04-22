/*
Assignment 06
Challenge
You have an array containing a set of numbers and letters.
Depending on the number of numbers in the array, we will replace them with the first letters.
The letters can change, so don't rely on them.
Regardless of the position of the numbers, you must always place them at the beginning of the array.
The number of numbers can change, so your solution must work with any array.
Watch each example and its output.
Watch the explanation at the end to fully understand the concept.
*/

// let chars = ["A", "B", "C", "D", "E", 10, 15, 6];
let chars = ["A", "B", "C", 20, "D", "E", 10, 15, 6];
// let chars = ["Z", "Y", "A", "D", "E", 10, 1];

let numbersCount = chars.filter((e) => !isNaN(e)).length;
let letters = chars.filter((e) => isNaN(e));

console.log([...letters.slice(0, numbersCount), ...letters]);

// Needed Output
// ['A', 'B', 'C', 'A', 'B', 'C', 'D', 'E']
// ['A', 'B', 'C', 'D', 'A', 'B', 'C', 'D', 'E']
// ["Z", "Y", "Z", "Y", "A", "D", "E"]
