/*
  String Methods
  - indexOf(Value [Mandatory], Start [Optional] 0)
  - lastIndexOf(Value [Mandatory], Start [Optional] Length)
  - slice(Start [Mandatory], End [Optional] Not Include End)
  - repeat(Times) [ES6]
  - split(Separator [Optional], Limit [Optional])
*/

let theName = "Haitham Abu Draz";

console.log(theName.indexOf("Abu")); // 8
console.log(theName.indexOf("Abu", 9)); // -1

console.log(theName.lastIndexOf("a")); // 14

console.log(theName.slice(0, 7)); // "Haitham"
console.log(theName.slice(8)); // "Abu Draz"
console.log(theName.slice(-4)); // "Draz"
console.log(theName.slice(-9, -5)); // " Abu"
console.log(theName.slice(-8, -6)); // "Ab"
console.log(theName.slice(-9, -7)); // " A"

console.log(theName.repeat(3)); // "Haitham Abu DrazHaitham Abu DrazHaitham Abu Draz"

console.log(theName.split()); // ['Haitham Abu Draz']
console.log(theName.split("")); // ['H', 'a', 'i', 't', 'h', 'a', 'm', ' ', 'A', 'b', 'u', ' ', 'D', 'r', 'a', 'z']
console.log(theName.split(" ")); // ['Haitham', 'Abu', 'Draz']
console.log(theName.split(" ", 2)); // ['Haitham', 'Abu']

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