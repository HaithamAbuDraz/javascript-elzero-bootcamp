/*
  - Filter
  --- method creates a new array
  --- with all elements that pass the test implemented by the provided function.

  Syntax filter(callBackFunction(Element, Index, Array) { }, thisArg)
  - Element => The current element being processed in the array.
  - Index => The ondex of the current element being processed in the array.
  - Array => The current Array.
*/

// Get Friends With Name Starts With A
let friends = ["Ahmed", "Sameh", "Sayed", "Asmaa", "Amgad", "Israa"];

let filterdFriend = friends.filter(function (ele) {
  return ele.startsWith("A");
});

console.log(filterdFriend); // ['Ahmed', 'Asmaa', 'Amgad']

// Get Even Numbers Only
let numbers = [11, 20, 2, 5, 17, 10];

let evenNumbers = numbers.filter(function (ele) {
  return ele % 2 === 0; // [20, 2, 10]
});

console.log(evenNumbers); // [20, 2, 10]

// Test Map vs Filter
let addMap = numbers.map(function (ele) {
  return ele + ele;
});

console.log(addMap); // [22, 40, 4, 10, 34, 20]

let addFilter = numbers.filter(function (ele) {
  return ele + ele;
});

console.log(addFilter); // [11, 20, 2, 5, 17, 10]
