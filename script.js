const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.querySelector(".taskList");
const emptyState = document.querySelector(".empty-state");

let tasks = [];

function renderTasks() {
  if (tasks.length === 0) {
    taskList.innerHTML =
      '<div class="empty-state">No tasks yet. Add one above!</div>';
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

function toggleTask(id) {
  tasks = tasks.map((task) => {
    if (task.id === id) {
      return { ...task, completed: !task.completed };
    }
    return task;
  });

  renderTasks();
}

function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  const newTask = {
    id: Date.now(),
    text: taskText,
    completed: false,
  };

  tasks.push(newTask);

  taskInput.value = "";

  renderTasks();
}

console.log("Todo app loaded!");
