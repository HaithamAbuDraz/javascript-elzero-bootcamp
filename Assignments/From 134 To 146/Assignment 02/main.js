/*
Assignment 02
You have a variable containing some names.
The task is to create a RegExp pattern to match names that begin with `os` and end with `o`.
*/

let specialNames = "Os10O OsO Os100O Osa100O Os1000 Os100m";
let specialNamesRe = /Os\d*O/gi;

console.log(specialNames.match(specialNamesRe));
