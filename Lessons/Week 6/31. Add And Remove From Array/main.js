/*
  Array Methods [Adding And Removing]
  - unshift("", "") Add Element To The First
  - push("", "") Add Element To The End
  - shift() Remove First Element From Array
  - pop() Remove Last Element From Array
*/

let myFriends = ["Ahmed", "Mohamed", "Sayed", "Alaa"];

console.log(myFriends); // (4) ['Ahmed', 'Mohamed', 'Sayed', 'Alaa']

myFriends.unshift("Osama", "Nabil");

console.log(myFriends); // (6) ['Osama', 'Nabil', 'Ahmed', 'Mohamed', 'Sayed', 'Alaa']

myFriends.push("Samah", "Eman");
console.log(myFriends); // (8) ['Osama', 'Nabil', 'Ahmed', 'Mohamed', 'Sayed', 'Alaa', 'Samah', 'Eman'])

let first = myFriends.shift();

console.log(myFriends);

console.log(`First Name Is ${first}`); // First Name Is Osama

let last = myFriends.pop();

console.log(myFriends); // (6) ['Nabil', 'Ahmed', 'Mohamed', 'Sayed', 'Alaa', 'Samah']

console.log(`Last Name Is ${last}`); // Last Name Is Eman