/*
Assignment 04
Print your birth date and time in 3 different ways.
All methods of writing the date inside a string are considered the same: String Date.
Ensure that all 3 methods print the same date and time values, as shown below.
*/

let myBirthDate1 = new Date("Jun 8 2004");
console.log(myBirthDate1.toString()); // Tue Jun 08 2004 00:00:00 GMT+0300 (Eastern European Summer Time)

let myBirthDate2 = new Date(2004, 5, 8);
console.log(myBirthDate2.toString()); // Tue Jun 08 2004 00:00:00 GMT+0300 (Eastern European Summer Time)

let myBirthDate3 = new Date(Date.parse("Jun / 8 / 2004"));
console.log(myBirthDate3.toString()); // Tue Jun 08 2004 00:00:00 GMT+0300 (Eastern European Summer Time)
