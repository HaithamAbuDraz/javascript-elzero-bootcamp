/*
Assignment 02
Using numbers is strictly prohibited. You can use variable values ​​along with what you've learned to accomplish the task.
The numbers must be printed as shown in the example, stopping at 3.
If the number is less than 10, print a zero before it.
A For Loop must be used to perform the task.
*/

let start = 10;
let end = 0;
let stop = 3;

for (let i = start; i >= stop; i--) {
    if (i < 10) {
        console.log("0" + i);
    } else {
        console.log(i);
    }
}
// Output
// 10
// 09
// 08
// 07
// 06
// 05
// 04
// 03