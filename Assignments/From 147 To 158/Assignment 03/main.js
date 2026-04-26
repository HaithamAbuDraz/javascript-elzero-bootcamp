/*
Assignment 03
Challenge
You have the following class named User.
We need to modify it as required below:
First, prevent direct access to the Card Property.
When creating users, you'll notice that each person enters their Card Number differently.
We need all numbers to be Strings with a hyphen (-) after every four numbers, as in the Output.
Do not modify the user creation lines or the Console lines.
*/

// Edit The Class
class User {
  #card; // Private property

  constructor(username, card) {
    this.u = username;
    this.#card = String(card).replace(/-/g, '');
  }

  get showData() {
    return `Hello ${this.u} Your Credit Card Number Is ${this.#card
      .match(/.{4}/g)
      .join('-')}`;
  }
}

// Do Not Edit Anything Below

let userOne = new User("Osama", "1234-5678-1234-5678");
let userTwo = new User("Ahmed", "1234567812345678");
let userThree = new User("Ghareeb", 1234567812345678);

console.log(userOne.showData);
// Hello Osama Your Credit Card Number Is 1234-5678-1234-5678

console.log(userTwo.showData);
// Hello Ahmed Your Credit Card Number Is 1234-5678-1234-5678

console.log(userThree.showData);
// Hello Ghareeb Your Credit Card Number Is 1234-5678-1234-5678

console.log(userOne.c); // Prevent Accessing To Card Property Here
// Undefined
