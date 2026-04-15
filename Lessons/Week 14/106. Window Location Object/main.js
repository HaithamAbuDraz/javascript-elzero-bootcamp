/*
  BOM [Browser Object Model]
  - location Object
  --- href Get / Set [URL || Hash || File || Mail]
  --- host
  --- hash
  --- protocol
  --- reload()
  --- replace()
  --- assign()
*/

// console.log(location);
/*
{
  "ancestorOrigins": {},
  "href": "http://127.0.0.1:5500/Lessons/Week%2014/106.%20Window%20Location%20Object/index.html",
  "origin": "http://127.0.0.1:5500",
  "protocol": "http:",
  "host": "127.0.0.1:5500",
  "hostname": "127.0.0.1",
  "port": "5500",
  "pathname": "/Lessons/Week%2014/106.%20Window%20Location%20Object/index.html",
  "search": "",
  "hash": ""
}
*/
// console.log(location.href); // http://127.0.0.1:5500/Lessons/Week%2014/106.%20Window%20Location%20Object/index.html

// location.href = "https://google.com";
// location.href = "/#sec02";
// location.href = "https://developer.mozilla.org/en-US/docs/Web/JavaScript#reference";

// console.log(location); // 127.0.0.1:5500
// console.log(location.hostname); // 127.0.0.1

// console.log(location.protocol); // http:

// console.log(location.hash); // #sec02

// window.location.reload();

// window.location.replace(); // The replace() method of the Location interface replaces the current resource with the one at the provided URL.
// window.location.assign(); // The assign() method of the Location interface causes the window to load and display the document at the URL specified.
