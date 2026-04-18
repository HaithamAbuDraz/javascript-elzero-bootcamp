/*
  Destructuring
  - Destructuring Object
  --- Naming The Variables
  --- Add New Property
  --- Nested Object
  --- Destructuring The Nested Object Only
*/

let user = {
  theName: "Haitham",
  theAge: 21,
  theTitle: "Developer",
  theCountry: "Palestine",
  theColor: "Black",
  skills: {
    html: 70,
    css: 80,
  },
};

const {
  theName: n,
  theAge: a,
  theCountry,
  theColor: co = "Red",
  skills: { html: h, css },
} = user;

console.log(n); // Haitham
console.log(a); // 21
console.log(theCountry); // Palestine
console.log(co); // Palestine
console.log(`My HTML Skill Progress Is ${h}`); // My HTML Skill Progress Is 70
console.log(`My CSS Skill Progress Is ${css}`); // My HTML Skill Progress Is 80

const { html: skillOne, css: skillTwo } = user.skills;

console.log(`My HTML Skill Progress Is ${skillOne}`); // My HTML Skill Progress Is 70
console.log(`My CSS Skill Progress Is ${skillTwo}`); // My HTML Skill Progress Is 80
