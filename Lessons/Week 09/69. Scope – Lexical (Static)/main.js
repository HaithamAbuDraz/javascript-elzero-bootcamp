/*
  Scope
  - Lexical Scope

  Search
  - Execution Context
  - Lexical Environment
*/

let a = 10;
function parent() {
  let a = 10;

  function child() {
    console.log(a); // 10
    // let a = 20;
    // console.log(a); // 20
    // console.log(`From Child ${b}`); // ReferenceError: b is not defined at child, at parent

    function grand() {
      let b = 100;
      console.log(`From Grand ${a}`); // From Grand 10
      console.log(`From Grand ${b}`); // From Grand 100
    }
    grand();
  }
  child();
}
parent();