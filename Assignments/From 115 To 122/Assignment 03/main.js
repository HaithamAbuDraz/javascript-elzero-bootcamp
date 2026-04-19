/*
Assignment 03
Challenge
You have more than one array containing your friends' names.
You can do whatever you want and use what you've learned to prepare the data for the destructuring process.
Perform the destructuring assignment to get the desired result in the console. Only one destructuring assignment should be performed.
*/

let arr1 = ["Ahmed", "Sameh", "Sayed"];
let arr2 = ["Mohamed", "Gamal", "Amir"];
let arr3 = ["Haitham", "Shady", "Mahmoud"];

// Option 1
// let bestFriends = [...arr1, ...arr2, ...arr3];
// ["Ahmed", "Sameh", "Sayed", "Mohamed", "Gamal", "Amir", "Haitham", "Shady", "Mahmoud"]
// let [c, , , , , , , a, b ] = bestFriends;

// Option 2
let bestFriends = [...arr3, ...arr1, ...arr2];
// ["Haitham", "Shady", "Mahmoud", "Ahmed", "Sameh", "Sayed", "Mohamed", "Gamal", "Amir"]

let [, a, b, c] = bestFriends;

console.log(`My Best Friends: ${a}, ${b}, ${c}`);
// My Best Friends: Shady, Mahmoud, Ahmed
