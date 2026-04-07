/*
Assignment 04
Create a function named `specialMix` that accepts an unknown number of parameters.
The function can accept numbers, strings, or strings that begin with numbers.
If all arguments are numbers, sum them.
If strings contain numbers, extract the numbers from them and sum them, excluding any strings that do not contain numbers.
If all arguments are strings, print the message `All Is Strings`.
See the example to view the test cases:
*/

function specialMix(...data) {
  let sum = 0;
  let hasNumbers = false;

  for (let i = 0; i < data.length; i++) {
    let item = data[i];

    if (typeof item === "number") {
      sum += item;
      hasNumbers = true;
    }

    else if (typeof item === "string") {
      // Extract numbers from the beginning of the string.

      let extractNumbers = parseInt(item);

      if (!isNaN(extractNumbers)) {
        sum += extractNumbers;
        hasNumbers = true;
      }
    }
  }

  return hasNumbers ? sum : "All Is Strings";
}

/*
 let stringsCount = 0;
  let sum = 0;
  for (let i = 0; i < data.length; i++) {
    if (Number.isNaN(parseInt(data[i]))) stringsCount++;
    else {
      sum += parseInt(data[i]);
    }
  }
  if (stringsCount === data.length) return "All Is Strings";
  else return sum;
}

*/

console.log(specialMix(10, 20, 30)); // 60

console.log(specialMix("10Test", "Testing", "20Cool")); // 30

console.log(specialMix("Testing", "10Testing", "40Cool")); // 50
console.log(specialMix("Test", "Cool", "Test")); // All Is Strings