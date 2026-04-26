/*
Assignment 05
We have the following Object.
Following it is a line that changes the Score value.
Following it is a Loop that prints the entire Object content, including the Property name and its value.
Following this, the Object content is printed in the Console.
Modifying the Object content, the Loop, or the print line in the Console is prohibited.
In the designated space, you must write the code to perform the required actions.
The goal is to prevent changes to the score value.
The ID should not be displayed within the Loop but should appear without any issues in the Object content in the Console.
The Country should not be displayed in the Loop or in the Object content in the Console.
*/

const myObj = {
  username: "Elzero",
  id: 100,
  score: 1000,
  country: "Egypt",
};

// Write Your Code Here
Object.defineProperty(myObj, "score", {
  writable: false
});

Object.defineProperty(myObj, "id", {
  enumerable: false
});

Object.defineProperty(myObj, "country", {
  enumerable: false,
  configurable: true
});

delete myObj.country;

myObj.score = 500;

for (let prop in myObj) {
  console.log(`${prop} => ${myObj[prop]}`);
}

console.log(myObj);

// Needed Output
// "username => Elzero"
// "score => 1000"
// {username: 'Elzero', score: 1000, id: 100}
