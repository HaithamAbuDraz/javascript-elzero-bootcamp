/*
Assignment 05
You have 5 images on the page. Some contain Alt Attributes, and the rest do not.
Loop all the images and check if the Alt Attribute is present.
If it is, change the value to Old.
If it is not, change the value to Elzero New.
Observe the result to see what is required.
*/

let images = document.querySelectorAll("img")
  .forEach(img => {
    img.alt = img.hasAttribute("alt") ? "Old" : "Elzero New";
  });

console.log(images);
/*
<img decoding="async" src="#" alt="Old" />
<img decoding="async" src="#" alt="Elzero New" />
<img decoding="async" src="#" alt="Old" />
<img decoding="async" src="#" alt="Elzero New" />
<img decoding="async" src="#" alt="Elzero New" />
*/