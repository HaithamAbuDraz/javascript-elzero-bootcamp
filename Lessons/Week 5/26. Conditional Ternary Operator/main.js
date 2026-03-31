/*
  Conditional (Ternary) Operator
*/

let theName = "Haitham";
let theGender = "Male";
let theAge = 21;

if (theGender === "Male") {
    console.log("Mr " + theName); // Mr Haitham
} else {
    console.log("Mrs " + theName);
}

// Condition ? If True : If False

theGender === "Male" ? console.log("Mr " + theName) : console.log("Mrs " + theName); // Mr Haitham

let result = theGender === "Male" ? "Mr " : "Mrs ";
console.log(result + theName); // Mr Haitham

console.log(theGender === "Male" ? "Mr " + theName : "Mrs " + theName); // Mr Haitham

console.log(`Hello ${theGender === "Male" ? "Mr" : "Mrs"} ${theName}`); // Hello Mr Haitham

theAge < 20
    ? console.log(20) // 20 to 60
    : theAge > 20 && theAge < 60
        ? console.log("20 to 60")
        : theAge >= 60
            ? console.log("Larger Than 60")
            : console.log("Unknown");
