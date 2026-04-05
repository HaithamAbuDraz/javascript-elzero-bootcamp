/*
Assignment 06
Create a function that multiplies all the numbers passed to it.
The number of parameters to pass to the function is unknown.
If the argument used in the function is a string, do not use it with numbers.
If the argument is a float, convert it to an integer before starting the multiplication.
*/

function multiply(...numbers) {
  let result = 1;
  for (let i = 0; i < numbers.length; i++) {
    if (typeof numbers[i] === "number") {
      result *= parseInt(numbers[i]);
    }
  }
  console.log(result);
}

multiply(10, 20); // 200
multiply("A", 10, 30); // 300
multiply(100.5, 10, "B"); // 1000