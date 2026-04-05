/*
  String Methods
  - substring(Start [Mand], End [Opt] Not Including End)
  --- Start > End Will Swap
  --- Start < 0 It Start From 0
  --- Use Length To Get Last Character
  - substr(Start [Mand], Characters To Extract)
  --- Start >= Length = ""
  --- Negative Start From End
  - includes(Value [Mand], Start [Opt] Default 0) [ES6]
  - startsWith(Value [Mand], Start [Opt] Default 0) [ES6]
  - endsWith(Value [Mand], Length [Opt] Default Full Length) [ES6]
*/

let theName = "Haitham Abu Draz";

console.log(theName.length); // 16
console.log(theName.substring(8)); // "Abu Draz"

console.log(theName.substring(8, 11)); // "Abu"
console.log(theName.substring(11, 8)); // "Abu"

console.log(theName.substring(-4, 7)); // "Haitham" 0 => 7

console.log(theName.substring(-10, theName.length)); // "Haitham Abu Draz" 0 => 16
console.log(theName.substring(theName.length - 1)); // "z"
console.log(theName.substring(theName.length - 4)); // "Draz"
console.log(theName.substring(theName.length - 4, theName.length - 2)); // "Dr"

console.log(theName.substr(0, 7)); // "Haitham"
console.log(theName.substr(0, 78)); // "Haitham Abu Draz"
console.log(theName.substr(-3)); // "raz"
console.log(theName.substr(-4, 3)); // "Dra"

console.log(theName.includes("Abu")); // true
console.log(theName.includes("abu")); // false

console.log(theName.includes("Abu", 12)); //

console.log(theName.startsWith("H")); // true
console.log(theName.startsWith("h")); // false

console.log(theName.startsWith("i", 2)); // true
console.log(theName.startsWith("itham", 2)); // true

console.log(theName.endsWith("z")); // true
console.log(theName.endsWith("Draz")); // true
console.log(theName.endsWith("am", 7)); // true