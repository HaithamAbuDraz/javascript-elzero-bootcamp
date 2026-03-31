/*
Assignment 03
You have three variables. The task is to check the following conditions and display the message in the same format as the output in the example.
All solutions must be performed using a single `If` condition.

Line 1: Verify that the third variable is greater than the first and not equal to the second in type.
Line 2: Verify that the third variable is greater than the first and equal to the second in value, but not equal to the second in type.
Line 3: Verify that the value of the third variable is not equal to the first in value and type, nor equal to the second in type.
You must check the data type and value yourself, as the data type and value can change.
*/

let num1 = 10;
let num2 = 30;
let num3 = "30";

// Needed Output
if (num3 > num1 && typeof num3 !== typeof num2) {
    console.log(`${num3} Is Larger Than ${num1} And Type ${typeof num3} Not The Same Type As ${typeof num2}`);
}

if (num3 > num1 && num3 == num2 && typeof num3 !== typeof num2) {
    console.log(`${num3} Is Larger Than ${num1} And Value Is The Same As ${num2} And Type string Not The Same Type As number`);
}

if (num3 != num1 && typeof num3 != typeof num1 && typeof num3 != typeof num2) {
    console.log(`${num3} Value And Type Is Not The Same As ${typeof num1} And Type Is Not The Same As ${typeof num2}`);
}