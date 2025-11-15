let tasks = [];
let editingInlineIndex = -1;

function renderTasks() {
  const taskList = document.getElementById("taskList");
  taskList.innerHTML = "";

  tasks.forEach((task, index) => {
    const li = document.createElement("li");

    if (index === editingInlineIndex) {
      li.innerHTML = `
        <input type="text" class="task-input-inline" id="editInput${index}" value="${task.name}" />
        <div class="actions">
          <button class="update-btn" onclick="updateTask(${index})">Update</button>
          <button class="cancel-btn" onclick="cancelEdit()">Cancel</button>
        </div>
      `;
    } else {
      li.innerHTML = `
        <span>${task.name}</span>
        <div class="actions">
          <button class="edit-btn" onclick="editTask(${index})">Edit</button>
          <button class="delete-btn" onclick="deleteTask(${index})">Delete</button>
        </div>
      `;
    }

    taskList.appendChild(li);
  });
}

function addTask() {
  const input = document.getElementById("taskInput");
  const taskName = input.value.trim();

  if (taskName === "") {
    alert("Please enter a task!");
    return;
  }

  tasks.push({ name: taskName });
  input.value = "";
  renderTasks();
}

function editTask(index) {
  editingInlineIndex = index;
  renderTasks();
}

function updateTask(index) {
  const input = document.getElementById("editInput" + index);
  const newValue = input.value.trim();

  if (newValue === "") {
    alert("Task can't be empty!");
    return;
  }

  tasks[index].name = newValue;
  editingInlineIndex = -1;
  renderTasks();
}

function cancelEdit() {
  editingInlineIndex = -1;
  renderTasks();
}

function deleteTask(index) {
  tasks.splice(index, 1);
  if (editingInlineIndex === index) editingInlineIndex = -1;
  renderTasks();
}

renderTasks();
