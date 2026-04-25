/*
  Class
  - Static Properties And Methods
*/

class User {
  // Static Property
  static count = 0;

  constructor(id, username, salary) {
    this.i = id;
    this.u = username;
    this.s = salary;
    User.count++;
  }
  // Static Method
  static sayHello() {
    return `Hello From Class`;
  }
  static countMembers() {
    return `${this.count} Members Created`;
  }
}

let userOne = new User(100, "Haitham", 5000);
let userTwo = new User(101, "Elzero", 50000);
let userThree = new User(103, "Ahamed", 50000);

console.log(userOne.u); // Haitham
console.log(userTwo.u); // Elzero
console.log(userOne.count); // undefined
console.log(User.count); // 0
console.log(User.sayHello()); // Hello From Class
console.log(User.countMembers()); // 3 Members Created
