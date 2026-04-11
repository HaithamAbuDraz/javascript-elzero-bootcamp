/*
Assignment 01
You have the following HTML element that you need to select using JavaScript in 15 different ways.
You can use `querySelector` only four times and `querySelectorAll` only four times.
*/

console.log(elzero); // <div id="elzero" class="element" name="js">JavaScript</div>

console.log(document.querySelector("div")); // <div id="elzero" class="element" name="js">JavaScript</div>
console.log(document.querySelector("#elzero")); // <div id="elzero" class="element" name="js">JavaScript</div>
console.log(document.querySelector(".element")); // <div id="elzero" class="element" name="js">JavaScript</div>
console.log(document.querySelector("[name='js']")); // <div id="elzero" class="element" name="js">JavaScript</div>

console.log(document.querySelectorAll("div")[0]); // <div id="elzero" class="element" name="js">JavaScript</div>
console.log(document.querySelectorAll("#elzero")[0]); // <div id="elzero" class="element" name="js">JavaScript</div>
console.log(document.querySelectorAll(".element")[0]); // <div id="elzero" class="element" name="js">JavaScript</div>
console.log(document.querySelectorAll("[name='js']")[0]); // <div id="elzero" class="element" name="js">JavaScript</div>

console.log(document.getElementById("elzero")); // <div id="elzero" class="element" name="js">JavaScript</div>
console.log(document.getElementsByClassName("element")[0]); // <div id="elzero" class="element" name="js">JavaScript</div>
console.log(document.getElementsByTagName("div")[0]); // <div id="elzero" class="element" name="js">JavaScript</div>
console.log(document.getElementsByName("js")[0]); // <div id="elzero" class="element" name="js">JavaScript</div>

console.log(document.body.firstElementChild); // <div id="elzero" class="element" name="js">JavaScript</div>
console.log(document.body.children[0]); // <div id="elzero" class="element" name="js">JavaScript</div>