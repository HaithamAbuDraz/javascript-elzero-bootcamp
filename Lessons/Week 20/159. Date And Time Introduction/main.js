/*
  Date And Time
  - Date Constructor

  Static Methods
  - Date.now()

  - To Track Time You Need Starting Point
  - Epoch Time Or Unix Time In Computer Science Is The Number of Seconds Since January 1, 1970.
  - Why 1970 [829 Days To 136 Years]

  Search For
  - Year 2038 Problem in Computer Science.
*/

let dateNow = new Date();

console.log(dateNow); // Mon Apr 27 2026 14:08:54 GMT+0300 (Eastern European Summer Time)

console.log(Date.now()); // 1777288192336 1000 Mill = 1 Second

let seconds = Date.now() / 1000; // Number Of Seconds
console.log(`Seconds ${seconds}`); // Seconds 1777288251.555

let minutes = seconds / 60; // Number Of Minutes
console.log(`Minutes ${minutes}`); // Minutes 29621474.04495

let hours = minutes / 60; // Number Of Hours
console.log(`Hours ${hours}`); // Hours 493691.2570466667

let days = hours / 24; // Number Of Days
console.log(`Days ${days}`); // Days 20570.46937398148

let years = days / 365; // Number Of Years
console.log(`Years ${years}`); // Years 56.35745358983383
