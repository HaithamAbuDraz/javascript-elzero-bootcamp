/*
  Object
  - Dig Deeper
  - Dot Notation vs Bracket Notation
  - Dynamic Property Name
*/

let myVar = "country"

let user = {
  theName: "Haitham",
  country: "Palestine",
  "country of": "Palestine",
  100: "Number"
};

console.log(user.theName); // Haitham
console.log(user["country of"]); // Palestine
console.log(user[100]); // Number
console.log(user.myVar); // undefined
console.log(user[myVar]); // Palestine