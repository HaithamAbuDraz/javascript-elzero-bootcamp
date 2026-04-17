/*
  BOM [Browser Object Model]
  Local Storage
  - setItem
  - getItem
  - removeItem
  - clear
  - key

  Info
  - No Expiration Time
  - HTTP And HTTPS
  - Private Tab
*/

// Set
window.localStorage.setItem("color", "#F00");
window.localStorage.fontWeight = "bold";
window.localStorage["fontSize"] = "20px";

// Get
console.log(window.localStorage.getItem("color")); // #F00
console.log(window.localStorage.color); // #F00
console.log(window.localStorage["color"]); // #F00

// Remove One
// window.localStorage.removeItem("color");

// Remove All
// window.localStorage.clear();

// Get Key
console.log(window.localStorage.key(0)); // color

// Set Color In Page
document.body.style.background = window.localStorage.getItem("color");

console.log(window.localStorage);
/* {
  "color": "#F00",
  "fontWeight": "bold",
  "fontSize": "20px"
}
*/

console.log(typeof window.localStorage); // object
