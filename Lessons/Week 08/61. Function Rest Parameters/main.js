/*
  Function
  - Rest Parameters
  - Only One Allowed
  - Must Be last Element
*/

function calc(...numbers) {
  // console.log(Array.isArray(numbers)); // true
  let result = 0;
  for (let i = 0; i < numbers.length; i++) {
    result += numbers[i];
  }
  return `The Final Result Is ${result}` // The Final Result Is 150
}

console.log(calc(10, 20, 10, 30, 50, 30)); // The Final Result Is 150
