/*
  Object
  - Intro and What Is Object
  - Testing Window Object
  - Accessing Object
*/

let user = {
  // Properties
  theName: "Haitham",
  theAge: 21,
  // Methods
  sayHello: function () {
    return `Hello`;
  },
};

console.log(user.theName); // Haitham
console.log(user.theAge); // 21
console.log(user.sayHello()); // Hello
