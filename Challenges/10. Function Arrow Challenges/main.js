/*
  Function Arrow Challenge 1
*/

// [1] One Statement In Function
// [2] Convert To Arrow Function
// [3] Print The Output [Arguments May Change]

let names1 = function (...args) {
  return `String [${args.join("], [")}] => Done !`;
};
console.log(names1("Osama", "Mohamed", "Ali", "Ibrahim")); // String [Osama], [Mohamed], [Ali], [Ibrahim], => Done !


let names2 = (...args) => `String [${args.join("], [")}] => Done !`;
console.log(names2("Osama", "Mohamed", "Ali", "Ibrahim")); // String [Osama], [Mohamed], [Ali], [Ibrahim], => Done !
