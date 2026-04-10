/*
  DOM [Get / Set Elements Content And Attributes]
  - innerHTML
  - textContent
  - Change Attributes Directly
  - Change Attributes With Methods
  --- getAttribute
  --- setAttribute

  Search
  - innerText
*/

let myElement = document.querySelector(".js");

console.log(myElement.innerHTML); // JavaScript <span>Div</span> &lt;span&gt;
console.log(myElement.textContent); // JavaScript Div <span>

myElement.innerHTML = "Text From <span>Main.js</span> File";
myElement.textContent = "Text From <span>Main.js</span> File";

document.images[0].src = "https://google.com";
document.images[0].alt = "Alternate";
document.images[0].title = "Picture";
document.images[0].id = "pic";
document.images[0].className = "image";

let myLink = document.querySelector(".link");

console.log(myLink.getAttribute("class")); // link
console.log(myLink.getAttribute("href")); // #

myLink.setAttribute("href", "https://x.com");
myLink.setAttribute("title", "X");
