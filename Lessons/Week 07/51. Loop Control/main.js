/*
    Loop Control
    - Break
    - Continue
    - Label
*/

let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor"];

let colors = ["Red", "Green", "Black"];

for (let i = 0; i < products.length; i++) {
    console.log(products[i]); // Keyboard Mouse Pen
    if (products[i] == "Pen") {
        break;
    }
}

for (let i = 0; i < products.length; i++) {
    if (typeof products[i] === "number") {
        continue;
    }
    console.log(products[i]); // Keyboard Mouse Pen Pad Monitor
}

mainLoop: for (let i = 0; i < products.length; i++) {
    console.log(products[i]);
    nestedLoop: for (let j = 0; j < colors.length; j++) {
        console.log(`- ${colors[j]}`);
        if (colors[j] === "Green") {
            break mainLoop;
        }
    }
    // Keyboard
    // - Red
    // - Green
}