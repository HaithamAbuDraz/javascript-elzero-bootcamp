/*
  Function
  - Return
  - Automatic Semicolon Insertion (ASI) [No Line Terminator Allowed]
  - Interruptting
*/

function calc(num1, num2) {
  return num1 + num2;
}

let result = calc(10, 20);

console.log(result + 100); // 130

function generate(start, end) {
  for (let i = start; i <= end; i++) {
    if (i === 15) {
      return `Interruptting`;
    }
    console.log(i);
  }
}

generate(10, 20); // 10 11 12 13 14
