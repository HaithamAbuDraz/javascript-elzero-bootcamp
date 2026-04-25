/*
  Constructor Function
  - Deal With Properties And Methods
*/

class User {
  constructor(id, username, salary) {
    // Properties
    this.i = id;
    this.u = username || "Unknown";
    this.s = salary < 6000 ? salary + 500 : salary;
    this.msg = function () {
      return `Hello ${this.u} Your Salary Is ${this.s}`;
    };
  }
  // Methods
  writeMsg() {
    return `Hello ${this.u} Your Salary Is ${this.s}`;
  }
}

let userOne = new User(100, "Haitham", 5000);
let userTwo = new User(101, "", 6000);

console.log(userOne.u); // Haitham
console.log(userOne.s); // 5500
console.log(userOne.msg()); // Hello Haitham Your Salary Is 5500
console.log(userOne.writeMsg()); // Hello Haitham Your Salary Is 5500

console.log(userTwo.u); // Unknown
console.log(userTwo.s); // 6000
console.log(userTwo.msg); // Native Code => ƒ writeMsg() { return `Hello ${this.u} Your Salary Is ${this.s}`; }
console.log(userTwo.writeMsg); // Native Code => ƒ () { return `Hello ${this.u} Your Salary Is ${this.s}`; }
