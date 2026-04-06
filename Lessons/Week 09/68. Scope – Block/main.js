/*
  Scope
  - Block Scope [If, Switch, For]
*/

var x = 10;

if (10 === 10) {
  let x = 50;
  console.log(`From If Block ${x}`); // From If Block 50
}

console.log(`From Global ${x}`); // From Global 10

var a = 1;
var b = 2;

function showText() {
  var a = 10;
  var b = 20;
  console.log(`Function - From Local ${a}`); // From Local 10
  console.log(`Function - From Local ${b}`); // From Local 20
}

console.log(`From Global ${a}`); // From Global 1
console.log(`From Global ${b}`); // From Global 2

showText();