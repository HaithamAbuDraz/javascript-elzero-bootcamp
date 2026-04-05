/*
  Function - Random Argument Challenge
  ====================================
  Create Function showDetails
  Function Accept 3 parameters [a, b, c]
  Data Types For Info Is
  - String => Name
  - Number => Age
  - Boolean => Status
  Argument Is Random
  Data Is Not Sorted Output Depend On Data Types
  - Use Ternary Conditional Operator
*/

// // Option 1:
// function showDetails (a, b, c) {
//   let name, age, status;
//   (typeof a === "string") ? name = a : (typeof b === "string") ? name = b : name = c;
//   (typeof a === "number") ? age = a : (typeof b === "number") ? age = b : age = c;
//   (typeof a === "boolean") ? status = a : (typeof b === "boolean") ? status = b : status = c;
//   return `Hello ${name}, Your Age Is ${age}, You Are ${status ? "" : "Not"} Available For Hire`
// }

// document.write(`<p>${showDetails("Haitham", 21, true)}</p>`); // "Hello Haitham, Your Age Is 21, You Are Available For Hire"
// document.write(`<p>${showDetails(21, "Haitham", true)}</p>`); // "Hello Haitham, Your Age Is 21, You Are Available For Hire"
// document.write(`<p>${showDetails(true, 21, "Haitham")}</p>`); // "Hello Haitham, Your Age Is 21, You Are Available For Hire"
// document.write(`<p>${showDetails(false, "Haitham", 21)}</p>`); // "Hello Haitham, Your Age Is 21, You Are Not Available For Hire"


// Option 2:
function showDetails(a, b, c) {
  let name = typeof a === "string" ? a : typeof b === "string" ? b : typeof c === "string" ? c : "Unknown";
  let age = typeof a === "number" ? a : typeof b === "number" ? b : typeof c === "number" ? c : 0;
  let status = typeof a === "boolean" ? a : typeof b === "boolean" ? b : typeof c === "boolean" ? c : false;

  return `Hello ${name}, Your Age Is ${age}, You Are ${status ? "" : "Not"} Available For Hire`
}

document.write(`<p>${showDetails("Haitham", 21, true)}</p>`); // "Hello Haitham, Your Age Is 21, You Are Available For Hire"
document.write(`<p>${showDetails(21, "Haitham", true)}</p>`); // "Hello Haitham, Your Age Is 21, You Are Available For Hire"
document.write(`<p>${showDetails(true, 21, "Haitham")}</p>`); // "Hello Haitham, Your Age Is 21, You Are Available For Hire"
document.write(`<p>${showDetails(false, "Haitham", 21)}</p>`); // "Hello Haitham, Your Age Is 21, You Are Not Available For Hire"
