const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

const popup = document.getElementById("popup");
const popupText = document.getElementById("popupText");
const closePopup = document.getElementById("closePopup");

const themeToggle = document.getElementById("themeToggle");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// Render tasks
function renderTasks() {
  taskList.innerHTML = "";
  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.textContent = task;

    const btn = document.createElement("button");
    btn.textContent = "X";
    btn.onclick = () => deleteTask(index);

    li.appendChild(btn);
    taskList.appendChild(li);
  });

  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Add task
addBtn.addEventListener("click", () => {
  if (taskInput.value === "") {
    showPopup("Please enter a task to list !");
    return;
  }

  tasks.push(taskInput.value);
  taskInput.value = "";
  renderTasks();
});

// Delete task
function deleteTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}

// Popup
function showPopup(msg) {
  popupText.textContent = msg;
  popup.style.display = "flex";
}

closePopup.addEventListener("click", () => {
  popup.style.display = "none";
});

// Dark mode
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  themeToggle.textContent =
    document.body.classList.contains("dark") ? "☀️" : "🌙";
});

// Load
renderTasks();
