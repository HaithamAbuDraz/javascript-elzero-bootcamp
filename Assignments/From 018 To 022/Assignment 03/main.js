/*
Assignment 3
Use the variable value to get the required result in five different ways.
You can use anything you have learned previously to get the required result.
Using any numbers is not allowed at all.
Each method must be completely different from the others. The required result is the number 20. The resulting number must be returned as a Number, not a String.

*/

let num = "10";

// Solution One
console.log(+num + +num); // 20
console.log(typeof (+num + +num)); // number

// Solution Two
console.log(num.length * +num); // 20
console.log(typeof (num.length * +num)); // number

// Solution Three
console.log(Number(num) * (true + true)); // 20
console.log(typeof (Number(num) * (true + true))); // number

// Solution Four
console.log(parseInt(num) + parseInt(num)); // 20
console.log(typeof (parseInt(num) + parseInt(num))); // number

// Solution Five
console.log(parseFloat(num) * (true + true)); // 20
console.log(typeof (parseFloat(num) * (true + true))); // number
