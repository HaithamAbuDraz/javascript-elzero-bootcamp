/*
  - Map Data Type
  Methods
  --- set
  --- get
  --- delete
  --- clear
  --- has

  Properties
  --- size
*/

let myMap = new Map([
  [10, "Number"],
  ["Name", "String"],
  [false, "Boolean"],
]);

// myMap.set(10, "Number");
// myMap.set("Name", "String");

console.log(myMap); // Map(3) {10 => 'Number', 'Name' => 'String', false => 'Boolean'}

console.log(myMap.get(10)); // Number
console.log(myMap.get("Name")); // String
console.log(myMap.get(false)); // Boolean

console.log("#".repeat(4)); // ####

console.log(myMap.has(false)); // true
console.log(myMap.has("name")); // false

console.log("#".repeat(4)); // ####

console.log(myMap.size); // 3

console.log(myMap.delete("Name")); // true

console.log(myMap.size); // 2

myMap.clear();

console.log(myMap.size); // 0