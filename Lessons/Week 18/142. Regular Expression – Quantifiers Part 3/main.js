/*
  Regular Expression

  Quantifiers
  $  => End With Something
  ^  => Start With Something
  ?= => Followed By Something
  ?! => Not Followed By Something
*/

let myString = "We Love Programming";
let names = "1OsamaZ 2AhmedZ 3Mohammed 4MoustafaZ 5GamalZ";

console.log(/ing/ig.test(myString)); // true
console.log(/^we/ig.test(myString)); // true
console.log(/lz/ig.test(names)); // true
console.log(/^\d/ig.test(names)); // true

console.log(names.match(/\d+\w{5}(?=Z)/ig)); // ['1Osama', '2Ahmed', '5Gamal']
console.log(names.match(/\d+\w{8}(?!z)/ig)); // ['3Mohammed']
