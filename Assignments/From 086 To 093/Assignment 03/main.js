/*
Assignment 03
You have the following currency conversion form.

All you have to do is enter the currency in US dollars in the input field.
In the result field below the input field, you must display the currency in US dollars and its equivalent in Egyptian pounds.
You can type the number or paste it.
You can change the result div and modify it as you like.
Never modify the input field.
CSS formatting is for aesthetic purposes only; if you want to use it, that's fine.
US Dollar = 15.6 Egyptian Pounds
Make sure that the fractions displayed in the result do not exceed two digits. For example, 1500.32
*/

let dollarInput = document.querySelector("input[name='dollar']");
let resultDiv = document.querySelector(".result");

let exchangeRate = 15.6;

dollarInput.oninput = () => {
  resultDiv.innerHTML = `{${dollarInput.value}} USD Dollar 
  = {${(dollarInput.value * exchangeRate).toFixed(2)}} Egyptian Pound`;
}
