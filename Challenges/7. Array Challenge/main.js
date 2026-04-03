/*
    Array Challenge
*/

let zero = 0;

let counter = 3;

let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];

// Write Code Here

// console.log(my.splice(zero, ++counter).reverse()); // ["Osama", "Elham", "Mazero", "Ahmed"]

// Option 1
// console.log(my.slice(++zero, counter).reverse()); // ["Elham", "Mazero"]

// Option 2
// console.log(my.slice(my.shift(), --counter).reverse()); // ["Elham", "Mazero"]

// Option 1
// console.log(my[my.indexOf("Elham")].slice(zero, my[my.indexOf("Elham")].indexOf("ham"))
//     + my[my.indexOf("Mazero")].slice(my[my.indexOf("Mazero")].indexOf("zero"))); // "Elzero"

// Option 2
// console.log(my[--counter].slice(zero, counter) + my[++zero].slice(counter)); // "Elzero"

// console.log(my[++zero][++counter] + my[zero][(zero + counter)].toLocaleUpperCase()); // "rO"
