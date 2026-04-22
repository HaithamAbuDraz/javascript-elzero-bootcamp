/*
Assignment 3
You have an Object containing your data.
Your task is to use what you have learned to convert the Object into a Map.
On the first line, print the contents of the Map.
On the second line, print the number of elements in the Map.
On the last line, check if the Map contains an element named "role".
*/

let myInfo = {
  username: "Osama",
  role: "Admin",
  country: "Egypt",
};

let myMap = new Map(Object.entries(myInfo));

console.log(myMap); // Map(3) {'username' => 'Osama', 'role' => 'Admin', 'country' => 'Egypt'}

console.log(myMap.size); // 3

console.log(myMap.has("role")); // true
