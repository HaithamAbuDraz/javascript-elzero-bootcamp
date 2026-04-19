/*
  Destructuring
  - Destructuring Mixed Content
*/

const user = {
  theName: "Haitham",
  theAge: 21,
  skills: ["HTML", "CSS", "JavaScript"],
  addresses: {
    palestine: "Gaza",
    ksa: "Riyadh",
  },
};

const {
  theName: n,
  theAge: a,
  skills: [one, , three],
  addresses: { palestine: pal }
} = user;

console.log(`Your Name Is: ${n}`); // Your Name Is: Haitham
console.log(`Your Age Is: ${a}`); // Your Age Is: 21
console.log(`Your Skills Is: ${one}, ${three}`); // Your Skills Is: HTML, CSS, JavaScript
console.log(`Your Last Skill Is: ${three}`); // Your Skills Is: HTML, CSS, JavaScript
console.log(`Your Live In: ${pal}`); // Your Address Is: Gaza