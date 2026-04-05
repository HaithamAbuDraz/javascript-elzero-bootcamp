/*
Assignment 04
Challenge
Create a function that prints a message to the user containing their name, age, and whether they are available for work. The function accepts three parameters: name, age, and status. Their names are a, b, and c. The data types will be String for name, Number for age, and Boolean for status. The data will be used randomly within the function and will not be in any particular order. The data is unordered and has no name to represent it. You must print the message based on the data type to make it logical.

The employment status can be True or False, and the message will change accordingly.
*/

// // Option 1:
// function checkStatus (a, b, c) {
//   let name, age, status;
//   (typeof a === "string") ? name = a : (typeof b === "string") ? name = b : name = c;
//   (typeof a === "number") ? age = a : (typeof b === "number") ? age = b : age = c;
//   (typeof a === "boolean") ? status = a : (typeof b === "boolean") ? status = b : status = c;
//   return `Hello ${name}, Your Age Is ${age}, You Are ${status ? "" : "Not"} Available For Hire`
// }

// // Needed Output
// console.log(checkStatus("Osama", 38, true)); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
// console.log(checkStatus(38, "Osama", true)); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
// console.log(checkStatus(true, 38, "Osama")); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
// console.log(checkStatus(false, "Osama", 38)); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"

// Option 2:
function checkStatus(a, b, c) {
  let name = typeof a === "string" ? a : typeof b === "string" ? b : typeof c === "string" ? c : "Unknown";
  let age = typeof a === "number" ? a : typeof b === "number" ? b : typeof c === "number" ? c : 0;
  let status = typeof a === "boolean" ? a : typeof b === "boolean" ? b : typeof c === "boolean" ? c : false;

  return `Hello ${name}, Your Age Is ${age}, You Are ${status ? "" : "Not"} Available For Hire`
}

// Needed Output
console.log(checkStatus("Osama", 38, true)); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
console.log(checkStatus(38, "Osama", true)); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
console.log(checkStatus(true, 38, "Osama")); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
console.log(checkStatus(false, "Osama", 38)); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"