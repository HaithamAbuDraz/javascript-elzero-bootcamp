/*
  Array Methods
  - Length
*/

// Index Start From 0 [0, 1, 2, 3 ]

let myFriends = ["Ahmed", "Mohammed", "Sayed", "Alaa"];

console.log(myFriends.length) // 4

myFriends[6] = "Gamal";
console.log(myFriends); // ['Ahmed', 'Mohammed', 'Sayed', 'Alaa', empty × 2, 'Gamal']
console.log(myFriends.length) // 7

myFriends[myFriends.length] = "Gamal";
console.log(myFriends); // (5) ['Ahmed', 'Mohammed', 'Sayed', 'Alaa', 'Gamal']

myFriends[myFriends.length - 1] = "Gamal";
console.log(myFriends); // (4) ['Ahmed', 'Mohammed', 'Sayed', 'Gamal']

myFriends.length = 3;
console.log(myFriends); // (3) ['Ahmed', 'Mohammed', 'Sayed']
