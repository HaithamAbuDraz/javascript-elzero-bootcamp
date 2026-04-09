/*
  Object
  - Create Object With create Method
*/

let user = {
  age: 21,
  doubleAge: function () {
    return this.age * 2;
  },
};

console.log(user); // {age: 21, doubleAge: ƒ}
console.log(user.age); // 21
console.log(user.doubleAge()); // 42

let obj = Object.create({});

obj.a = 100;

console.log(obj); // {a: 100}

let copyObj = Object.create(user);

copyObj.age = 50;

console.log(copyObj); // {age: 50}
// console.log(copyObj.age); // 21 "Befor Update Age"
console.log(copyObj.age); // 50 "After Update Age"
console.log(copyObj); // {age: 50}
// console.log(copyObj.doubleAge()); // 42 "Befor Update user.age"
console.log(copyObj.doubleAge()); // 100 "After Update this.age"
