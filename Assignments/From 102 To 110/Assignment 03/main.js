/*
Assignment 03
Create a Div inside the page and place the number 10 inside it, for example.
Create a Counter that counts from the number inside the Div until it reaches zero.
When it reaches zero, stop the count.
*/

let myDiv = document.createElement("div");
let num = document.createTextNode("10");

myDiv.append(num);
document.body.append(myDiv);

let counter = setInterval(() => {
  myDiv.textContent--;
  if (myDiv.textContent === "0") {
    clearInterval(counter);
  }
}, 1000);