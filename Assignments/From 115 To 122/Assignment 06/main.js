/*
Assignment 06
Challenge
You have an array containing a set of objects with data about people.
Perform a destructuring assignment to get the desired result in the console.
If the value of the chosen variable is 1, it retrieves the data for the first person; if it's 2, it retrieves the data for the second person, and so on.
Note that the output changes depending on the available variable.
See the example to understand what's required.
*/

let chosen = 3;

let myFriends = [
  { title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },
  { title: "Ahmed", age: 25, available: false, skills: ["Python", "Django"] },
  { title: "Sayed", age: 33, available: true, skills: ["PHP", "Laravel"] },
];

// Write Your Code Here

// OPtion 1
/*
let [one, two, three] = myFriends;

if (chosen === 1) {
  let {
  title: t,
  age: a,
  available: av,
  skills: [, last],
} = one;

console.log(t);
console.log(a);
console.log(av ? "Available" : "Not Available");
console.log(last);
} else if (chosen === 2) {
  let {
  title: t,
  age: a,
  available: av,
  skills: [, last],
} = two;

console.log(t);
console.log(a);
console.log(av ? "Available" : "Not Available");
console.log(last);
} else if (chosen === 3) {
  let {
  title: t,
  age: a,
  available: av,
  skills: [, last],
} = three;

console.log(t);
console.log(a);
console.log(av ? "Available" : "Not Available");
console.log(last);
}
*/

// Option 2
let friend = myFriends[chosen - 1];
let {
  title: t,
  age: a,
  available: av,
  skills: [, last]
} = friend;

console.log(t);
console.log(a);
console.log(av ? "Available" : "Not Available");
console.log(last);

/*
// If chosen === 1

"Osama"
39
"Available"
"CSS"

// If chosen === 2

"Ahmed"
25
"Not Available"
"Django"

// If chosen === 3

"Sayed"
33
"Available"
"Laravel"
*/
