/*
Assignment 04
You have the following structure on the page.
The goal is to retrieve the word "Elzero" without any spaces or newlines.
You need to retrieve it from within the element, not type it manually.
*/

let div = document.querySelector("div");

let elzero1 = div.childNodes[4].nodeValue.trim();
console.log(elzero1); // "Elzero"

let elzero2 = div.lastChild.nodeValue.trim();
console.log(elzero2); // "Elzero"
