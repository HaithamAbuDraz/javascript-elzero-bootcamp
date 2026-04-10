/*
  DOM
  - What Is DOM
  - DOM Selectors
  --- Find Element By ID
  --- Find Element By Tag Name
  --- Find Element By Class Name
  --- Find Element By CSS Selectors
  --- Find Element By Collection
  ------ title
  ------ body
  ------ images
  ------ forms
  ------ links
*/

let myIdElement = document.getElementById("my-div");
let myTagElement = document.getElementsByTagName("p");
let myClassElement = document.getElementsByClassName("my-span");
let myQueryElement = document.querySelector(".special");
let myQueryAllElement = document.querySelectorAll(".special");

console.log(myIdElement); // <div id="my-div">Hello Div</div>
console.log(myTagElement); // HTMLCollection(2) [p, p]
console.log(myTagElement[1]); // <p>Test</p>
myTagElement[1].innerHTML = "Test";
console.log(myClassElement); // HTMLCollection [span.my-span]
console.log(myClassElement[0]); // <span class="my-span special">My Span</span>
console.log(myQueryElement); // <span class="my-span special">My Span</span>
console.log(myQueryAllElement); // NodeList [span.my-span.special]

console.log(document.title); // Learn JavaScript || What Is DOM And Select Elements
console.log(document.body); // <body> ... </body>
console.log(document.forms); // HTMLCollection(2) [form, form]
console.log(document.forms[0]); // <form action=""><input type="text" name="one" value="Hello"></form>
console.log(document.forms[0].one.value); // Hello
console.log(document.links[1].href); // https://facbook.com/
