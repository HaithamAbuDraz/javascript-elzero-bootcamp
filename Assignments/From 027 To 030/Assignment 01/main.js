/*
Assignment 1
You have a variable containing a String.
The goal is to retrieve the first character of the String.
The solution must be implemented in 6 different ways.
No solution should be duplicated, and the variable should only be used.
The character must be lowercase.
One of the solutions must be repeated 3 times.
*/

let userName = "Elzero";

console.log(userName.charAt(0).toLowerCase()); // e
console.log(userName[0].toLowerCase()); // e
console.log(userName.substring(0, 1).toLowerCase()); // e
console.log(userName.slice(0, 1).toLowerCase()); // e
console.log(userName.substr(0, 1).toLowerCase()); // e
console.log(userName.charAt(0).repeat(3).toLowerCase()); // eee