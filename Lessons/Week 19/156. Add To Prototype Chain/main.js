/*
  Prototype
  - Add To Prototype Chain
  - Extend Built In Constructors Features
*/

class User {
  constructor(id, username) {
    this.i = id;
    this.u = username;
  }
  sayHello() {
    return `Hello ${this.u}`;
  }
}

let userOne = new User(100, "Haitham");
console.log(userOne.u); // Haitham
console.log(User.prototype);
// {sayHello: ƒ}
// constructor
// : 
// class User
// sayHello
// : 
// ƒ sayHello()
// [[Prototype]]
// : 
// Object
console.log(userOne); // User {i: 100, u: 'Haitham'}

User.prototype.sayWelcome = function () {
  return `Welcome ${this.u}`;
}

Object.prototype.love = "Elzero Web School";

String.prototype.addDotBeforeAndAfter = function (val) {
  return `.${this}.`;
}

let myString = "Elzero";
console.log(myString.addDotBeforeAndAfter()); // .Elzero.

