/*
BOM Challenge
*/

let input = document.querySelector(".form .input");
let addBtn = document.querySelector(".form .add");
let tasksContainer = document.querySelector(".container .tasks");

// Load tasks from localStorage
let tasksArr = [];
if (window.localStorage.getItem("tasks")) {
  tasksArr = JSON.parse(localStorage.getItem("tasks"));
  updateTasks();
}

// add task button action
addBtn.addEventListener("click", () => {
  if (input.value.trim()) {
    let taskId = Date.now();
    let taskTitle = input.value.trim();

    // Add to array
    tasksArr.push({ id: taskId, title: taskTitle });

    // Save and update
    saveInLocal();
    updateTasks();

    // Clear input
    input.value = "";
    input.focus();
  }
});

// Add task on Enter key
input.addEventListener("keydown", (e) => {
  if (e.code === "Enter") addBtn.click();
});

// Delete task
function deleteTask(taskId) {
  tasksArr = tasksArr.filter(task => task.id !== taskId);
  saveInLocal();
  updateTasks();
}

// Display all tasks
function updateTasks() {
  tasksContainer.innerHTML = "";

  tasksArr.forEach(task => {
    // Create task element
    let taskDiv = document.createElement("div");
    taskDiv.className = "task";
    taskDiv.id = task.id;

    // Task text
    let p = document.createElement("p");
    p.textContent = task.title;

    // Delete button
    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.onclick = () => deleteTask(task.id);

    // Add to container
    taskDiv.appendChild(p);
    taskDiv.appendChild(deleteBtn);
    tasksContainer.appendChild(taskDiv);
  });
}

// Save to localStorage
function saveInLocal() {
  localStorage.setItem("tasks", JSON.stringify(tasksArr));
}