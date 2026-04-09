/*
  Function this Keyword
  - this Introduction
  - this Inside Object Method
  --- When a function is called as a method of an object,
  --- its this is set to the object the method is called on.
  - Global Object
  - Test Variables With Window And This
  - Global Context
  - Function Context

  Search
  - Strict Mode
*/

console.log(this); // Window {window: Window, self: Window, document: document, name: '', location: Location, …}
console.log(this === window); // true

myVar = 100;

console.log(window.myVar); // 100
console.log(this.myVar); // 100

function sayHello() {
  console.log(this);
  return this;
}
sayHello(); // Window {window: Window, self: Window, document: document, name: '', location: Location, …}

console.log(sayHello() === window); // true

document.getElementById("cl").onclick = function () {
  console.log(this); // <button id="cl">Click</button>
};

let user = {
  age: 21,
  ageInDays: function () {
    console.log(this); // {age: 21, ageInDays: ƒ}
    return this.age * 360;
  },
};

console.log(user.age); // 21
console.log(user.ageInDays()); // 7560
