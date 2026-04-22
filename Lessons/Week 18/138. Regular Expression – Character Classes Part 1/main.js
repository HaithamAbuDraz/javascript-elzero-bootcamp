/*
  Regular Expression
  Character Classes
  . => matches any character, except newline or other line terminators.
  \w => matches word characters. [a-z, A-Z, 0-9 And Underscore]
  \W => matches Non word characters
  \d => matches digits from 0 to 9.
  \D => matches non-digit characters.
  \s => matches whitespace character.
  \S => matches non whitespace character.
*/

let email = 'O@@@g...com O@g.com O@g.net A@Y.com O-g.com o@s.org 1@1.com';
let dot = /./g;
let word = /\w/g;
let valid = /\w@\w.(com|net)/g;

// console.log(email.match(dot));
// ['O', '@', '@', '@', 'g', '.', '.', '.', 'c', 'o', 'm', ' ', 'O', '@', 'g', '.', 'c', 'o', 'm', ' ', 'O', '@', 'g', '.', 'n', 'e', 't', ' ', 'A', '@', 'Y', '.', 'c', 'o', 'm', ' ', 'O', '-', 'g', '.', 'c', 'o', 'm', ' ', 'o', '@', 's', '.', 'o', 'r', 'g', ' ', '1', '@', '1', '.', 'c', 'o', 'm']

// console.log(email.match(word));
// ['O', 'g', 'c', 'o', 'm', 'O', 'g', 'c', 'o', 'm', 'O', 'g', 'n', 'e', 't', 'A', 'Y', 'c', 'o', 'm', 'O', 'g', 'c', 'o', 'm', 'o', 's', 'o', 'r', 'g', '1', '1', 'c', 'o', 'm']

console.log(email.match(valid)); // ['O@g.com', 'O@g.net', 'A@Y.com', '1@1.com']
