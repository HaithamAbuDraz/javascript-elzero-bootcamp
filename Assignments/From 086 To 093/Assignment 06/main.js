/*
Assignment 06
Challenge
You have an input field where you enter the number of elements you want to create.
You have another field containing the element type, whether it's a Div or a Section.
You have an input field to enter the word that will appear inside the element.
You have a button to start the creation process.
When you click "Create Elements," make sure that any existing elements will be removed first.
You can create CSS styles using JavaScript if you want to practice styling with JavaScript.
You can also style normally with CSS without any problems.
Make sure the form doesn't send data to avoid page refresh.
The element contains an ID and a Class, and the ID increases by a number with each element.
See the required example to understand.
*/

let form = document.querySelector("form");
let resultsDiv = document.querySelector(".results");

// Add submit event listener to form
form.onsubmit = function (event) {
  event.preventDefault(); // Prevent page refresh

  let numberOfElements = document.querySelector("input[name='elements']").value;
  let elementText = document.querySelector("input[name='texts']").value;
  let elementType = document.querySelector("select[name='type']").value.toLowerCase();

  resultsDiv.innerHTML = "";

  for (let i = 1; i <= numberOfElements; i++) {
    let newElement = document.createElement(elementType);

    newElement.className = "box";
    newElement.id = `id-${i}`;
    newElement.title = "Element";

    newElement.textContent = elementText;

    resultsDiv.appendChild(newElement);
  }
};

let style = document.createElement('style');
style.textContent = `
  form {
    font-family: Arial, sans-serif;
    max-width: 500px;
    margin: 20px auto;
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 8px;
  }
  
  .input {
    width: 100%;
    padding: 10px;
    margin: 10px 0;
    border: 1px solid #ddd;
    border-radius: 4px;
    box-sizing: border-box;
    font-size: 14px;
  }
  
  input[type="submit"] {
    background-color: #4b974e;
    color: white;
    cursor: pointer;
    border: none;
    padding: 12px;
    font-size: 16px;
    font-weight: bold;
  }
  
  input[type="submit"]:hover {
    background-color: #59ab5d;
  }
  
  .results {
    margin-top: 20px;
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
  }
  
  .box {
    background-color: #e46038;
    color: white;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    min-width: 100px;
    text-align: center;
    font-weight: bold;
  }
`;
document.head.appendChild(style);
