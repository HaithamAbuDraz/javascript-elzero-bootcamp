/*
Assignment 03
On the first line, print the full date and time of the last day of the previous month.
On the second line, print the name of the previous month and its last day, as shown below.
The message must be printed exactly as shown.
*/

let monthNames = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

let now = new Date();
let lastDayPreviousMonth = new Date(now.getFullYear(), now.getMonth(), 0);

console.log(lastDayPreviousMonth);
// Tue Mar 31 2026 00:00:00 GMT+0300 (Eastern European Summer Time)

console.log(`Previous Month Is ${monthNames[lastDayPreviousMonth.getMonth()]} And Last Day Is ${lastDayPreviousMonth.getDate()}`);
// Previous Month Is March And Last Day Is 31
