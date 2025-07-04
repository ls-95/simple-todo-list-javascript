const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
const emptyState = document.querySelector("empty-state");

let tasks = [];

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
