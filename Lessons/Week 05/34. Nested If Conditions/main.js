/*
  Nested If
*/

let price = 100;
let discount = true;
let discountAmount = 30;
let country = "Palestine";
let student = true;

if (discount === true) {

    price -= discountAmount;  // price = price - discountAmount; // 70

} else if (country === "Palestine") {

    price -= 40; // 60

    if (student === true) {

        price -= discountAmount + 30;

    } else {

        price -= discountAmount + 10;

    }

} else if (country === "Egypt") {

    price -= 50; // 50

} else {

    price -= 10; // 90

}

console.log(price);