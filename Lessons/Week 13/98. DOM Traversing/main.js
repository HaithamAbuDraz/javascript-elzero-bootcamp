/*
  DOM [Traversing]
  - nextSibling
  - previousSibling
  - nextElementSipling
  - previousElementSipling
  - parentElement
*/

let span = document.querySelector(".two");

console.log(span.nextSibling); // " "
console.log(span.previousSibling); // comment
console.log(span.nextElementSibling); // <span class="three">Three</span>
console.log(span.previousElementSibling); // <span class="one">One</span>
console.log(span.parentElement); // <div id="my-div"><span class="one">One</span>comment<span class="two">Two</span> <span class="three">Three</span> </div>

// span.onclick = function () {
//   span.parentElement.remove();
// }
