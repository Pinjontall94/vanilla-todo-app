// Bind DOM elements to vars
const form = document.querySelector('form');
const input = document.querySelector("[name='todo']");
const todoList = document.getElementById('todos');

// Create empty array or cached data if available
//const todoData = [];

// Side Effects
const existingTodos = JSON.parse(localStorage.getItem('todos'));

const todoData = existingTodos || [];

todoData.forEach(y => addTodo(y));

// Update UI
function addTodo(x) {
  todoData.push(x);
  const li = document.createElement('li');
  li.innerHTML = x;
  todoList.appendChild(li);
  localStorage.setItem('todos', JSON.stringify(todoData));
  input.value = '';
}

// Event listeners
form.onsubmit = e => {
  e.preventDefault();
  addTodo(input.value);
}
