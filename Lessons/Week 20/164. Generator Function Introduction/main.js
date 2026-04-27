/*
  Generators
  - Generator Function Run Its Code When Required.
  - Generator Function Return Special Object [Generator Object]
  - Generators Are Iterable
*/

function* generateNumbers() {
  yield 1;
  console.log("Hello After Yield 1");
  yield 2;
  yield 3;
  yield 4;
}

let generator = generateNumbers();

console.log(typeof generator); // object
console.log(generator); // generateNumbers {<suspended>}

// console.log(generator.next()); // {value: 1, done: false}
// console.log(generator.next().value); // 2
// console.log(generator.next().done); // false
// console.log(generator.next().done); // false
// console.log(generator.next()); // {value: undefined, done: true}

// for (let value of generateNumbers()) {
//   console.log(value);
//   // 1
//   // Hello After Yield 1
//   // 2
//   // 3
//   // 4
// }

for (let value of generator) {
  console.log(value);
  // 1
  // Hello After Yield 1
  // 2
  // 3
  // 4
}
