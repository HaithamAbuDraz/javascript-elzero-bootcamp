/*
Assignment 05
Numbers and letters are strictly prohibited.
You can use variable values ​​along with what you've learned to accomplish the task.
Names must be printed as in the example, dynamically placing a number before each value.
Exclude names beginning with the letter A.
A For Loop must be used to perform the task.
*/

let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];

let letter = "a";

let counter = +true


for (let i = +false; i < friends.length; i++) {
    if (friends[i].charAt(+false).toLowerCase() !== letter) {
        console.log(`"${counter++} => ${friends[i]}"`);
    }
}
// Output
// "1 => Sayed"
// "2 => Eman"
// "3 => Mahmoud"
// "4 => Osama"
// "5 => Sameh"