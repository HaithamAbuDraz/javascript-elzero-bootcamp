/*
  - Set Data Type
  Syntax: new Set(Iterable)
  -- Object To Store Unique Values
  -- Cannot Access Elements By Index

  Properties:
  - size

  Methods:
  - add
  - delete
  - clear
  - has
*/

let myData = [1, 1, 1, 2, 3, "A"];
// let myUniqueData = new Set([1, 1, 1, 2, 3]);
// let myUniqueData = new Set(myData);
// let myUniqueData = new Set().add(1).add(1).add(1).add(2).add(3);
let myUniqueData = new Set();

myUniqueData.add(1).add(1).add(1);
myUniqueData.add(2).add(3).add("A");

console.log(`${myUniqueData.has("a".toUpperCase())}`); // true

console.log(myData); // [1, 1, 1, 2, 3, "A"]
console.log(myUniqueData); // Set(3) {1, 2, 3, "A"}

console.log(myUniqueData.size); // 4

console.log(myData[0]); // 1
console.log(myUniqueData[0]); // undefined

// console.log(myUniqueData.delete(20)); // false

// console.log(myUniqueData); // {1, 2, 3, "A"}
// console.log(myUniqueData.size); // 4

console.log(myUniqueData.delete(2)); // true

console.log(myUniqueData); // {1, 3, "A"}
console.log(myUniqueData.size); // 3

myUniqueData.clear();
console.log(myUniqueData); // {}
console.log(myUniqueData.size); // 0
