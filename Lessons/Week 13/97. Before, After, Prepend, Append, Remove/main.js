/*
  DOM [Deal With Elements]
  - before [Element || String]
  - after [Element || String]
  - append [Element || String]
  - prepend [Element || String]
  - remove
*/

let element = document.getElementById("my-div");
let createdP = document.createElement("p");

element.before("Hello From JS"); // Inserts nodes just before node, while replacing strings in nodes with equivalent Text nodes.
element.after("Hello From JS"); // Inserts nodes just after node, while replacing strings in nodes with equivalent Text nodes.

element.append("Hello From Js"); // Inserts nodes after the last child of node, while replacing strings in nodes with equivalent Text nodes.
element.prepend("Hello From Js"); // Inserts nodes before the first child of node, while replacing strings in nodes with equivalent Text nodes.
element.prepend(createdP);

element.remove(); // Removes node.
