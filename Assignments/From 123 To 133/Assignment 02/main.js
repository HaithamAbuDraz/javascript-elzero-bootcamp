/*
Assignment 02
You have an array containing your friends' names, some of which are duplicates.
Your task is to print the names in alphabetical order to the console, ensuring no duplication.
The solution must be completed in one line only.
*/

let myFriends = ["Osama", "Ahmed", "Sayed", "Sayed", "Mahmoud", "Osama"];

console.log([...new Set(myFriends)].sort()); // (4) ['Ahmed', 'Mahmoud', 'Osama', 'Sayed']
