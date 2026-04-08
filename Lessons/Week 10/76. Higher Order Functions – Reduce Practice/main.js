/*
  Reduce
  - Longest Word
  - Remove Characters + Use Reduce
*/

let theBiggest = ["Bla", "Propaganda", "other", "AAA", "Battery", "Test", "Propaganda_Two"];

let check = theBiggest.reduce(function (acc, current) {
  console.log(`Accumulator => ${acc}`);
  console.log(`Current Element => ${current}`);
  console.log(acc.length > current.length ? acc : current);
  console.log("###########");
  return acc.length > current.length ? acc : current;
});
// Accumulator => Bla
// Current Element => Propaganda
// Propaganda
// ###########
// Accumulator => Propaganda
// Current Element => other
// Propaganda
// ###########
// Accumulator => Propaganda
// Current Element => AAA
// Propaganda
// ###########
// Accumulator => Propaganda
// Current Element => Battery
// Propaganda
// ###########
// Accumulator => Propaganda
// Current Element => Test
// Propaganda
// ###########
// Accumulator => Propaganda
// Current Element => Propaganda_Two
// Propaganda_Two
// ###########

console.log(check); // Propaganda_Two

let removeChars = ["E", "@", "@", "L", "Z", "@", "@", "E", "R", "@", "O"];

let finalString = removeChars
  .filter(function (ele) {
    return !ele.startsWith("@"); // ["E", "L", "Z", "E", "R", "O"]
  })
  .reduce(function (acc, current) {
    return `${acc}${current}`;
  });

console.log(finalString); // ELZERO
