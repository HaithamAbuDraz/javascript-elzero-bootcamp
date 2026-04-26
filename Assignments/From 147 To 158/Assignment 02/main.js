/*
Assignment 02
We have the following class named Phone.
We need to create another class named Tablet that inherits the properties of the Phone class.
The Tablet class has an additional property, which is size.
It also has a method named fullDetails.
We used the Tablet class to create more than one Tablet.
We then used the fullDetails method, which prints data about the Tablet. Now all you have to do is create the Tablet class so that the data appears as shown below.
If the user did not specify the size, the word "Unknown" should appear.
*/

class Phone {
  constructor(name, serial, price) {
    this.name = name;
    this.serial = serial;
    this.price = price;
  }
}

class Tablet extends Phone {
  constructor(name, serial, price, size) {
    super(name, serial, price);
    this.size = size || "Unknown";
  }
  fullDetails() {
    return `${this.name} Serial is ${this.serial} And Size Is ${this.size}`;
  }
}

let TabletOne = new Tablet("iPad", 100200300, 1500, 12.9);
let TabletTwo = new Tablet("Nokia", 350450650, 800, 10.5);
let TabletThree = new Tablet("LG", 250450650, 650);

console.log(`${TabletOne.fullDetails()}`);
// iPad Serial is 100200300 And Size Is 12.9

console.log(`${TabletTwo.fullDetails()}`);
// Nokia Serial is 350450650 And Size Is 10.5

console.log(`${TabletThree.fullDetails()}`);
// LG Serial is 250450650 And Size Is Unknown
