/*
  Lobical Or ||
  - Null + Undefined + Any False Value
  Nullish Coalescing Operator ??
  - Null + Undefined
*/

// console.log(Boolean(100));
// console.log(Boolean(-100));
// console.log(Boolean(0));
// console.log(Boolean(""));
// console.log(Boolean(null));

// let price = 0;

// console.log(`The Price Is ${price || 200}`);
// console.log(`The Price Is ${price ?? 200}`);

/*
  Lobical Or ||
  - Null + Undefined + Any False Value
  Nullish Coalescing Operator ??
  - Null + Undefined
*/

// let price = 100; // 100
// price = null; // 200
// price = undefined; // 200
// price = 0; // 200
// price = false; // 200
// price = ""; // 200

// console.log(`The Price Is ${price || 200}`);

// console.log(Boolean(100)); // true
// console.log(Boolean(-100)); // true
// console.log(Boolean(0)); // false
// console.log(Boolean("")); // false
// console.log(Boolean(null)); // false
// console.log(Boolean(undefined)); // false

let price = 0;
console.log(`The Price Is ${price ?? 200}`); // the price is 0
