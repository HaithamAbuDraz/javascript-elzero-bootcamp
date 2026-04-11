/*
Assignment 02
We have a set of 10 images on the page with no source.
The task is to change the Src Attribute of the following logo image:
  “https://elzero.org/wp-content/themes/elzero/imgs/logo.png”
Change the Alt Attribute of the Elzero Logo.
A loop must be created that performs the task directly and does not repeat the code.
*/

document.body.style.backgroundColor = "black";

let images = document.querySelectorAll("img");
images.forEach(img => {
  img.src = "https://elzero.org/wp-content/themes/elzero/imgs/logo.png";
  img.alt = "Elzero Logo";
});