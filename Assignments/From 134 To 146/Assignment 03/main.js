/*
Assignment 03
You have a variable containing a phone number in a specific format.
The task is to create a RegExp pattern to match this phone number.
*/

let phone = "+(995)-123 (4567)";
let phoneRe = /\+\(\d{3}\)-\d{3}\s\(\d{4}\)/g;

console.log(phone.match(phoneRe)); // ['+(995)-123 (4567)']
