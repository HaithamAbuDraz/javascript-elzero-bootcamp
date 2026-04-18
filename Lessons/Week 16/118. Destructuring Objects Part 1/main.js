/*
  Destructuring
  - Destructuring Object
*/

let user = {
  theName: "Haitham",
  theAge: 21,
  theTitle: "Developer",
  theCountry: "Palestine",
};

// console.log(user.theName); // Haitham
// console.log(user.theAge); // 21
// console.log(user.theTitle); // Developer
// console.log(user.theCountry); // Palestine

// let theName = user.theName;
// let theAge = user.theAge;
// let theTitle = user.theTitle;
// let theCountry = user.theCountry;

// console.log(theName); // Haitham
// console.log(theAge); // 21
// console.log(theTitle); // Developer
// console.log(theCountry); // Palestine

// ({theName, theAge, theTitle, theCountry} = user);
const { theName, theAge, theCountry } = user;

console.log(theName); // Haitham
console.log(theAge); // 21
console.log(theCountry); // Palestine
