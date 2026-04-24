/*
  Regular Expression
  - Input Form Validation Practice
*/

document.getElementById("register").onsubmit = function () {
  let phoneNumber = document.getElementById("phone").value;
  let phoneRe = /\(\d{4}\)\s\d{3}-\d{4}/ig;
  let validationResult = phoneRe.test(phoneNumber);
  if (validationResult === false) {
    return false;
  }
  return true;
}
