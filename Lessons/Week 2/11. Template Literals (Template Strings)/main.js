/*
  Template Literals (Template Strings)
*/

let a = "We Love";
let b = "JavaScript";
let c = "And";
let d = "Programming";

console.log(a + " \"\" " + b +
    "\n" + c + " " + d);
// We Love "" JavaScript
// And Programming
console.log(`${a} "" '' \\ ${b}
${c} ${d}`);
// We Love "" '' \ JavaScript
// And Programming

let title = "Haitham Abu Draz";
let desc = "I am a Software Engineer";

let markUp = `
<div class="card">
  <div class="child">
    <h2>${title}</h2>
    <p>${desc}</p>
  </div>
</div>
`;

document.write(markUp);
// Haitham Abu Draz
// I am a Software Engineer