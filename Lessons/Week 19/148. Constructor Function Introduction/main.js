/*
  Constructor Function
*/

function User(id, username, salary) {
  this.i = id;
  this.u = username;
  this.s = salary + 1000;
}

let userOne = new User(100, "Haitham", 5000);
let userTwo = new User(101, "Mohammed", 6000);
let userThree = new User(102, "Hasan", 7000);

console.log(userOne.i); // 100
console.log(userOne.u); // Haitham
console.log(userOne.s); // 6000

console.log(userTwo.i); // 101
console.log(userTwo.u); // Mohammed
console.log(userTwo.s); // 7000

console.log(userThree.i); // 102
console.log(userThree.u); // Hasan
console.log(userThree.s); // 8000
