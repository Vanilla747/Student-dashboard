const todoForm = document.getElementById("todoForm");
const todoInput = document.getElementById("todoInput");
const todoList = document.getElementById("todoList");
const emptyTodo = document.getElementById("emptyTodo");
const todoTotal = document.getElementById("todoTotal");
const assignmentCount = document.getElementById("assignmentCount");
const themeToggle = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");
const themeText = document.getElementById("themeText");

const defaultTodos = [
  { id: 1, text: "Finish programming assignment", done: false },
  { id: 2, text: "Review mathematics notes", done: false },
  { id: 3, text: "Prepare English presentation", done: false },
  { id: 4, text: "Submit DTI weekly task", done: false }
];

let todos = JSON.parse(localStorage.getItem("studentDashboardTodos")) || defaultTodos;

function saveTodos() {
  localStorage.setItem("studentDashboardTodos", JSON.stringify(todos));
}

function updateTodoStats() {
  const remaining = todos.filter(todo => !todo.done).length;
  todoTotal.textContent = `${todos.length} item${todos.length === 1 ? "" : "s"}`;
  assignmentCount.textContent = remaining;
  emptyTodo.hidden = todos.length !== 0;
}

function renderTodos() {
  todoList.innerHTML = "";

  todos.forEach(todo => {
    const li = document.createElement("li");
    li.className = `todo-item ${todo.done ? "done" : ""}`;

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "todo-check";
    checkbox.checked = todo.done;
    checkbox.setAttribute("aria-label", `Complete ${todo.text}`);

    checkbox.addEventListener("change", () => {
      todo.done = checkbox.checked;
      saveTodos();
      renderTodos();
    });

    const text = document.createElement("span");
    text.textContent = todo.text;

    const deleteButton = document.createElement("button");
    deleteButton.className = "delete-btn";
    deleteButton.type = "button";
    deleteButton.textContent = "×";
    deleteButton.setAttribute("aria-label", `Delete ${todo.text}`);

    deleteButton.addEventListener("click", () => {
      todos = todos.filter(item => item.id !== todo.id);
      saveTodos();
      renderTodos();
    });

    li.append(checkbox, text, deleteButton);
    todoList.appendChild(li);
  });

  updateTodoStats();
}

todoForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const text = todoInput.value.trim();
  if (!text) return;

  todos.unshift({
    id: Date.now(),
    text,
    done: false
  });

  saveTodos();
  renderTodos();
  todoForm.reset();
  todoInput.focus();
});

function applyTheme(theme) {
  const isDark = theme === "dark";
  document.body.classList.toggle("dark", isDark);
  themeIcon.textContent = isDark ? "☀" : "☾";
  themeText.textContent = isDark ? "Light mode" : "Dark mode";
  themeToggle.setAttribute("aria-label", isDark ? "Switch to light mode" : "Switch to dark mode");
}

const savedTheme = localStorage.getItem("studentDashboardTheme") || "light";
applyTheme(savedTheme);

themeToggle.addEventListener("click", () => {
  const nextTheme = document.body.classList.contains("dark") ? "light" : "dark";
  localStorage.setItem("studentDashboardTheme", nextTheme);
  applyTheme(nextTheme);
});

renderTodos();
