/*
Assignment 02
Create a form with 3 input fields and 1 Select Box.
You can add any 3 input field types you choose.
Add 5 options of your choice to the Select Box.
Ensure that if the page is reloaded, the values ​​entered by the user in the input fields will not be deleted.
Ensure that if the page is reloaded, the user's previous selection in the Select Box will be selected.
When the page is closed, ensure that all this data will be deleted.
*/

// Get all input elements and select box
let nameInput = document.getElementById('nameInput');
let ageInput = document.getElementById('ageInput');
let emailInput = document.getElementById('emailInput');
let categorySelect = document.getElementById('categorySelect');

// Function to save all data to sessionStorage
function saveData() {
  let formData = {
    name: nameInput.value,
    age: ageInput.value,
    email: emailInput.value,
    category: categorySelect.value
  };
  sessionStorage.setItem('myFormData', JSON.stringify(formData));
}

// Function to load data from sessionStorage
function loadData() {
  let saved = sessionStorage.getItem('myFormData');

  if (saved) {
    let data = JSON.parse(saved);

    // Restore values if they exist
    if (data.name !== undefined) nameInput.value = data.name;
    if (data.age !== undefined) ageInput.value = data.age;
    if (data.email !== undefined) emailInput.value = data.email;
    if (data.category !== undefined) categorySelect.value = data.category;
  }
}

// Save data whenever user types or changes anything
nameInput.addEventListener('input', saveData);
ageInput.addEventListener('input', saveData);
emailInput.addEventListener('input', saveData);
categorySelect.addEventListener('change', saveData);

// Load saved data when page loads
loadData();

// If no data was saved before, save current defaults (so reload keeps them)
if (!sessionStorage.getItem('myFormData')) {
  saveData();
}
