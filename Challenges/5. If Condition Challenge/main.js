/*
  If Condition Challenge
*/

let a = 10;

if (a < 10) {
    console.log(10);
} else if (a >= 10 && a <= 40) {
    console.log("10 to 40");
} else if (a > 40) {
    console.log("> 40");
} else {
    console.log("Unknown");
}

a < 10
    ? console.log(10)
    : a >= 10 && a <= 40
        ? console.log("10 to 40")
        : a > 40
            ? console.log("> 40")
            : console.log("Unknown");

// Write With Ternary If Syntax

let st = "Elzero Web School";

if ((st.length * 2).toString() === "34") {
    console.log("Good"); // Good
}

// W Position May Change
if (st[st.indexOf("W")].toLowerCase() === "w") {
    console.log("Good"); // Good
}
console.log(st[7]); // W
console.log(st.indexOf("W")); // 7
console.log(st[st.indexOf("W")]); // W
console.log(st[st.indexOf("W")].toLowerCase()); // w

if (st.length !== "string") {
    console.log("Good"); // Good
}

if (typeof (st.length) === "number") {
    console.log("Good"); // Good
}

if (st.slice(0, 6).repeat(2) === "ElzeroElzero") {
    console.log("Good"); // Good
}
