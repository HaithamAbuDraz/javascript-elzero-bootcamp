/*
  Regular Expression

  - replace
  - replaceAll
*/

let txt = "We Love Programming And @ Because @ Is Amazing";
console.log(txt.replace("@", "JavaScript")); // We Love Programming And JavaScript Because @ Is Amazing
console.log(txt.replaceAll("@", "JavaScript")); // We Love Programming And JavaScript Because JavaScript Is Amazing
let re = /@/ig;
console.log(txt.replaceAll(re, "JavaScript")); // We Love Programming And JavaScript Because JavaScript Is Amazing
console.log(txt.replaceAll(/@/ig, "JavaScript")); // We Love Programming And JavaScript Because JavaScript Is Amazing

