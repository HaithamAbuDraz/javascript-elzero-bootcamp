/*
Assignment 01
You have the following IP address. Create a RegExp Pattern to match this IP address.
*/

let ip = "2001:db8:3333:4444:5555:6666:7777:8888";
let ipRe = /\d{4}:\w+\d{1}(:\d{4}){6}/ig;

console.log(ip.match(ipRe)); // ['2001:db8:3333:4444:5555:6666:7777:8888']
