/*
Assignment 02
Create a function that creates a popup within the page, as shown in the following image.
The popup contains a Close button; clicking it deletes the popup from the page.
You must run the function 5 seconds after the page loads.
*/

function createPopup() {
  let popup = document.createElement("div");
  popup.style.cssText = `
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #f5f5f5;
  border: 1px solid #ccc;
  padding: 40px 80px;
  text-align: center;
  font-family: Arial, sans-serif;
  box-shadow: 0px 4px 10px rgba(0,0,0,0.1);
  `;

  let title = document.createElement("h2");
  title.textContent = "Welcome";

  let message = document.createElement("p");
  message.textContent = "Welcome To Elzero Web School";

  let closeBtn = document.createElement("button");
  closeBtn.textContent = "x";

  closeBtn.style.cssText = `
  position: absolute;
  top: -15px;
  right: -15px;
  background-color: red;
  color: white;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-weight: bold;
  border: none;
  `;

  closeBtn.addEventListener("click", function () {
    popup.remove();
  });

  popup.appendChild(closeBtn);
  popup.appendChild(title);
  popup.appendChild(message);
  document.body.appendChild(popup);
}

setTimeout(createPopup, 5000);