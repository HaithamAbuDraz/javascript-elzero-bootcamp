/*
Assignment 04
You have the following String
We then used a method named addLove.
The result appeared as shown in the Output below.
What do you need to write to make this method work and produce the desired result?
*/

// Write Your Code Here
String.prototype.addLove = function () {
  return `I Love ${this} Web School`;
}

// Do Not Edit Below
let myStr = "Elzero";
console.log(myStr.addLove()); // I Love Elzero Web School