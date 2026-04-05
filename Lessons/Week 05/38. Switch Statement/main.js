/*
  Switch Statement
  switch(expression) {
    Case 1:
      // code block
      break;
    Case 2:
      // code block
      break;
    Default:
      // code block
  }
  - Default Ordering
  - Multiple Match
  - ===
*/

let day = 5;

switch (day) {
    case 0:
        console.log("Saturday");
        break;
    case 1:
        console.log("Sunday");
        break;
    case 2:
        console.log("Monday");
        break;
    case 3:
        console.log("Tuesday");
        break;
    case 4:
        console.log("Wednesday");
        break;
    case 5:
        console.log("Thursday");
        break;
    case 6:
        console.log("Friday");
        break;
    default:
        console.log("Unknown Day");
}