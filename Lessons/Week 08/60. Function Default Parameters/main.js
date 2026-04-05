/*
  Function
  - Default Function Parameters
  - Function Parameters Default [Undefined]
  - Old Strategies [Condition + Logical Or]
  - ES6
*/

function sayHello(userName = "Unknown", age = "Unknown") {
  // if (age === undefined) {
  //   age = "Unknown";
  // }
  // age = age || "Unknown";
  return `Hi ${userName} Your Age is ${age}`;

}

console.log(sayHello()); // Hi Unknown Your Age is Unknown
