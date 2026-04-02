/*
  Arrays Methods [Slicing]
  - slice(Start [Opt], End [Opt] Not Including End)
  --- slice() => All Array
  --- If Start Is Undefined => 0
  --- Negative Count From End
  --- If End Is Undefined || > Indexes => Slice To The End Array.length
  --- Return New Array
  - splice(Start [Mand], DeleteCount [Opt] [0 No Remove], The Items To Add [Opt])
  --- If Negative => Start From The End
*/

let myFriends = ["Ahmed", "Sayed", "Ali", "Osama", "Gamal", "Ammer"];
console.log(myFriends); // (6) ['Ahmed', 'Sayed', 'Ali', 'Osama', 'Gamal', 'Ammer']

/*
slice():
  Returns a copy of a section of an array. For both start and end, a negative index can be used to indicate an offset from the end of the array. For example, -2 refers to the second to last element of the array.
  @param start
  The beginning index of the specified portion of the array. If start is undefined, then the slice begins at index 0.
  @param end
  The end index of the specified portion of the array. This is exclusive of the element at the index 'end'. If end is undefined, then the slice extends to the end of the array.
*/

console.log(myFriends.slice()); // (6) ['Ahmed', 'Sayed', 'Ali', 'Osama', 'Gamal', 'Ammer']
console.log(myFriends.slice(1)); // (5) ['Sayed', 'Ali', 'Osama', 'Gamal', 'Ammer']
console.log(myFriends.slice(1, 3)); // (2) ['Sayed', 'Ali']
console.log(myFriends.slice(-3)); // (3) ['Osama', 'Gamal', 'Ammer']
console.log(myFriends.slice(1, -2)); // (3) ['Sayed', 'Ali', 'Osama']
console.log(myFriends.slice(-4, -2)); // (2) ['Ali', 'Osama']
console.log(myFriends); // (6) ['Ahmed', 'Sayed', 'Ali', 'Osama', 'Gamal', 'Ammer']

/*
splice():
  Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
  @param start — The zero-based location in the array from which to start removing elements.
  @param deleteCount
  The number of elements to remove. Omitting this argument will remove all elements from the start paramater location to end of the array. If value of this argument is either a negative number, zero, undefined, or a type that cannot be converted to an integer, the function will evaluate the argument as zero and not remove any elements.
  @returns — An array containing the elements that were deleted.
*/

console.log(myFriends.splice(0, 0, "Sameer", "Samara"));
console.log(myFriends); // (8) ['Sameer', 'Samara', 'Ahmed', 'Sayed', 'Ali', 'Osama', 'Gamal', 'Ammer']

console.log(myFriends.splice(0, 2, "Sameer", "Samara"));
console.log(myFriends); // (6) ['Sameer', 'Samara', 'Ali', 'Osama', 'Gamal', 'Ammer']

console.log(myFriends.splice(1, 2, "Sameer", "Samara"));
console.log(myFriends); // (6) ['Ahmed', 'Sameer', 'Samara', 'Osama', 'Gamal', 'Ammer']
