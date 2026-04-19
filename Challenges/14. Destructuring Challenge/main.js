/*
  Destructuring
  - Challenge
*/

let chosen = 3;

let myFriends = [
  { title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },
  { title: "Ahmed", age: 25, available: false, skills: ["Python", "Django"] },
  { title: "Sayed", age: 33, available: true, skills: ["PHP", "Laravel"] },
];

// OPtion 1

/*
let [first, second, third] = myFriends;

if (chosen === 1) {
  let { title: t, age: a, available: av, skills: [, last] } = first;

  console.log(t); // Osama
  console.log(a); // 39
  console.log(av ? "Available" : "Not Available"); // Available
  console.log(last); // CSS

} else if (chosen === 2) {
  let { title: t, age: a, available: av, skills: [, last] } = second;

  console.log(t); // Ahmed
  console.log(a); // 25
  console.log(av ? "Available" : "Not Available"); // Not Available
  console.log(last); // Django

} else if (chosen === 3) {
  let { title: t, age: a, available: av, skills: [, last] } = third;

  console.log(t); // Sayed
  console.log(a); // 33
  console.log(av ? "Available" : "Not Available"); // Available
  console.log(last); // Laravel
}

*/

// Option 2

let friend = myFriends[chosen - 1];
let { title: t, age: a, available: av, skills: [, last] } = friend;

console.log(t);
console.log(a);
console.log(av ? "Available" : "Not Available");
console.log(last);
