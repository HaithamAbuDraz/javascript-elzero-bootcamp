/*
  Object
  - Create Object With assign Method
*/

let obj1 = {
  prop1: 1,
  meth1: function () {
    return this.prop1;
  },
};

let obj2 = {
  prop2: 2,
  meth1: function () {
    return this.prop2;
  },
};

let targetObject = {
  prop1: 100,
  prop3: 3,
};

let finalObject = Object.assign(targetObject, obj1, obj2);

finalObject.prop1 = 200;
finalObject.prop4 = 4;

console.log(finalObject); // {prop1: 1, prop3: 3, prop2: 2, meth1: ƒ}
console.log(finalObject); // {prop1: 200, prop3: 3, prop2: 2, prop4: 4, meth1: ƒ}

let newObject = Object.assign({}, obj1, { prop5: 5, prop6: 6});

console.log(newObject); // {prop1: 1, prop5: 5, prop6: 6, meth1: ƒ}
