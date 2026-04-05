/*
    Loop
    - Loop On Sequences
*/

// let myFriends = ["Osama", "Ahmed", "Sayed", "Ali", "Amira"];

// console.log(myFriends[0]); // Osama
// console.log(myFriends[1]); // Ahmed
// console.log(myFriends[2]); // Sayed
// console.log(myFriends[3]); // Ali
// console.log(myFriends[4]); // Amira

// for (let i = 0; i < myFriends.length; i++) {
//     console.log(myFriends[i]);
//     // Osama
//     // Ahmed
//     // Sayed
//     // Ali
//     // Amira
// }


let myFriends = ["Osama", 1, 2, "Ahmed", "Sayed", 3, 4, "Ali", 6, "Amira"];
let onlyNames = [];

for (let i = 0; i < myFriends.length; i++) {
    if (typeof myFriends[i] === "string") {
        onlyNames.push(myFriends[i]);
    }
}

console.log(onlyNames); // (5) ['Osama', 'Ahmed', 'Sayed', 'Ali', 'Amira']
