// import elzero, { myNumber, arr, saySomething as s } from "./main.js";

// console.log(myNumber); // 10
// console.log(arr); // [1, 2, 3, 4]
// console.log(s()); // Something
// console.log(elzero()); // Hello

import * as all from "./main.js";

console.log(all); // Module {arr: Array(4), myNumber: 10, Symbol(Symbol.toStringTag): 'Module', default: ƒ, saySomething: ƒ}

console.log(all.myNumber); // 10
console.log(all.arr); // [1, 2, 3, 4]
