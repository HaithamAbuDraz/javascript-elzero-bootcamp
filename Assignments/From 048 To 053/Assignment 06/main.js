/*
Assignment 06
Using numbers or letters is strictly prohibited.
You can use variable values ​​along with what you've learned to accomplish the task.
The task is to convert uppercase letters to lowercase and vice versa using a Loop. See the example
You must use a For Loop to achieve this.
*/
let start = 0;

let swappedName = "elZerO";

let newWord = "";

for (let i = 0; i < swappedName.length; i++) {
    if (swappedName[i] === swappedName[i].toLowerCase()) {
        newWord += swappedName[i].toUpperCase();
    } else {
        newWord += swappedName[i].toLowerCase();
    }
}

console.log(`"${newWord}"`);
// Output
// "ELzERo"