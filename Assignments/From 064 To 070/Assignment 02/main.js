/*
Assignment 02
Convert each of the following functions to Arrow Function Syntax:

*/

let itsMe = () => "Iam A Normal Function";

console.log(itsMe()); // Iam A Normal Function


let urlCreate = (protocol, web, tld) => `${protocol}://www.${web}.${tld}`;

console.log(urlCreate("https", "elzero", "org")); // https://www.elzero.org