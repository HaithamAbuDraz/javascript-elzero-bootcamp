/*
Assignment 02
You have three variables. The task is to check the following conditions and display the output in the same format as in the example:

Line 1: If the value of the first variable is the same as the value of the second variable.
Line 2: If the value of the first variable is the same as the value of the second variable, but the type is different.
Line 3: If the value of the first variable is not the same as the value of the third variable, and they are not of the same type.
Line 4: If the value of the second variable is not equal to the value of the third variable, but they are of the same type.
You must check the data type and value yourself because the data type and value can change.
*/

let num1 = 9;

let str = "9";

let str2 = "20";

// Output



"{str} Is The Same Type As {str2} But Not The Same Value"

if (num1 == str) {
    console.log(`${num1} Is The Same Value As ${str}`);
}

if (num1 == str && typeof (num1) != typeof (str)) {
    console.log(`${num1} Is The Same Value As ${str} But Not The Same Type`);
}

if (num1 != str2 && typeof num1 !== typeof str2) {
    console.log(`${num1} Is Not The Same Value Or The Same Type As ${str2}`);
}

if (str != str2 && typeof str === typeof str2) {
    console.log(`${str} Is The Same Type As ${str2} But Not The Same Value`);
}

