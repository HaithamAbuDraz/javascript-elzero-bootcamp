/*
  Object
  - Create With New Keyworf new Object();
*/

// let user = {
//   age: 20,
// };

let user = new Object({
  age: 20,
});

console.log(user); // {age: 20}

user.age = 21;
user["country"] = "palestine";

user.sayHello = function () {
  return `Hello`;
};

console.log(user); // {age: 21, country: 'palestine', sayHello: ƒ}
console.log(user.age); // age: 21
console.log(user.country); // palestine
console.log(user.sayHello()); // Hello
