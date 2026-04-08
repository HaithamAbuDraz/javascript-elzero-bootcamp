/*
Assignment 04
You have a variable named numsAndStrings containing Letters and Numbers.
Create a new array using Filter + Map.
You must exclude the letters from the result.
You must reverse the numbers (positive to negative and negative to positive).
You must use Map + Filter + whatever you want.
*/

let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];

let invertedNumbers = numsAndStrings
  .filter((ele) => !isNaN(parseInt(ele)))
  .map((ele) => -ele);

console.log(invertedNumbers); // [-1, -10, 10, 20, -5, -3]
