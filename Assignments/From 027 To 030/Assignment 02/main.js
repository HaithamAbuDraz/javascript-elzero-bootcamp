/*
Assignment 2
You have some variables consisting of a word and a string of letters.
On the first line, ensure that the letter Z is present in the word and that the result is true.
On the second line, ensure that the word begins with the letter E and that the result is true.
On the third line, ensure that the word ends with the letter O and that the result is true. Note the capitalization and lowercase letters. Modifying the variables is not allowed.
*/

let word = "Elzero";

let letterZ = "z";

let letterE = "e";

let letterO = "O";

console.log(word.includes(letterZ)); // True
console.log(word.toLowerCase().startsWith(letterE)); // True
console.log(word.endsWith(letterO.toLowerCase())); // True