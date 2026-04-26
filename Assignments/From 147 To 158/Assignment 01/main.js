/*
Assignment 01
You have the following Constructor Function and need to convert it to a Class Syntax.
Don't rely on the program; create it yourself to ensure you understand the syntax.
Add two methods: one named `run` and one named `stop`.
Each method should contain a message: the first should say "Car Is Running Now" and the second "Car Is Stopped".
Create three cars using this class with any data you choose.
Print the data for the first car in the console as shown below.
On the next line, print the method named `run`.
*/

class Car {
  constructor(name, model, price) {
    this.n = name;
    this.m = model;
    this.p = price;
  }

  run() {
    return "Car Is Running Now";
  }

  stop() {
    return "Car Is Stopped";
  }

}

let caeOne = new Car("MG", 2022, 420000);
let car2 = new Car("Toyota", 2023, 350000);
let car3 = new Car("Honda", 2021, 280000);

console.log(`Car One Name Is ${caeOne.n} And Model Is ${caeOne.m} And Price Is ${caeOne.p}`);
// "Car One Name Is MG And Model Is 2022 And Price Is 420000"

console.log(caeOne.run());
// "Car Is Running Now"
