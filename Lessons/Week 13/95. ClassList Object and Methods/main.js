/*
  DOM [Class List]
  - classList
  --- length
  --- contains
  --- item(index)
  --- add
  --- remove
  --- toggle
*/

let element = document.getElementById("my-div");

console.log(element); // <div id="my-div" class="one two show test">Div With Many Classes</div>
console.log(typeof element); // object
console.log(element.classList); // DOMTokenList(4) ['one', 'two', 'show', 'test', value: 'one two show test']
console.log(typeof element.classList); // object
console.log(element.classList.contains("Haitham")); // false
console.log(element.classList.contains("show")); // true
console.log(element.classList.item("3")); // test

element.onclick = function () {
  element.classList.add("add-one", "add-two"); // <div id="my-div" class="one two show test add-one add-two">Div With Many Classes</div>
};

element.onclick = function () {
  element.classList.remove("one", "two"); // <div id="my-div" class="show test">Div With Many Classes</div>
};

element.onclick = function () {
  element.classList.toggle("show"); // <div id="my-div" class="show test">Div With Many Classes</div>
};
