/*
  Class
  - Inheritance
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

class Admin extends User {
  constructor(id, username, permissions) {
    super(id, username);
    this.p = permissions;
  }
}

class Superman extends Admin {
  constructor(id, username, permissions, ability) {
    super(id, username, permissions);
    this.a = ability;
  }
}

let userOne = new User(100, "Haitham");
let adminOne = new Admin(110, "Elzero", 1);

console.log(userOne.u); // Haitham
console.log(userOne.sayHello()); // Hello Haitham
console.log("#".repeat(4)); // ####
console.log(adminOne.i); // 110
console.log(adminOne.u); // Elzero
console.log(adminOne.p); // 1
console.log(adminOne.sayHello()); // Hello Elzero
