/*
Assignment 01
Create a function that displays a welcome message to each person with any name you choose.
The function accepts two parameters: the person's name and their gender (male or female).
Print a welcome message for the person, including their name and preceding it with "Mr" or "Miss" depending on their gender.
If the person doesn't specify their gender, and it's preferable not to, don't print "Mr" or "Miss", print only the welcome message.
*/

function sayHello(theName, theGender) {
  let title = theGender === "Male" ? "Mr " : theGender === "Female" ? "Miss " : "";
      console.log(`Hello ${title}${theName}`);
  }

// Needed Output
sayHello("Osama", "Male"); // "Hello Mr Osama"
sayHello("Eman", "Female"); // "Hello Miss Eman"
sayHello("Sameh"); // "Hello Sameh"