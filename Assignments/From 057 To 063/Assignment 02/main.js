/*
Assignment 02
Create a function that performs different calculations.
The function accepts three parameters: the first and second numbers and the operation type.
The function performs the calculation you specify on the two numbers and contains only three operations (add | subtract | multiply).
If no operation type is specified, add the two numbers.
If only one number is specified in the function, display a message in the console indicating that the second number is missing.
*/

function calculate(firstNum, secondNum, operation) {
  // Check if second number is missing
  if (secondNum === undefined) {
    console.log("Second Number Not Found");
    return;
  }

  switch (operation) {
    case "subtract":
      console.log(firstNum - secondNum);
      break;
    case "multiply":
      console.log(firstNum * secondNum);
      break;
    default:
      // Handles "add", undefined, or any other value
      console.log(firstNum + secondNum);
  }
}

// Needed Output
calculate(20); // Second Number Not Found
calculate(20, 30); // 50
calculate(20, 30, 'add'); // 50
calculate(20, 30, 'subtract'); // -10
calculate(20, 30, 'multiply'); // 600