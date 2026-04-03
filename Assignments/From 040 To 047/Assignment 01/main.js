/*
Assignment 1
Using numbers is strictly prohibited. You can use variable values ​​along with what you've learned to complete the task.
The solution and the task must be performed in two different ways.
You can write what you want outside the console to complete the task.
*/

let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];

let num = 3;

// Method 1
console.log(myFriends.slice(myFriends.indexOf("Ahmed"), num)); // ["Ahmed", "Elham", "Osama"];

// Method 2
console.log(myFriends.slice(myFriends.indexOf("Ahmed"), myFriends.indexOf("Gamal"))); // ["Ahmed", "Elham", "Osama"];