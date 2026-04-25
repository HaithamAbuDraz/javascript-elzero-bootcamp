/*
  Prototype
  - Introduction
  - Prototypes are the mechanism by which JavaScript objects
    inherit features from one another.
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

let strOne = "Elzero";

console.log(String.prototype); // String {'', anchor: ƒ, at: ƒ, big: ƒ, blink: ƒ, …}
