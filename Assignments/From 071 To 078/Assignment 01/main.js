/*
Assignment 01
You have a variable named mix containing letters and numbers.
Create a new array using the Map function.
You must completely exclude the numbers from the result.
You must concatenate the letters to get the result.
You must use the Map + Reduce function with what you have learned to get the desired output.
Using the Join or Filter function is prohibited.
*/

let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];

let result = mix
  .map((ele) => (isNaN(ele) ? ele : ""))
  .reduce((acc, ele) => acc + ele);

console.log(result); // Elzero