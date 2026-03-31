/*
Assignment 01
You have a variable containing the day of the appointment. Using a switch, display a message to the person based on the selected day, ensuring the following conditions are met:
Make sure the day name has no spaces before or after it, and the first letter is capitalized, even if the name is written in lowercase.
If the variable value is Friday, Saturday, or Sunday, display a message stating that no appointments are available on those days.
If the variable value is Monday or Thursday, display available appointments from 10:00 AM to 5:00 PM.
If the variable value is Tuesday, display available appointments from 10:00 AM to 6:00 PM.
If the variable value is Wednesday, display available appointments from 10:00 AM to 7:00 PM.
If the variable value is an incorrect day, display a message stating that the day is incorrect.
*/

let day = "   friday  ";
// // You Need To Remove Spaces And Make First Letter Capital => Friday

// let day = "Friday";
// let day = "Saturday";
// let day = "Sunday";
// // Output => "No Appointments Available"

// let day = "Monday";
// let day = "Thursday";
// // Output => "From 10:00 AM To 5:00 PM"

// let day = "Tuesday";
// // Output => "From 10:00 AM To 6:00 PM"

// let day = "Wednesday";
// // Output => "From 10:00 AM To 7:00 PM"

// let day = "World";
// // Output => "Its Not A Valid Day"

switch (day.trim().charAt(0).toUpperCase() + day.trim().slice(1).toLowerCase()) {
    case "Friday":
    case "Saturday":
    case "Sunday":
        console.log("No Appointments Available");
        break;

    case "Monday":
    case "Thursday":
        console.log("From 10:00 AM To 5:00 PM");
        break;

    case "Tuesday":
        console.log("From 10:00 AM To 6:00 PM");
        break;

    case "Wednesday":
        console.log("From 10:00 AM To 7:00 PM");
        break;

    default:
        console.log("Its Not A Valid Day");
}
