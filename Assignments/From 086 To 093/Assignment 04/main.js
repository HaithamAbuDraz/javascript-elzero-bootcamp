/*
Assignment 04
You have two elements whose content and attributes are scattered.
The task is to move the content and title attribute from the first div to the second and vice versa. Using numbers, strings, or True/False is strictly prohibited, except for class names.
You must add the number 2 next to the word "Two." See the result to understand what's required.

*/

let firstDiv = document.querySelector(".one");
let secondDiv = document.querySelector(".two");

let temp = firstDiv.textContent;
firstDiv.textContent = secondDiv.textContent;
secondDiv.textContent = temp + document.body.firstChild.textContent + secondDiv.attributes.length;

let tempTitle = firstDiv.title;
firstDiv.title = secondDiv.title;
secondDiv.title = tempTitle;


console.log(firstDiv); // <div class="one" title="one">One</div>
console.log(secondDiv); // <div class="two" title="two">Two 2</div>
