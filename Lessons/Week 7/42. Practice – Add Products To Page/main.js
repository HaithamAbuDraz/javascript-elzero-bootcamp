/*
    Products Practice
*/

let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor", "iphone"];
let colors = ["Red", "Green", "Blue"];
let showCount = 5;

document.write(`<h1>Show ${showCount} Products</h1>`);

for (let i = 0; i < showCount; i++) {
    document.write(`<div>`);
    document.write(`<h3>[${i + 1}] ${products[i]}</h3>`);
    for (let j = 0; j < colors.length; j++) {
        document.write(`<p>${colors[j]}</p>`);
    }
    document.write(`<p>${colors.join(" | ")}</p>`);
    document.write(`</div>`);
}
/*
Show 5 Products
[1] Keyboard
Red

Green

Blue

Red | Green | Blue

[2] Mouse
Red

Green

Blue

Red | Green | Blue

[3] Pen
Red

Green

Blue

Red | Green | Blue

[4] Pad
Red

Green

Blue

Red | Green | Blue

[5] Monitor
Red

Green

Blue

Red | Green | Blue
*/