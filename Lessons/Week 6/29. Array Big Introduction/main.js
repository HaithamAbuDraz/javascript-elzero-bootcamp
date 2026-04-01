/*
  Arrays
  - Create Array [Two Methods] new Array() + []
  - Access Array Elements
  - Nested Arrays
  - Change Array Elements
  - Check For Array Array.isArray(arr);
*/

let myFriends = ["Ahmed", "Mohammed", "Sayed", ["Marwan", "ALi"]];
console.log(`Hello ${myFriends[0]}`); // Hello Ahmed
console.log(`Hello ${myFriends[2]}`); // Hello Sayed
console.log(`${myFriends[1][2]}`); // h

console.log(`Hello ${myFriends[3]}`); // Hello Marwan,ALi
console.log(`Hello ${myFriends[3][1]}`); // Hello ALi
console.log(`${myFriends[3][1][2]}`); // i

console.log(myFriends);
myFriends[1] = "Gamal";
console.log(myFriends);

myFriends[3] = ["Sameh", "Ammer"];
console.log(myFriends);

console.log(typeof myFriends); // object => Array
console.log(Array.isArray(myFriends)); // true
