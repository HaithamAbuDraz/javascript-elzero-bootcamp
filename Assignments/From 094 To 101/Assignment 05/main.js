/*
Assignment 05
You have all the HTML elements on the page, but we've only included 5 of them.
The goal is to print a message in the console when any of the elements is clicked, saying "This Is "Element Type".
The solution is very simple, but it might require some research to determine the element type.
For example, clicking on the Paragraph element will display the message "This Is P", and so on.
*/

let elements = document.querySelectorAll("div, span, p, article, section");

// Option 1
// elements.forEach(element => {
//   element.addEventListener("click", () => {
//     console.log(`This Is ${element.tagName}`);
//   });
// });

// Option 2
elements.forEach(element => {
  element.onclick = () => console.log(`This Is ${element.nodeName}`);
});