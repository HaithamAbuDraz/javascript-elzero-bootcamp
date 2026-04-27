/*
  Date And Time
  - getTime() => Number Of Milliseconds
  - getDate() => Day Of The Month
  - getFullYear()
  - getMonth() => Zero Based
  - getDay() => Day Of The Week
  - getHours()
  - getMinutes()
  - getSeconds()
*/

let dateNow = new Date();
let birthday = new Date("June 6, 2004");
let dateDiff = dateNow - birthday;

console.log(dateDiff); // 690820014006
console.log(dateDiff / 1000 / 60 / 60 / 24 / 365); // 21.905760773116437

console.log(dateNow); // Mon Apr 27 2026 15:10:36 GMT+0300 (Eastern European Summer Time)
console.log(dateNow.getTime()); // 1777291851594
console.log(dateNow.getDate()); // 27
console.log(dateNow.getFullYear()); // 2026
console.log(dateNow.getMonth()); // 3
console.log(dateNow.getHours()); // 14
console.log(dateNow.getMinutes()); // 10
console.log(dateNow.getSeconds()); // 36
