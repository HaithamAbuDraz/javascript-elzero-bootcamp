/*
Assignment 01
Include three Google Fonts fonts on the page: “Open Sans,” “Cairo,” and “Roboto.”
Create three Select Boxes.
The first contains three options: the names of the selected fonts (Open, Cairo, and Roboto).
The second contains six options, allowing you to choose any six colors.
The third contains options for font sizes from 16 to 30.
In each Select Box, the default value is the first one.
Each default value is applied using CSS on the page. Now, allow the user to select these options and apply them directly to the page upon selection.
Save these options in local storage.
If the user closes the page or refreshes, the previously selected option should be applied, and the selection within the Select Boxes should also be changed.
*/

// Get all the select elements
const fontSelect = document.getElementById('fontSelect');
const colorSelect = document.getElementById('colorSelect');
const sizeSelect = document.getElementById('sizeSelect');

// Get the preview container (where styles will apply)
const previewArea = document.getElementById('previewArea');

// Function to apply all current styles to the preview area
function applyStyles() {
  const selectedFont = fontSelect.value;
  const selectedColor = colorSelect.value;
  const selectedSize = sizeSelect.value;

  // Apply font, color, and size to the preview container
  previewArea.style.fontFamily = `'${selectedFont}', sans-serif`;
  previewArea.style.color = selectedColor;
  previewArea.style.fontSize = selectedSize + 'px';
}

// Function to save current settings to localStorage
function saveToLocalStorage() {
  const settings = {
    font: fontSelect.value,
    color: colorSelect.value,
    size: sizeSelect.value
  };
  localStorage.setItem('fontSettings', JSON.stringify(settings));
}

// Function to load settings from localStorage and apply them
function loadSettings() {
  const saved = localStorage.getItem('fontSettings');

  if (saved) {
    const settings = JSON.parse(saved);

    // Set select values if they exist
    if (settings.font) fontSelect.value = settings.font;
    if (settings.color) colorSelect.value = settings.color;
    if (settings.size) sizeSelect.value = settings.size;

    // Apply the loaded styles
    applyStyles();
  } else {
    // No saved settings, apply defaults (first options)
    applyStyles();
  }
}

// Handle any change in selects
function handleChange() {
  applyStyles();      // Update the page styles
  saveToLocalStorage(); // Save to localStorage
}

// Populate size select with values 16 to 30
function populateSizeOptions() {
  for (let size = 16; size <= 30; size++) {
    const option = document.createElement('option');
    option.value = size;
    option.textContent = size + 'px';
    sizeSelect.appendChild(option);
  }
  // Set default value to 16 (first option)
  sizeSelect.value = '16';
}

// Set up event listeners
fontSelect.addEventListener('change', handleChange);
colorSelect.addEventListener('change', handleChange);
sizeSelect.addEventListener('change', handleChange);

// Initialize: populate size dropdown, then load saved settings or defaults
populateSizeOptions();
loadSettings();
