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
