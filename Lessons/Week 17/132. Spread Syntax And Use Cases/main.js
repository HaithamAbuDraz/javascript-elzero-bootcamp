/*
  Spread Operator => ...Iterable
  "Allow Iterable To Expand In Place"
*/

// Spread With String => Expand String

console.log("Haitham"); // Haitham
console.log(..."Haitham"); // H a i t h a m
console.log([..."Haitham"]); // ['H', 'a', 'i', 't', 'h', 'a', 'm']

// Concatenate Arrays

let myArray1 = [1, 2, 3];
let myArray2 = [4, 5, 6];

let allArrays = [...myArray1, ...myArray2];

console.log(allArrays); // [1, 2, 3, 4, 5, 6]

// Copy Array

let copiedArray = [...myArray1];

console.log(copiedArray); // [1, 2, 3]

// Push Inside Array

let allFriends = ["Osama", "Ahmed", "Sayed"];
let thisYearFrinds = ["Sameh", "Mahmoud"];

allFriends.push(...thisYearFrinds);

console.log(allFriends); // ['Osama', 'Ahmed', 'Sayed', 'Sameh', 'Mahmoud']

// Use With Math Object

let myNums = [10, 20, -100, 100, 1000, 500];
console.log(Math.max(...myNums)); // 1000

// Spread With Objects => Merge Objects

let objOne = {
  a: 1,
  b: 2,
};

let objTwo = {
  c: 3,
  d: 4,
};

console.log({ ...objOne, ...objTwo, e: 5 }); // {a: 1, b: 2, c: 3, d: 4, e: 5}