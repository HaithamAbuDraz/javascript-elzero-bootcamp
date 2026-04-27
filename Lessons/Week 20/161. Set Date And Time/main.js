/*
  Date And Time
  - setTime(Milliseconds)
  - setDate() => Day Of The Month [Negative And Positive]
  - setFullYear(year, month => Optional [0-11], day => Optional [1-31])
  - setMonth(Month [0-11], Day => Optional [1-31]) [Negative And Positive]
  - setHours(Hours [0-23], Minutes => Optional [0-59], Seconds => Optional [0-59], MS => Optional [0-999])
  - setMinutes(Minutes [0-59], Seconds => Optional [0-59], MS => Optional [0-999])
  - setSeconds(Seconds => [0-59], MS => Optional [0-999])
*/

let dateNow = new Date();
console.log(dateNow); // Mon Apr 27 2026 14:36:51 GMT+0300 (Eastern European Summer Time)

console.log("#".repeat(66)); // ##################################################################

// dateNow.setTime(0);
// console.log(dateNow); // Thu Jan 01 1970 02:00:00 GMT+0200 (Eastern European Standard Time)

// console.log("#".repeat(66)); // ##################################################################

// console.log("#".repeat(66)); // ##################################################################

// dateNow.setTime(10000);
// console.log(dateNow); // Thu Jan 01 1970 02:00:10 GMT+0200 (Eastern European Standard Time)

// console.log("#".repeat(66)); // ##################################################################

// dateNow.setDate(35);
// console.log(dateNow); // Tue May 05 2026 14:41:11 GMT+0300 (Eastern European Summer Time)

// dateNow.setFullYear(2020, 13);
// console.log(dateNow); // Sat Feb 27 2021 15:05:50 GMT+0200 (Eastern European Standard Time)

dateNow.setMonth(0);
console.log(dateNow); // Tue Jan 27 2026 15:07:18 GMT+0200 (Eastern European Standard Time)
