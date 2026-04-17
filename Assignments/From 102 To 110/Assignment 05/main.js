/*
Assignment 05
Use the same assignment as before without any changes.
When you reach number 5, open the Elzero.org academy website page in the popup window.
See the image to understand the concept.
When you reach number 0, don't forget to stop the counter.
*/

let myDiv = document.createElement("div");
let num = document.createTextNode("10");

myDiv.appendChild(num);
document.body.appendChild(myDiv);

let counter = setInterval(() => {
  myDiv.textContent--;
  if (myDiv.textContent === "5") {
    window.open(
      "https://elzero.org",
      "_blank",
      "width=500,height=500,left=250"
    );
  } else if (myDiv.textContent === "0") {
    clearInterval(counter);
  }
}, 1000);