/*
  Constructor Function
  - New Syntax
*/

class User {
  constructor(id, username, salary) {
    this.i = id;
    this.u = username;
    this.s = salary;
  }
}

let userOne = new User(100, "Haitham", 5000);

console.log(userOne.i); // 100
console.log(userOne.u); // Haitham
console.log(userOne.s); // 5000

console.log(userOne instanceof User); // true
console.log(userOne.constructor === User); // true

