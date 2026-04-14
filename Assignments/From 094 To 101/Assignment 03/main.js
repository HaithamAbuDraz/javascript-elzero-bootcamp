/*
Assignment 03
You have two elements on the page: a Div and a Paragraph.
The task is to completely remove the Paragraph from the page.
Regarding the Div, you need to place an element before and after it.
The example below illustrates this.
*/

let ourElement = document.querySelector(".our-element");
let paragraph = document.querySelector("p");

paragraph.remove();

let startDiv = document.createElement("div");
startDiv.className = "start";
startDiv.title = "Start Element";
startDiv.setAttribute('data-value', 'Start');
startDiv.textContent = "Start";

let endDiv = document.createElement("div");
endDiv.className = "end";
endDiv.title = "End Element";
endDiv.setAttribute('data-value', 'End');
endDiv.textContent = "End";

ourElement.before(startDiv);
ourElement.after(endDiv);