/*
Assignment 03
Create a function that calculates your age in all units of time.
The function accepts only one parameter: your age in years.
The task is to print your age in months, weeks, days, hours, minutes, and seconds.
The task is to print each unit of time on a separate line in the console. Ensure that the age is greater than 10 and less than 100. If it is not, print a message stating that the age is out of range.
*/

function ageInTime(theAge) {
  if (theAge > 10 && theAge < 100) {
    console.log(`Months => ${12 * theAge} Months`);
    console.log(`Days => ${365 * theAge} Days`);
    console.log(`Hours => ${365 * theAge * 24} Hours`);
    console.log(`Minutes => ${365 * theAge * 24 * 60} Minutes`);
    console.log(`Seconds => ${365 * theAge * 24 * 60 * 60} Seconds`);
  } else {
    console.log("Age Out Of Range");
  }
}

// Needed Output
ageInTime(110); // Age Out Of Range
ageInTime(38); // Months Example => 456 Months