/*
  Var
  - Redeclare (Yes)
  - Access Before Declare (Undefined)
  - Variable Scope Drama [Added To Window] (Yes)
  - Block or Function Scope

  Let
  - Redeclare (No => Error)
  - Access Before Declare (Error)
  - Variable Scope Drama (No => Not Added To Window)
  - Block or Function Scope

  Const
  - Redeclare (No => Error)
  - Access Before Declare (Error)
  - Variable Scope Drama (No => Not Added To Window)
  - Block or Function Scope
 */

// var a = 1;
// var a = 2;
// console.log(a); // 2

// Uncaught SyntaxError: Identifier 'a' has already been declared (at main.js:26:5)let a = 1;
// let a = 2;
// console.log(a);
// const a = 1;
// const a = 2;
// console.log(a);

// Undefined
// console.log(a);
// var a = 1;
// Uncaught ReferenceError: Cannot access 'a' before initialization at main.js:33:13
// console.log(a);
// const a = 1;

// Uncaught SyntaxError: Identifier 'aabb' has already been declared (at main.js:41:5)
// var aabb = 1;
// let aabb = 1;
// const aabb = 1;