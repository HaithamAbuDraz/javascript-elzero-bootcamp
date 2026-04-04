/*
Assignment 07
Using numbers is strictly prohibited.
You can use variable values ​​along with what you've learned to accomplish the task.
The task is to print only the numbers from the first digit, two, to the end.
Think logically about how to make the loop ignore the number 1.
You must use a For Loop to achieve this.
*/

let start = 0;

let mix = [1, 2, 3, "A", "B", "C", 4];

for (let i = start; i < mix.length; i++) {
    if (typeof mix[i] === "number" && mix[i] !== +true) {
        console.log(mix[i]);
    }
}
// Output
// 2
// 3
// 4