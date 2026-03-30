/*
Assignment 4
You have the following variable, and you need to print the values ​​as shown in the example.
In the designated space, you can write your code to output the values ​​correctly.
Do not change the variable's value or write any numbers manually.

*/

// Option 1
/*
let points = 10;

++points; // 11
++points; // 12
++points; // 13

console.log(points); // 13

--points; // 12
--points; // 11
--points; // 10
--points; // 9
--points; // 8

console.log(points); // 8;
*/

// Option 2
let points = 10;

points += true + true + true; // Adds 3 (true + true + true = 1 + 1 + 1 = 3)

console.log(points); // 13

points -= true + true + true + true + true; // Subtracts 5 (five trues = 5)

console.log(points); // 8