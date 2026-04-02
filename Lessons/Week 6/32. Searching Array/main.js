/*
  Array Methods [Search]
  - indexOf(Search Element, From Index [Opt])
  - lastIindexOf(Search Element, From Index [Opt])
  - includes(valueToFind, fromIndex [Opt]) [ES7]
*/

let myFriends = ["Ahmed", "Mohammed", "Sayed", "Alaa", "Ahmed"];
console.log(myFriends); // ["Ahmed", "Mohammed", "Sayed", "Alaa", "Ahmed"]

/*
indexOf():
  Returns the index of the first occurrence of a value in an array, or -1 if it is not present.
  @param searchElement — The value to locate in the array.
  @param fromIndex — The array index at which to begin the search. If fromIndex is omitted, the search starts at index 0.
*/

console.log(myFriends.indexOf("Ahmed")); // 0
console.log(myFriends.indexOf("Ahmed", 2)); // 4

/*
lastIndexOf():
  Returns the index of the last occurrence of a specified value in an array, or -1 if it is not present.
  @param searchElement — The value to locate in the array.
  @param fromIndex — The array index at which to begin searching backward. If fromIndex is omitted, the search starts at the last index in the array.
*/

console.log(myFriends.lastIndexOf("Ahmed")); // 4
console.log(myFriends.lastIndexOf("Ahmed", -2)); // 0

/*
includes():
  Determines whether an array includes a certain element, returning true or false as appropriate.
  @param searchElement — The element to search for.
  @param fromIndex — The position in this array at which to begin searching for searchElement.
*/

console.log(myFriends.includes("Ahmed")); // true
console.log(myFriends.includes("Ahmed", 2)); // true

if (myFriends.indexOf("Osama") === -1) {
    console.log("Not Found"); // Not Found
}

if (myFriends.lastIndexOf("Osama") === -1) {
    console.log("Not Found"); // Not Found
}

console.log(myFriends.indexOf("Osama")); // -1
