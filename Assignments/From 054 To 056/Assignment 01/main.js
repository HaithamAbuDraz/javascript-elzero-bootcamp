/*
Assignment 01
Using numbers is strictly prohibited. You can use variable values ​​along with what you've learned to accomplish the task.
Do not print numbers or names beginning with the letter A. You must use a While Loop to perform the task.
*/

let friends = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany"];
let index = 0;
let counter = 0;

while (index < friends.length) {
    if (typeof friends[index] === "string" &&
        friends[index][index] !== "A" &&
        friends[index][index] !== "a") {
        counter++;
        console.log(`"${counter} => ${friends[index]}"`);
    }
    index++;
}
// Output
// "1 => Sayed"
// "2 => Mahmoud"