/*
  - Set vs WeakSet
  "
    The WeakSet is weak,
    meaning references to objects in a WeakSet are held weakly.
    If no other references to an object stored in the WeakSet exist,
    those objects can be garbage collected.
  "
  --
  Set     => Can Store Any Data Values
  WeakSet => Collection Of Objects Only
  --
  Set     => Have Size Property
  WeakSet => Does Not Have Size Property
  --
  Set     => Have Keys, Values, Entries
  WeakSet => Does Not Have clear, Keys, Values And Entries
  --
  Set     => Can Use forEach
  WeakSet => Cannot Use forEach

  Usage: Store objects and removes them once they become inaccessible
*/

// Type Of Data

let mySet = new Set([1, 1, 1, 2, 3, "A", "A"]);

console.log(mySet); // {1, 2, 3, 'A'}

// Size
console.log(`Size Of Elements Inside Set Is: ${mySet.size}`); // Size Of Elements Inside Set Is: 4

// Values + Keys [Alias For Value]
let iterator = mySet.keys();

console.log(iterator.next().value); // 1
console.log(iterator.next().value); // 2
console.log(iterator.next().value); // 3
console.log(iterator.next().value); // "A"
console.log(iterator.next()); // {value: undefined, done: true}

// ForEach

mySet.forEach((el) => console.log(el));
// 1
// 2
// 3
// "A"

console.log("#".repeat(20));

// Type Of Data

let myWs = new WeakSet([{ A: 1, B: 2 }]);

console.log(myWs); // {A: 1, B: 2}

