/*
Assignment 01
Using numbers is strictly prohibited. You can use variable values ​​along with what you've learned to accomplish the task.
The numbers must be printed, excluding the number 40 as in the example.
The For Loop must be used to perform the task.
*/

let start = 10;

let end = 100;

let exclude = 40;

for (let i = start; i <= end; i += start) {
    if (i === exclude) {
        continue;
    }
    console.log(i);
}
// Output
// 10
// 20
// 30
// 50
// 60
// 70
// 80
// 90
// 100