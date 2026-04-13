/*
  DOM [Add Event Listener]
  - addEventListener
  - Use Without On
  - Attach Multiple Events
  - Error Test

  Search
  - Capture & Bubbling JavaScript
  - removeEventListener
*/

let myP = document.querySelector("p");

// myP.onclick = function () {
//   console.log("Message From OnClick"); // Message From OnClick
// };

// myP.onclick = one();
// myP.onclick = two();

// function one() {
//   console.log("Message From OnClick 1"); // Message From OnClick 1
// }

// function two() {
//   console.log("Message From OnClick 2"); // Message From OnClick 2
// }
// window.onload = "Haitham";

// myP.addEventListener("click", function () {
//   console.log("Message From OnClick 1 Event"); // Message From OnClick 1 Event
// });

// myP.addEventListener("click", one); // Message From OnClick 1
// myP.addEventListener("click", two); // Message From OnClick 2

// myP.addEventListener("click", "String"); // Error

myP.onclick = function () {
  let newP = myP.cloneNode(true);
  newP.className = "clone";
  document.body.appendChild(newP);
};

// let clone = document.querySelector(".clone"); // Error main.js:48 Uncaught TypeError: Cannot set properties of null (setting 'onclick')

// clone.onclick = function () {
//   console.log("I am Cloned");
// };

document.addEventListener("click", function (e) {
  if (e.target.className === "clone") {
    console.log("I am Cloned");
  }
});