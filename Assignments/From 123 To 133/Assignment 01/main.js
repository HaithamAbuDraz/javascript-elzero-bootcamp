/*
Assignment 01
Create a new Set named setOfNumbers
Include the number 10 in the Set during creation
Include the number 20 in the Set on a separate line
On the same line, add a new element representing the number of elements in the previous Set
Print the Set in the Console and ensure it matches the following example
On a separate line, use what you have learned to print the last element in the Set
*/

let setOfNumbers = new Set([10]);

setOfNumbers.add(20);

setOfNumbers.add(setOfNumbers.size);

console.log(setOfNumbers); // Set(3) {10, 20, 2}

console.log(Array.from(setOfNumbers).pop()); // 2
