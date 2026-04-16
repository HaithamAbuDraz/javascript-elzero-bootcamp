/*
Assignment 01
Use the Prompt to retrieve a message from the user.
The message will be: “Print Number From – To”
The default message will be: “Example: 5-20”
The user will type two numbers separated by a minus sign (-).
The first number can be greater than the second, or vice versa.
In either case, print the numbers on the page from smallest to largest.
See the example to understand the concept.
*/

let userInput = prompt("Print Number From – To", "Example: 5-20");

if (userInput === null || userInput.trim() === "") {
  document.getElementById("output").innerHTML = "<p>No input provided. Please refresh and try again.</p>";
} else {
  let numbers = userInput.split("-");

  let num1 = parseInt(numbers[0]);
  let num2 = parseInt(numbers[1]);

  if (isNaN(num1) || isNaN(num2)) {
    document.getElementById("output").innerHTML = "<p>Invalid input. Please use format: 10number (e.g., 5-20)</p>";
  } else {
    let start = Math.min(num1, num2);
    let end = Math.max(num1, num2);

    let outputHTML = "";
    for (let i = start; i <= end; i++) {
      outputHTML += `<p>${i}</p>`;
    }

    document.getElementById("output").innerHTML = outputHTML;
  }
}
