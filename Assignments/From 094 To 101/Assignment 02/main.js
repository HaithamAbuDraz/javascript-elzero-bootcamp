/*
Assignment 02
Challenge
Refer to the following figure.
You have two input fields: one to add classes to the `Current` element and the other to delete classes from the `Current` element.
The addition process occurs immediately upon exiting the `Blur` input field.
Ensure that the class name is added as lowercase letters, regardless of the input.
If the user types two words with spaces between them, they are added as `Two Classes` or deleted as `Two Classes`.
When exiting the input field, ensure that the existing value is deleted.
Make sure the field is not empty before exiting to avoid any errors.
You must create a function that runs each time you exit the input fields.
The function's purpose is to display the classes present on the `Current` element in the result field below.
The function sorts the class names alphabetically before displaying them.
If there are no classes on the element, display the message "No Classes To Show".
Refer to the figure to understand what is required.
*/

/*
// Option 1

let addInput = document.querySelector('.classes-to-add');
let removeInput = document.querySelector('.classes-to-remove');
let currentElement = document.querySelector('.element.current');
let classListContainer = document.querySelector('.classes-list div');

function updateClassDisplay() {
  let classArray = Array.from(currentElement.classList);

  classArray.sort();

  let displayDiv = classListContainer;
  displayDiv.innerHTML = '';

  if (classArray.length === 0) {
    displayDiv.textContent = 'No Classes To Show';
  } else {
    classArray.forEach(className => {
      let span = document.createElement('span');
      span.textContent = className;
      displayDiv.appendChild(span);
    });
  }
}

function processAddClasses() {
  let inputValue = addInput.value.trim();

  if (inputValue === '') {
    addInput.value = '';
    return;
  }

  let classNames = inputValue.split(/\s+/);

  classNames.forEach(className => {
    className = className.toLowerCase();
    if (className !== '') {
      currentElement.classList.add(className);
    }
  });

  addInput.value = '';

  updateClassDisplay();
}

function processRemoveClasses() {
  let inputValue = removeInput.value.trim();

  if (inputValue === '') {
    removeInput.value = '';
    return;
  }

  let classNames = inputValue.split(/\s+/);

  classNames.forEach(className => {
    className = className.toLowerCase();
    if (className !== '') {
      currentElement.classList.remove(className);
    }
  });

  removeInput.value = '';

  updateClassDisplay();
}

addInput.addEventListener('blur', processAddClasses);
removeInput.addEventListener('blur', processRemoveClasses);

updateClassDisplay();
*/

// Option 2
const addInput = document.querySelector('.classes-to-add');
const removeInput = document.querySelector('.classes-to-remove');
const currentElement = document.querySelector('.element.current');
const classListContainer = document.querySelector('.classes-list div');

function updateClassDisplay() {
  const classes = [...currentElement.classList].sort();
  classListContainer.innerHTML = classes.length ? classes.map(className => `<span>${className}</span>`).join('') : 'No Classes To Show';
}

addInput.onblur = () => {
  if (addInput.value.trim()) {
    addInput.value.trim().split(/\s+/).forEach(className => currentElement.classList.add(className.toLowerCase()));
    addInput.value = '';
    updateClassDisplay();
  }
};

removeInput.onblur = () => {
  if (removeInput.value.trim()) {
    removeInput.value.trim().split(/\s+/).forEach(className => currentElement.classList.remove(className.toLowerCase()));
    removeInput.value = '';
    updateClassDisplay();
  }
};

updateClassDisplay();