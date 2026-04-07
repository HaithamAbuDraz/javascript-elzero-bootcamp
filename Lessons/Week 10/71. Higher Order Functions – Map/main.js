/*
  Higher Order Functions
  ---> is a function that accepts functions as parameters and/or returns a function.

  - Map
  --- method creates a new array
  --- populated with the results of calling a provided function on every element
  --- in the calling array.

  Syntax map(callBackFunction(Element, Index, Array) { }, thisArg)
  - Element => The current element being processed in the array.
  - Index => The index of the current element being processed in the array.
  - Array => The Current Array

  Notes
  - Map Return A New Array

  Examples
  - Anonymous Function
  - Named Function

*/

let myNums = [1, 2, 3, 4, 5, 6];

let newArray = [];

for (let i = 0; i < myNums.length; i++) {
  newArray.push(myNums[i] + myNums[i]);
}

console.log(newArray); // [2, 4, 6, 8, 10, 12]

// Same Idea With Map
let addSelf1 = myNums.map(function (element, index, array) {
  // console.log(`Current Element => ${element}`); // Current Element => 1 to Current Element => 6
  // console.log(`Current Index => ${index}`); // Current Index => 0 to Current Index => 5
  // console.log(`Array => ${array}`); // Array => 1,2,3,4,5,6
  // console.log(`This => ${this}`); // This => 10
  return element + element; // [2, 4, 6, 8, 10, 12]
}, 10);

console.log(addSelf1); // [2, 4, 6, 8, 10, 12]

let addSelf2 = myNums.map((a) => a + a);

console.log(addSelf2); // [2, 4, 6, 8, 10, 12]

function addition(ele) {
  return ele + ele;
}

let add = myNums.map(addition);
console.log(add); // [2, 4, 6, 8, 10, 12]
