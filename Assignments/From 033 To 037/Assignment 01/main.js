/*
Assignment 01
You have a variable containing a number.
The task is to examine the number and perform the necessary actions based on the following conditions:
If the number is less than 10, print the number preceded by two zeros.
If the number is greater than 10 and less than 100, print the number preceded by a zero.
If the number is greater than or equal to 100, print the number as is.
*/

// Test Case 1
// let num = 9; // "009"

// // Test Case 2
// let num = 20; // "020"

// // Test Case 3
let num = 110; // "110"

if (num < 10) {
    console.log(`00${num}`);
} else if (num > 10 && num < 100) {
    console.log(`0${num}`);
} else {
    console.log(`${num}`);
}