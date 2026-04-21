/*
  - Map vs WeakMap
  "
    WeakMap Allows Garbage Collector To Do Its Task But Not Map.
  "
  --
  Map     => Key Can Be Anything
  WeakMap => Key Can Be Object Only
  --
*/

let mapUser = { theName: "Haitham" };

let myMap = new Map();

myMap.set(mapUser, "Object Value");

mapUser = null; // Override The Reference

console.log(myMap);
// Map(1) {{…} => 'Object Value'}
// [[Entries]]
// 0
// : 
// {Object => "Object Value"}
// key
// : 
// {theName: 'Haitham'}
// value
// : 
// "Object Value"
// size
// : 
// 1

console.log("#".repeat(20));

let wMapUser = { theName: "Haitham" };

let myWeakMap = new WeakMap();

myWeakMap.set(wMapUser, "Object Value");

wMapUser = null; // Override The Reference


console.log(myWeakMap);
// WeakMap {{…} => 'Object Value'}
// [[Entries]]
// 0
// :
// {Object => "Object Value"}
// key
// :
// {theName: 'Haitham'}
// value
// :
// "Object Value"
// [[Prototype]]
// :
// WeakMap