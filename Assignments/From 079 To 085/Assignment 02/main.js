/*
Assignment 02
Create a new object in four different ways
*/

// Method One
let objMethodOne = {
  property: "Method One"
};

console.log(objMethodOne.property); // "Method One"

// Method Two
let objMethodTwo = new Object();
objMethodTwo.property = "Method Two";

console.log(objMethodTwo.property); // "Method Two"

// Method Three
let objMethodThree = Object.create({
  property: "Method Three"
});

console.log(objMethodThree.property); // "Method Three"

// Method Four
let objMethodFour = Object.assign(
  {},
  { property: "Method Four" }
);

console.log(objMethodFour.property); // "Method Four"