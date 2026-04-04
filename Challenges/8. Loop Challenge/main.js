/*
    Loop Challenge
*/

let myAdmins = ["Ahmed", "Osama", "Sayed", "Stop", "Samera"];
let myEmployees = ["Amgad", "Samah", "Ameer", "Omer", "Othman", "Amany", "Samia"];
let validAdmins = [];

for (let i = 0; i < myAdmins.length; i++) {
    if (myAdmins[i] === "Stop") {
        break;
    }
    validAdmins.push(myAdmins[i]);
}

document.write(`<div>`);

document.write(`<div>We Have ${validAdmins.length} Admins</div>`);
for (let i = 0; i < validAdmins.length; i++) {
    document.write(`<div>`)
    document.write(`<hr>`);
    document.write(`<div>The Admin For Team ${i + 1} Is ${validAdmins[i]}</div>`);
    document.write(`<h3>Team Members:</h3>`);

    let memberCounter = 1;
    for (let j = 0; j < myEmployees.length; j++) {
        if (myEmployees[j][0] === validAdmins[i][0]) {
            document.write(`<p>- ${memberCounter} ${myEmployees[j]}</p>`);
            memberCounter++;
        }
    }
    document.write(`</div>`);
}
document.write(`</div>`);

/*
We Have 3 Admins

The Admin For Team 1 Is Ahmed
Team Members:
- 1 Amgad

- 2 Ameer

- 3 Amany

The Admin For Team 2 Is Osama
Team Members:
- 1 Omer

- 2 Othman

The Admin For Team 3 Is Sayed
Team Members:
- 1 Samah

- 2 Samia
*/