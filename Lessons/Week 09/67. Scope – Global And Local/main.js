/*
  Scope
  - Global And Local Scope
*/

var a = 1;
let b = 2;

function showText() {
  var a = 10; // Function - From Local 10
  let b = 20; // Function - From Local 20
  console.log(`Function - From Local ${a}`); // Function - From Local 1
  console.log(`Function - From Local ${b}`); // Function - From Local 2
  // var a = 10; // Function - From Local undefined
  // let b = 20; // Uncaught ReferenceError: Cannot access 'b' before initialization at showText
};

// console.log(`From Global ${a}`); // From Global 1
// console.log(`From Global ${b}`); // From Global 2

showText();
