/*
Assignment 03
Using numbers is strictly prohibited. You may use variable values ​​along with what you have learned to accomplish the task.
The numbers must be printed as shown in the example.
The For Loop must be used to perform the task.
*/

let start = 1;

let end = 6;

let breaker = 2;

// Option 1
// for (let i = start; i <= end; i++) {
//     console.log(i);

//     for (let j = breaker; j <= end - breaker; j += breaker) {
//         if (j <= i || j <= end - breaker) {
//             console.log("-- " + j);
//         }
//     }
// }

// Option 2
for (let i = start; i <= end; i++) {
    console.log(i);
    console.log(`-- ${breaker}`);
    console.log(`-- ${end - breaker}`);
}

// Output
// 1
// --2
// --4
// 2
// --2
// --4
// 3
// --2
// --4
// 4
// --2
// --4
// 5
// --2
// --4
// 6
// --2
// --4