/*
  Control Flow
  - if
  - else if
  - else

  if(Condition) {
    // Bolck Of Code
  }

*/

let price = 100;
let discount = true;
let discountAmount = 30;
let country = "KSA";

if (discount === true) {
    price -= discountAmount;  // price = price - discountAmount; // 70
} else if (country === "Palestine") {
    price -= 40; // 60
} else if (country === "Egypt") {
    price -= 50; // 50
} else {
    price -= 10; // 90
}

console.log(price);
