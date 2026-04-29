/*
  JSON
  - JSON.parse => Convert Text Data To JS Object
  - JSON.stringify => Convert JS Object To JSON
*/

const myJsonObjectFromServer = `{"Username": "Haitham", "Age": 21}`;
console.log(typeof myJsonObjectFromServer); // string
console.log(myJsonObjectFromServer); // {"Username": "Haitham", "Age": 21}

const myJsObject = JSON.parse(myJsonObjectFromServer);
console.log(typeof myJsObject); // object
console.log(myJsObject); // {Username: 'Haitham', Age: 21}

myJsObject["Username"] = "Haitham Mohammed";
myJsObject["Age"] = 22;

const myJsonObjectToServer = JSON.stringify(myJsObject);
console.log(typeof myJsonObjectToServer); // string
console.log(myJsonObjectToServer); // {"Username":"Haitham Mohammed","Age":22}
