/*
Assignment 04
Use the same previous assignment exactly as described, without any changes.
When you reach 0, instead of stopping the counter, redirect the current page to the Elzero.org academy website.
*/

let myDiv = document.createElement("div");
let num = document.createTextNode("10");

myDiv.appendChild(num);
document.body.appendChild(myDiv);

let counter = setInterval(() => {
  myDiv.textContent--;
  if (myDiv.textContent === "0") {
    clearInterval(counter);
    window.location.href = "https://elzero.org";
  }
}, 1000);