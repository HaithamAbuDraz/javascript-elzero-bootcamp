/*
  Array Methods [Joining]
  - concat(array, array) => Return A New Array
  - join(Separator)
*/

let myFriends = ["Ahmed", "Sayed", "Ali", "Osama", "Gamal", "Ammer"];
let myNewFriends = ["Samar", "Sameh"];
let schoolFriends = ["Haitham", "Shady"];

/*
concat():
  Combines two or more arrays. This method returns a new array without modifying any existing arrays.
  @param items — Additional arrays and/or items to add to the end of the array.
*/

let allFriends = myFriends.concat(myNewFriends, schoolFriends, "Gameel", [1, 2]);
console.log(allFriends); // (13) ['Ahmed', 'Sayed', 'Ali', 'Osama', 'Gamal', 'Ammer', 'Samar', 'Sameh', 'Haitham', 'Shady', 'Gameel', 1, 2]

/*
join():
  Adds all the elements of an array into a string, separated by the specified separator string.
  @param separator — A string used to separate one element of the array from the next in the resulting string. If omitted, the array elements are separated with a comma.
*/

console.log(allFriends.join()); // Ahmed,Sayed,Ali,Osama,Gamal,Ammer,Samar,Sameh,Haitham,Shady,Gameel,1,2
console.log(allFriends.join(" @ ")); // Ahmed @ Sayed @ Ali @ Osama @ Gamal @ Ammer @ Samar @ Sameh @ Haitham @ Shady @ Gameel @ 1 @ 2
console.log(allFriends.join("|".toLocaleUpperCase())); // Ahmed|Sayed|Ali|Osama|Gamal|Ammer|Samar|Sameh|Haitham|Shady|Gameel|1|2
