/*
Assignment 01

Create a function named `getDetails` that accepts three parameters: `zName`, `zAge`, and `zCountry`.
This function will contain four subfunctions named `namePattern`, `ageWithMessage`, `countryTwoLetters`, and `fullDetails`.
`namePattern` accepts a two-part name like `Osama Mohamed` and returns `Osama M.`.
See the example for a better understanding.
`ageWithMessage` accepts a message containing the age, extracts only the age, and modifies the message.
See the example for a better understanding.
`countryTwoLetters` accepts the country name and returns a message with the first two letters of the country name in capital letters.
See the example for a better understanding.
`fullDetails` combines all the previous functions to produce the complete message, as shown in the example.
The second person's name can have either a capital or lowercase letter.
The age message can be changed, but the number will always be at the beginning and its position will not change.
The comments will explain the requirements in detail.
*/


function getDetails(zName, zAge, zCountry) {
  function namePattern(zName) {
    // Write Your Code Here
    // Osama Mohamed => Osama M.
    // Ahmed ali => Ahmed A.

    let names = zName.split(" ");
    return names[0] + " " + names[1].charAt(0).toUpperCase() + ".";
  }
  function ageWithMessage(zAge) {
    // Write Your Code Here
    // 38 Is My Age => Your Age Is 38
    // 32 Is The Age => Your Age Is 32\

    let age = parseInt(zAge);
    return "Your Age Is " + age;
  }
  function countryTwoLetters(zCountry) {
    // Write Your Code Here
    // Egypt => You Live In EG
    // Syria => You Live In SY

    let country = zCountry.slice(0, 2).toUpperCase();
    return "You Live In " + country;
  }

  function fullDetails() {
    return `Hello ${namePattern(zName)}, ${ageWithMessage(zAge)}, ${countryTwoLetters(zCountry)}`;
  }
  return fullDetails(); // Do Not Edit This
}

console.log(getDetails("Osama Mohamed", "38 Is My Age", "Egypt"));
// Hello Osama M., Your Age Is 38, You Live In EG

console.log(getDetails("Ahmed ali", "32 Is The Age", "Syria"));
// Hello Ahmed A., Your Age Is 32, You Live In SY