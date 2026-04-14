/*
  BOM [Browser Oboject Model]
  - setTimeout(Function, Timeout, Additional Params)
  - clearTimeout(Identifire)
*/

// setTimeout(function () {
//   console.log("Message"); // Message after 3 seconds
// }, 3000);

// setTimeout(sayMsg, 3000); // I am Message after 3 seconds

// function sayMsg() {
//   console.log(`I am Message`);
// }

// setTimeout(sayMsg, 3000, "Haitham", 21); // I am Message For Haitham His Age Is: 21

// function sayMsg(user, age) {
//   console.log(`I am Message For ${user} His Age Is: ${age}`);
// }

// let counter = setTimeout(sayMsg, 3000); // I am Message For Haitham His Age Is: 21

// function sayMsg() {
//   console.log(`I am Message`);
// }

// console.log(counter); // numeric ID (a positive integer) , for example: 1 or 2 or 3 etc. (depending on how many timers are active in your environment)

let btn = document.querySelector("button");

btn.onclick = function () {
  clearTimeout(counter);
};

function sayMsg(user, age) {
  console.log(`Iam Message For ${user} Age Is : ${age}`);
}

let counter = setTimeout(sayMsg, 3000, "Haitham", 21);