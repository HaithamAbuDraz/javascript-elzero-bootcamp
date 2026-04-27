/*
  Generators
  - Delegate Generator
*/

function* generateNums() {
  yield 1;
  yield 2;
  yield 3;
}

function* generateLetters() {
  yield "A";
  yield "B";
  yield "C";
}

function* generateAll() {
  yield* generateNums();
  yield* generateLetters();
  yield* [4, 5, 6];
}

let generator = generateAll();

// console.log(generator.next()); // {value: 1, done: false}
// console.log(generator.next()); // {value: 2, done: false}
// console.log(generator.next()); // {value: 3, done: false}
// console.log(generator.next()); // {value: 'A', done: false}
// console.log(generator.next()); // {value: 'B', done: false}
// console.log(generator.next()); // {value: 'C', done: false}
// console.log(generator.next()); // {value: 4, done: false}
// console.log(generator.next()); // {value: 5, done: false}
// console.log(generator.next()); // {value: 6, done: false}
// console.log(generator.next()); // {value: undefined, done: true}

// console.log(generator.next()); // {value: 1, done: false}
console.log(generator.next()); // {value: 2, done: false}
console.log(generator.next()); // {value: 3, done: false}
console.log(generator.next()); // {value: 'A', done: false}
console.log(generator.next()); // {value: 'B', done: false}
console.log(generator.next()); // {value: 'C', done: false}
console.log(generator.return("Z")); // {value: 'Z', done: true}
console.log(generator.next()); // {value: undefined, done: true}
console.log(generator.next()); // {value: undefined, done: true}
console.log(generator.next()); // {value: undefined, done: true}
