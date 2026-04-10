/*
  DOM [Events]
  - Use Events On HTML
  - Use Events On JS
  --- onclik
  --- oncontextmenu
  --- onmouseenter
  --- onmouseleave

  --- onload
  --- onscroll
  --- onresize

  --- onfocus
  --- onblur
  --- onsubmit
*/

let myBtn = document.getElementById("btn");

myBtn.onclick = function () {
  console.log("Ckliked"); // Ckliked
};

myBtn.oncontextmenu = function () {
  console.log("Ckliked"); // Ckliked
};

myBtn.onmouseenter = function () {
  console.log("Ckliked"); // Ckliked
};

myBtn.onmouseleave = function () {
  console.log("Ckliked"); // Ckliked
};

window.onscroll = function () {
  console.log("Scroll"); // Scroll
};

window.onresize = function () {
  console.log("Scroll"); // Scroll
};