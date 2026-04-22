/*
  Regular Expression

  Ranges

  - Part 1
  (X|Y) => X Or Y
  [0-9] => 0 To 9
  [^0-9] => Any Character Not 0 To 9
  Practice

  - Part 2
  [a-z]
  [^a-z]
  [A-Z]
  [^A-Z]
  [abc]
  [^abc]

*/

let myString = "AaBbcdefG123!234%^&*";

let atozSmall = /[a-z]/g;
let notAToZSmall = /[^a-z]/g;
let atozCapital = /[A-Z]/g;
let NotAtozCapital = /[^A-Z]/g;
let aAndcAnde = /[ace]/g;
let NotaAndcAnde = /[^ace]/g;
let lettersCapsAndSmall = /[a-zA-Z]/g;
let numsAndSpecials = /[^a-zA-Z]/g;
let specials = /[^a-zA-Z0-9]/g;

console.log(myString.match(atozSmall)); // ['a', 'b', 'c', 'd', 'e', 'f']
console.log(myString.match(notAToZSmall)); // ['A', 'B', 'G', '1', '2', '3', '!', '2', '3', '4', '%', '^', '&', '*']
console.log(myString.match(atozCapital)); // ['A', 'B', 'G']
console.log(myString.match(NotAtozCapital)); // ['a', 'b', 'c', 'd', 'e', 'f', '1', '2', '3', '!', '2', '3', '4', '%', '^', '&', '*']
console.log(myString.match(aAndcAnde)); // ['a', 'c', 'e']
console.log(myString.match(NotaAndcAnde)); // ['A', 'B', 'b', 'd', 'f', 'G', '1', '2', '3', '!', '2', '3', '4', '%', '^', '&', '*']
console.log(myString.match(lettersCapsAndSmall)); // ['A', 'a', 'B', 'b', 'c', 'd', 'e', 'f', 'G']
console.log(myString.match(numsAndSpecials)); // ['1', '2', '3', '!', '2', '3', '4', '%', '^', '&', '*']
console.log(myString.match(specials)); // ['!', '%', '^', '&', '*']
