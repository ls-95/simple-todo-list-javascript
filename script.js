const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
const emptyState = document.querySelector("empty-state");

let tasks = [];

function renderTask() {
  if (tasks.length === 0) {
    taskList.innerHTML = `<div class="empty-state">No tasks yet. Add one above!</div>`;
    return;
  }

  let html = "";
  tasks.forEach((task) => {
    html += `
      <div class="task-item ${task.completed ? "completed" : ""}">
        <input type="checkbox" ${task.completed ? "checked" : ""} 
               onchange="toggleTask(${task.id})">
        <span class="task-text">${task.text}</span>
        <button class="delete-btn" onclick="deleteTask(${
          task.id
        })">Delete</button>
      </div>
    `;
  });

  taskList.innerHTML = html;
}

function addTask() {
  const taskText = taskInput.ariaValueMax.trim();

  if (taskInput === "") {
    alert("Please enter a task");
    return;
  }

  const newTask = {
    id: Date.now(),
    text: taskText,
    completed: fasle,
  };

  tasks.push(newTask);

  taskInput.value = "";

  renderTask();
}

console.log("Todo app loaded!");
