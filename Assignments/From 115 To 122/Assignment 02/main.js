/*
Assignment 02
You have an array containing the names of your technologies.
Perform the Destructuring Assignment to obtain the desired result in the Console.
*/

let mySkills = ["HTML", "CSS", "JavaScript", ["PHP", "Python", ["Django", "Laravel"]]];

let [a, b, c, [d, e, [f, g]]] = mySkills;

console.log(`My Skills: ${a}, ${b}, ${c}, ${d}, ${e}, ${f}, ${g}`);

// My Skills: HTML, CSS, JavaScript, PHP, Python, Django, Laravel