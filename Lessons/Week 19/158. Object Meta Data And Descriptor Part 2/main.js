/*
  Object Meta Data And Descriptor
  - Define Multiple Properties
  - Check Descriptors
*/

const myObject = {
  a: 1,
  b: 2,
};

Object.defineProperties(myObject, {
  c: {
    configurable: true,
    value: 3,
  },
  d: {
    configurable: true,
    value: 4,
  },
  e: {
    configurable: true,
    value: 5,
  },
});

console.log(myObject); // {a: 1, b: 2, c: 3, d: 4, e: 5}

console.log(Object.getOwnPropertyDescriptor(myObject, "d")); // {value: 4, writable: false, enumerable: false, configurable: true}
console.log(Object.getOwnPropertyDescriptors(myObject));
// a: {value: 1, writable: true, enumerable: true, configurable: true}
// b: {value: 2, writable: true, enumerable: true, configurable: true}
// c: {value: 3, writable: false, enumerable: false, configurable: true}
// d: {value: 4, writable: false, enumerable: false, configurable: true}
// e: {value: 5, writable: false, enumerable: false, configurable: true}

