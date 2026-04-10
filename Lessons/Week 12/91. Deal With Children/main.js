/*
  DOM [Deal With Childrens]
  - children
  - childNodes
  - firstChild
  - lastChild
  - firstElementChild
  - lastElementChild
*/

let myElement = document.querySelector("div");

console.log(myElement); // <div><!-- Haitham -->Hello Div<p>Hello P</p><span>Hello Span</span><!-- Comment -->Hello</div>
console.log(myElement.children); // HTMLCollection(2) [p, span]
console.log(myElement.children[0]); // "<p>Hello P</p>"
console.log(myElement.childNodes); // NodeList(6) [comment, text, p, span, comment, text]
console.log(myElement.childNodes[0]); // "<!-- Haitham -->"

console.log(myElement.firstChild); // "<!-- Haitham -->"
console.log(myElement.lastChild); // "Hello"

console.log(myElement.firstElementChild); // <p>Hello P</p>
console.log(myElement.lastElementChild); // "<span>Hello Span</span>"
