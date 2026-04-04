/*
Assignment 04
Using numbers is strictly prohibited. You can use variable values ​​along with what you've learned to accomplish the task.
The numbers must be printed as shown in the example.
Write your code inside the loop only and do not modify anything else.
*/

let index = 10;

let jump = 2;

for (; ;) {
    console.log(index);
    if (index === jump + jump) break;
    index -= jump;
}

// Output
10
8
6
4