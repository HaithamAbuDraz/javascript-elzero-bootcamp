/*
  - Reduce
  --- method executes a reducer function on each element of the array,
  --- resulting in a single output value.

  Syntax
  reduce(callBackFunc(Accumulator, Current Val, Current Index, Source Array) { }, initialValue)
  - Accumulator => the Accumulated value previously returned in the last invocaiton
  - Current Val => the current element being processed in the array
  - Index => The index of the current element being processed in the array.
  ---------- Starts from index 0 if an initialValue is provided.
  ---------- Otherwise, it starts from index 1.
  - Array => The Current Array
*/

let nums = [10, 20, 15, 30];

let add = nums.reduce(function (accumulator, current, index, array) {
  console.log(`Accumulator => ${accumulator}`);
  console.log(`Current Element => ${current}`);
  console.log(`Current Element Index => ${index}`);
  console.log(`Array => ${array}`);
  console.log(accumulator + current);
  console.log("###########");
  return accumulator + current;
}, 5);
// Accumulator => 5
// Current Element => 10
// Current Element Index => 0
// Array => 10,20,15,30
// 15
// ###########
// Accumulator => 15
// Current Element => 20
// Current Element Index => 1
// Array => 10,20,15,30
// 35
// ###########
// Accumulator => 35
// Current Element => 15
// Current Element Index => 2
// Array => 10,20,15,30
// 50
// ###########
// Accumulator => 50
// Current Element => 30
// Current Element Index => 3
// Array => 10,20,15,30
// 80
// ###########
// 80

console.log(add); // 80


