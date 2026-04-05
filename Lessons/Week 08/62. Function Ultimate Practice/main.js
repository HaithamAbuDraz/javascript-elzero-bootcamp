/*
  Function Advanced Practice
  - Parameters
  - Default
  - Rest
  - Loop
  - Condition
*/

function showInfo(userName = "Unknown", age = "Unknown", rate = 0, show = "Yes", ...skills) {
  document.write(`<div>`);
  document.write(`<h2>Welcome, ${userName}</h2>`);
  document.write(`<p>Age, ${age}</p>`);
  document.write(`<p>Hour Rate: $${rate}</p>`);
  if (show === "Yes") {
    if (skills.length > 0) {
      document.write(`<p>Skills: ${skills.join(" | ")}</p>`);
    } else {
      document.write(`<p>Skills: No Skills</p>`);
    }
  } else {
    if (skills.length > 0) {
      document.write(`<p>Skills Is Hidden</p>`);
    } else {
      document.write(`<p>Skills: No Skills</p>`);
    }

  }
  document.write(`</div>`);
}

showInfo("Haitham", 21, 20, "No", "Html", "CSS");

/*
Welcome, Haitham
Age, 21

Hour Rate: $20

Skills Is Hidden
*/
