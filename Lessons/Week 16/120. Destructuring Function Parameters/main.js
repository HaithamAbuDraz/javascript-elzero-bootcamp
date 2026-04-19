/*
  Destructuring
  - Destructuring Function Parameters
*/

const user = {
  theName: "Haitham",
  theAge: 21,
  skills: {
    html: 70,
    css: 80,
  },
};

showDetails(user);

// function showDetails(obj) {
//   console.log(`Your Name Is ${obj.theName}`); // Your Name Is Haitham
//   console.log(`Your Age Is ${obj.theAge}`); // Your Age Is 21
//   console.log(`Your CSS Skill Progress Is ${obj.skills.css}`); // Your CSS Skill Progress Is 80
// }

function showDetails({ theName: n, theAge: a, skills: { css: c } } = user) {
  console.log(`Your Name Is ${n}`); // Your Name Is Haitham
  console.log(`Your Age Is ${a}`); // Your Age Is 21
  console.log(`Your CSS Skill Progress Is ${c}`); // Your CSS Skill Progress Is 80
}