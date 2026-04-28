/*
Assignment 02
Print the time 10 years after the start of the time period.
Add only one second to the time.
Regardless of your Time Zone, we want the time to be 00:00:01.
See the result below to understand the concept.
*/

let date = new Date(0); // Thu Jan 01 1970 02:00:00 GMT+0200 (Eastern European Standard Time)
date.setFullYear(date.getFullYear() + 10); // Tue Jan 01 1980 02:00:00 GMT+0200 (Eastern European Standard Time)
date.setHours(0, 0, 1); // Tue Jan 01 1980 00:00:01 GMT+0200 (Eastern European Standard Time)

console.log(date); // Tue Jan 01 1980 00:00:01 GMT+0200 (Eastern European Standard Time)
