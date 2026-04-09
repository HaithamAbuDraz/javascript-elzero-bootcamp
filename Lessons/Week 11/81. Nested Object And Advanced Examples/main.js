/*
  Object
  - Nested Object And Trainings
*/

let user = {
  name: "Haitham",
  age: 21,
  skills: ["HTML", "CSS", "JS"],
  available: false,
  addresses: {
    ksa: "Riyadh",
    palestine: {
      one: "Abassan",
      two: "Gaza",
    },
  },
  checkAv: function () {
    if (user.available === true) {
      return `Free For Work`;
    } else {
      return `Not Free`;
    }
  },
};

console.log(user.name); // Haitham
console.log(user.age); // 21
console.log(user.skills); // ['HTML', 'CSS', 'JS']
console.log(user.skills.join(" | ")); // HTML | CSS | JS
console.log(user.skills[2]); // JS
console.log(user.addresses.ksa); // Riyadh
console.log(user.addresses.palestine); // {one: 'Abassan', two: 'Gaza'}
console.log(user.addresses.palestine.one); // Abassan
console.log(user["addresses"]["palestine"]["one"]); // Abassan
console.log(user["addresses"]["palestine"]["one"]); // Abassan
console.log(user.checkAv()); // Not Free
