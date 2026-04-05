/*
  String Methods
  - Access With Index
  - Access With CharAt()
  - length
  - trim()
  - toUpperCase()
  - toLowerCase()
  - Chain Methods
*/

let theName = "  Haitham  ";
console.log(theName[1]); // a

console.log(theName.charAt(1)); // a
console.log(theName.charAt(6)); // m

console.log(theName.length); // 7

console.log(theName.trim()); // "Haitham"

console.log(theName.toLocaleLowerCase().trim()); // "haitham"
console.log(theName.toLocaleUpperCase().trim()); // "HAITHAM"

console.log(theName.trim().charAt(0).toLocaleLowerCase()); // "h"
