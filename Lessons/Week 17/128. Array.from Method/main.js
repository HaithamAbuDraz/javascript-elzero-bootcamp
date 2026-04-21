/*
  Array Methods
  - Array.from(Iterable, MapFunc, This)
  --- Variable
  --- String Numbers
  --- Set
  --- Using The Map Function
  --- Arrow Function
  --- Shorten The Method + Use arguments
*/

// console.log(Array.from("Haitham")); // (7) ['H', 'a', 'i', 't', 'h', 'a', 'm']
// console.log(Array.from(12345)); // () []
// console.log(Array.from("12345")); // (5) ['1', '2', '3', '4', '5']

console.log(
  Array.from("12345", function (n) {
    return +n + +n;
  })
); // (5) [2, 4, 6, 8, 10]

console.log(Array.from("12345", (n) => +n + +n)); // (5) [2, 4, 6, 8, 10]

let myArray = [1, 1, 1, 2, 3, 4];

let mySet = new Set(myArray);

console.log(Array.from(mySet)); // (4) [1, 2, 3, 4]

// console.log([...new Set(myArray)]); // (4) [1, 2, 3, 4] Future

function af() {
  return Array.from(arguments);
}

console.log(af("Haitam", "Mohammed", "Hasan", 1, 2, 3)); // (6) ['Haitam', 'Mohammed', 'Hasan', 1, 2, 3]
