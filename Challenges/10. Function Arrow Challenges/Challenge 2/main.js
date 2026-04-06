/*
  Function Arrow Challenge 2
*/

// [1] Replace ??? In Return Statement To Get The Output
// [2] Create The Same Function With Regular Syntax
// [3] Use Array Inside The Arguments To Get The Output

let myNumbers = [20, 50, 10, 60];

// Arrow Function
let calc1 = (one, two, ...nums) => one + two + nums[0];

console.log(calc1(10, myNumbers[0], myNumbers[1])); // 80


// Regular Function
let calc2 = function (one, two, ...nums) {
  return one + two + nums[0];
}
console.log(calc2(10, myNumbers[0], myNumbers[1])); // 80
