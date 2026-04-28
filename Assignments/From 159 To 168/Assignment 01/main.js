/*
Assignment 01
Print the seconds, minutes, hours, days, months, and years from your birthdate using the time format.
See the result below to understand the basic concept.
The task is to print the values ​​from your birthdate, not the result shown below.
*/

let dateNow = new Date();
let myBirthday = new Date("Jun 8 2004");

let diff = dateNow - myBirthday; // in Mill Seconde

let seconds = diff / 1000;
console.log(`${Math.floor(seconds)} Seconds`); // 690717021 Seconds

let minutes = seconds / 60;
console.log(`${Math.floor(minutes)} Minutes`); // 11511950 Minutes

let hours = minutes / 60;
console.log(`${Math.floor(hours)} Hours`); // 191865 Hours

let days = hours / 24;
console.log(`${Math.floor(days)} Days`); // 7994 Days

let months = days / 30;
console.log(`${Math.floor(months)} Months`); // 266 Months

let years = months / 12;
console.log(`${Math.floor(years)} Years`); // 22 Years
